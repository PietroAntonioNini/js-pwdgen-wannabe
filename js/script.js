let firstname = prompt("Qual'è il tuo nome?")

console.log(firstname)

let lastname = prompt("Qual'è il tuo cognome?")

console.log(lastname)

let color = prompt("Qual'è il tuo colore preferito?")

console.log(color)

let number = Math.floor (Math.random() * 99) + 1;

document.getElementById("psw-gen").innerHTML = `${firstname + lastname + color + number}`