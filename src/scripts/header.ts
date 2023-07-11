import { dialogState } from '../store/dialogState';

export const headerScript = function (this: HTMLElement): void {
  const header = this.shadowRoot?.querySelector('header');
  const nav = header?.querySelector('nav');
  const ul = header?.querySelector('ul');
  const menuButton = header?.querySelector('.menu-button');
  const dialogButton = header?.querySelector('.dialog-button');

  nav?.addEventListener('click', function () {
    nav?.classList.remove('active');
    document.body.classList.remove('nav-active');
  });

  ul?.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  menuButton?.addEventListener('click', () => {
    nav?.classList.add('active');
    document.body.classList.add('nav-active');
  });

  dialogButton?.addEventListener('click', () => {
    dialogState.update((state) => {
      state.isOpen = !state.isOpen;
      state.type = 'alert';
      state.message = 'Message';
      return state;
    });
  });
};
