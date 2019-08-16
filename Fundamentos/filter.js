const produto = [
    {nome: 'Nootebook', preco: 3000 , fragil: true},
    {nome: 'Ipad Pro', preco: 5000 , fragil: true},
    {nome: 'Copo de Vidro', preco: 5 , fragil: true},
    {nome: 'Copo de Metal', preco: 12 , fragil: false}
]

console.log(
    produto.filter(function(p){
    return false
    })
)

const fragil = produto => produto.fragil
const caro = produto => produto.preco >= 3000

console.log(produto.filter(fragil).filter(caro))