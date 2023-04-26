import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signinInfo: localStorage.getItem("signin")
    ? JSON.parse(localStorage.getItem("signin"))
    : ''
};

const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    getSign(state, action) {
      const newSign = action.payload
        state.signinInfo = {
          ...state.signinInfo, user: newSign.user.username, pass: newSign.pass.password
        }
        localStorage.setItem("signin", JSON.stringify(state.signinInfo));
      },
      mapIdea(state, action) {
        const user = action.payload
        localStorage.setItem("idea", JSON.stringify(user));
      },
      clearSignin(state, action) {
        localStorage.clear("signin")
      }
    }
  })
  
export const { getSign, clearSignin, mapIdea } = signinSlice.actions

export default signinSlice