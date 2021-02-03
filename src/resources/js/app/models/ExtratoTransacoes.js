export class ExtratoTransacoes{
    constructor(){
        this._transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];
        this._total = (localStorage.getItem('total')*1);
    }

    adiciona(transacao){
        const novaTransacao = {
            tipoTransacao: transacao.tipoTransacao,
            mercadoria: transacao.mercadoria,
            valor: transacao.valor
        };
            
        const atualizaTransacoes = [...this._transacoes, novaTransacao];
        localStorage.setItem('transacoes', JSON.stringify(atualizaTransacoes));

        this._transacoes = JSON.parse(localStorage.getItem('transacoes'));

        this._calcularTotal(transacao.tipoTransacao, transacao.valor);
    }

    _calcularTotal(tipoTransacao, valor){
        //tipoTransacao: 1 = compra, 2 = venda
        this._total += (tipoTransacao == 1)?-valor:valor;
        localStorage.setItem('total', this._total);
    }

    get transacoes(){ 
        return this._transacoes;
    }

    get total(){
        return this._total;
    }
}