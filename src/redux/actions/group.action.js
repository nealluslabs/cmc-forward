import { db, fb, auth, storage } from '../../config/firebase';
import { clearUser, loginFailed, loginSuccess, logoutFxn, signupFailed, storeUserData } from '../reducers/auth.slice';
import { v4 as uuidv4 } from 'uuid';
import { notifyErrorFxn, notifySuccessFxn } from 'src/utils/toast-fxn';
import { isItLoading, savePrivateGroup, savePublicGroup } from '../reducers/group.slice';


export const createGroup = (groupData, user, file, navigate, setLoading, url) => async (dispatch) => {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();
   
  db.collection("groups").add({
    groupName: groupData.groupName,
    noOfSavers: groupData.noOfSavers,
    pin: groupData.pin,
    startDate: groupData.startDate,
    amount: groupData.amount,
    status: groupData.status.toLowerCase(),
    imageUrl: url,
    admins: [user.id],
    members: [user.id],
    accountCreated: today.toLocaleDateString("en-US", options),
}).then((res)=>{
    console.log("RESPONSE ID: ", res.id);
    return db.collection('groups').doc(res.id).update({
      groupId: res.id,
    }).then(() => {
        db.collection('groups').doc(res.id).collection('membersCollection').add({
            memberName: user.name,
            memberEmail: user.email,
            memberImageUrl: user.profileImg,
            invitedBy: user.id,
            invite: 0,
            paid: 0,
            users: [user.id, user.id],
            sentAt: today.toLocaleDateString("en-US", options),
          }).then((resp) => {
            console.log("membersCollection RESPONSE: ", resp);
            setLoading(false);
            db.collection('groups').doc(res.id).collection('membersCollection').doc(resp.id).update({
              id: resp.id,
            })
          }).then(() => {
            notifySuccessFxn("Group Created")
            setLoading(false);
            navigate('/dashboard/home', { replace: true });
          }).catch((err) => {
            console.error("Error creating group: ", err);
            var errorMessage = err.message;
            notifyErrorFxn(errorMessage);
            setLoading(false);
          })
    })
  })
}


export const uploadGroupImage = (groupData, file, user, navigate, setLoading) => async (dispatch) => {
  const imageName = uuidv4() + '.' + file?.name?.split('.')?.pop();
  console.log('File Name: ', imageName);
  const uploadTask = storage.ref(`group_images/${imageName}`).put(file);
  uploadTask.on(
    "state_changed",
    snapshot => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      // setProgress(progress);
    },
    error => {
      console.log(error);
    },
    () => {
      storage
        .ref("group_images")
        .child(imageName)
        .getDownloadURL()
        .then(url => {
          console.log('Image URL: ', url);
          dispatch(createGroup(groupData, user, file, navigate, setLoading, url));
        });
    }
  );
}


export const fetchPublicGroup = () => async (dispatch) => {
 dispatch(isItLoading(true));
 db.collection("groups")
  .where("status", "==", "public")
  .get()
  .then((snapshot) => {
    const publicGroups = snapshot.docs.map((doc) => ({ ...doc.data() }));
  if (publicGroups.length) {
    dispatch(isItLoading(false));
    console.log("Public Groups Data:", publicGroups);
    dispatch(savePublicGroup(publicGroups));
  } else {
      dispatch(isItLoading(false));
      console.log("No public groups!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
  dispatch(isItLoading(false));
});
};

export const fetchPrivateGroup = () => async (dispatch) => {
    dispatch(isItLoading(true));
    db.collection("groups")
     .where("status", "==", "private")
     .get()
     .then((snapshot) => {
       const privateGroups = snapshot.docs.map((doc) => ({ ...doc.data() }));
     if (privateGroups.length) {
       dispatch(isItLoading(false));
       console.log("Private Groups Data:", privateGroups);
       dispatch(savePrivateGroup(privateGroups));
     } else {
         dispatch(isItLoading(false));
         console.log("No private groups!");
     }
   }).catch((error) => {
     console.log("Error getting document:", error);
     dispatch(isItLoading(false));
   });
   };


export const joinPublicGroup = (groupID, user, today, navigate) => async (dispatch) => {
    dispatch(isItLoading(true));
    let newMembers;
    var docRef = db.collection("groups").doc(groupID);
    docRef.get().then((doc) => {
    const data = doc.data();
    const members = data.members;
    newMembers = [...members, user.id];
}).then(() => {
  db.collection('groups')
  var userRef = db.collection("groups").doc(groupID);
  userRef.update({
    members: [...newMembers],
  }).then((res) => {
    db.collection('groups').doc(groupID).collection('membersCollection').add({
      memberName: user.firstName + " " + user.lastName,
      memberEmail: user.email,
      memberImageUrl: user.imageUrl,
      invitedBy: user.id,
      invite: 0,
      paid: 1,
      users: [user.id, user.id],
      sentAt: today,
    }).then((resp) => {
      console.log("membersCollection RESPONSE: ", resp);
      db.collection('groups').doc(groupID).collection('membersCollection').doc(resp.id).update({
        id: resp.id,
      })
  }).then(() => {
    dispatch(isItLoading(false));
    notifySuccessFxn("Joined Group")
    navigate('/dashboard/home', { replace: true });
    }).catch((error) => {
    console.log("Error joining group:", error);
    var errorMessage = error.message;
    notifyErrorFxn(errorMessage)
    dispatch(isItLoading(false));
  });
   })
})
 };

 
export const joinPrivateGroup = (groupID, user, today, navigate) => async (dispatch) => {
  dispatch(isItLoading(true));
  let newMembers;
  var docRef = db.collection("groups").doc(groupID);
  docRef.get().then((doc) => {
  const data = doc.data();
  const members = data.members;
  newMembers = [...members, user.id];
}).then(() => {
db.collection('groups')
var userRef = db.collection("groups").doc(groupID);
userRef.update({
  members: [...newMembers],
}).then((res) => {
  db.collection('groups').doc(groupID).collection('membersCollection').add({
    memberName: user.firstName + " " + user.lastName,
    memberEmail: user.email,
    memberImageUrl: user.imageUrl,
    invitedBy: user.id,
    invite: 0,
    paid: 1,
    users: [user.id, user.id],
    sentAt: today,
  }).then((resp) => {
    console.log("membersCollection RESPONSE: ", resp);
    db.collection('groups').doc(groupID).collection('membersCollection').doc(resp.id).update({
      id: resp.id,
    })
}).then(() => {
  dispatch(isItLoading(false));
  notifySuccessFxn("Joined Group")
  navigate('/dashboard/home', { replace: true });
  }).catch((error) => {
  console.log("Error joining group:", error);
  var errorMessage = error.message;
  notifyErrorFxn(errorMessage)
  dispatch(isItLoading(false));
});
 })
})
};