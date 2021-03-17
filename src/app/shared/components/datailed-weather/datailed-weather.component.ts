import { Component, Input, Output } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'jv-datailed-weather',
  templateUrl: './datailed-weather.component.html',
  styleUrls: ['./datailed-weather.component.scss']
})
export class DatailedWeatherComponent {
  

  @Input() weather: Weather;
  

  get weatherIcon(): string{
    return `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`
  }
}