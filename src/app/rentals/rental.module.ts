import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalComponent } from './rental.component';

import { RentalService } from './shared/rental.service';

const routes: Routes = [
  {path: 'rentals',
    component: RentalComponent,
    children: [
      {path: '', component: RentalListingComponent},
      {path: ':rentalId', component: RentalDetailComponent}
    ]
  }
];

@NgModule({
  declarations: [
    RentalComponent,
    RentalListingComponent,
    RentalDetailComponent,
  ],
  providers: [
    RentalService,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class RentalModule {}
