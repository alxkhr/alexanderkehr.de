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
  container.style.justifyContent = 'start';
  const element = document.createElement('div');
  element.className = css.paragraph;
  const privacyText = document.createElement('p');
  privacyText.innerText = shiftString(
    '\\t|1%fwj%~tz%zxnsl%f%Ytw%Gwt|xjwD%^tz%rzxy%gj%wjfqq~%htshjwsji%fgtzy%~tzw%uwn{fh~&%Xt%fr%N3',
    -5,
  );
  element.appendChild(privacyText);
  const forgiveText = document.createElement('p');
  forgiveText.innerText = shiftString(
    'Rngcug"hqtikxg"og"hqt"hknvgtkpi"qwv"vjg"xkukvqtu"qh"o{"rgtuqpcn"rtqhkngu"cpf"eqpvcev"fgvcknu0',
    -2,
  );
  element.appendChild(forgiveText);
  [
    'iuuqt;00mjolfejo/dpn0jo0bmfyboefs.lfis',
    'jvvru<11ikvjwd0eqo1cnzmjt',
    'kwwsv=22jolwfk1frp2Cdo{nku',
    'lxxtw>33filergi2rix3ep|olv',
    'myyux?44nsxyflwfr3htr4fqj}fpjm',
  ].forEach((l, i) => {
    const profileLink = document.createElement('a');
    const link = shiftString(l, -i - 1);
    profileLink.className = css.link;
    profileLink.href = link;
    profileLink.target = '_blank';
    profileLink.innerText = link;
    element.appendChild(profileLink);
  });
  const disclaimerText = document.createElement('p');
  disclaimerText.innerText = shiftString(
    ')Tpnf!pg!uif!mjolt!xjmm!opu!xpsl!qspqfsmz-!cfdbvtf!uif!qmbugpsn!epft!opu!sftqfdu!zpvs!qsjwbdz/!Jg!zpv!xbou!up!wjtju!bmm!uif!qspgjmft-!zpv!njhiu!ibwf!up!vtf!b!dpnnpo!cspxtfs/*',
    -1,
  );
  element.appendChild(disclaimerText);
  const mailText = document.createElement('p');
  mailText.innerText = shiftString('doh{Cdoh{dqghunhku1gh', -3);
  element.appendChild(mailText);
  const phoneText = document.createElement('p');
  phoneText.innerText = shiftString('1:?&7;=;&>7;>:;>', -6);
  element.appendChild(phoneText);
  container.appendChild(element);
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
  mailtoLink.href = shiftString('qempxs>epi|Depi|erhivoilv2hi', -4);
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
      renderEmoji(container, 128531);
      renderSorryBrowserText(container);
      renderGetBrowserButton(container);
      maybeRenderBadUXText(container);
      break;
    case 2:
      renderEmoji(container, 128539);
      renderSorryBrowserText(container);
      renderButtonPlaceholder(container);
      maybeRenderBadUXText(container);
    default:
  }
  document.body.appendChild(container);
}

render();
