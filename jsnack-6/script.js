getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1) ) + min;

const squadre = [
  {
    nome        : "Juve",
    punti       : 0,
    falliSubiti : 0,
  },
  {
    nome        : "Milan",
    punti       : 0,
    falliSubiti : 0,
  },
  {
    nome        : "Inter",
    punti       : 0,
    falliSubiti : 0,
  },
  {
    nome        : "Napoli",
    punti       : 0,
    falliSubiti : 0,
  },
  {
    nome        : "Roma",
    punti       : 0,
    falliSubiti : 0,
  },
  {
    nome        : "Fiorentina",
    punti       : 0,
    falliSubiti : 0,
  }
]

squadre.forEach( squadra => {
  squadra.punti = getRandomNumber(1 , 100);
  squadra.falliSubiti = getRandomNumber(1 , 100);
});

console.log(squadre)

const squadreRemap = squadre.map( (squadra , index) => {
  const {nome , falliSubiti} = squadre[index];
  const objSquadra = {
    nome,
    falliSubiti,
  }
  return objSquadra;
})

console.log(squadreRemap)