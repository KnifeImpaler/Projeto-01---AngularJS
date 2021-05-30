export class Produto {
    nome:string;
    valor:number;
    desconto:number;
    qtde: number | undefined;
    cadastro: string;

    constructor(nome: string, valor: number, desconto: number, quantidade: number, cadastro: string){
        this.nome = nome;
        this.valor = valor;
        this.desconto = desconto;
        this.cadastro = cadastro;

    }
}
