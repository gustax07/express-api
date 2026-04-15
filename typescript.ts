let nomee: string;
let idade: number;
let cadastrados: boolean;
let meses: string[] = ['Janeiro', 'Fevereiro', 'Março'];
let estadosBR: string[] = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais'];

nomee = 'Aluno';
idade = 20;
cadastrados = true;

function calcularDesconto(valor: number, desconto?: number): number{
    if (desconto) {
        return valor * (1 - desconto);
    } else {
        return valor;
    }

}