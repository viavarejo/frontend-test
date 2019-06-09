import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { TransacaoComponent } from './components/transacao/transacao.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { FormsModule } from '@angular/forms';
import { TransacaoService } from './components/services/transacao.service';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TransacaoComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [
    TransacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
