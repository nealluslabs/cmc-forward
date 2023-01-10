import { createSlice } from '@reduxjs/toolkit';

const initialState = {
       publicGroups: [],
       privateGroups: [],
       message: '',
      isLoading: false,
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    savePublicGroup: (state, action) => {
        state.publicGroups = action.payload;
    },
    savePrivateGroup: (state, action) => {
        state.privateGroups = action.payload;
    },
    isItLoading: (state, action) => {
      state.isLoading = action.payload;
  },
    clearGroup: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = groupSlice;

export const {
 savePublicGroup,
 savePrivateGroup,
 isItLoading,
 clearGroup
} = actions;

export default reducer;


