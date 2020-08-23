import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'jv-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent {

  @Input() weather: Weather;

  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${ this.weather.icon }@2x.png`;
  }
}