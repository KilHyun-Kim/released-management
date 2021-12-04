import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface techList {
  visible: boolean;
  data: string;
}

const initialState = {
  visible: false,
  data: '',
} as techList;

export const techSlice = createSlice({
  name: 'techSlice',
  initialState,
  reducers: {
    //state가 들어가면 에러남..
    showTech(state, action: PayloadAction<techList>) {
      return action.payload;
    },
  },
});

const { actions, reducer } = techSlice;
export const { showTech } = actions;

export default reducer;
