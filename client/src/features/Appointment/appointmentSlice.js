import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Gloabals";

export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async () => {
    const r = await fetch('/appointments');
    const data = await r.json();
    return data;
});

export const newAppointment = createAsyncThunk('appointment/newAppointment', async (payload) => {
    const r = await fetch('/appointments', {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    });
    return await r.json();
});

export const updateAppointment = createAsyncThunk('appointment/updateAppointment', async (payload) => {
    const r = await fetch(`/appointments/${payload.appointment.id}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(payload.appointment)
    });
    return await r.json();
});

export const deleteAppointment = createAsyncThunk('appointment/deleteAppointment', (payload) => {
    return fetch (`appoitments/${payload.id}`, {
        method: 'DELETE'
    }) .then((r) => r.json())
});


const appointmentSlice = createSlice({
    name: 'appointments',
    initialState: {
        entities: [],
        errorMessages: null,
    },
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchAppointments.fulfilled, (state, action) =>{
                if(action.payload){
                    state.errorMessages = action.payload.errors;
                }
            })
            .addCase(newAppointment.fulfilled, (state, action) => {
                if(action.payload.errors) state.errorMessages = action.payload.errors;
            })
            .addCase(updateAppointment.fulfilled, (state, action) => {
                if(action.payload.errors) state.errorMessages = action.payload.errors;
            })
    }
});

export default appointmentSlice.reducer