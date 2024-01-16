const carros = [
{
 id: 1,
 nome: "Impala",
 cor: "Prata"
 velocidadeMaxima: 180,
},
{
 id: 2,
 nome: "Supra Mk4",
 cor: "Preto",
 velocidadeMaxima: 420,
},
{
 id: 3,
 nome: "Camaro",
 cor: "Amarelo",
 velocidadeMaxima: 300,
},
{
 id: 4,
 nome: "Chiron",
 cor: "Cinza",
 velocidadeMaxima: 400,
},
{
 id: 5,
 nome: "Dodge Viper",
 cor: "Branco",
 velocidadeMaxima: 220,
},
];

const carrosVelozes = carros
 .filter( carro => carro.velocidadeMaxima >= 200)
 .forEach( carro => console.log(carro.nome) );
