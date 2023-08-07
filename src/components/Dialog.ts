import { BaseElement } from '@/core';
import { dialogState } from '@/store';
import template from '@/templates/dialog.html?raw';

export const DialogComponent = class extends BaseElement {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const section = this.shadowRoot?.querySelector('section');
    const dialog = section?.querySelector('.dialog');
    const message = section?.querySelector('.message');
    const text = message?.querySelector('p');
    const cancel = section?.querySelector('.cancel');
    const ok = section?.querySelector('.ok');

    dialogState.addAction(({ prev, state }) => {
      if (state.isOpen) {
        section?.classList.add('open');
        dialog?.classList.add(state.type);
        if (text) text.textContent = state.message;
      } else {
        section?.classList.remove('open');
        dialog?.classList.remove(prev.type);
      }
    });

    section?.addEventListener('click', function () {
      dialogState.update((state) => {
        state.isOpen = false;
        state.message = '';
        return state;
      });
    });

    message?.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    cancel?.addEventListener('click', function () {
      console.log('Cancel');
    });

    ok?.addEventListener('click', function () {
      console.log('OK');
    });
  }
};
