import { Transacao } from './../models/extrato.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacaoComponent } from './transacao.component';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { TransacaoService } from '../services/transacao.service';

describe('TransacaoComponent', () => {
  let component: TransacaoComponent;
  let fixture: ComponentFixture<TransacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CurrencyMaskModule],
      declarations: [ TransacaoComponent ],
      providers: [TransacaoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a purchase transaction', () => {

    component.transacao = {
      nomeMercadoria: 'teste de transação',
      tipoTransacao: '0',
      valor: 200
    };

    component.submit();
    expect(component.transacao.nomeMercadoria).toBeUndefined();
  });

  it('should create a sale transaction', () => {

    component.transacao = {
      nomeMercadoria: 'teste de transação',
      tipoTransacao: '1',
      valor: 5200
    };

    component.submit();
    expect(component.transacao.nomeMercadoria).toBeUndefined();
  });
});
