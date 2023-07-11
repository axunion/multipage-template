import { createState } from '../core/state';

interface DialogState {
  isOpen: boolean;
  type: 'alert' | 'confirm' | 'error';
  message: string;
}

export const dialogState = createState<DialogState>({
  data: {
    isOpen: false,
    type: 'alert',
    message: '',
  },
});
