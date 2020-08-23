import { createFeatureSelector, createSelector } from '@ngrx/store';
import {HomeState} from './home.reducer';

export const selectHomeState = createFeatureSelector('home');

// export const selectHomeText = createSelector(selectHomeState, (homeState: HomeState)=> homeState.text);

// export const selectHomeText = createSelector(selectHomeState, (homeState: HomeState)=> homeState.text);


export const selectCurrentWeather = createSelector(
    selectHomeState,
    (homeState: HomeState) => homeState.entity,
  );
  
  export const selectCurrentWeatherLoading = createSelector(
    selectHomeState,
    (homeState: HomeState) => homeState.loading,
  );
  
  export const selectCurrentWeatherError = createSelector(
    selectHomeState,
    (homeState: HomeState) => homeState.error,
  );