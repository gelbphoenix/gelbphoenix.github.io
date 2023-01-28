import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Social Media | Phoenix Paulina Schmid");
    };

    async getHtml() {
        return `
            <section class="container-bottom">
                <div style="display: flex; justify-content: center;">
                    <h2 class="heading">Meine Social Media Accounts</h2>
                </div>
                <li>
                   <a class="links" href="https://www.instagram.com/gelbphoenix">
                        <img src="/frontend/index/icons/instagram.png" alt="HTML-Logo" style="width: 0.875rem;">
                        Instagram
                   </a>
                </li>
                <li>
                    <a class="links" href="https://www.twitter.com/gelbphoenix">
                        <img src="/frontend/index/icons/twitter.png" alt="HTML-Logo" style="width: 0.875rem;">
                        Twitter
                    </a>
                </li>
                <li>
                    <a class="links" href="https://www.linkedin.com/in/gelbphoenix">
                        <img src="/frontend/index/icons/linkedin.png" alt="HTML-Logo" style="width: 0.875rem;">
                        Linkedin
                    </a>
                </li>
                <li>
                    <a class="links" href="https://github.com/gelbphoenix">
                        <img src="/frontend/index/icons/github.png" alt="HTML-Logo" style="width: 0.875rem;">
                        GitHub
                    </a>
                </li>
            </section>
        `;
    }
}