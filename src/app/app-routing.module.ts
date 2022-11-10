import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ConfirmationdialogComponent } from './confirmationdialog/confirmationdialog.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';
import { RegisterComponent } from './register/register.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"peoplelist",component:PeoplelistComponent},
{path:"forgetpassword",component:ForgetpasswordComponent},
{path:"confiramationdialog",component:ConfirmationdialogComponent},
{path:"adduser",component:AdduserComponent},
{path:"",component:HomeComponent},
{path:"updateuser/:id",component:UpdateuserComponent},
{path:"confirmationdialog",component:ConfirmationdialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
