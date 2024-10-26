import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:DashboardComponent,
  children:[
    {path:'users',component:UsersComponent},
    {path:'add',component:FormComponent}
  ]}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
