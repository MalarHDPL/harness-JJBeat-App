import { createSlice } from "@reduxjs/toolkit";
import { homeThunk } from "@/features/Thunks/home/homeThunks";
type homeType = {
  isLoading: boolean;
  homeData: any;
  error: string|any;
};
const homeInitialState: homeType = {
  isLoading: false,
  homeData: [],
  error: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState: homeInitialState,
  reducers: {  },
  extraReducers: (builder) => {
    builder
      .addCase(homeThunk.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(homeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.homeData = action.payload || [];
      })
      .addCase(homeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Home data fetch failed";
      });
  },
});
export default homeSlice.reducer;
