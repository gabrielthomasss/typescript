//O Banco Dinheiro Seguro está buscando um desenvolvedor para criar um sistema que auxilie os
//clientes no gerenciamento de suas finanças pessoais. Abaixo estão os requisitos do sistema:
//Cadastro de Contas:
//• Registro das contas bancárias dos clientes, incluindo informações como saldo, tipo de conta e
//titularidade.

class Contas{
    saldo: string;
    cpf: string;
    email: string;
    telefone: string;
    senha: string;
    tipo: string;
    historico: string;
    constructor(saldo: string, cpf: string, email: string, telefone: string, senha: string, tipo: string, historico: string){
        this.saldo = saldo;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
        this.tipo = tipo;
        this.historico = historico;
  }


}

const contas1 = new Contas('558','56773745656','gab@gmail.com','67574755','568390','corrente','controlado')

console.log(contas1)


//Controle de Despesas e Receitas:
//• Registro de despesas e receitas de cada cliente, categorizando cada transação.
//• Análise de gastos mensais e geração de relatórios sobre o fluxo financeiro

class Despesas{
    registro: string;
    receitas: string;
    categoria: string;
    gastos: string;
    relatorios: string;
    constructor(registro: string, receitas: string, categoria: string, gastos: string, relatorios: string){
        this.registro = registro;
        this.receitas = receitas;
        this.categoria = categoria;
        this.gastos = gastos;
        this.relatorios = relatorios;
 }
    
}

const despesas1 = new Despesas('56478','455433','lojas','35456377','compras')

console.log(despesas1)

//Planejamento Financeiro:
//• Funcionalidade para estabelecer metas financeiras, como economizar para uma viagem ou
//pagar dívidas, e acompanhar o progresso.

class Planejamento{
      progresso: string;
      dividas: string;
      metas: string;
      economia: string;
      constructor(progresso: string, dividas: string, metas: string, economia: string){
         this.progresso = progresso;
         this.dividas = dividas;
         this.metas = metas;
         this.economia = economia;
          }

}

const planejamento1 = new Planejamento('otimo','sem dividas','muitas','na medida')

console.log(planejamento1)