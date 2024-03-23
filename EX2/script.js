let idade = Number(prompt("Digite a idade do motorista."))
let habilitacao = prompt("O motorista possui habilitação? S - (Sim) N - (Não)").toLowerCase()


if(idade > 17 && habilitacao == "s"){
    console.log("Pode dirigir!")
}
else{
    console.log("Não pode dirigir!")
}
