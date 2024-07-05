import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { AreasComponent } from './areas/areas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'areas', component: AreasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}