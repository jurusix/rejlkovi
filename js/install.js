'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
const installAccordion = document.getElementById('accordionInstall');

installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  installAccordion.removeAttribute('hidden');
}


function installPWA(evt) {
  deferredInstallPrompt.prompt();
  installAccordion.setAttribute('hidden', true);

  deferredInstallPrompt.userChoice
    .then((choice) => {
      deferredInstallPrompt = null;
    });

}