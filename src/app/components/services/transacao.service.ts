import { Injectable } from '@angular/core';
import { Transacao } from '../models/extrato.model';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class TransacaoService {

    private transaction = new Subject<Transacao[]>();

    public saveTransaction(transaction: Transacao): void {
        let transactions = JSON.parse(localStorage.getItem('transacoes'));

        if (transactions === null) {
            transactions = [];
        }

        transactions.push(transaction);
        localStorage.setItem('transacoes', JSON.stringify(transactions));
        this.transaction.next(transactions);
    }

    public transactionsObservable(): Observable<Transacao[]> {
        return this.transaction.asObservable();
    }

    public getAllTransactions(): Array<Transacao> {
        return JSON.parse(localStorage.getItem('transacoes'));
    }
}
