let p = 60;
let h = 1.70;

const calcularIMC = (p, h) => p / (h * h);
const IMC = calcularIMC(p, h);
const verificarPeso = IMC => {
 if (IMC < 18.5) {
    return "Abaixo do Peso";
 } else if (IMC >= 18.5 && IMC <= 24.9) {
    return "Peso Normal";
 } else if (IMC >= 25 && IMC <= 29.9) {
    return "Sobrepeso";
 } else if (IMC >= 30 && IMC <= 34.9) {
    return "Obesidade Grau I";
 } else if (IMC >= 35 && IMC <= 39.9) {
    return "Obesidade Grau II";
 } else {
     return "Obesidade Mórbida";
 }
};
console.log(verificarPeso(IMC));

