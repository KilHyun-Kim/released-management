import { combineReducers } from 'redux';
import { techSlice } from './tech/techSlice';

const reducer = combineReducers({
  techSlice: techSlice.reducer,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
