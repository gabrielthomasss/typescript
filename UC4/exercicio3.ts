//O Banco Dinheiro Seguro está buscando um desenvolvedor para criar um sistema que auxilie os
//clientes no gerenciamento de suas finanças pessoais. Abaixo estão os requisitos do sistema:
//Cadastro de Contas:
//• Registro das contas bancárias dos clientes, incluindo informações como saldo, tipo de conta e
//titularidade.
class PF{
   
    constructor(
       public nome: string,
       public cpf: string,
       public telefone: string,
       public email: string){
     
    const pf1 = new PF('Gabriel','23466776443','84981305406','gab@gmail.com')

    console.log(pf1)


    }

}
class PJ {
   
    constructor(
      nome: string,
       cpf: string,
       public cnpj: string,
       telefone: string,
       email: string){
        
    

const pj1 = new PJ('Thomas','3256475899','367374684578458','54678578','pj@gmail.com')

console.log(pj1)

    }

}
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

class ContaCorrente{
     transacoes: string;
     boletos: string;
     agencia: string;
     conta: string;
     constructor(transacoes: string, boletos: string, agencia: string, conta: string){
       this.transacoes = transacoes;
       this.boletos = boletos;
       this.agencia = agencia;
       this.conta = conta;

     }

   const  = new ContaCorrente('Valores das Transações','56757478','676865-0','3786474')
   
   
}
class ContaPoupança{
     resgate: string;
     tributacoes: string;
     taxa: string;
     conta: string;
     agencia: string;
     constructor(resgate: string, tributacoes: string, taxa: string, conta: string, agencia: string){
       this.resgate = resgate;
       this.tributacoes = tributacoes;
       this.taxa = taxa;
       this.conta = conta;
       this.agencia = agencia;

     }

     const = new ContaPoupança('46788797','78864','6437','65856-0','477886')

    mostrarDados(){
      console.log('Dados da Conta Corrente:')
      console.log(`Resgate: ${this.resgate}`)
      console.log(`Tributações: ${this.tributacoes}`)
      console.log(`Taxa: ${this.taxa}`)
      console.log(`Conta: ${this.conta}`)
      console.log(`Agência: ${this.agencia}`)
    }

}

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