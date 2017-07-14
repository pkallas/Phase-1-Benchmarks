// classes are modal, modal-overlay, close-button

/* use id "I'm-Feeling-Lucky" for eventListener modal pop-up
addEventListener to close-button*/
window.onload = () => {
  let luckyButton = document.getElementById("I'm-Feeling-Lucky");
  let closeButton = document.getElementById('close-button');
  luckyButton.addEventListener('click', modalPopup);
  luckyButton.addEventListener('mouseenter', luckyInfoHover);
  luckyButton.addEventListener('mouseleave', luckyInfoExit);
  closeButton.addEventListener('click', closeModal);
}
// Change modal and modal-overlay display to be box
function modalPopup() {
  let modal = document.getElementById('modal');
  let modalOverlay = document.getElementById('modal-overlay');
  modal.style.display = 'flex';
  modalOverlay.style.display = 'flex';
// Invoke luckyInfoExit to ensure the hovered info pop-up doesn't interfere with modal pop-up
  luckyInfoExit()
}

// Have it set modal and modal-display to be none
function closeModal() {
  let modal = document.getElementById('modal');
  let modalOverlay = document.getElementById('modal-overlay');
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
}

// Change modal display to be flex while hovering
function luckyInfoHover() {
  let luckyHover = document.getElementById('lucky-hover-info');
  luckyHover.style.display = 'flex';
}

// Set back to none while not hovering
function luckyInfoExit() {
  let luckyHover = document.getElementById('lucky-hover-info');
  luckyHover.style.display = 'none';
}
