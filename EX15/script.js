let ladoA = Number(prompt("Digite o tamanho do lado A."))
let ladoB = Number(prompt("Digite o tamanho do lado B."))
let ladoC = Number(prompt("Digite o tamanho do lado C."))


if(ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB) ){
    if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC ){
        console.log("As medidas formam um triângulo isósceles.")
    }
    else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
        console.log("As medidas formam um triângulo escaleno.")
    }
    else if(ladoA == ladoB && ladoB == ladoC){
        console.log("As medidas formam um triângulo escaleno.")
    }


}
else{
    console.log("As medidas não formam um triângulo")
}

