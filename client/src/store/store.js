import { configureStore } from "@reduxjs/toolkit";

import usersReducer from '../features/Users/userSlice'
import patientsReducer from '../features/Patient/patientSlice'
import prescriptionReducer from "../features/Prescriptions/prescriptionSlice";
import appointmentsReducer from "../features/Appointment/appointmentSlice";


export const store = configureStore({
  reducer: {
    users: usersReducer,
    patients: patientsReducer,
    // prescriptions: prescriptionReducer,
    // appointments: appointmentsReducer
  },
});
