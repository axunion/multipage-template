import { dialogState } from '../store/dialogState';

export const dialogScript = function (this: HTMLElement): void {
  const section = this.shadowRoot?.querySelector('section');
  const dialog = section?.querySelector('.dialog');
  const message = section?.querySelector('.message');
  const text = message?.querySelector('p');
  const cancel = section?.querySelector('.cancel');
  const ok = section?.querySelector('.ok');

  const closeDialog = () => {
    dialogState.update((state) => {
      state.isOpen = false;
      state.message = '';
      return state;
    });
  };

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

  section?.addEventListener('click', () => {
    closeDialog();
  });

  dialog?.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  cancel?.addEventListener('click', () => {
    closeDialog();
    console.log('Cancel');
  });

  ok?.addEventListener('click', () => {
    closeDialog();
    console.log('OK');
  });
};
