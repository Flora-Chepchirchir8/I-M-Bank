import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ForgotPasswordComponent } from './components/forgotpassword/forgotpassword.component';


const routes: Routes = [
  { path: '', redirectTo:"/login", pathMatch:"full"},
  {path:'login',component:LoginComponent,},
  {path:'homepage',component:HomepageComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
