const produto = {}

produto.nome = 'celular'
produto.preço = 1000
produto.cor = 'azul'
console.log(produto.nome, produto.preço, produto.cor)

produto.categoria = { tipo: 'smartfone', loja: 'Americanas' }
console.log(produto)

const objeto = {
    item1: 'valor item',
    item2: ''
}

console.log(objeto)

const objetoestranho = {
    ['nome^ Estranho'] : 0
}
console.log(objetoestranho['nome^ Estranho'])

function imprimir_soma(n1, n2){
    console.log(n1+n2)
}

imprimir_soma(2,3,8,10)

function multiplar(n1,n2){
    return n1*n2
}
console.log(multiplar(2,2))

console.log(multiplar())