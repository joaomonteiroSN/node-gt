const { createServer } = require('http')
const listarProdutos = require('./routes/produtos');

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
        return res.end(JSON.stringify(listarProdutos()))
    }

    if(url == '/adicionar') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        produtos.push(
            {
                'id': 3,
                'nome': 'mouse pad',
                'valor': 200.00
            }
        )
        return res.end('Produto adicionado')
    }

    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end('URL inválida')



});

server.listen(3000, ()=>{
    console.log(`Servidor rodando em http://localhost:${3000}`)
})