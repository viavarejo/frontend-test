export class FormataMoeda{
    static formatarMoeda(valor){
        return "R$" + parseFloat(valor).toFixed(2).replace(".",",");
    }
}