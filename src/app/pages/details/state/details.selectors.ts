import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DetailsState } from './details.reducer';

export const selectDetailsState = createFeatureSelector<DetailsState>('details');

export const selectDetailsEntity = createSelector(
  selectDetailsState,
  (detailsState: DetailsState) => detailsState.entity,
);

export const selectDetailsLoading = createSelector(
  selectDetailsState,
  (detailsState: DetailsState) => detailsState.loading,
);

export const selectDetailsError = createSelector(
  selectDetailsState,
  (detailsState: DetailsState) => detailsState.error,
);