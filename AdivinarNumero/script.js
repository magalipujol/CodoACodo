var ganador = Math.ceil(Math.random() * 50)

var numberInput;

do {
    numberInput = Number(parseInt(prompt('Ingrese un número entre 1 y 50', '')))
} while (numberInput > 50 || numberInput < 1 || isNan(numberInput));

console.log(ganador)

if (numberInput == ganador) {
    document.write('<div>Ganaste!</div>')
} else{
    document.write(`<div>Perdiste :(, el número ganador era ${ganador}</div>`)
}