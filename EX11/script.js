let turno = prompt("Em que turno você estuda? <br> ( M - Matutino , V - Vespertino, N - Noturno ").toLowerCase()


switch(turno){
    case turno = "m":
        console.log("Bom dia!")
        break
    case turno = "v":
        console.log("Boa tarde!")
        break  
    case turno = "n":
        console.log("Boa noite!")
        break  
    default:
        console.log("Resposta inválida")
}