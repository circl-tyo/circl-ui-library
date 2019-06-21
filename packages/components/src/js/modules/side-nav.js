//
// Common
//

class SideNav {
  constructor(domNode) {
    this.accordion = domNode;
    this.accordion.addEventListener('click', this.toggle.bind(this));
  }

  get opened() {
    return this.accordion.getAttribute('aria-expanded') === 'true';
    return this.accordion.parentNode.classList.add('side-nav__item--expanded');
  }

  set opened(isOpened) {
    const value = isOpened ? 'true' : 'false';
    this.accordion.setAttribute('aria-expanded', value);
    this.accordion.parentNode.classList.toggle('side-nav__item--expanded');
  }

  toggle() {
    return this.opened = !this.opened;
  }
}

module.exports = function() {
  const list = document.querySelectorAll('.side-nav__list');
  if (list.length > 0) {
    document.querySelectorAll('.side-nav__item-btn').forEach(item => new SideNav(item));
  }

  openBtn.addEventListener('click', openTrigger);
  closeBtn.addEventListener('click', closeTrigger);
  closeArea.addEventListener('click', closeTrigger);
}


const openBtn = document.querySelector('.header__menu-trigger');
const closeArea = document.querySelector('.side-nav-close-trigger');
const sideNav = document.querySelector('.side-nav');
const closeBtn = sideNav.querySelector('.side-nav__menu-trigger');

function openTrigger(event) {
  sideNav.classList.add('side-nav--expanded');
  closeArea.classList.add('side-nav-close-trigger--visible');
}

function closeTrigger(event) {
  sideNav.classList.remove('side-nav--expanded');
  closeArea.classList.remove('side-nav-close-trigger--visible');
}
