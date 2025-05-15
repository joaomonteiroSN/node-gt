class Pessoa {
    nome = '';
    cpf = '';

    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    correr() {
        console.log(`O/A ${this.nome} está correndo....`)
    }
}

class Gerente extends Pessoa {
    constructor(nome, cpf) {
        super(nome, cpf)
    }

    fecharConta(){
        console.log(`${this.nome} fechou a conta de fulaninho.`)
    }
}

class BancoDeDados{
    static criar() {
        console.log('criando tabela')
    }

    static deletar() {
        console.log('deletando tabela')
    }
}

const pessoa1 = new Pessoa('jonas', '894749783743487');
const gerente = new Gerente('bruno', '8928392399392');

console.log(pessoa1);
pessoa1.correr();
console.log('-----------------------')
console.log(gerente);
gerente.fecharConta();
console.log('-----------------------')

console.log('Exemplo de uso de métodos estáticos')
BancoDeDados.criar();
BancoDeDados.deletar();
