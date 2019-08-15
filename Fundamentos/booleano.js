let texto = true

console.log(texto)

console.log('Elementos VERDADEIROS: ')

console.log(!!'a')
console.log(!!' ')
console.log(!!3)
console.log(!![])
console.log(!!{})

console.log('Elementos FALSO: ')
console.log(!!0)
console.log(!!"")
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)

// Diferença entre null-> não vale nada e underfined-> nao possi nada

let teste
console.log(teste)
let teste1 = null
console.log(teste1)

console.log('Testando o OU')
console.log('' || null || 0 || " ")

console.log(!!('' || null || 0 || " "))