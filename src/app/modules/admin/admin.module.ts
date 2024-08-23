import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { NgZorroImportsModule } from '../../NgZorroImportsModule';
import { PostCarComponent } from '../../post-car/post-car.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminDashbordComponent,
    PostCarComponent, // If PostCarComponent is part of this module
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportsModule, // This will ensure NzSpinModule and others are available
  ],
})
export class AdminModule {}
