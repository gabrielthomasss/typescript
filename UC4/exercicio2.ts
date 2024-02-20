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
   mostrarDados(){
      console.log('Dados do Livro:')
      console.log(`Titulo: ${this.titulo}`)
      console.log(`Editora: ${this.editora}`)
      console.log(`Autor: ${this.autor}`)
      console.log(`Categoria: ${this.categoria}`)
      console.log(`Quantidade: ${this.quantidade}`)




   }
}

const livro1 = new Livro('Mundo','souza','Roberto','ação','2000')

console.log(livro1.mostrarDados())

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
  mostrarDados(){
     console.log('Dados de Usuário:')
     console.log(`Nome: ${this.nome}`)
     console.log(`E-mail: ${this.email}`)
     console.log(`Telefone: ${this.telefone}`)
     console.log(`Idade: ${this.idade}`)
     console.log(`CPF: ${this.cpf}`)




  }
}

const usuario1 = new Usuários('Gabriel','gab@gmail.com','364643436','18','464738474')

console.log(usuario1.mostrarDados())

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
   mostrarDados(){
      console.log('Dados do Emprestimo:')
      console.log(`Valor: ${this.valor}`)
      console.log(`Livro: ${this.livro}`)
      console.log(`Data Emprestimo: ${this.dataEmprestimo}`)
      console.log(`Data Devolução: ${this.dataDevolucao}`)
      console.log(`E-mail: ${this.email}`)
      console.log(`Telefone: ${this.telefone}`)


   }
}

const emprestimo1 = new Empréstimo('2000','mundo', new Date('2023-04-9'), new Date('2024-04-9'),'gab@gmail.com','432567576')

console.log(emprestimo1.mostrarDados())
