class FeatureBox extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <div class="feature">
                
            </div>
        `;
    }
}
customElements.define('feature-box', FeatureBox);