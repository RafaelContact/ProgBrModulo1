var nota1 = 8.0
var nota2 = 8.1

var media = (nota1 + nota2) / 2

if (media >=8){
    conceito = 'Ótimo'
}
else if(media >= 6.5){
    conceito = 'Bom'
}
else{
    conceito = 'Regular'
}
conceito = "mais ou menos"

console.log(media)
console.log(conceito)

// Se meu conceito mudar e no código abaixo não tiver previsto o valor que ele  iria ter, ira printar o valor padrao para quando isso acontece.

switch (conceito) {

    case "Ótimo":
        console.log("Parabéns, você é um ótimo aluno")
        break;

    case "bom":
        console.log("Voce está indo bem")
        break;
    case "regular":
        console.log("estude mais um pouto")
        break
    default:
        console.log("houve algum erro")
        break;
}