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
    entities: null,
    errorMessages: null,
  },
  reducers: {
    reset(state) {
      state.errorMessages = null;
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
  const user = state.user.entities
  return user && !user.errors ? user : null
}

export const selectErrors = (state) =>{
  const user = state.user.entities;
  return user && user.errors ? user.errors : [];
}

export const {reset} = usersSlice.actions;

export default usersSlice.reducer;
