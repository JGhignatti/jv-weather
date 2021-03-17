import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { CityWeather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'jv-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent {

  @Input() cityWeather: CityWeather;
  @Output () toggleBookmark = new EventEmitter();

  get cityName (): string {
    return `${this.cityWeather.city.name}, ${this.cityWeather.city.country}`
  };

  onToggleBookmark() {
    this.toggleBookmark.emit;
  }

}
