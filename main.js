function click() {
  setTimeout(changeColor, 1000);
}

let color = 'blue';

function changeColor() {
  let btn = document.getElementById('btn');
  if (color === 'blue') {
    color = 'green';
    btn.classList.add('green');
    btn.classList.remove('blue');
  } else {
    color = 'blue';
    btn.classList.add('blue');
    btn.classList.remove('green');
  }
}

function Init() {
  document.getElementById('btn').addEventListener('click', click);
}

document.addEventListener('DOMContentLoaded', Init);
