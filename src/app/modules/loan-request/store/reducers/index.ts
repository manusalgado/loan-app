import { combineReducers } from '@ngrx/store';

import { loadingReducer as loading } from './ui/loading.reducer';
import { rangeReducer as range } from './data/range.reducer';
import { statusReducer as status } from './data/status.reducer';

export const LoanRootReducer = combineReducers({
  loading,
  range,
  status
});
