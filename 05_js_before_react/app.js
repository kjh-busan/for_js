const button = document.querySelector('button');

let modal;
let barkdrop;

button.addEventListener('click', showModalHandler);

function showModalHandler() {
  if (modal) {
    alert('이미 모달창 잇힝~*');
    return;
  }

  modal = document.createElement('div');
  
  const modalText = document.createElement('p');
  modalText.textContent = 'Are you Sure?';

  const modalCancelAction = document.createElement('button');
  modalCancelAction.textContent = 'Cancel';
  modalCancelAction.addEventListener('click', closeModalHandler);

  modal.append(modalText);
  modal.append(modalCancelAction);

  document.body.append(modal);

  barkdrop = document.createElement('div');
  barkdrop.className = 'backdrop';

  barkdrop.addEventListener('click', closeModalHandler);

  document.body.append(barkdrop);
}

function closeModalHandler() {
  modal.remove();
  modal = null;

  barkdrop.remove();
  barkdrop = null;
}