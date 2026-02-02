import { createSlice } from "@reduxjs/toolkit";
import {
  chainThunk,
  chainThunkDelete,
  chainThunkEdit,
  chainThunkPost,
  chainThunkView,
} from "./chainMiddleware";

type homeType = {
  isLoading: boolean;
  chainData: any;
  error: string | any;
  chainViewData: any;
  chainEditData: any;
};
const chainsInitialState: homeType = {
  isLoading: false,
  chainData: [],
  error: "",
  chainViewData: {},
  chainEditData: {},
};

const chainSlice = createSlice({
  name: "home",
  initialState: chainsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(chainThunk.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(chainThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.chainData = action.payload;
    });
    builder.addCase(chainThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Home data fetch failed";
    });
    builder.addCase(chainThunkPost.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(chainThunkPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.chainData.unshift(action.payload); // ADD to list
    });

    builder.addCase(chainThunkPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Home data fetch failed";
    });
    builder.addCase(chainThunkView.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(chainThunkView.fulfilled, (state, action) => {
      state.isLoading = false;
      state.chainViewData = action.payload;
    });

    builder.addCase(chainThunkView.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Home data fetch failed";
    });
    builder.addCase(chainThunkEdit.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(chainThunkEdit.fulfilled, (state, action) => {
      const updatedItem = action.payload;

      const index = state.chainData.findIndex((i) => i.id === updatedItem.id);

      if (index !== -1) {
        state.chainData[index] = updatedItem;
      }
    });

    builder.addCase(chainThunkEdit.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Home data fetch failed";
    });
    builder.addCase(chainThunkDelete.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(chainThunkDelete.fulfilled, (state, action) => {
      const deletedId = action.payload.id;
      state.chainData = state.chainData.filter((item) => item.id !== deletedId);
      state.isLoading = false;
    });

    builder.addCase(chainThunkDelete.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Home data fetch failed";
    });
  },
});
export default chainSlice.reducer;
