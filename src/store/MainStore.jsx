import { configureStore } from "@reduxjs/toolkit";
import Auth from "./slice/Auth";
import Db from "./slice/Db";

const mainStore = configureStore({
  reducer: {
    login: Auth.reducer,
    dataBase: Db.reducer,
  },
});
export default mainStore;
