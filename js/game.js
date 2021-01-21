const header = document.querySelector('.header');

const title = document.querySelector('.title');

const btnNewColors = document.querySelector('.btn--new-colors');
const btnEasy = document.querySelector('.btn--easy');
const btnHard = document.querySelector('.btn--hard');

const squares = document.querySelectorAll('.squares__item');

// Function - randomColor
const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

// Variable - btnSelected
let btnSelected = {
  btnEasy: false,
  btnHard: false
} 

// Variable - correctSquare
const eventCorrent = () => {
  squares.forEach( square => {
    square.style.backgroundColor = rand;
    square.style.opacity = '100';
  })
  header.style.backgroundColor = rand;

  if (btnSelected.btnEasy) {
    btnEasy.style.backgroundColor = rand;
    btnEasy.style.color = 'white';
    btnHard.style.color = rand;
  } else if (btnSelected.btnHard) {
    btnHard.style.backgroundColor = rand;
    btnHard.style.color = 'white';
    btnEasy.style.color = rand;
  }

  btnNewColors.style.color = rand;
}

const queryToSquares = (difficult = 'easy') => {
  let correctSquareNum = 0;
  
  if (difficult == 'easy') {
    correctSquareNum = Math.floor(Math.random() * 3); // EASY
  } else if (difficult == 'hard') {
    correctSquareNum = Math.floor(Math.random() * 6); // HARD
  }
  
  const correctSquare = squares[correctSquareNum];
  
  squares.forEach( square => {
    square.style.backgroundColor = randomColor();
    square.removeEventListener('click', eventCorrent);
    square.addEventListener('click', (event) => {
      event.target.style.opacity = '0';
    })
  })
    
  correctSquare.addEventListener('click', eventCorrent)
  correctSquare.style.backgroundColor = rand;
}


// Before all
let rand = randomColor();
let randFake = randomColor();
title.textContent = rand;

header.style.backgroundColor = randFake;
btnNewColors.style.color = randFake;
btnEasy.style.color = randFake;
btnHard.style.color = randFake;

squares.forEach( square => {
  square.style.backgroundColor = randFake;
})


// Button - btnNewColors
btnNewColors.addEventListener('click', (event) => {
  rand = randomColor();
  randFake = randomColor();
  
  header.style.backgroundColor = randFake;
  title.textContent = randFake;
  btnNewColors.style.color = randFake;
  btnEasy.style.color = randFake;
  btnHard.style.color = randFake;
  title.textContent = randFake;

  squares.forEach( square => {
    square.style.backgroundColor = randFake;
  })

  if (btnSelected.btnEasy) {
    btnEasy.style.backgroundColor = randFake;
    btnEasy.style.color = 'white'
  } else if (btnSelected.btnHard) {
    btnHard.style.backgroundColor = randFake;
    btnHard.style.color = 'white'
  }
});

// Button - btnEasy
btnEasy.addEventListener('click', (event) => {
  btnSelected = {
    btnEasy: true,
    btnHard: false
  }

  event.target.style.backgroundColor = randFake;
  event.target.style.color = 'white';

  btnHard.style.backgroundColor = 'transparent';
  btnHard.style.color = randFake;

  squares[3].style.opacity = '0';
  squares[4].style.opacity = '0';
  squares[5].style.opacity = '0';

  queryToSquares('easy');
})

// Button - btnHard
btnHard.addEventListener('click', (event) => {
  btnSelected = {
    btnEasy: false,
    btnHard: true
  } 

  event.target.style.backgroundColor = randFake;
  event.target.style.color = 'white';

  btnEasy.style.backgroundColor = 'transparent';
  btnEasy.style.color = randFake;

  queryToSquares('hard');
})