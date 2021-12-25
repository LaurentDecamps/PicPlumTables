import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultatComponent } from './resultat/resultat.component';
import { DalleMultiplicationComponent } from './dalleMultiplication/dalle-multiplication/dalle-multiplication.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultatComponent,
    DalleMultiplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
