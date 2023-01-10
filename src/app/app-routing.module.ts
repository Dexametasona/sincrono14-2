import { PadreComponent } from './comp-sinc14-2/padre/padre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'padre',  component:PadreComponent},
  {path:'', redirectTo:'/padre', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
