//Cadastro de Funcionários:
//• Detalhes pessoais e profissionais dos colaboradores.

class Funcionario{
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    constructor(nome: string, email: string, telefone: string, cargo: string){
     this.nome = nome;
     this.email = email; 
     this.telefone = telefone;
     this.cargo = cargo;
 }
    

}

const funcionario1 = new Funcionario('Gabriel','gabriel@gmail.com','4567567667','diretor')

console.log(funcionario1)

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

}

const consulta1 = new Consulta('Hospital', new Date('2024-3-16'),true,funcionario1)

console.log(consulta1)


//Cadastro de Pacientes:
//• Dados pessoais com informações relevantes que possam contatar o paciente.

class Paciente{
    nome: string;
    cpf: string;
    telefone: string;
    idade: string;
    sintomas: string;
        constructor(nome: string, cpf: string, telefone: string, idade: string, sintomas: string){
            this.nome = nome;
            this.cpf = cpf;
            this.telefone = telefone;
            this.idade = idade;
            this.sintomas = sintomas;
  }

}

const paciente1 = new Paciente('Gabriel','1234566','5757468','18','febre')

console.log(paciente1)