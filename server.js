const { createServer } = require('http')
const Produtos = require('./routes/produtos');

const server = createServer((req, res) => {

    const { url, method } = req
    console.log(`Url da página: ${url}`)
    console.log(`Metodo usado: ${method}`)

    
    if(url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        return res.end(`Página home`);
    }

    if(url == '/produtos') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify(Produtos.listar()))
    }

    if(url == '/produtos/adicionar') {
        Produtos.adicionar(4, 'garmin', 4000)
        res.writeHead(200, {'Content-Type': 'text/plain'});
        return res.end('Produto adicionado')
    }

    if(url == '/produtos/excluir') {
        Produtos.remover(1)
        res.writeHead(200, {'Content-Type': 'text/plain'});
        return res.end('Produto removido com sucesso')
    }

    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end('URL inválida')
});

server.listen(3000, ()=>{
    console.log(`Servidor rodando em http://localhost:${3000}`)
})