const { createServer } = require('http')
const Produtos = require('./routes/produtos');
const routes = require('./routes/routes')

const server = createServer((req, res) => {

    const { url, method } = req
    console.log(`Url da página: ${url}`)
    console.log(`Metodo usado: ${method}`)


    if(routes[url] && routes[url][method]) {
        const dados = routes[url][method]
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(dados))
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end('URL inválida')
    }
    
    // if() {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     return res.end(`Página home`);
    // }

    // if(url === '/produtos' && method === 'GET') {
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     return res.end(JSON.stringify(Produtos.listar()))
    // }

    // if(url === '/produtos' && method === 'POST') {
    //     Produtos.adicionar(4, 'garmin', 4000)
    //     res.writeHead(200, {'Content-Type': 'text/plain'});
    //     return res.end('Produto adicionado')
    // }

    // if(url === '/produtos' && method === 'PUT') {
    //     Produtos.atualizar()
    //     res.writeHead(200, {'Content-Type':'text/plain'});
    //     return res.end('Produto editado com sucesso')
    // }

    // if(url === '/produtos' && method === 'DELETE') {
    //     Produtos.remover(1)
    //     res.writeHead(200, {'Content-Type': 'text/plain'});
    //     return res.end('Produto removido com sucesso')
    // }

});

server.listen(3000, ()=>{
    console.log(`Servidor rodando em http://localhost:${3000}`)
})