import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { PostCarComponent } from '../../post-car/post-car.component';

const routes: Routes = [
  { path: 'dashbord', component: AdminDashbordComponent },
  { path: 'car', component: PostCarComponent },
];

@NgModule({
  // declarations: [PostCarComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
