import { combineReducers } from '@ngrx/store';

import { loadingReducer as loading } from './ui/loading.reducer';

export const LoanRootReducer = combineReducers({
  loading
});
