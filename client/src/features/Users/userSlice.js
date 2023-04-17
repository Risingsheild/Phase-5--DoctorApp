import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Gloabals";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const r = await fetch("/me");
  const data = await r.json();
  return data;
});

export const login = createAsyncThunk(
  "users/login",
  async ({ username, password }) => {
    const data = await fetch("/login", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ username, password }),
    });
    return await data.json();
  }
);

export const signup = createAsyncThunk(
  "users/signup",
  async ({ username, password }) => {
    const data = await fetch("/signup", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ username, password }),
    });
    return await data.json();
  }
);

export const logout = createAsyncThunk("users/logout", async () => {
  return fetch("/logout", {
    method: "DELETE",
  });
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: {
      patients: [],
      appointments: [],
    },
    errorMessages: [],
  },
  reducers: {
    addAppointment(state, action) {
      console.log('UserSlice', action.payload);
      return {
        ...state,
        entities: {
          ...state.entities,
          appointments: [...state.entities.appointments, action.payload],
        },
      };
    },
    onUpdateAppointment(state, action) {
      console.log("userSlice Appt", action.payload.appointment.id);
      const updatedAppts = state.entities.appointments.map((appt) => {
        console.log('apptID', appt.id)
        if (appt.id === action.payload.appointment.id) {
          return action.payload;
        } else {
          return appt;
        }
      })
      console.log('updated appts', updatedAppts);
      return {
        ...state,
        entities: {
          ...state.entities,
          appointments: updatedAppts,
        },
      }
    },

    ondeleteAppointment(state, action) {
      return {
        ...state,
        entities: {
          ...state.entities,
          appointments: state.entities.appointments.filter(
            (appt) => appt.id !== action.payload
          ),
        },
      };
    },
    onUpdatePatientPrescriptions(state, action) {
      console.log("userSlice prescr", action.payload);
      const updatedPatient = state.entities.patients.map((pts) => {
        console.log('pts', pts)
        if (pts.id === action.payload.patient_id) {
          return action.payload;
        } else {
          return pts;
        }
      })
      console.log('updated patient', updatedPatient);
      return {
        ...state,
        entities: {
          ...state.entities,
          appointments: updatedPatient,
        },
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.entities = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.errors) state.errorMessages = action.payload.errors;
        else {
          state.entities = action.payload;
          state.errorMessages = null;
        }
      })
      .addCase(signup.fulfilled, (state, action) => {
        if (action.payload.errors) state.errorMessages = action.payload.errors;
        else {
          state.errorMessages = null;
          state.entities = action.payload;
        }
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.errorMessages = null;
        state.entities = null;
        action.payload = null;
      });
  },
});

export const selectUser = (state) => {
  const user = state.users.entities;
  return user && !user.errors ? user : null;
};

export const selectErrors = (state) => {
  const user = state.users.entities;
  return user && user.errors ? user.errors : [];
};

export const {
  addAppointment,
  ondeleteAppointment,
  onUpdateAppointment,
  onUpdatePatientPrescriptions
} = usersSlice.actions;

export default usersSlice.reducer;
