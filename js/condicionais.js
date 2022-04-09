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

console.log(conceito)

switch(conceito){

    case "otimo":
        console.log("Parabéns, você é um ótimo aluno")
    case "bom":
        console.log("Voce está indo bem")
    case "regular":
        console.log("estude mais um pouto")
}