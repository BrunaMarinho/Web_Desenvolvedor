Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9,10)){
        console.log("Conceito A")
    }else if (nota.entre(7,8,9)){
        console.log("Conceito B")
    }else if(nota.entre(6,7.9)){
        console.log("Conceito C")
    }else if (nota.entre(0,4.9)){
        console.log("Conceito D")
    }else {
        console.log('Nota Inválida')
    }
}
imprimirResultado(1)