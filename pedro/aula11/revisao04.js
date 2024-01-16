//ALBERT NIVEL 04

const movimentos = ["Esquerda", "Direita", "Cima", "Baixo"];

const comando = "e"; 

if (comando === "w") {
    console.log("Andou para cima");
} else if (comando === "s") {
    console.log("Andou para baixo");
} else if (comando === "a") {
    console.log("Andou para esquerda");
} else if (comando === "d") {
    console.log("Andou para direita");
} else {
    console.log("{ ERRO } COMANDO INEXISTENTE");
}