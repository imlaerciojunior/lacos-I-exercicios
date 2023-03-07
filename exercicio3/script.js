// EXERCICIO 3

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

function imprimaRankingPaises (array){
    console.log(array)

    for (let i = 0; i < array.length; i++){
        const impressaoRanking = array[i]

        console.log(`${[i+1]} - ${impressaoRanking}`)
    }

}
imprimaRankingPaises(maioresPaises)