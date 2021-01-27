const search = document.querySelector('.search');
const Button = document.querySelector('.Button');
const input = document.querySelector('.input');


Button.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
});