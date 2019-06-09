import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { TransacaoComponent } from './components/transacao/transacao.component';
import { ExtratoComponent } from './components/extrato/extrato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TransacaoComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
