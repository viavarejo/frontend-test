import { Component, OnInit } from '@angular/core';
import { Transacao } from '../models/extrato.model';
import { TransacaoService } from '../services/transacao.service';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.scss']
})
export class TransacaoComponent implements OnInit {

  transacao: Transacao;
  constructor(private service: TransacaoService) {
    this.transacao = new Transacao();
  }

  ngOnInit() {
  }
  public submit(): void {
    this.service.saveTransaction(this.transacao);
    this.transacao = new Transacao();
  }
}
