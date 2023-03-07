//  EXERCICIO 1 

function comerMaisCoxinha(){
    let desejaComer = prompt("Deseja comer mais uma coxinha? se sim responda com 'S' se não responda com 'N'").toUpperCase()

    let conta = 0

    while(desejaComer !== "N"){
        conta = conta + 2.50
        
        desejaComer = prompt("Deseja comer mais uma coxinha? se sim responda com 'S' se não responda com 'N'").toUpperCase()
                
    }

    console.log (`Sua conta é de: R$ ${conta}`)
}

comerMaisCoxinha()