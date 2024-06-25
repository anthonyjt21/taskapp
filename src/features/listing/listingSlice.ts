import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Element {
  id: string;
  name: string;
}

interface ListingState {
  elements: Element[];
  loading: boolean;
  error: string | null;
}

const initialState: ListingState = {
  elements: [],
  loading: false,
  error: null,
};

const urlResource = 'https://6172cfe5110a740017222e2b.mockapi.io/elements';
export const fetchElements = createAsyncThunk(
  'listing/fetchElements',
  async () => {
    const response = await axios.get(urlResource);
    return response.data;
  }
);

const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchElements.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchElements.fulfilled, (state, action) => {
        state.loading = false;
        state.elements = action.payload;
      })
      .addCase(fetchElements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch elements';
      });
  },
});

export default listingSlice.reducer;
