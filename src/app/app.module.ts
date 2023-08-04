import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NnLoadingEffectAngularModule } from 'nn-loading-effect-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NnLoadingEffectAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
