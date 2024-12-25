/*
  todo 1: look at index.html and style.css
  todo 2: make a square with div#square and inside that div put a filled circle 🟠
  todo 3: make a button and use events when its clicked remove the circle
*/

// ! ========== Answers ==========
const square = document.getElementById('square');
const circle = document.createElement('div');
circle.classList.add('circle');
square.appendChild(circle);

const removeButton = document.getElementById('removeCircle');
removeButton.addEventListener('click', () => {
  square.removeChild(circle);
});
