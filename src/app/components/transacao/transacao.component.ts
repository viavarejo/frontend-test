import { Component, OnInit } from '@angular/core';
import { Transacao } from '../models/extrato.model';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.scss']
})
export class TransacaoComponent implements OnInit {

  transacao: Transacao;
  constructor() {
    this.transacao = new Transacao();
  }

  ngOnInit() {
  }
  public submit(): void {
    console.log(this.transacao);
  }
}
