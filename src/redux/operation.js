import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6454c2fcf803f345763089ef.mockapi.io/v1';

export const fetchUserCards = createAsyncThunk('users/fetchUserCards',
async (_, thunkAPI) => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
}
);