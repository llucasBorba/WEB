const calculadora = {
 somar: function (n1, n2){
  return n1 + n2
 },
 
 subtrair: function (n1, n2){
    if(n1 > n2){ 
       return  n1 - n2
    }
    if(n2 > n1)
    return n2 - n1
 }, 

 multiplicar: function (n1, n2){
    return n1*n2
 },

 dividir: function(n1,n2){
    return n1/n2
 }
};

console.log(calculadora.somar(1,8));
