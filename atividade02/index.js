import { soma, subtracao, multiplicacao, divisao } from './calculadora.js';
import moment from 'moment';

console.log("Soma: ", soma(10, 5));
console.log("Subtração: ", subtracao(10, 5));
console.log("Multiplicação: ", multiplicacao(10, 5));
console.log("Divisão: ", divisao(10, 5));

function calcularIdade(anoNascimento, mesNascimento, diaNascimento) {
    const dataNascimento = moment(`${anoNascimento}-${mesNascimento}-${diaNascimento}`, "YYYY-MM-DD");
    return moment().diff(dataNascimento, 'years');
}

const idade = calcularIdade(2005, 5, 27);
console.log(`Idade: ${idade} anos`);