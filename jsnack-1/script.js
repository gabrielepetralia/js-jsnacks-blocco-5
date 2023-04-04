const utenti = [
  {
    firstName : "Steve",
    lastName : "Rogers",
    age: 106,
  },
  {
    firstName : "Tony",
    lastName : "Stark",
    age: 40,
  },
  {
    firstName : "Wanda",
    lastName : "Maximoff",
    age: 16,
  },
  {
    firstName : "Bruce",
    lastName : "Banner",
    age: 78,
  },
  {
    firstName : "Clint",
    lastName : "Barton",
    age: 15,
  },
  {
    firstName : "Natasha",
    lastName : "Romanoff",
    age: 18,
  },
]

const minorenni = utenti.filter( (utente) => utente.age<18)

const over65 = utenti.filter( (utente) => utente.age>65)

console.log("Minorenni:");
for(let utente of minorenni){
  let message = utente.firstName + " " + utente.lastName;
  console.log(message)
}

console.log("----------")

console.log("Over 65:");
for(let utente of over65){
  let message = utente.firstName + " " + utente.lastName;
  console.log(message)
}