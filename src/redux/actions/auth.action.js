import { db, fb, auth, storage } from '../../config/firebase';
import { clearUser, loginFailed, loginSuccess, logoutFxn, signupFailed, storeUserData } from '../reducers/auth.slice';
import { v4 as uuidv4 } from 'uuid';
import { notifyErrorFxn, notifySuccessFxn } from 'src/utils/toast-fxn';
// import { clearCandidateSlice } from '../reducers/candidate.slice';
// import { clearJobSlice } from '../reducers/job.slice';

  export const signin = (user, navigate, setLoading) => async (dispatch) => {
    fb.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log('Signed In user is: ', user.email);
       dispatch(fetchUserData(user.uid, "sigin", navigate));
    })
    .catch((error) => {
      setLoading(false);
      var errorCode = error.code;
      var errorMessage = error.message;
      notifyErrorFxn(errorMessage);
      console.log('Error Code is: ', errorCode, + ' Msg is: ', errorMessage);
      dispatch(loginFailed(errorMessage));
    });

};


export const signup = (user, file, navigate, setLoading, url) => async (dispatch) => {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();

    fb.auth().createUserWithEmailAndPassword(
      user.email,
      user.password
  ).then((res)=>{
    return db.collection('users').doc(res.user.uid).set({
      id: res.user.uid,
      email: user.email,
      firstName: user.fname,
      lastName: user.lname,
      imageUrl: url,
      password: user.password,
      groups: [],
      amountAccrued: 0,
      loanBalance: 0,
      loanBalance: 0,
      walletBalance: 0,
      accountCreated: today.toLocaleDateString("en-US", options),
    })
  }).then(() => {
    notifySuccessFxn("Registered Successfully✔😊")
    navigate('/login', { replace: true });
  }).catch((err) => {
    console.error("Error signing up: ", err);
    var errorMessage = err.message;
    notifyErrorFxn(errorMessage);
    dispatch(signupFailed({ errorMessage }));
    setLoading(false);
  })
}


export const uploadImage = (user, file, navigate, setLoading) => async (dispatch) => {
  const imageName = uuidv4() + '.' + file?.name?.split('.')?.pop();
  console.log('File Name: ', imageName);
  const uploadTask = storage.ref(`profile_images/${imageName}`).put(file);
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
        .ref("profile_images")
        .child(imageName)
        .getDownloadURL()
        .then(url => {
          console.log('Image URL: ', url);
          dispatch(signup(user, file, navigate, setLoading, url));
        });
    }
  );
}


export const fetchUserData = (id, type, navigate) => async (dispatch) => {
  var user = db.collection("users").doc(id);
  user.get().then((doc) => {
  if (doc.exists) {
    // console.log("User Data:", doc.data());
    dispatch(storeUserData(doc.data()));
    if(type === "sigin"){
      notifySuccessFxn("Logged In😊");
      navigate('/dashboard/home', { replace: true });
    }
  } else {
      console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
return user;
};






export const logout = (navigate) => async (dispatch) => {
  fb.auth().signOut().then(() => {
    dispatch(logoutFxn());
    console.log('logout successful!');
    dispatch(clearUser());
    // dispatch(clearCandidateSlice());
    // dispatch(clearJobSlice());
    navigate('/login', { replace: true });
  }).catch((error) => {
    // An error happened.
    console.log('logout failed response: ', error.message);
  });
  
}