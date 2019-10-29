import './style.scss';
import railsIcon from './assets/images/rails-icon.svg';
import purpleBookGif from './assets/images/purplebook.gif'
import taggingAppGif from './assets/images/tagging-app.gif'
import exploritGif from './assets/images/explorit.gif'

document.getElementById('rails-icon').src = railsIcon;
document.getElementById('purplebook-gif').src = purpleBookGif;
document.getElementById('explorit-gif').src = exploritGif;
document.getElementById('taggingapp-gif').src = taggingAppGif;

const projects = document.querySelectorAll('.projects .project');
const blurBackground = document.querySelector('.blur-back');
const modal = document.querySelector('.modal');
const modalExit = modal.querySelector('.modal-inner .exit');

modalExit.addEventListener('click', exitModal);

[...projects].forEach((project) => {
  project.addEventListener('click', showInModal);
})

function showInModal(event) {
  const { currentTarget } = event;
  const modalInfo = modal.querySelector('.modal-info');
  const modalImage = modal.querySelector('.modal-image img');
  const projectInfoModal = currentTarget.getElementsByClassName('hidden-project-info')[0];
  const clonedProjectInfoModal = projectInfoModal.cloneNode(true);
  const projectGifModal = currentTarget.querySelector('.hidden-project-gif img');

  blurBackground.style.filter = 'blur(6px)';
  modal.style.display = 'flex';
  removeChildElements(modalInfo);
  modalInfo.appendChild(clonedProjectInfoModal);
  modalImage.src = projectGifModal.src;
}

function exitModal(event) {
  blurBackground.style.filter = 'blur(0)';
  modal.style.display = 'none';
}

function removeChildElements(parent) {
  while(parent.firstChild) {
    parent.firstChild.remove();
  }
}
