import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';

const routes: Routes = [
  { path: 'employee/:id', component: EmployeeDetailComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  declarations: [EmptyRouteComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
