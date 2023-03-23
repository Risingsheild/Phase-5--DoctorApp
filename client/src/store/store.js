import { configureStore } from "@reduxjs/toolkit";

import usersReducer from '../features/Users/userSlice'



export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
