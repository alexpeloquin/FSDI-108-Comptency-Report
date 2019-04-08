import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegiteruserComponent } from './regiteruser/regiteruser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { MenuComponent } from './menu/menu.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms'; // import the forms module

@NgModule({
  declarations: [
    AppComponent,
    RegiteruserComponent,
    ListuserComponent,
    MenuComponent,
    MainpageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // inyect the module to all the components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
