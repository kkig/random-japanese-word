const word = document.querySelector('.word');
const answer = document.querySelector('.answer');
const button = document.querySelector('#button');

const japWord = ['一', '右', '雨', '円', '王', '音'];
const description = ['One', 'Right', 'Rain', 'Circle', 'King', 'Sound'];

button.onclick = e => {
  e.preventDefault();
  const randomNumber = Math.floor(Math.random() * 6);
  word.innerHTML = japWord[randomNumber];
  answer.innerHTML = description[randomNumber];
};
