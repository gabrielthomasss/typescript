import { Funcionario } from './typescript/ts/exercicio'
/*
class Desenvolvedor extends Funcionario{
    constructor(
        nome: string,
        endereco: string[],
        telefone: string,
        rg: string,
        data_nascimento: Date,
        email: string,
        cargo: string,
        matricula: string) {

        super(nome, endereco, telefone, rg, data_nascimento, email, cargo, matricula)
   
    }
    mostrarDados() {
        super.mostrarDados()
        console.log('Dados do Funcionario:')
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Matricula: ${this.matricula}`)
       
      }
     
  }
  const desenvolvedor1 = new Desenvolvedor('Thomas',['Av.Maranguape'],'5647838457','4665446', new Date('2024-3-16'),'gab@gmail.com','Dev Mobile','437585437')

    console.log(desenvolvedor1.mostrarDados())*/

    class DevFronted extends Funcionario{
        constructor(
        nome: string,
        endereco: string[],
        telefone: string,
        rg: string,
        data_nascimento: Date,
        email: string,
        cargo: string,
        matricula: string,
        public frameworks: string){
        
            super(nome, endereco, telefone, rg, data_nascimento, email, cargo, matricula)
    }
    mostrarDados() {
        super.mostrarDados()
        console.log('Dados do Funcionario:')
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Matricula: ${this.matricula}`)
        console.log(`Frameworks: ${this.frameworks}`)
        }

}

const devf1 = new DevFronted('Gabriel',['Av. Paulistana'],'4765848','74879',new Date('2000-3-17'),'gabth@gmail.com','Dev Front','745758','HTML')

console.log(devf1.mostrarDados())
console.log('========================================================')


class DevBackend extends Funcionario{
    constructor(
        nome: string,
        endereco: string[],
        telefone: string,
        rg: string,
        data_nascimento: Date,
        email: string,
        cargo: string,
        matricula: string,
        public java: string) {
        
            super(nome, endereco, telefone, rg, data_nascimento, email, cargo, matricula)
    }
    mostrarDados() {
        super.mostrarDados()
        console.log('Dados do Funcionario:')
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Matricula: ${this.matricula}`)
        console.log(`Java: ${this.java}`)
}

}

const devb1 = new DevBackend('Thomas',['Av.Maranguape'],'47767475','457868', new Date(2001-3-18),'tho@gmail.com','Dev Back','48575488','Java Script')

console.log(devb1.mostrarDados())
console.log('========================================================')


class DevFullstack extends Funcionario{
   constructor(
    public habilidades: string,
    nome: string,
    endereco: string[],
    telefone: string,
    rg: string,
    data_nascimento: Date,
    email: string,
    cargo: string,
    matricula: string) {
    
        super(nome, endereco, telefone, rg, data_nascimento, email, cargo, matricula)
}
       mostrarDados() {
       super.mostrarDados()
       console.log('Dados do Funcionario:')
       console.log(`Cargo: ${this.cargo}`)
       console.log(`Matricula: ${this.matricula}`)
       console.log(`Habalidades: ${this.habilidades}`)

}

}  

const devfs1 = new DevFullstack('Atribuições','Lima',['Av.Ribeira'],'5664567','6685695',new Date('2003-2-9'),'lima@gmail.com','Dev FullStack','54748989')

console.log(devfs1.mostrarDados())