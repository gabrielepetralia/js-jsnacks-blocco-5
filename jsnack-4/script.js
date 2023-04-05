const studenti = [
  {
    id        : 213 ,
    nome      : "Marco della Rovere" ,
    sommaVoti : 78 ,
  },
  {
    id        : 110 ,
    nome      : "Paola Cortellessa" ,
    sommaVoti : 96 ,
  },
  {
    id        : 250  ,
    nome      : "Andrea Mantegna" ,
    sommaVoti : 48 ,
  },
  {
    id        : 145  ,
    nome      : "Gaia Borromini" ,
    sommaVoti : 74 ,
  },
  {
    id        : 196  ,
    nome      : "Luigi Grimaldello" ,
    sommaVoti : 68 ,
  },
  {
    id        : 102  ,
    nome      : "Piero della Francesca" ,
    sommaVoti : 50 ,
  },
  {
    id        : 120 ,
    nome      : "Francesca da Polenta" ,
    sommaVoti : 84 ,
  },
]

const nomiTarghe = studenti.map( studente => studente.nome.toUpperCase() )
const votiOver70 = studenti.filter( studente => studente.sommaVoti > 70 )
const votiOver70idOver120 = studenti.filter( studente => studente.sommaVoti > 70 && studente.id > 120 )

console.log(nomiTarghe)
console.log(votiOver70)
console.log(votiOver70idOver120)