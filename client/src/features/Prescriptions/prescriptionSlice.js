import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Gloabals";

export const newPrescription = createAsyncThunk(
  "prescription/newPrescription",
  async (payload) => {
    const r = await fetch("/prescriptions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });
    return await r.json();
  }
);

const prescriptionSlice = createSlice({
  name: "prescriptions",
  initialState: {
    entities: [],
    errorMessage: null,
  },
  extraReducers(builder) {
    builder.addCase(newPrescription.fulfilled, (state, action) => {
      if (action.payload.errors) state.errorMessage = action.payload.errors;
    });
  },
});

export default prescriptionSlice.reducer;
