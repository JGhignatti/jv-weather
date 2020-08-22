import {createAction, props} from '@ngrx/store';

export const changeText = createAction('[Home]', props<{text:string}>());