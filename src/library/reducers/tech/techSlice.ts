import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { stat } from 'fs';
import * as api from 'library/api/exApi';
import { RootState } from 'main/store/createStore';

const name = 'techSlice';

export const fetchList = createAsyncThunk(
  `${name}/fetchList`,
  async({name}: {name: string}, thunkAPI) => {
    try { 
      return (await api.getData());
    } catch(error: any){
      return thunkAPI.rejectWithValue(await error.response.data);
    }
  }
);

export interface techList {
  visible: boolean;
  data: Array<any>;
}

const initialState: techList = {
  visible: false,
  data: [],
};

export const techSlice = createSlice({
  name,
  initialState,
  reducers: {
    setTech: (
      state,
      //payloadaction의 <>값은 임시로 만들어둔것
      action: PayloadAction<{ name: string }>,
    ) => {
      state.data.push(action.payload);
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
      state.data= action.payload.data;
    }
  }
});

const listState = (state: RootState) => state.techSlice.data


const { actions, reducer } = techSlice;
export const { setTech } = actions;

export const data = (state: RootState) => state.techSlice.data;
export const visible = (state: RootState) => state.techSlice.visible;

export default reducer;
