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
}
};
console.log(calculadora.multiplicacao(5,7));
