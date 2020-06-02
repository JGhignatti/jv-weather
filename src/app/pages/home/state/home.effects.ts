import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import * as fromHomeActions from './home.actions';

@Injectable()
export class HomeEffects {

  

  constructor(private actions$: Actions) {
  }
}
