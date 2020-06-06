import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsPage } from './containers/details/details.page';
import { DetailsGuard } from './services/details.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DetailsPage, canActivate: [DetailsGuard] },
    ]),
  ],
  declarations: [
    DetailsPage,
  ],
  providers: [
    DetailsGuard,
  ],
})
export class DetailsModule {
}
