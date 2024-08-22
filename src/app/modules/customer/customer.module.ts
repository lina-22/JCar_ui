import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashbordComponent } from './components/customer-dashbord/customer-dashbord.component';

@NgModule({
  declarations: [CustomerDashbordComponent],
  imports: [CommonModule, CustomerRoutingModule],
})
export class CustomerModule {}
