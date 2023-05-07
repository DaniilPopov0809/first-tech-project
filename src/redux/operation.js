import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://6454c2fcf803f345763089ef.mockapi.io/v1";

export const fetchUserCards = createAsyncThunk(
  "users/fetchUserCards",
  async (page, thunkAPI) => {
    try {
      
      const response = await axios.get(`/users?page=${page}&limit=3`);
      const responseAll = await axios.get('/users');
      return {response: response.data, responseAll:responseAll.data};
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const enableFollow = createAsyncThunk(
  "users/enableFollow",
  async ({ id, followers }, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`, {
        followers: followers + 1,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const disableFollow = createAsyncThunk(
  "users/disableFollow",
  async ({ id, followers }, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`, {
        followers: followers - 1,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
