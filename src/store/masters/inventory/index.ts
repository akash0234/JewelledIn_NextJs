// ** Redux Imports
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
// ** Type import
import { Prdmst } from 'src/types/inventory/InventoryListType';


// ** Fetch Inventory

interface PrdmstState {
  data: Prdmst[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}


export const fetchData = createAsyncThunk<Prdmst[], void, { rejectValue: string }>(
  'prdmst/fetchData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/inventoryapi'); // Fetch data from your API
     
      return response.data as Prdmst[]; // Make sure response.data is an array of Prdmst
    } catch (error) {
      return thunkAPI.rejectWithValue("Wrong");
    }
  }
);
const initialState: PrdmstState = {
  data: [],
  status: 'idle',
  error: undefined,
};

const inventorySlice = createSlice({
  name: 'prdmst',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;

      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default inventorySlice.reducer;