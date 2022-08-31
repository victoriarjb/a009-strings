const frase = ('Jorge tem uma casa verde e com portão azul, com os dizeres: "\BOAS VINDAS, mas não deixe o gato sair\"') //Crie a const para a frase aqui
console.log (frase)

const frase2 = frase.replace("verde","rosa").replace("azul","laranja")
console.log (frase2)

console.log (`Verificação se a nova frase inclui
verde: ${frase2.includes("verde")}
laranja: ${frase2.includes("laranja")}`)

const trechoDaFrase = ('Jorge tem uma casa verde e com portão azul, com os dizeres: "\BOAS VINDAS,')
const trechoDaFrase2 = ('mas não deixe o gato sair\"')
const trechoDaFrase2ToUpperCase = trechoDaFrase2.toUpperCase()
console.log (`${trechoDaFrase} ${trechoDaFrase2ToUpperCase}`)
