import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { stat } from 'fs';
import * as api from 'library/api/exApi';

const name = 'techSlice';

export const fetchList = createAsyncThunk(
  `${name}/fetchList`,
  async({number, name}: {number: number; name: number}, thunkAPI) => {
    try { 
      return (await api.getData());
    } catch(error: any){
      return thunkAPI.rejectWithValue(await error.response.data);
    }
  }
);

export interface techList {
  visible: boolean;
  data: { name: string };
}

const initialState: techList = {
  visible: false,
  data: { name: 'React' },
};

export const techSlice = createSlice({
  name,
  initialState,
  reducers: {
    setTech: (
      state,
      //payloadaction의 <>값은 임시로 만들어둔것
      action: PayloadAction<{ visible: false; data: string }>,
    ) => {
      state.data.name = action.payload.data;
    },
  },
  extraReducers: {
    [fetchList.pending.type]: (state) => {
      //호출 전
      state.visible = true;
    },
    [fetchList.fulfilled.type]: (state, action) => {
      //성공
      state.visible = true;
      state.data = action.payload;
    },
    [fetchList.rejected.type]: (
      state,
      action: PayloadAction<techList>,
    ) => {
      //실패
      state.visible = true;
      state.data.name = action.payload.data.name;
    }
  }
});

const { actions, reducer } = techSlice;
export const { setTech } = actions;

export default reducer;
