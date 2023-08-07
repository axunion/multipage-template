import './style.css';
import { DialogComponent } from '@/components/Dialog';
import { FooterComponent } from '@/components/Footer';
import { HeaderComponent } from '@/components/Header';

const componentList: Record<string, CustomElementConstructor> = {
  'dialog-component': DialogComponent,
  'footer-component': FooterComponent,
  'header-component': HeaderComponent,
};

for (const key in componentList) {
  customElements.define(key, componentList[key]);
}
