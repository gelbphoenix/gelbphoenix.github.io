import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projekte | Phoenix Paulina Schmid");
    };

    async getHtml() {
        return `
            <section class="container">
                <div style="display: flex; justify-content: center;">
                    <h3 class="heading">
                        Technologien:
                    </h3>
                </div>
                <div class="content-bar">
                    <div class="content-box">
                        <h4>Webdevelopment</h4>
                        <div style="text-align: center;">
                            <img src="/frontend/index/icons/html.png" alt="HTML-Logo" style="width: 0.65rem;">
                            <span>HTML</span>
                        </div>
                        <div style="text-align: center;">
                            <img src="/frontend/index/icons/CSS.png" alt="CSS-Logo" style="width: 0.75rem;">
                            <span>CSS</span>
                        </div>
                        <div style="text-align: center;">
                            <img src="/frontend/index/icons/javascript.png" alt="JS-Logo" style="width: 0.8rem;">
                            <span>JavaScript</span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container-bottom">
                <div style="display: flex; justify-content: center;">
                    <h3 class="heading">
                        Projekte:
                    </h3>
                </div>
                <div class="content-bar">
                    <div class="content-box">
                        <h4 style="margin-block-start: 0.5rem; margin-block-end: 0;">Diese Webpage</h4>
                        <img src="/frontend/index/favicon.png" style="width: 3rem;">
                        <p style="margin-block-start: .2rem;">Diese Webpage wurde von mir zu 100% selber geschrieben und gestaltet.</p>
                        <a href="https://github.com/gelbphoenix/gelbphoenix.github.io" class="box-botton">Source Code</a>
                    </div>
                </div>
            </section>
        `;
    }
}