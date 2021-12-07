import { combineReducers } from 'redux';
import { techSlice } from './tech/techSlice';

const reducer = combineReducers({
  techSlice: techSlice.reducer,
});

export default reducer;
