import {View} from "../views/View.js";

export class MensagemView extends View{
    constructor(elemento){
        super(elemento);
    }

    _template(model){
        return model.texto ? `<p class="alert-success text-center"> ${model.texto} </p>`:`<p></p>`;
    }
}