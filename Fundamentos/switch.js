const imprimirResultado = function(){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Conceito A')
            break
        case 8: case 7:
            console.log('Conseito B')
            break
        case 6: case 5: case 4:
            console.log('Conceito D')
            break
        default:
            console.log('Nota Inválida')
        }

}

imprimirResultado(8)