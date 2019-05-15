import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopoComponent} from './topo/topo.component';
import {CorpopgComponent} from './corpopg/corpopg.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    CorpopgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
