import { MainpageComponent } from './mainpage/mainpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegiteruserComponent } from './regiteruser/regiteruser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // entry point
  { path: '', component: MainpageComponent },

  { path: 'user/register', component: RegiteruserComponent },
  { path: 'user/list', component: ListuserComponent },
  { path: 'user/login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
