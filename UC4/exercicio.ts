//Cadastro de Funcionários:
//• Detalhes pessoais e profissionais dos colaboradores.
class Pessoa {

  constructor(
    public nome: string,
    public endereco: string[],
    public telefone: string,
    public email: string,
    public rg: string,
    public data_nascimento: Date) {

  }
  mostrarDados() {
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

  //Método construtor da classe
  constructor(
    nome: string,
    endereco: string[],
    telefone: string,
    rg: string,
    data_nascimento: Date,
    email: string,
    public cargo: string,
    public matricula: string) {

    super(nome, endereco, telefone, email, rg, data_nascimento)

  }
  mostrarDados() {
    super.mostrarDados()
    console.log('Dados do Funcionario:')
    console.log(`Cargo: ${this.cargo}`)
    console.log(`Matricula: ${this.matricula}`)
  }



}

const funcionario1 = new Funcionario('Gabriel', ['paulistana'], '1234', '1234', new Date('2004-4-6'), 'gabriel@gmail.com', 'medicoj', '6958')

console.log(funcionario1.mostrarDados())

//Cadastro de Consultas:
//• Dados específicos sobre cada consulta, incluindo informações importantes.

class Consulta {

  constructor(
    public local: string,
    public data: Date,
    public convenio: boolean,
    public medico: Funcionario) {


  }
  mostrarDados() {
    console.log('Dados da Consulta:')
    console.log(`Local: ${this.local}`)
    console.log(`Data: ${this.data}`)
    console.log(`Convenio: ${this.convenio}`)
    console.log(`Médico: ${this.medico}`)

  }
}

const consulta1 = new Consulta('Hospital', new Date('2024-3-16'), true, funcionario1)

console.log(consulta1.mostrarDados())


//Cadastro de Pacientes:
//• Dados pessoais com informações relevantes que possam contatar o paciente.

class Paciente extends Pessoa {

  constructor(
    public cpf: string,
    public idade: string,
    public sintomas: string,
    nome: string,
    endereco: string[],
    telefone: string,
    email: string,
    rg: string,
    data_nascimento: Date) {
    super(nome, endereco, telefone, email, rg, data_nascimento)

  }
  mostrarDados() {
    super.mostrarDados()
    console.log('Dados do Paciente:')
    console.log(`CPF: ${this.cpf}`)
    console.log(`Idade: ${this.idade}`)
    console.log(`Sintomas: ${this.sintomas}`)

  }
}

const paciente1 = new Paciente('26475838', '18', 'dor de cabeça', 'Thomas', ['Av. Maranguape'], '457484746', 'gab@gmail.com', '546757447', new Date('2005-3-16'))

console.log(paciente1.mostrarDados())