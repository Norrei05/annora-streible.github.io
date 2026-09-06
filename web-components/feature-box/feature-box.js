/**
 * Defines a custom featured project element that is shared by all pages of the website.
 */
class FeatureBox extends HTMLElement {

    /** 
     * Constructs the html of the element and adds in stylesheets
     */
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="./web-components/feature-box/feature-box.css">

            <div class="feature">
                <div class="title">
                    <h3><slot name="title"></slot></h3>
                </div>
                
                <div class="content">
                    <slot name="preview-img"></slot>
                    <p><slot name="details"></slot></p>
                </div>
            </div>
        `;
    }
}
customElements.define('feature-box', FeatureBox);