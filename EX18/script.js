let valor = parseFloat(prompt("Digite o valor do produto."))
let parcelas = Number(prompt("Digite o numero de parcelas."))



if(parcelas == 1){
    
    let total = (valor - (valor * 0.025)).toFixed(2)
    let valorParcela = total

    console.log(`${parcelas} x de ${valorParcela}`)
    console.log(`O valor total será de R$${total}`)

}
else if(parcelas <= 5){
    
    let total = valor
    let valorParcela = (total / parcelas).toFixed(2)

    console.log(`${parcelas} x de ${valorParcela}`)
    console.log(`O valor total será de R$${total}`)

}
else if(parcelas <= 10){
    
    let total = (valor + (valor*0.06)).toFixed(2)
    let valorParcela = (total / parcelas).toFixed(2)

    console.log(`${parcelas} x de ${valorParcela}`)
    console.log(`O valor total será de R$${total}`)

}
else if(parcelas <= 15){
    
    let total = (valor + (valor*0.13)).toFixed(2)
    let valorParcela = (total / parcelas).toFixed(2)

    console.log(`${parcelas} x de ${valorParcela}`)
    console.log(`O valor total será de R$${total}`)

}
else{
    console.log(`Quantidade de parcelas inválida.`)
}
