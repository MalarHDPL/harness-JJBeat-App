import { APIROUTES } from "@/lib/apiRoutes";
import { HOME } from "@/redux/actionTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const homeThunk= createAsyncThunk(
 HOME,
  async (useId:string, { rejectWithValue }) => {
    try {
      const response = await axios.post(APIROUTES?.Home?.GET_HOME_DATA, useId);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);


