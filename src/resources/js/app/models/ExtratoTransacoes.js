class ExtratoTransacoes{
    constructor(){
        this._transacoes = [];
        this._total = 0;
    }

    adiciona(transacao){
        this._transacoes.push(transacao);
        this._calcularTotal(transacao.tipoTransacao, transacao.valor);
    }

    _calcularTotal(tipoTransacao, valor){
        //1 = compra, 2 = venda
        this._total += (tipoTransacao == 1)?-valor:valor; 
    }

    get transacoes(){
        return [].concat(this._transacoes);
    }

    get total(){
        return this._total;
    }
}