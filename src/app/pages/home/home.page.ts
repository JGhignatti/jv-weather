import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';


import * as fromHomeActions from './state/home.actions';
import * as fromHomeSelectors from './state/home.selectors'
import { Observable } from 'rxjs';
import { CityWeather } from 'src/app/shared/models/weather.model';
@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  cityWeather$:Observable<CityWeather>;
  loading$:Observable<boolean>;
  error$:Observable<boolean>;

  searchControl: FormControl;

  text: string;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.searchControl = new FormControl('', Validators.required);

    this.cityWeather$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));
    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));
  }

  doSearch() {
    console.log(this.searchControl.value);
    const query = this.searchControl.value;
    // this.store.dispatch(fromHomeActions.changeText({text}));
    this.store.dispatch(fromHomeActions.loadCurrentWeather({query}));

  }
}