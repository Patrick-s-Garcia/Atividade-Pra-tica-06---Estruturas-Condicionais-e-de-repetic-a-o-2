let anoAtual = Number(prompt("Digite o ano em que você esta."))
let nascimento = Number(prompt("Digite o ano do seu nascimento."))

let idade = anoAtual - nascimento


if(idade < 16){
    console.log("Você não poderá votar este ano.")
}
else{
    console.log("Você poderá votar este ano.")
}

