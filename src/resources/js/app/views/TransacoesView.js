class TransacoesView extends View {
    constructor(elemento) {
        super(elemento);
    }

    _template(model) {
        if(model.transacoes.length > 0){
            return `
            <thead>
                <tr>
                    <th></th>
                    <th>Mercadoria</th>
                    <th class="text-right">Valor</th>
                </tr>
            </thead>
            <tbody>
                ${model.transacoes.map(item => `
                        <tr>
                            <td class="text-right">${item.tipoTransacao==1?'-':'+'}</td>
                            <td>${item.mercadoria}</td>
                            <td class="text-right">R$ ${item.valor}</td>
                        </tr>
                        `).join('')}
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th>Total</th>
                    <th class="text-right">
                        <p>R$ ${model.total}<p> 
                        <em> ${model.total > 0?'[lucro]':'[prejuizo]'} </em>
                    </th>
                </tr>
            </tfoot>
            `;
        }

        return `
        <thead>
            <tr>
                <th></th>
                <th>Mercadoria</th>
                <th class="text-right">Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-center">
                <td colspan="3" class="text-center"> Por favor, adicione uma nova transação </td>
            </tr>
        </tbody> 
        `
    }
}