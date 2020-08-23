import { createReducer, Action, on, State } from '@ngrx/store'

import * as fromHomeActions from './home.actions';

export interface HomeState {
  // text: string;
  entity: any;
  loading: boolean;
  error: boolean;
}

export const homeInitialState: HomeState = {
  // text: 'Curitiba',
  entity: undefined,
  loading: false,
  error: false,
}
const reducer = createReducer(
  homeInitialState,
  on(fromHomeActions.loadCurrentWeather, state => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(fromHomeActions.loadCurrentWeatherSuccess, (state, { entity }) => ({
    ...state,
    entity,
    loading: false,
  })),
  on(fromHomeActions.loadCurrentWeatherFailed, state => ({
    ...state,
    loading: false,
    error: true,
  })),
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
  return reducer(state, action);
}