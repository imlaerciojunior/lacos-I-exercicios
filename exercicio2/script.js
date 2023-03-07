// EXERCICIO 2

function calcularTabuada (){
    const digiteNumero = Number(prompt("Digite o número que gostaria de saber a tabuada:"))

    for (let i = 1; i <=10; i++ ){
        const resultado = digiteNumero * i
    console.log(`${digiteNumero} x ${i} = ${resultado}`)
    }
}

calcularTabuada()