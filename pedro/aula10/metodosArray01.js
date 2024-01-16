const nomes = ["PEDRO", "RHAVINE", "MATHEUS", "RAFAEL", "LUCAS"]

const sobrenomes = ["Silva", "Souza", "Brandao", "Machado", "Mendes"]


//CONCAT
// const uniao = nomes.concat(sobrenomes);
// console.log(uniao);


//JOIN
// const juncao = nomes.join("-")
// console.log(juncao);


//SPLICE
// nomes.splice(1,3)
// console.log(nomes);


//SORT
// const numeros = [100, 2, 1, 4, 3, 200];
// numeros.sort();
// console.log(numeros);


//INDEXOF
const buscar = "pedro";
const verificador = nomes.indexOf( buscar.toUpperCase() );
console.log(verificador);