import { Injectable } from '@angular/core';
import { Transacao } from '../models/extrato.model';

@Injectable()
export class TransacaoService {

    public saveTransaction(transaction: Transacao): void {
        let transactions = this.getTransactions();

        if (transactions === null) {
            transactions = [];
        }

        transactions.push(transaction);
        localStorage.setItem('transacoes', JSON.stringify(transactions));
    }

    public getTransactions(): Array<any> {
        return JSON.parse(localStorage.getItem('transacoes'));
    }
}
