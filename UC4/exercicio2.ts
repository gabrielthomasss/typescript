//Cadastro de Livros:
//• Detalhes sobre cada livro, incluindo título, autor, editora e categoria.
//• Registro da quantidade de cópias disponíveis de cada livro. 

class Livro {

   constructor(
      public titulo: string,
      public autor: string,
      public categoria: string,
      public editora: string,
      public quantidade: string) {

   }
   mostrarDados() {
      console.log('Dados do Livro:')
      console.log(`Titulo: ${this.titulo}`)
      console.log(`Editora: ${this.editora}`)
      console.log(`Autor: ${this.autor}`)
      console.log(`Categoria: ${this.categoria}`)
      console.log(`Quantidade: ${this.quantidade}`)


   }
}

const livro1 = new Livro('Mundo', 'souza', 'Roberto', 'ação', '2000')

console.log(livro1.mostrarDados())

//Cadastro de Usuários:
//• Informações pessoais dos usuários cadastrados na biblioteca, como nome, endereço e telefone.
//• Histórico de empréstimos e devoluções de cada usuário.

class Usuários {

   constructor(
      public nome: string,
      public email: string,
      public telefone: string,
      public idade: string,
      public cpf: string) {


   }
   mostrarDados() {
      console.log('Dados de Usuário:')
      console.log(`Nome: ${this.nome}`)
      console.log(`E-mail: ${this.email}`)
      console.log(`Telefone: ${this.telefone}`)
      console.log(`Idade: ${this.idade}`)
      console.log(`CPF: ${this.cpf}`)

   }
}

const usuario1 = new Usuários('Gabriel', 'gab@gmail.com', '364643436', '18', '464738474')

console.log(usuario1.mostrarDados())

//Empréstimo de Livros:
//• Registro de empréstimos realizados, incluindo data de empréstimo, data de devolução e
//informações do usuário e do livro emprestado.

class Empréstimo {

   constructor(
      public valor: string,
      public livro: string,
      public dataEmprestimo: Date,
      public dataDevolucao: Date,
      public email: string,
      public telefone: string) {

   }
   mostrarDados() {
      console.log('Dados do Emprestimo:')
      console.log(`Valor: ${this.valor}`)
      console.log(`Livro: ${this.livro}`)
      console.log(`Data Emprestimo: ${this.dataEmprestimo}`)
      console.log(`Data Devolução: ${this.dataDevolucao}`)
      console.log(`E-mail: ${this.email}`)
      console.log(`Telefone: ${this.telefone}`)


   }
}

const emprestimo1 = new Empréstimo('2000', 'mundo', new Date('2023-04-9'), new Date('2024-04-9'), 'gab@gmail.com', '432567576')

console.log(emprestimo1.mostrarDados())
