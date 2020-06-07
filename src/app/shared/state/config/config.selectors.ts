import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ConfigState } from './config.reducer';

export const selectConfigState = createFeatureSelector('config');

export const selectUnitConfig = createSelector(
  selectConfigState,
  (configState: ConfigState) => configState.unit,
);
