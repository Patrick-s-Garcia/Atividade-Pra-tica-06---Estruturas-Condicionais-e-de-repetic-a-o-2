
let numero =parseFloat(prompt(`Digite seu salário.`))

let div = 0

i = 1

for(i=1;i<=numero;i++){
    let resultado = numero%i
    if(resultado === 0 )
    div++
}

if(div < 3 ){
    console.log(`O numero ${numero} é primo`)
}
else{
    console.log(`O numero ${numero} não é primo`)
}

