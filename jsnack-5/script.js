getRandomNumber = (min,max) => parseFloat((Math.random() * (max - min + 1) + min).toFixed(2));

const biciCorsa = [
  {
    nome : "Bianchi",
    peso : getRandomNumber(5 , 8),
  },
  {
    nome : "Atala",
    peso : getRandomNumber(5 , 8),
  },
  {
    nome : "Olmo",
    peso : getRandomNumber(5 , 8),
  },
  {
    nome : "Casati",
    peso : getRandomNumber(5 , 8),
  },
  {
    nome : "Colnago",
    peso : getRandomNumber(5 , 8),
  },
  {
    nome : "Cinelli",
    peso : getRandomNumber(5 , 8),
  },
]

console.log(biciCorsa)

let minIndex = 0;
let minPeso  = 9;
biciCorsa.forEach( (bici , index) => {
  if(bici.peso < minPeso) {
    minPeso = bici.peso;
    minIndex = index;
  }
});

const {nome} = biciCorsa[minIndex];

console.log(`La bici più leggera è la ${nome}`)