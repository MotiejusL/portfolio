import './style.scss';
import railsIcon from './assets/images/rails-icon.svg';
import purpleBookGifMp4 from './assets/images/purplebook-v.mp4';
import purpleBookGifWebm from './assets/images/purplebook-v2.webm';
import taggingAppGifMp4 from './assets/images/tagging-app-v.mp4';
import taggingAppGifWebm from './assets/images/tagging-app-v2.webm';
import exploritGifMp4 from './assets/images/explorit-v.mp4';
import exploritGifWebm from './assets/images/explorit-v2.webm';

document.getElementById('rails-icon').src = railsIcon;
document.getElementById('purplebook-gif-mp4').src = purpleBookGifMp4;
document.getElementById('purplebook-gif-webm').src = purpleBookGifWebm;
document.getElementById('explorit-gif-mp4').src = exploritGifMp4;
document.getElementById('explorit-gif-webm').src = exploritGifWebm;
document.getElementById('taggingapp-gif-mp4').src = taggingAppGifMp4;
document.getElementById('taggingapp-gif-webm').src = taggingAppGifWebm;

const projects = document.querySelectorAll('.projects .project');
const blurBackground = document.querySelector('.blur-back');
const modal = document.querySelector('.modal');
const modalInner = modal.querySelector('.modal-inner');
const modalExit = modal.querySelector('.modal-inner .exit');
const form = document.getElementById('form');
const emailIcon = document.getElementsByClassName('email-icon')[0];

emailIcon.addEventListener('click', showEmail);

modalExit.addEventListener('click', exitModal);

form.addEventListener('submit', sendMail);

[...projects].forEach((project) => {
  const readMore = project.querySelector('h6');
  readMore.project = project;
  readMore.addEventListener('click', showInModal);
})

function showInModal(event) {
  const { currentTarget } = event;
  const project = currentTarget.project;
  const modalInfo = modal.querySelector('.modal-info');
  const modalImage = modal.querySelector('.modal-image');
  const projectInfoModal = project.getElementsByClassName('hidden-project-info')[0];
  const projectLinks = project.getElementsByClassName('project-links')[0];
  const projectGifModal = project.querySelector('.hidden-project-gif video');
  const clonedProjectInfoModal = projectInfoModal.cloneNode(true);
  const clonedProjectLinks = projectLinks.cloneNode(true);
  const clonedProjectGifModal = projectGifModal.cloneNode(true);

  blurBackground.style.filter = 'blur(6px)';
  modalInner.style.boxShadow = '0 0 1px 999px rgba(0,0,0,0.1)';
  modal.style.display = 'flex';
  removeChildElements(modalInfo);
  modalInfo.appendChild(clonedProjectInfoModal);
  modalInfo.appendChild(clonedProjectLinks);
  removeChildElements(modalImage);
  modalImage.appendChild(clonedProjectGifModal);
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

function sendMail(event) {
  event.preventDefault();

  const data = new FormData(form);
  ajaxMail(form.method, form.action, data, success, error);

}

function success() {
  const submitMessage = document.querySelector('.contact-form h4');
  form.reset();
  submitMessage.textContent = 'Thank you for your message';
  submitMessage.style.color = '#008000';
  contactMessageDisappear();
}

function error() {
  const submitMessage = document.querySelector('.contact-form h4');
  form.reset();
  submitMessage.textContent = 'Something went wrong';
  submitMessage.style.color = '#ff0000';
  contactMessageDisappear();
}

function ajaxMail(method, url, data, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE ) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  }
  xhr.send(data);
}

function contactMessageDisappear() {
  const submitMessage = document.querySelector('.contact-form h4');
  setTimeout(() => {
    submitMessage.textContent = 'Feel free to get in touch with me';
    submitMessage.style.color = '#909090';
  }, 3000)
}

function showEmail(event) {
  const { currentTarget } = event;
  const emailContainer = document.getElementsByClassName('email-container')[0];
  emailContainer.style.opacity = 1;
  currentTarget.removeEventListener('click', showEmail);
  currentTarget.addEventListener('click', hideEmail);
}

function hideEmail(event) {
  const { currentTarget } = event;
  const emailContainer = document.getElementsByClassName('email-container')[0];
  emailContainer.style.opacity = 0;
  currentTarget.addEventListener('click', showEmail);
  currentTarget.removeEventListener('click', hideEmail);
}
