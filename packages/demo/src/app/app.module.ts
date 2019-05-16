import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

import { ZoButtonModule } from '../../../zero/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    ZoButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
