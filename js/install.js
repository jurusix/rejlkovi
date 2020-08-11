'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
const installAccordion = document.getElementById('accordionInstall');
const installIosAccordion = document.getElementById('accordionIosInstall');

installButton.addEventListener('click', installPWA);
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
window.addEventListener('online', () => setOnlineStatus(true));
window.addEventListener('offline', () => setOnlineStatus(false));

function setOnlineStatus(isOnline) {
  console.log(isOnline);
}

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

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
}

const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

if (isIos() && !isInStandaloneMode()) {
  installIosAccordion.removeAttribute('hidden');
}
