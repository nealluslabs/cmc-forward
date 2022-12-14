import { createSlice } from '@reduxjs/toolkit';

const initialState = {
       user: null,
       error: '',
       message: '',
      isLoading: false,
      isAuth: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
        state.user = action.payload;
        state.error = '';
        state.message = '';
      },
    loginFailed: (state, action) => {
        state.error = action.payload;
        state.user = null;
      },
      signupFailed: (state, action) => {
        state.error = action.payload;
        state.user = null;
      },
    clearUser: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = loginSlice;

export const {
 loginSuccess,
 loginFailed,
 signupFailed,
 clearUser,
} = actions;

export default reducer;


