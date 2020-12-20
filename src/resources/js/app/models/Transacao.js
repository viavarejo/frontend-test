export class Transacao {
    constructor(tipoTransacao, mercadoria, valor){
        this._tipoTransacao = tipoTransacao;
        this._mercadoria = mercadoria;
        this._valor = valor*1;
        Object.freeze(this);
    }

    get tipoTransacao(){
        return this._tipoTransacao;
    }

    get mercadoria(){
        return this._mercadoria;
    }

    get valor(){
        return this._valor;
    }
}