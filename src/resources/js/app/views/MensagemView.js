class MensagemView extends View{
    constructor(elemento){
        super(elemento);
    }

    _template(model){
        return model.texto ? `<p class=""> ${model.texto} </p>`:`<p></p>`;
    }
}