const escola = "SENAI"

console.log(escola.charAt(4)) // retorna o que esta no local indicado
console.log(escola.charAt(7)) //retorna o elemento vazio

console.log(escola.charCodeAt(2))
console.log(escola.indexOf('1')) //retorna exatamente a posição em que esta o elemento
console.log(escola.substring(1,2)) // a partir do indice ela retorna (0..9)

console.log( "Escola" .concat (escola).concat( " -SERVIÇO DE APRENDIZAGEM NACIONAL" )) //concatenação
console.log('Escola ' +escola + ' -SERVIÇO DE APRENDIZAGEM NACIONAL')//concatenação

console.log('Segunda,Terça,Quarta'.split(','))