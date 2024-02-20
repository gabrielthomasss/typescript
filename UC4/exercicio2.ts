//Cadastro de Livros:
//• Detalhes sobre cada livro, incluindo título, autor, editora e categoria.
//• Registro da quantidade de cópias disponíveis de cada livro. 

class Livro{
   titulo: string;
   editora: string;
   autor: string;
   categoria: string;
   quantidade: string;
   constructor(titulo: string, autor: string, categoria: string, editora: string, quantidade: string){
      this.titulo = titulo;
      this.editora = editora;
      this.autor = autor;
      this.categoria = categoria;
      this.quantidade = quantidade;
  }

}

const livro1 = new Livro('Mundo','souza','Roberto','ação','2000')

console.log(livro1)

//Cadastro de Usuários:
//• Informações pessoais dos usuários cadastrados na biblioteca, como nome, endereço e telefone.
//• Histórico de empréstimos e devoluções de cada usuário.

class Usuários{
    nome: string;
    email: string;
    telefone: string;
    idade: string;
    cpf: string;
    constructor(nome: string, email: string, telefone: string, idade: string, cpf: string){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.idade = idade;
        this.cpf = cpf;
    
 }

}

const usuario1 = new Usuários('Gabriel','gab@gmail.com','364643436','18','464738474')

console.log(usuario1)

//Empréstimo de Livros:
//• Registro de empréstimos realizados, incluindo data de empréstimo, data de devolução e
//informações do usuário e do livro emprestado.

class Empréstimo{
     valor: string;
     livro: string;
     dataEmprestimo: Date;
     dataDevolucao: Date;
     email: string;
     telefone: string;
     constructor(valor: string, livro: string, dataEmprestimo: Date, dataDevolucao: Date, email: string, telefone: string){
         this.valor = valor;
         this.livro = livro;
         this.dataDevolucao = dataDevolucao;
         this.dataEmprestimo = dataEmprestimo;
         this.email = email;
         this.telefone = telefone;
    }

}

const emprestimo1 = new Empréstimo('2000','mundo', new Date('2023-04-9'), new Date('2024-04-9'),'gab@gmail.com','432567576')

console.log(emprestimo1)
