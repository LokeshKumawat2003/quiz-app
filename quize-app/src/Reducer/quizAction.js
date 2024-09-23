import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk("fetchApi", async (page) => {
  const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz?page=${page}&limit=1`);
  return response.json();
});
export const Productslice = createSlice({
  name: "quiz",
  initialState: {
    isloadding: false,
    data: null,
    iserror: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchApi.rejected, (state, action) => {
      console.log("Error:", action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default Productslice.reducer;
