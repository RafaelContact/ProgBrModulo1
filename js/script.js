//  == igual a
//  === valor igual e igual
//  ! = não é igual
//  !== não igual ou não igual
//  >  maior que 
//  < menor que 
//  <= menor que ou igual a
//  >= menor ou igual a 

//  uso para comparar meus números e ele vai imprimir falso
console.log( 2 == 3 )

var a = 3
var b = "3"

console.log(a == b)
// nesse caso ele vai dizer que é igual, mesmo que um seja string e o outro numeral. Para funcionar terá que ser : 
console.log (a === b)
//  Com 3 iguais ele compara o número e o tipo, e número e string são diferentes

console.log (a != b)
//  olha se é diferente mas só olha o número 
console.log (a !== b) 
//  agora ele olha o tipo também

console.log (a > b )
//  se os números forem iguais ele vai dar falso, para maior e menor, se eu quiser um verdadeiro preciso colocar >= <=

