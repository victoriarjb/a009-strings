const minhaString1 = "Eu não sou supersticioso, mas sou um pouco ________.      "
console.log (`Frase inicial:
${minhaString1}`)
console.log (`Removendo o excesso de espaços:
${minhaString1.trim()}`)

const minhaString2 = minhaString1.trim()

console.log (` Quantidade de caracteres antes x depois:
A frase inicial possui ${minhaString1.length} caracteres. Após a remoção dos espaços, a frase passou a ter ${minhaString2.length} caracteres.`)

console.log (`Substituindo os traços:
${minhaString1.trim().replace("________", "“sticioso”")}`)

