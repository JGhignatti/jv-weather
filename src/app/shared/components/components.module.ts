import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { DatailedWeatherComponent } from './datailed-weather/datailed-weather.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoaderComponent,
    DatailedWeatherComponent,
  ],
  exports: [ LoaderComponent, DatailedWeatherComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {
}
