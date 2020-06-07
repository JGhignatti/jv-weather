import { createReducer, Action, on } from '@ngrx/store';

import { CityDailyWeather } from 'src/app/shared/models/weather.model';
import * as fromDetailsActions from './details.actions';

export interface DetailsState {
  entity: CityDailyWeather;
  loading: boolean;
  error: boolean;
}

export const detailsInitialState: DetailsState = {
  entity: undefined,
  loading: false,
  error: false,
};

const reducer = createReducer(
  detailsInitialState,
  on(fromDetailsActions.loadWeatherDetails, state => ({
    ...state,
    entity: undefined,
    loading: true,
    error: false,
  })),
  on(fromDetailsActions.loadWeatherDetailsSuccess, (state, { entity }) => ({
    ...state,
    entity,
    loading: false,
  })),
  on(fromDetailsActions.loadWeatherDetailsFailed, state => ({
    ...state,
    loading: false,
    error: true,
  })),
);

export function detailsReducer(state: DetailsState | undefined, action: Action): DetailsState {
  return reducer(state, action);
}
