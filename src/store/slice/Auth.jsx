import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
  name: "auth",
  initialState: {
    login: "",
    is_auth: false,
    logo: ""
  },
  reducers: {
    SignUp: () => {},
  },
});
export const SignUpFunc = Auth.actions;
export default Auth;
