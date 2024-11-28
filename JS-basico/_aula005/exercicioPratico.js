/*
 * Sávio tem 43 anos, pesa 70 kg
 * tem 1.64 de altura e seu IMC é 25.92562544525411551
 * nasceu em 1981
*/

let nome = "Savio"
let idade = 43
let peso = 70
let altura = 1.64
let anoNasc = 2024 - 43
let IMC = peso / Math.pow(altura, 2)

console.log(`${nome} tem ${idade}, pesa ${peso} Kg tem ${altura}, IMC de ${IMC} e nasceu em ${anoNasc}`)