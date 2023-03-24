import { configureStore } from "@reduxjs/toolkit";

import usersReducer from '../features/Users/userSlice'
import patientsReducer from '../features/Patient/patientSlice'


export const store = configureStore({
  reducer: {
    users: usersReducer,
    patients: patientsReducer
  },
});
