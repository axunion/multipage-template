interface CustomElementConfig {
  readonly tag: string;
  readonly template: string;
  readonly onConnected?: (this: HTMLElement) => void;
}

export const defineCustomElements = (list: CustomElementConfig[]) => {
  list.forEach((item) => {
    defineCustomElement(item);
  });
};

export const defineCustomElement = ({
  tag,
  template,
  onConnected,
}: CustomElementConfig): void => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(template, 'text/html');
  const el = doc.querySelector('template');

  if (el) {
    const content = el.content;

    window.customElements.define(
      tag,
      class extends HTMLElement {
        constructor() {
          super();
          const node = content.cloneNode(true);
          this.attachShadow({ mode: 'open' }).appendChild(node);
        }

        connectedCallback() {
          onConnected?.call(this);
        }
      }
    );
  }
};
