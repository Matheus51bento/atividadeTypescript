// a) Crie um array de objetos usuarios, onde cada objeto represente um usuário com as
// propriedades id, nome, idade e ativo (um booleano que indica se o usuário está ativo ou
// não).

type Usuario = {
    id: number,
    nome: string,
    idade: number,
    ativo: boolean
}

const usuarios: Usuario[] = [
    {id:1, nome:"Matheus", idade: 21, ativo: true},
    {id:2, nome:"Sauron", idade: 4000, ativo: true},
    {id:2, nome:"Gandalf", idade: 2000, ativo: false}
]

// b) Utilize o método filter para criar uma lista de usuários ativos.

const usuariosAtivos: Usuario[] = usuarios.filter((usuario)=> usuario.ativo === true)

// c) Utilize o método filter para criar uma lista de usuários com idade maior que 25 anos.

const usuarios2: Usuario[] = usuarios.filter((usuario)=> usuario.idade > 25)
console.log(usuarios2)

// d) A partir do array de usuarios criado anteriormente, use o método map para criar um novo
// array que contém apenas os nomes dos usuários.

const nomes: string[] = usuarios.map((u)=>u.nome)
console.log(nomes)

// e) Use o método map para aumentar a idade de todos os usuários em 1 ano.

const usuarios3: Usuario[] = usuarios.map(u => ({
    ...u,
    idade: u.idade + 1
}));
console.log(usuarios3)

// f) Utilize o método forEach para imprimir o nome de cada usuário e seu status
// (ativo/inativo).

usuarios.forEach(element => {
    console.log(`nome: ${element.nome}`);
    console.log(`status: ${element.ativo}`)
});

// g) Utilize o método reduce para calcular a idade total dos usuários.

const totalIdade: number = usuarios3.reduce((total, usuario) => {
    return total + usuario.idade
}, 0);
console.log(totalIdade);

// h) Use o reduce para contar quantos usuários estão ativos.

const atvos: number = usuarios.reduce((total, usuario) => {
    return usuario.ativo === true ? total + 1 : total; 
}, 0);
console.log(atvos);

// i) Use o método find para procurar o primeiro usuário que tenha o nome "João".

const usuarioJoao: Usuario | undefined = usuarios.find(usuario => usuario.nome === "João");
console.log(usuarioJoao);

// j) Use o método find para encontrar o primeiro usuário que esteja inativo.

const usuarioInativo: Usuario | undefined = usuarios.find(usuario => !usuario.ativo);
console.log(usuarioInativo);