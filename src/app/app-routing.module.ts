import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutineComponent } from './routine/routine.component';
import { ShippingComponent } from './shipping/shipping.component';


const routes: Routes = [
  { path: '', component: RoutineComponent, pathMatch: 'full' },
  { path: 'test-path', component: ShippingComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
