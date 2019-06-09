import { TransacaoService } from './../services/transacao.service';
import { Transacao } from './../models/extrato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transactions: Transacao[];
  total: number;
  constructor(private service: TransacaoService) { }

  ngOnInit() {
    this.getAllTransactions();
    this.transactionsObservable();
  }
  private transactionsObservable(): void {
    this.service.transactionsObservable().subscribe((values) => {
      this.transactions = values;
      this.total = this.countTotal(values);
    });
  }

  private getAllTransactions(): void {
    this.transactions = this.service.getAllTransactions();
    this.total = this.countTotal(this.transactions);
  }
  private countTotal(values: Transacao[]): number {
    let value = 0;
    if (values) {
      values.map((v) => {
        switch (v.tipoTransacao) {
          case '0':
            value -= v.valor;
            break;
          case '1':
            value += v.valor;
            break;
        }
      });
    }
    return value;
  }
}
