// import { APIROUTES } from "@/lib/apiRoutes";
// import {
//   CHAIN,
//   CHAINDELETE,
//   CHAINEDIT,
//   CHAINPOST,
//   CHAINVIEW,
// } from "@/redux/actionTypes";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { products } from "../mock";
// import { Chain,ChainState } from "@/app/ts_types/chain_types";


// export const chainThunk = createAsyncThunk<
//   Chain[],
//   void,
//   { rejectValue: string }
// >(CHAIN, async (_, { rejectWithValue }) => {
//   try {
//     const normalizedChains: Chain[] = products.map(item => ({
//       id: item.id,
//       createdon: item.createdon,
//       createdname: item.createdname,
//       source: item.source,
//       destination: item.destination,
//       leads: typeof item.leads === "string" ? Number(item.leads) : item.leads,
//       createdby: item.createdby,
//       status: item.status === "active" ? true : false, 
//       recentleaddata: item.recentleaddata,
//     }));

//     return normalizedChains;
//   } catch (error) {
//     return rejectWithValue("Error loading chains");
//   }
// });


// export const chainThunkPost = createAsyncThunk(
//   CHAINPOST,
//   async (newChain, { rejectWithValue }) => {
//     try {
//       return newChain;
//     } catch (error) {
//       return rejectWithValue("Error creating chain");
//     }
//   },
// );

// export const chainThunkView = createAsyncThunk(
//   CHAINVIEW,
//   async (newChain, { rejectWithValue }) => {
//     try {
//       return newChain; // return the newly created object
//     } catch (error) {
//       return rejectWithValue("Error creating chain");
//     }
//   },
// );
// // export const chainThunkEdit = createAsyncThunk(
// //   CHAINEDIT,
// //   async (updatedChain) => {
// //     const index = products.findIndex((item) => item.id === updatedChain.id);

// //     console.log(index, "index found");

// //     if (index !== -1) {
// //       // Update in array
// //       products[index] = { ...products[index], ...updatedChain };
// //     }

// //     // return FULL updated list (recommended)
// //     return products;
// //   }
// // );

// export const chainThunkEdit = createAsyncThunk(
//   CHAINEDIT,
//   async (newChain, { rejectWithValue }) => {
//     try {
//       return newChain; // return the newly created object
//     } catch (error) {
//       return rejectWithValue("Error creating chain");
//     }
//   },
// );
// export const chainThunkDelete = createAsyncThunk(
//   CHAINDELETE,
//   async (newChain, { rejectWithValue }) => {
//     try {
//       return newChain; // return the newly created object
//     } catch (error) {
//       return rejectWithValue("Error creating chain");
//     }
//   },
// );
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Chain } from "@/app/ts_types/chain_types";
import { products } from "../mock";
import {
  CHAIN,
  CHAINPOST,
  CHAINVIEW,
  CHAINEDIT,
  CHAINDELETE,
} from "@/redux/actionTypes";

// Fetch all chains
export const chainThunk = createAsyncThunk<
  Chain[], // return type
  void,   // argument type
  { rejectValue: string }
>(CHAIN, async (_, { rejectWithValue }) => {
  try {
    const normalizedChains: Chain[] = products.map((item) => ({
      id: item.id,
      createdon: item.createdon,
      createdname: item.createdname,
      source: item.source,
      destination: item.destination,
      leads: typeof item.leads === "string" ? Number(item.leads) : item.leads,
      createdby: item.createdby,
      status: item.status === "active",
      recentleaddata: item.recentleaddata,
    }));

    return normalizedChains;
  } catch (error) {
    return rejectWithValue("Error loading chains");
  }
});

// Add chain
export const chainThunkPost = createAsyncThunk<
  Chain,
  Chain,
  { rejectValue: string }
>(CHAINPOST, async (newChain, { rejectWithValue }) => {
  try {
    return newChain;
  } catch (error) {
    return rejectWithValue("Error creating chain");
  }
});

// View chain
export const chainThunkView = createAsyncThunk<
  Chain,
  Chain,
  { rejectValue: string }
>(CHAINVIEW, async (chain, { rejectWithValue }) => {
  try {
    return chain;
  } catch (error) {
    return rejectWithValue("Error viewing chain");
  }
});

// Edit chain
export const chainThunkEdit = createAsyncThunk<
  Chain,
  Chain,
  { rejectValue: string }
>(CHAINEDIT, async (updatedChain, { rejectWithValue }) => {
  try {
    return updatedChain;
  } catch (error) {
    return rejectWithValue("Error editing chain");
  }
});

// Delete chain
export const chainThunkDelete = createAsyncThunk<
  Chain,
  Chain,
  { rejectValue: string }
>(CHAINDELETE, async (chain, { rejectWithValue }) => {
  try {
    return chain;
  } catch (error) {
    return rejectWithValue("Error deleting chain");
  }
});
