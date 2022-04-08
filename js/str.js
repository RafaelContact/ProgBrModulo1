var a = '3.5'

var b = '5'

var c = parseFloat(a) + parseFloat(b)
// Agora ao invez de 8 eu vou ter 35 pois os números foram concatenados
//  ele entende que usando string e soma eu quero concatenar
console.log(c)