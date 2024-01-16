//Revisao sobre funções
//Definindo uma função
const conferirEstoque = estoque => {
    if (estoque === "Ok") {
        return "Status de Estoque: OK";
    } else if (estoque === "BAIXO") {
        return "Status de Estoque: BAIXO. É necessário repor o estoque.";
    } else if (estoque === "MÉDIO") {
        return "Status de Estoque: MÉDIO. Alerte para repor o estoque.";
    } else {
      return "STATUS INVÁLIDO";
    }
};
console.log(conferirEstoque("BAIXO"));  