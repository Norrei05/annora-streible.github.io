/**
 * Defines a custom footnote element that is shared by all pages of the website.
 */
class Footnote extends HTMLElement {
    constructor() {
        super();
    }

    /**
     * Creates the html and css of the footnote element and attaches directly to the page itself.
     * A shadow is not used for this custom element to retain it's functionality.
     */
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="./css/footnote.css">
            <div class="footnotes">
                <div class="title digital-text">
                    <h2>Annora Streible</h2>
                    <p class="digital-text">Game Developer</p>
                </div>
                <div class="links">
                    <a href="https://www.linkedin.com/in/annora-streible/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <i class="fa-brands fa-linkedin fa-3x"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" title="Github">
                        <i class="fa-brands fa-github fa-3x"></i>
                    </a>
                </div>
            </div>
        `;
    }
}
customElements.define('foot-note', Footnote)