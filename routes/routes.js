const Produtos = require('./produtos')

const routes = {
    '/produtos': {
        'GET': Produtos.listar(),
        'POST': Produtos.adicionar(),
        'PUT': Produtos.atualizar(),
        'DELETE': Produtos.remover(0)
    }
};

module.exports = routes