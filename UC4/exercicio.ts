//Cadastro de Funcionários:
//• Detalhes pessoais e profissionais dos colaboradores.
  class Pessoa{
    nome: string;
    endereco: string[];
    telefone: string;
    rg: string;
    data_nascimento: Date;
    email: string;
    constructor(nome: string, endereco: string[], telefone: string, email: string, rg: string, data_nascimento: Date){
        this.nome = nome;
        this.endereco = endereco;
        this.telefone  = telefone;
        this.rg = rg;
        this.data_nascimento = data_nascimento;
        this.email = email;

    }
       mostrarDados(){
        console.log('Dados de Pessoa:')
        console.log(`Nome: ${this.nome}`)
        console.log(`Endereço: ${this.endereco}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`RG: ${this.rg}`)
        console.log(`Data de Nascimento: ${this.data_nascimento}`)
        console.log(`E-mail: ${this.email}`)


       }

       }




  

 




class Funcionario extends Pessoa {
   // atributos proprios da classe funcionario
    email: string;
    cargo: string;
    matricula: string;
    //Método construtor da classe
    constructor(nome: string, endereco: string[], telefone: string, rg: string, data_nascimento: Date, email: string, cargo: string, matricula: string){

     super(nome, endereco, telefone, email, rg, data_nascimento)
     this.cargo = cargo;
     this.matricula = matricula;
     this.email = email;
 }
    mostrarDados() {
     super.mostrarDados()
     console.log('Dados do Funcionario:')
     console.log(`Cargo: ${this.cargo}`)
     console.log(`Matricula: ${this.matricula}`)
    }

    

}

const funcionario1 = new Funcionario('Gabriel', ['paulistana'], '1234', '1234',new Date('2004-4-6'), 'gabriel@gmail.com', 'medicoj','6958')

console.log(funcionario1.mostrarDados())

//Cadastro de Consultas:
//• Dados específicos sobre cada consulta, incluindo informações importantes.

class Consulta{
    local: string;
    data: Date;
    convenio: boolean;
    medico: Funcionario;
    constructor(local: string, data: Date, convenio: boolean, medico: Funcionario){
      this.local = local;
      this.data = data; 
      this.medico = medico;
      this.convenio = convenio;

    }
    mostrarDados(){
      console.log('Dados da Consulta:')
      console.log(`Local: ${this.local}`)
      console.log(`Data: ${this.data}`)
      console.log(`Convenio: ${this.convenio}`)
      console.log(`Médico: ${this.medico}`)

    }
}

const consulta1 = new Consulta('Hospital', new Date('2024-3-16'),true,funcionario1)

console.log(consulta1.mostrarDados())


//Cadastro de Pacientes:
//• Dados pessoais com informações relevantes que possam contatar o paciente.

class Paciente extends Pessoa{
    cpf: string;
    idade: string;
    sintomas: string;
        constructor(cpf: string, idade: string, sintomas: string, nome: string, endereco: string[], telefone: string, email: string, rg: string, data_nascimento: Date){ 
            super(nome, endereco, telefone, email, rg, data_nascimento)
            this.cpf = cpf;
            this.idade = idade;
            this.sintomas = sintomas;
  }
  mostrarDados(){
     super.mostrarDados()
     console.log('Dados do Paciente:')
     console.log(`CPF: ${this.cpf}`)
     console.log(`Idade: ${this.idade}`)
     console.log(`Sintomas: ${this.sintomas}`)




  }
}

const paciente1 = new Paciente('26475838','18','dor de cabeça','Thomas',['Av. Maranguape'],'457484746','gab@gmail.com','546757447', new Date('2005-3-16'))

console.log(paciente1.mostrarDados())