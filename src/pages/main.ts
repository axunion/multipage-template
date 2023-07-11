import './style.css';
import { defineCustomElements } from '../core/customElement';
import { headerScript } from '../scripts/header';
import { dialogScript } from '../scripts/dialog';
import headerTemplate from '../templates/header.html?raw';
import footerTemplate from '../templates/footer.html?raw';
import dialogTemplate from '../templates/dialog.html?raw';

defineCustomElements([
  {
    tag: 'header-component',
    template: headerTemplate,
    onConnected: headerScript,
  },
  {
    tag: 'footer-component',
    template: footerTemplate,
  },
  {
    tag: 'dialog-component',
    template: dialogTemplate,
    onConnected: dialogScript,
  },
]);
