import { Injectable } from '@angular/core';
import { Transacao } from '../models/extrato.model';

@Injectable()
export class TransacaoService {

    public saveTransaction(transaction: Transacao): void {
        const transactions = JSON.parse(localStorage.getItem('transacoes'));
        transactions.push(transaction);
        localStorage.setItem('transacoes', JSON.stringify(transactions));
    }

    public getTransactions(): Array<any> {
       return JSON.parse(localStorage.getItem('transacoes'));
    }
}
