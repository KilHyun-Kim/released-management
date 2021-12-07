import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';

const name = 'techSlice';

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
});

const { actions, reducer } = techSlice;
export const { setTech } = actions;

export default reducer;
