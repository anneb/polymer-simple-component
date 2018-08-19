
import {LitElement, html} from '@polymer/lit-element';
class SimpleComponent extends LitElement {
  _render() {
    return html`<div><img src="../../images/spinner.gif" alt="Spinner"></div>`;
  }
}
customElements.define('simple-component', SimpleComponent);
