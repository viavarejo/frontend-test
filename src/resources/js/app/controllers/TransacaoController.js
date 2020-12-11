class TransacaoController {
    constructor(){
        this._inputTipoTransacao = document.getElementById('tipo-transacao');
        this._inputNomeMercadoria = document.getElementById('nome-mercadoria');
        this._inputValorMercadoria = document.getElementById('valor-mercadoria');

        this._extratoTransacoes = new ExtratoTransacoes();

        this._transacoesView = new TransacoesView(document.getElementById('tbl-extrato-transacoes'));
        this._transacoesView.atualizarLista(this._extratoTransacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(document.getElementsByClassName('alert-transaction'));
    }

    adicionaTransacao(event){
        event.preventDefault();
        
        this._extratoTransacoes.adiciona(this._criarTransacao());
        this._transacoesView.atualizarLista(this._extratoTransacoes);

        this._mensagem.texto = 'Transação adicionada com sucesso!';
        this._mensagemView.atualizarLista(this._mensagem);

        this._limpaFormularioTransacao();
    }

    _criarTransacao(){
        return new Transacao(
            this._inputTipoTransacao.value,
            this._inputNomeMercadoria.value,
            this._inputValorMercadoria.value
        );
    }

    _limpaFormularioTransacao(){
        this._inputTipoTransacao.value = 1;
        this._inputNomeMercadoria.value = '';
        this._inputValorMercadoria.value = '';

        this._inputTipoTransacao.focus();
    }
}