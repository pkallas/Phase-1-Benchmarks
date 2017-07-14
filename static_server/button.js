
function tryMeButton() {
  let button = document.querySelector('#button-text');
  if (button.style.display === 'none') {
    button.style.display = 'flex';
    button.innerHTML = "Woah! How'd I get here?";
    return;
  }
  else button.style.display = 'none';
};

window.onload = () => {
  let tryMe = document.querySelector('#try-me');
  tryMe.addEventListener('click', tryMeButton);
};
