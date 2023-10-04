const calculadora = {
    
soma: function (numA, numB){ 
 return numA + numB;
},

subtracao: function (numA, numB){
    return numA - numB;
},

divisao: function (numA, numB){
    return numA / numB;
},

multiplicacao: function (numA, numB){
    return numA*numB;
},

fatorial: function (num) {
    if (num === 0) {
        return 1;
    } else {
        return num * this.fatorial(num - 1);
    }
},

porcentagem: function (numA, numB,){
    return numA * (numB/100);
},
raizQuadrada: function (num){
    return num*num;
},
potencia: function (num){
    return num*num
},
quadrado: function (num){
    return num*num*num
}, 
potenciaDefinida: function (num, pot){
    let i = 0;
    let result = 1;
    while( i < pot ){
        result *= num; 
        i++;
    }
    return result
},
calcularCons: function( anguloRadianos){
var resultado = 1;
var termo = 1;
var sinal = -1;

for (var i = 2; i <= 10; i += 2) {
    termo *= (anguloRadianos * anguloRadianos) / (i * (i - 1));
    resultado += sinal * termo;
    sinal *= -1;
}

return resultado;
};

console.log(calculadora.multiplicacao(5,7));
