export class BaseElement extends HTMLElement {
  constructor(template: string) {
    super();

    const parser = new DOMParser();
    const doc = parser.parseFromString(template, 'text/html');
    const el = doc.querySelector('template');
    const content = el?.content;

    if (content) {
      this.attachShadow({ mode: 'open' }).appendChild(content.cloneNode(true));
    }
  }
}
