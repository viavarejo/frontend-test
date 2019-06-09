import { NavbarComponent } from './layouts/navbar/navbar.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TransacaoComponent } from './components/transacao/transacao.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';
import { TransacaoService } from './components/services/transacao.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CurrencyMaskModule],
      declarations: [
        AppComponent,
        NavbarComponent,
        TransacaoComponent,
        ExtratoComponent
      ],
      providers: [TransacaoService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
