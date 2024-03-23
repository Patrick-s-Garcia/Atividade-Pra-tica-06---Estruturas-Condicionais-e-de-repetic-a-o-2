
let sexo =Number(prompt(`Seu sexo é feminino - 1  ou Masculino - 2 ?`))
let altura =parseFloat(prompt(`Qual é sua altura ?`))



if(sexo == 1 ){
    let resultado = ((62.1 * altura) - 44.7).toFixed(2)
    console.log(`O seu peso ideal é ${resultado}.`)
}
else if(sexo == 2){
    let resultado = ((72.7 * altura) - 58).toFixed(2)
    console.log(`O seu peso ideal é ${resultado}.`)
}

