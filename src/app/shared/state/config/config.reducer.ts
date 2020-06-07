import { createReducer, on } from '@ngrx/store';

import { Units } from '../../models/units.enum';
import * as fromConfigActions from './config.actions';

export interface ConfigState {
  unit: Units;
}

export const configInitialState: ConfigState = {
  unit: Units.Metric,
}

export const configReducer = createReducer(
  configInitialState,
  on(fromConfigActions.updateUnit, (state, { unit }) => ({
    ...state,
    unit,
  })),
);
