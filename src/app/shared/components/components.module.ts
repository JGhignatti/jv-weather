import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { LoaderComponent } from './loader/loader.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
import { CitiesTypeaheadComponent } from './cities-typeahead/cities-typeahead.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
  ],
  declarations: [
    LoaderComponent,
    DetailedWeatherComponent,
    CitiesTypeaheadComponent,
  ],
  exports: [
    LoaderComponent,
    DetailedWeatherComponent,
    CitiesTypeaheadComponent,
  ]
})
export class ComponentsModule {
}
