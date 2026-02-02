import { APIROUTES } from "@/lib/apiRoutes";
import { CHAIN, CHAINDELETE, CHAINEDIT, CHAINPOST, CHAINVIEW } from "@/redux/actionTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { products } from "../mock";

export const chainThunk = createAsyncThunk(
  CHAIN,
  async (_, { rejectWithValue }) => {
    try {
      return products; // NO API CALL — return mock data
    } catch (error) {
      return rejectWithValue("Error loading chains");
    }
  }
);

export const chainThunkPost = createAsyncThunk(
  CHAINPOST,
  async (newChain, { rejectWithValue }) => {
    try {
      return newChain; // return the newly created object
    } catch (error) {
      return rejectWithValue("Error creating chain");
    }
  }
);

export const chainThunkView = createAsyncThunk(
  CHAINVIEW,
  async (newChain, { rejectWithValue }) => {
    try {
      return newChain; // return the newly created object
    } catch (error) {
      return rejectWithValue("Error creating chain");
    }
  }
);
// export const chainThunkEdit = createAsyncThunk(
//   CHAINEDIT,
//   async (updatedChain) => {
//     const index = products.findIndex((item) => item.id === updatedChain.id);

//     console.log(index, "index found");

//     if (index !== -1) {
//       // Update in array
//       products[index] = { ...products[index], ...updatedChain };
//     }

//     // return FULL updated list (recommended)
//     return products;
//   }
// );

export const chainThunkEdit = createAsyncThunk(
  CHAINEDIT,
  async (newChain, { rejectWithValue }) => {
    try {
      return newChain; // return the newly created object
    } catch (error) {
      return rejectWithValue("Error creating chain");
    }
  }
);
export const chainThunkDelete = createAsyncThunk(
  CHAINDELETE,
  async (newChain, { rejectWithValue }) => {
    try {
      return newChain; // return the newly created object
    } catch (error) {
      return rejectWithValue("Error creating chain");
    }
  }
);
