// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { headers } from "../../Gloabals";

// // export const fetchAppointments = createAsyncThunk(
// //   "appointments/fetchAppointments",
// //   async () => {
// //     const r = await fetch("/appointments");
// //     const data = await r.json();
// //     return data;
// //   }
// // );




// // export const deleteAppointment = createAsyncThunk(
// //   "appointment/deleteAppointment",
// //   async (appointment) => {
// //     const r = await fetch(`appoitments/${appointment}`, {
// //       method: "DELETE",
// //     });
// //     return await r.json();
// //   }
// // );

// const appointmentsSlice = createSlice({
//   name: "appointments",
//   initialState: {
//     entities: [],
//     errorMessages: [],
//   },
//   reducers: {

//   },
//   extraReducers(builder) {
//     builder
//       // .addCase(fetchAppointments.fulfilled, (state, action) => {
//       //   if (action.payload) {
//       //     state.errorMessages = action.payload.errors;
//       //   }
//       // })
//       .addCase(newAppointment.fulfilled, (state, action) => {
//         if (action.payload.errors) state.errorMessages = action.payload.errors;
//       })
//       // .addCase(updateAppointment.fulfilled, (state, action) => {
//       //   state.entities = action.payload
//       // })
//       // .addCase(deleteAppointment.fulfilled, (state, action) => {
//       //   if (action.payload.errors) state.errorMessages = action.payload.errors;
//       // }
//     // );
//   // },
// }});

// export default appointmentsSlice.reducer;
