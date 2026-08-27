/**
 * Defines a custom navigation bar element that is shared by all pages of the website.
 * Utilizes Bootstrap css and javascript to build.
 */
class Navbar extends HTMLElement {

    /** HTML and CSS to create the navbar element */
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="./css/bootstrap/bootstrap.min.css">
            <link rel="stylesheet" href="./css/navbar.css">
            <script src="./js/bootstrap/bootstrap.min.js"></script>

            <nav class="navbar navbar-dark custom-nav navbar-expand-lg" role="navigation">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index">Annora Streible</a>

                    <button class="navbar-toggler" type="button" id="navToggle" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbar">
                        <ul class="navbar-nav gap-lg-3">
                            <li class="nav-item px-2">
                                <a class="nav-link" href="about-me">About Me</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link" href="projects">Projects</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link" href="contacts">Contacts</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link" href="./assets/documents/STREIBLE_ANNORA_Resume.pdf" target="_blank" title="View PDF">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `
    }

    /** 
     * Connected callback to detect navigation collapse toggle, recreating the standard functionality
     * Bootstrap would provide outside of a custom shadow element.
     * 
     * Also detects the page currently active and marks this page in the navigation bar as current
     */
    connectedCallback() {
        const shadow = this.shadowRoot;
        const toggler = shadow.getElementById('navToggle');
        const collapseMenu = shadow.getElementById('navbar');

        toggler.addEventListener('click', () => {
        if (collapseMenu.classList.contains('show')) {
            collapseMenu.classList.remove('show');
        } else {
            collapseMenu.classList.add('show');
        }
        });

        const currLocation = window.location.pathname;
        const navLinks = shadow.querySelectorAll('.navbar-nav .nav-link');

        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;

            if (currLocation === linkPath) {
                link.classList.add('active');
                link.closest('.nav-item').classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }
}
customElements.define('nav-bar', Navbar);