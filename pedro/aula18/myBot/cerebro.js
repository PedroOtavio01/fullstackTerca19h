import calcular from "./calculadora.js";
import realizarSaudacao from "./saudacao.js";

const myBot = {

    id: 1,
    name: "Chronos",
    type: "Discord",
    version: "1.0.0",
    description: "",
    author: "Pedro Otávio",
    createdDate: "",
    updatedDate: "",
}
    iniciarFuncoes: () => {
        let pergunta = prompt("O que deseja fazer? (1 - saudar, 2 - calculadora)");



        switch (pergunta) {
            case 1:
                alert(myBot.realizarSaudacao());
                break;

            case 2:
                alert(myBot.calcular());
                break;

            default:
                alert("OPÇÃO INVÁLIDA");
        }
        realizarSaudacao: () => {
            return realizarSaudacao();
        }
    
    calcular: () => {
        return calcular();
    }
},
myBot.iniciarFuncoes();
