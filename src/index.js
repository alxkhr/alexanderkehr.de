import { getParser } from 'bowser';

import css from './index.css';

function shiftString(s, mod) {
  return s.replace(/./g, function(c) {
    return String.fromCharCode(c.charCodeAt(0) + mod);
  });
}

const browserName = getParser(window.navigator.userAgent).getBrowserName();
const osName = getParser(window.navigator.userAgent).getOSName();
const isUsingTor =
  browserName === shiftString('Ru~qr{', -12) && window.outerHeight === window.innerHeight;
let state = isUsingTor ? 0 : 1;

function setState(s) {
  state = s;
  render();
}

let countHides = 0;

function tempHideGetBrowserButton() {
  setState(2);
  countHides++;
  setTimeout(() => setState(1), 2000);
}

function renderWowTorText(container) {
  const privacyText = document.createElement('p');
  privacyText.className = css.paragraph;
  privacyText.innerText = shiftString(
    '\\t|1%fwj%~tz%zxnsl%f%Ytw%Gwt|xjwD%^tz%rzxy%gj%wjfqq~%htshjwsji%fgtzy%~tzw%uwn{fh~&%Xt%fr%N3',
    -5,
  );
  container.appendChild(privacyText);
  const forgiveText = document.createElement('p');
  forgiveText.className = css.paragraph;
  forgiveText.innerText = shiftString(
    'Rngcug"hqtikxg"og"hqt"hknvgtkpi"qwv"vjg"xkukvqtu"qh"o{"rgtuqpcn"rtqhkngu"cpf"eqpvcev"fgvcknu0',
    -2,
  );
  container.appendChild(forgiveText);
  const resumeButton = document.createElement('a');
  resumeButton.href = shiftString('iuuqt;00sftvnf/bmfyboefslfis/dpn', -1);
  resumeButton.target = '_blank';
  resumeButton.innerText = shiftString('O["TGUWOG', -2);
  resumeButton.className = css.button;
  container.appendChild(resumeButton);
  const mailText = document.createElement('p');
  mailText.className = css.paragraph;
  mailText.innerText = shiftString('doh{Cdoh{dqghunhku1gh', -3);
  container.appendChild(mailText);
  const phoneText = document.createElement('p');
  phoneText.className = css.paragraph;
  phoneText.innerText = shiftString('1:?&7;=;&>7;>:;>', -6);
  container.appendChild(phoneText);
}

function renderSorryBrowserText(container) {
  const element = document.createElement('p');
  element.className = css.text;
  element.innerText = `Sorry, but ${browserName} for ${osName} is not supported by my site.\n\nMaybe try another browser?`;
  container.appendChild(element);
}

function renderGetBrowserButton(container) {
  const element = document.createElement('a');
  element.className = css.button;
  element.innerText = 'GET ANOTHER BROWSER';
  element.href = 'https://www.torproject.org/';
  element.target = '_blank';
  element.addEventListener('mouseover', () => tempHideGetBrowserButton());
  element.addEventListener('touchstart', (e) => {
    e.preventDefault();
    tempHideGetBrowserButton();
  });
  container.appendChild(element);
}

function renderButtonPlaceholder(container) {
  const element = document.createElement('div');
  element.className = css.placeholder;
  container.appendChild(element);
}

function maybeRenderBadUXText(container) {
  if (countHides < 2) {
    return;
  }
  const element = document.createElement('p');
  element.className = css.validation;
  element.innerText = shiftString('[qw"hqwpf"c"dwiA"Qt"fq"{qw"vjkpm"o{"ygdukvg"jcu"c"dcf"WZA"', -2);
  const mailtoLink = document.createElement('a');
  mailtoLink.className = css.link;
  mailtoLink.innerText = shiftString('Ufmm!nf/', -1);
  mailtoLink.href = shiftString(
    'qempxs>epi|Depi|erhivoilv2hiCwyfnigxAM$lezi$gsrgivrw${mxl$xli$eggiwwmfmpmx}$sj$}syv${ifwmxi',
    -4,
  );
  element.appendChild(mailtoLink);
  container.appendChild(element);
}

function renderEmoji(container, number) {
  const element = document.createElement('p');
  element.className = css.emoji;
  element.innerHTML = `&#${number};`;
  container.appendChild(element);
}

function render() {
  document.body.innerHTML = '';
  const container = document.createElement('div');
  container.className = css.container;
  switch (state) {
    case 0:
      renderWowTorText(container);
      break;
    case 1:
      renderEmoji(container, 128542);
      renderSorryBrowserText(container);
      renderGetBrowserButton(container);
      maybeRenderBadUXText(container);
      break;
    case 2:
      renderEmoji(container, 128579);
      renderSorryBrowserText(container);
      renderButtonPlaceholder(container);
      maybeRenderBadUXText(container);
    default:
  }
  document.body.appendChild(container);
}

render();
