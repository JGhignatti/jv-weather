import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { responseToCityWeather, responseToCityDailyWeather } from '../utils/response.utils';
import { CityWeather, CityDailyWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getCityWeatherByQuery(query: string): Observable<CityWeather> {
    const params = new HttpParams({ fromObject: { q: query } });
    return this.doGet<any>('weather', params)
      .pipe(map(response => responseToCityWeather(response)));
  }

  getCityWeatherById(id: string): Observable<CityWeather> {
    const params = new HttpParams({fromObject: {id}});
    return this.doGet<any>('weather', params)
      .pipe(map(response => responseToCityWeather(response)));
  }

  getCityWeatherByCoord(lat: number, lon: number): Observable<CityWeather> {
    const params = new HttpParams({fromObject: {
      lat: lat.toString(),
      lon: lon.toString(),
    }});
    return this.doGet<any>('weather', params)
      .pipe(map(response => responseToCityWeather(response)));
  }

  getWeatherDetails(lat: number, lon: number): Observable<CityDailyWeather> {
    const params = new HttpParams({fromObject: {
      lat: lat.toString(),
      lon: lon.toString(),
      exclude: 'minutely,hourly',
    }});
    return this.doGet<any>('onecall', params)
      .pipe(map(response => responseToCityDailyWeather(response)));
  }

  private doGet<T>(url: string, params: HttpParams): Observable<T> {
    params = params.append('appid', environment.apiKey);
    params = params.append('lang', 'pt_br');
    return this.http.get<T>(`https://api.openweathermap.org/data/2.5/${ url }`, { params });
  }
}
