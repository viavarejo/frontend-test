import {TransacaoController} from "./app/controllers/TransacaoController.js";

//menu
document.querySelector('[data-btn-open-menu]').onclick = function() {
    document.documentElement.classList.add('active-menu');
}

document.querySelector('[data-btn-close-menu]').onclick = function(){
    document.documentElement.classList.remove('active-menu');
}

document.documentElement.onclick = function(event){
    if(event.target === document.documentElement){
        document.documentElement.classList.remove('active-menu');
    }
}

//transaction
let transacaoController = new TransacaoController();
const formNewTransaction = document.querySelector('[form-new-transaction]');

formNewTransaction.addEventListener('submit', (event) => transacaoController.adicionaTransacao(event));