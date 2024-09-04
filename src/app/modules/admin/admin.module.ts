import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { NgZorroImportsModule } from '../../NgZorroImportsModule';
import { PostCarComponent } from '../../post-car/post-car.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminDashbordComponent, PostCarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportsModule, // This will ensure NzSpinModule and others are available
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdminModule {}
