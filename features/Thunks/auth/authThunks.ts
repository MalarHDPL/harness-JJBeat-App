import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOGIN } from "@/redux/actionTypes";
import axios from "axios";
import { APIROUTES } from "@/lib/apiRoutes";
import {
  ApiResponse,
  loginPayloadType,
  LoginResponse,
  resetPasswordPayloadType,
} from "@/app/ts_types/auth_types";

export const LoginMiddleWare = createAsyncThunk<
  LoginResponse,
  loginPayloadType,
  { rejectValue: string }
>(
  LOGIN,
  async (
    { userId, password, companyId, companyName, divisionId, divisionName },
    { rejectWithValue },
  ) => {
    try {
      const payload = {
        userId,
        password,
        companyId,
        companyName,
        divisionId,
        divisionName,
      };
      const { data } = await axios.post<LoginResponse>(
        APIROUTES.LOGIN.POST_LOGIN,
        payload,
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.error?.message ?? "Login failed",
        );
      }

      return rejectWithValue("Login failed");
    }
  },
);

export const ResetPasswordMiddleWare = createAsyncThunk<
  ApiResponse,
  resetPasswordPayloadType,
  { rejectValue: string }
>("auth/resetPassword", async (payload, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<ApiResponse>(
      APIROUTES.LOGIN.RESET_PASSWORD,
      payload,
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data?.error?.message ?? "Login failed",
      );
    }

    return rejectWithValue("Login failed");
  }
});
