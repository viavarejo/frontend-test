export class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        throw new Error('O metodo template deve ser implementado');
    }

    atualizarLista(model) {
        this._elemento.innerHTML = this._template(model);
    }
}