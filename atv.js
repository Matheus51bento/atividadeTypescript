// a) Crie um array de objetos usuarios, onde cada objeto represente um usuário com as
// propriedades id, nome, idade e ativo (um booleano que indica se o usuário está ativo ou
// não).
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var usuarios = [
    { id: 1, nome: "Matheus", idade: 21, ativo: true },
    { id: 2, nome: "Sauron", idade: 4000, ativo: true },
    { id: 2, nome: "Gandalf", idade: 2000, ativo: false }
];
// b) Utilize o método filter para criar uma lista de usuários ativos.
var usuariosAtivos = usuarios.filter(function (usuario) { return usuario.ativo === true; });
// c) Utilize o método filter para criar uma lista de usuários com idade maior que 25 anos.
var usuarios2 = usuarios.filter(function (usuario) { return usuario.idade > 25; });
console.log(usuarios2);
// d) A partir do array de usuarios criado anteriormente, use o método map para criar um novo
// array que contém apenas os nomes dos usuários.
var nomes = usuarios.map(function (u) { return u.nome; });
console.log(nomes);
// e) Use o método map para aumentar a idade de todos os usuários em 1 ano.
var usuarios3 = usuarios.map(function (u) { return (__assign(__assign({}, u), { idade: u.idade + 1 })); });
console.log(usuarios3);
// f) Utilize o método forEach para imprimir o nome de cada usuário e seu status
// (ativo/inativo).
usuarios.forEach(function (element) {
    console.log("nome: ".concat(element.nome));
    console.log("status: ".concat(element.ativo));
});
// g) Utilize o método reduce para calcular a idade total dos usuários.
var totalIdade = usuarios3.reduce(function (total, usuario) {
    return total + usuario.idade;
}, 0);
console.log(totalIdade);
// h) Use o reduce para contar quantos usuários estão ativos.
var atvos = usuarios.reduce(function (total, usuario) {
    return usuario.ativo === true ? total + 1 : total;
}, 0);
console.log(atvos);
// i) Use o método find para procurar o primeiro usuário que tenha o nome "João".
// j) Use o método find para encontrar o primeiro usuário que esteja inativo.
