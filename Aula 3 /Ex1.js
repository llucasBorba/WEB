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
}
};


