// ** Redux Imports
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
// ** Type import
import { InventoryListType, Prdmst } from 'src/types/inventory/InventoryListType';


// ** Fetch Inventory

interface PrdmstState {
  data: Prdmst[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}

/*Code That Needs to go in services */
export const fetchData = createAsyncThunk<Prdmst[], void, { rejectValue: string }>(
  'prdmst/fetchData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/get_all_inventory_api'); // Fetch data from your API
     
      return response.data as Prdmst[]; // Make sure response.data is an array of Prdmst
    } catch (error) {
      return thunkAPI.rejectWithValue("Wrong");
    }
  }
);
export const fetchInventoryData = createAsyncThunk<Prdmst,  string, { rejectValue: string }>(
  'prdmst/fetchInventoryData',
  async (invcod, thunkAPI) => {
    try {
      const response = await axios.get(`/api/get_inventory_by_id_api?invcod=${encodeURIComponent(invcod)}`); // Fetch data from your API
     
      const Inventorydata =  response.data  as Prdmst;// Make sure response.data is an array of Prdmst
      return Inventorydata; 
    } catch (error) {
      return thunkAPI.rejectWithValue("Wrong");
    }
  }
);

/*Code That Needs to go in services */
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