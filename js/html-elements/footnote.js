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
            <style>
                .footnotes {
                    display: flex;
                    justify-content: space-between;
                    padding: 25px 45px;
                    align-items: center;
                    text-align: left;
                }

                .footnotes h2 {
                    font-weight: bold;
                }

                .footnotes h2 {
                    text-align: left;
                }
                
                .links a {
                    text-decoration: none;
                }
                
                @media(max-width: 768px) {
                    .footnotes { 
                        flex-direction: column; 
                        justify-content: center; 
                        text-align: center;
                    }
                }
            </style>

            <div class="footnotes">
                <div class="title digital-text">
                    <h2>Portfolio name</h2>
                    <p class="digital-text">Roles</p>
                </div>
                <div class="links">
                    <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn">
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