//A empresa Sem Bagunça está buscando um desenvolvedor para criar um sistema que facilite o
//gerenciamento de projetos internos. Abaixo estão os requisitos do sistema:
//Cadastro de Projetos:
// Registro de projetos em andamento, incluindo informações como nome, descrição e equipe
//responsável.
//• Acompanhamento do progresso de cada projeto, com a definição de marcos e prazos. 

class Projetos{
   descricao: string;
   andamento: string;
   equipe: string;
   nome: string;
   prazos: Date;
   progresso: string;
   constructor(descricao: string, andamento:string, equipe: string, nome: string, prazos: Date, progresso: string){
     this.descricao = descricao;
     this.andamento = andamento;
     this.equipe = equipe;
     this.nome = nome;
     this.prazos = prazos;
     this.progresso = progresso;

}
 mostrarDados(){
     console.log('Dados do Projeto:')
     console.log(`Descrição: ${this.descricao}`)
     console.log(`Andamento: ${this.andamento}`)
     console.log(`Equipe: ${this.equipe}`)
     console.log(`Nome: ${this.nome}`)
     console.log(`Prazos: ${this.prazos}`)
     console.log(`Progresso: ${this.progresso}`)



 }

}

const projeto1 = new Projetos('olá pessoas','em andamento','construção','avanço', new Date('2025-06-9'),'bem avançado' )

console.log(projeto1.mostrarDados())

//Controle de Tarefas:
//• Divisão de projetos em tarefas individuais, com atribuição de responsáveis e prazos para
//conclusão.
//• Acompanhamento do status de cada tarefa e notificação de prazos vencidos.

class Tarefas{
     tarefas: string;
     atribuicao: string;
     prazos: Date;
     status: string;
     constructor(tarefas: string, atribuicao: string, prazos: Date, status: string){
        this.tarefas = tarefas;
        this.atribuicao = atribuicao;
        this.prazos = prazos;
        this.status = status;
     }
     mostrarDados(){
        console.log('Dados de Tarefas:')
        console.log(`Tarefas: ${this.tarefas}`)
        console.log(`Atribuições: ${this.atribuicao}`)
        console.log(`Prazos: ${this.prazos}`)
        console.log(`Status: ${this.status}`)





     }
}

const tarefas1 = new Tarefas('construir','mais construções', new Date('2026-03-8'),'em andamento')

console.log(tarefas1.mostrarDados())

//Comunicação Interna:
//• Facilidade para comunicação entre os membros da equipe de cada projeto, através de
//mensagens e compartilhamento de arquivos.
//• Registro de discussões e decisões importantes relacionadas aos projetos.

class Comunicação{
     comunicacao: string;
     registro: string;
     projeto: string;
     constructor(comunicacao: string, registro: string, projeto: string){
       this.comunicacao = comunicacao;
       this.registro = registro;
       this.projeto = projeto;
}
  mostrarDados(){
     console.log('Dados da Comunicação:')
     console.log(`Comunicação: ${this.comunicacao}`)
     console.log(`Registro: ${this.registro}`)
     console.log(`Projeto: ${this.projeto}`)



  }
}

const comunicacao1 = new Comunicação('Olá Pessoal','544665','Quase Pronto')

console.log(comunicacao1.mostrarDados())