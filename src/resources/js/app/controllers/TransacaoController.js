import { ExtratoTransacoes } from "../models/ExtratoTransacoes.js";
import { TransacoesView } from "../views/TransacoesView.js";
import { Mensagem } from "../models/Mensagem.js";
import { MensagemView } from "../views/MensagemView.js";
import { Transacao } from "../models/Transacao.js";

export class TransacaoController {
    constructor() {
        this._inputTipoTransacao = document.querySelector('[data-form-type-transaction]');
        this._inputNomeMercadoria = document.querySelector('[data-form-name-product]');
        this._inputValorMercadoria = document.querySelector('[data-form-value]');

        this._extratoTransacoes = new ExtratoTransacoes();

        this._transacoesView = new TransacoesView(document.querySelector('[table-transaction]'));
        this._transacoesView.atualizarLista(this._extratoTransacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(document.querySelector('[alert-transaction]'));
    }

    adicionaTransacao(event) {
        event.preventDefault();

        this._extratoTransacoes.adiciona(this._criarTransacao());
        this._transacoesView.atualizarLista(this._extratoTransacoes);

        this._mensagem.texto = 'Transação adicionada com sucesso!';
        this._mensagemView.atualizarLista(this._mensagem);

        setTimeout(() => this._mensagemView.atualizarLista(this._mensagem.texto = ' '), 2500);

        this._limpaFormularioTransacao();
    }

    _criarTransacao() {
        return new Transacao(
            this._inputTipoTransacao.value,
            this._inputNomeMercadoria.value,
            this._inputValorMercadoria.value
        );
    }

    _limpaFormularioTransacao() {
        this._inputTipoTransacao.value = 1;
        this._inputNomeMercadoria.value = '';
        this._inputValorMercadoria.value = '';

        this._inputTipoTransacao.focus();
    }
}