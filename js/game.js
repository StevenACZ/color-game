const header = document.querySelector('.header');

const title = document.querySelector('.title');

const btnNewColors = document.querySelector('.btn--new-colors');
const btnEasy = document.querySelector('.btn--easy');
const btnHard = document.querySelector('.btn--hard');

const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

let btnSelected = {
  btnEasy: false,
  btnHard: false
} 

// Before all
let rand = randomColor();
header.style.backgroundColor = rand;
title.textContent = rand;
btnNewColors.style.color = rand;
btnEasy.style.color = rand;
btnHard.style.color = rand;

btnNewColors.addEventListener('click', (event) => {
  rand = randomColor();
  
  header.style.backgroundColor = rand;
  title.textContent = rand;
  btnNewColors.style.color = rand;
  btnEasy.style.color = rand;
  btnHard.style.color = rand;
  title.textContent = rand;

  if (btnSelected.btnEasy) {
    btnEasy.style.backgroundColor = rand;
    btnEasy.style.color = 'white'
  } else if (btnSelected.btnHard) {
    btnHard.style.backgroundColor = rand;
    btnHard.style.color = 'white'
  }
});

btnEasy.addEventListener('click', (event) => {
  btnSelected = {
    btnEasy: true,
    btnHard: false
  }

  event.target.style.backgroundColor = rand;
  event.target.style.color = 'white';

  btnHard.style.backgroundColor = 'transparent';
  btnHard.style.color = rand;
})

btnHard.addEventListener('click', (event) => {
  btnSelected = {
    btnEasy: false,
    btnHard: true
  } 

  event.target.style.backgroundColor = rand;
  event.target.style.color = 'white';

  btnEasy.style.backgroundColor = 'transparent';
  btnEasy.style.color = rand;
})