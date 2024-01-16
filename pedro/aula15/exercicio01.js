const qtdItens = [10, 20, 30, 40, 50, 40, 2, 30, 12];
const qtdFiltrado = qtdItens
 .filter((el) => el >= 30)
 .map((el) => el + 1)
 .forEach((el) => console.log(el));
