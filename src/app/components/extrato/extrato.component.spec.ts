import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoComponent } from './extrato.component';
import { TransacaoService } from '../services/transacao.service';
import { TransacaoComponent } from '../transacao/transacao.component';

describe('ExtratoComponent', () => {
  let component: ExtratoComponent;
  let fixture: ComponentFixture<ExtratoComponent>;

  let transactionComponent: TransacaoComponent;
  let transactionFixture: ComponentFixture<TransacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CurrencyMaskModule, FormsModule],
      declarations: [ ExtratoComponent, TransacaoComponent ],
      providers: [TransacaoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoComponent);
    component = fixture.componentInstance;

    transactionFixture = TestBed.createComponent(TransacaoComponent);
    transactionComponent =  transactionFixture.componentInstance;

    fixture.detectChanges();
    transactionFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get transactions', () => {
    transactionComponent.transacao = {
      nomeMercadoria: 'teste criação para pesquisar',
      tipoTransacao: '0',
      valor: 900
    };

      transactionComponent.submit();
      component.ngOnInit();
      expect(component.transactions.length > 0).toBeTruthy();
  });
});
