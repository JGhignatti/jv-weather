import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { HomePage } from './home.page';
import { homeReducer } from './state/home.reducer';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
  ],
  declarations: [
    HomePage,
  ],
})
export class HomeModule { }
