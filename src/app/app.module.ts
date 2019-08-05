import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { CreateloginPageComponent } from './app-pages/createlogin-page/createlogin-page.component';
import { LoginPageComponent } from './app-pages/login-page/login-page.component';
import { ElPasswordComponent } from './app-elements/el-password/el-password.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, CreateloginPageComponent, LoginPageComponent, ElPasswordComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
