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

btnNewColors.addEventListener('click', (event) => {
  const rand = randomColor();
  header.style.backgroundColor = rand;
  title.textContent = rand;
});