class Produtos {
    
    static produtos = [
        {
            'id': 1,
            'nome': 'microfone',
            'valor': 300.00
        },
        {
            'id': 2,
            'nome': 'mouse',
            'valor': 150.00
        }
    ]

    static listar() { 
        return Produtos.produtos
    }

    static adicionar(id, nome, valor) {
        Produtos.produtos.push(
            {
                'id': id,
                'nome': nome,
                'valor': valor
            }
        )
    }

    static remover(i) {
        Produtos.produtos.splice(i, -1)
    }
    
    static atualizar() {
        
    }
}

module.exports = Produtos;

//CRUD
//create
//read
//update
//delete