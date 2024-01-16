
function Validarperfil(perfil) {
switch (perfil) {
    case "ADM":
       return verificarAdministrador();
        break;
    case "USER":
       return verificarUsuarioPadrao();
        break;
    case "TEST":
       return verificarTest();
        break;
    default:
        exibirErro();
}
}

function verificarAdministrador() {
return "Codigo para enviar ou manipular a area de administrador"
}

function verificarUsuarioPadrao() {
return " Codigo para enviar ou manipular a area de usuario"
}

function verificarTest() {
return " Codigo para enviar ou manipular a area de testes"
}

function exibirErro(erro) {
return "Usuario INVALIDO"
}

const resultado = Validarperfil("USER");
console.log(resultado);