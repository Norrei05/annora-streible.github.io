/**
 * Defines a custom footnote element that is shared by all pages of the website.
 */
class FootNote extends HTMLElement {

    /** 
     * Constructs the element
     */
    constructor() {
        super();
    }

    /**
     * Constructs the html and css of the footnote element and attaches directly to the page itself.
     * A shadow is not used for this custom element to retain it's functionality.
     */
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="./web-components/foot-note/foot-note.css">
            <div class="footnotes">
                <div class="title">
                    <h2>Annora Streible</h2>
                </div>
                <div class="links">
                    <a class="social" href="https://www.linkedin.com/in/annora-streible/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <i class="fa-brands fa-linkedin fa-3x"></i>
                    </a>
                </div>
            </div>
        `;
    }
}
customElements.define('foot-note', FootNote)