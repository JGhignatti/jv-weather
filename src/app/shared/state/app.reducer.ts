import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { RouterState } from './router/router.reducer';

export interface AppState {
  router: RouterReducerState<RouterState>,
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};