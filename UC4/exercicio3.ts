//O Banco Dinheiro Seguro está buscando um desenvolvedor para criar um sistema que auxilie os
//clientes no gerenciamento de suas finanças pessoais. Abaixo estão os requisitos do sistema:
//Cadastro de Contas:
//• Registro das contas bancárias dos clientes, incluindo informações como saldo, tipo de conta e
//titularidade.

class Contas {

   constructor(
      public saldo: string,
      public cpf: string,
      public email: string,
      public telefone: string,
      public senha: string,
      public tipo: string,
      public historico: string) {

   }
   mostrarDados() {
      console.log('Dados de Contas:')
      console.log(`Saldo: ${this.saldo}`)
      console.log(`CPF: ${this.cpf}`)
      console.log(`E-mail: ${this.email}`)
      console.log(`Telefone: ${this.telefone}`)
      console.log(`Senha: ${this.senha}`)
      console.log(`Tipo: ${this.tipo}`)
      console.log(`Historico: ${this.historico}`)

   }

}

const contas1 = new Contas('558', '56773745656', 'gab@gmail.com', '67574755', '568390', 'corrente', 'controlado')

console.log(contas1.mostrarDados())


//Controle de Despesas e Receitas:
//• Registro de despesas e receitas de cada cliente, categorizando cada transação.
//• Análise de gastos mensais e geração de relatórios sobre o fluxo financeiro

class Despesas {

   constructor(
      public registro: string,
      public receitas: string,
      public categoria: string,
      public gastos: string,
      public relatorios: string) {

   }
   mostrarDados() {
      console.log('Dados de Despesas:')
      console.log(`Registro: ${this.registro}`)
      console.log(`Receitas: ${this.receitas}`)
      console.log(`Categoria: ${this.categoria}`)
      console.log(`Gastos: ${this.gastos}`)
      console.log(`Relatorios: ${this.relatorios}`)


   }
}

const despesas1 = new Despesas('56478', '455433', 'lojas', '35456377', 'compras')

console.log(despesas1.mostrarDados())

//Planejamento Financeiro:
//• Funcionalidade para estabelecer metas financeiras, como economizar para uma viagem ou
//pagar dívidas, e acompanhar o progresso.

class Planejamento {

   constructor(
      public progresso: string,
      public dividas: string,
      public metas: string,
      public economia: string) {

   }
   mostrarDados() {
      console.log('Dados do Planejamento:')
      console.log(`Progresso: ${this.progresso}`)
      console.log(`Dividas: ${this.dividas}`)
      console.log(`Metas: ${this.metas}`)
      console.log(`Economia: ${this.economia}`)


   }
}

const planejamento1 = new Planejamento('otimo', 'sem dividas', 'muitas', 'na medida')

console.log(planejamento1.mostrarDados())