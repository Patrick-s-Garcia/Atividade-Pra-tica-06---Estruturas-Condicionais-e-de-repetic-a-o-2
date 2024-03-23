let eleitores = Number(prompt("Digite o numero de eleitores."))
let validos = Number(prompt("Digite a quantidade de votos validos."))
let branco = Number(prompt("Digite a quantidade de votos em branco."))
let nulo = Number(prompt("Digite a quantidade de votos nulo."))

let validação = validos + branco + nulo


if(validação == eleitores){
    let perValido = (validos/eleitores)*100
    let perBrancos = (branco/eleitores)*100
    let perNulo = (nulo/eleitores)*100


    console.log(`O percentual de votos validos foi de ${perValido}%.`)
    console.log(`O percentual de votos em branco foi de ${perBrancos}%.`)
    console.log(`O percentual de votos nulos foi de ${perNulo}%.`)


}
else{
    console.log("O numero de votos validos, em branco e nulos não condiz com o total de eleitores.")
}

