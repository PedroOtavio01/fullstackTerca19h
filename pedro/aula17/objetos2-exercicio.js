const produto = {
 id: 1,
 nome: "Tenis",
 preco: 279.00,
}
 produto.calcularPreco = () => {
  let total = 0;
  return total += produto.preco;
}
console.log(produto.calcularPreco() );
