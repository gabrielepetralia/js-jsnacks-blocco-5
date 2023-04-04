const studenti = [
  {
    firstName : "Steve",
    lastName : "Rogers",
    matricola : "1000012340",
    voti : [30,28,18,23],
    image : "img-steve.jpg",
  },
  {
    firstName : "Tony",
    lastName : "Stark",
    matricola : "1000012341",
    voti : [29,22,19,20,24],
    image : "img-tony.jpg",
  },
  {
    firstName : "Wanda",
    lastName : "Maximoff",
    matricola : "1000012342",
    voti : [30,18,19,25,30,23],
    image : "img-wanda.jpg",
  },
  {
    firstName : "Bruce",
    lastName : "Banner",
    matricola : "1000012343",
    voti : [23,27,30,18],
    image : "img-bruce.jpg",
  },
  {
    firstName : "Clint",
    lastName : "Barton",
    matricola : "1000012344",
    voti : [18,20,29,24,25,19],
    image : "img-clint.jpg",
  },
  {
    firstName : "Natasha",
    lastName : "Romanoff",
    matricola : "1000012345",
    voti : [19,28,30,22,25],
    image : "img-natasha.jpg",
  }
]

const elencoMedie = studenti.map( studente => {
  const student = {
    fullName : studente.lastName + " " + studente.firstName,
    matricola : studente.matricola,
    img : studente.image,
    mediaVoti : calcMediaVoti(studente.voti),
  }
  return student;
})

const studentsContainer = document.getElementById("students-container");

for(let student of elencoMedie)
{
  studentsContainer.innerHTML += `
    <div class="col mb-4">
      <div class="card shadow">
        <img src="img/${student.img}" class="card-img-top"></img>
        <div class="card-body bg-white text-center rounded">
          <h3>${student.fullName}</h3>
          <p>Media Voti : <strong>${student.mediaVoti}</strong></p>
        </div>
      </div>
    </div>
  `
}


/* ------------- Funzioni ------------- */

function calcMediaVoti(voti) {
  let sumVoti = 0;
  for(let voto of voti)
  {
    sumVoti = sumVoti + voto;
  }
  return (sumVoti / voti.length).toFixed(1);
}