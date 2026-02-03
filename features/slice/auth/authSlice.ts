import { createSlice } from "@reduxjs/toolkit";
import {
  LoginMiddleWare,
  ResetPasswordMiddleWare,
} from "@/features/Thunks/auth/authThunks";
import { AuthState } from "@/app/ts_types/auth_types";

const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginMiddleWare.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload?.token || null;
        state.user = action.payload?.user || null;
        state.error = null;

      
      })
      .addCase(LoginMiddleWare.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(ResetPasswordMiddleWare.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ResetPasswordMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(ResetPasswordMiddleWare.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Reset Password failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
