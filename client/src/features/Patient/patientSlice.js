import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Gloabals";

export const fetchPatients = createAsyncThunk(
  "/patients/fetchPatients",
  async () => {
    const r = await fetch("/patients");
    const data = await r.json();
    return data;
  }
);

export const newPatient = createAsyncThunk(
  "patient/newPatient",
  async (payload) => {
    const r = await fetch("/patients", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });
    return await r.json();
  }
);

const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    entities: [],
    errorMessages: null,
    status: 'idle'
  },
  reducers: { 
    addPatient(state, action) {
      return {
        ...state,
        entities: [...state.entities, action.payload ],
      };
    },

    // addPrescription(state, action) {
    //   return {
    //     ...state,
    //     entities: {
    //       ...state.entities,
    //       prescriptions: [...state.entities.prescriptions, action.payload],
    //     },
    //   };
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.entities = action.payload; 
      })
      .addCase(newPatient.fulfilled, (state, action) => {
        if (action.payload.errors) state.errorMessages = action.payload.errors;
        else state.entities.push(action.payload)
      });
  },
});

export const {addPrescription, addPatient} = patientsSlice.actions;

export default patientsSlice.reducer