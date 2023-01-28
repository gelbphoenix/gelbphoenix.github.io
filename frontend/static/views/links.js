import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Links | Phoenix Paulina Schmid");
    };

    async getHtml() {
        return `
            <section class="container">
                <div style="display: flex; justify-content: center;">
                    <h2 class="heading">
                        Weitere Links
                    </h2>
                </div>
                    <li>
                        <a class="links" href="https://www.amazon.de/hz/wishlist/ls/212ZM8SYKHF58?ref_=wl_share" target="_blank">
                            <img src="/frontend/index/icons/gift.png" alt="HTML-Logo" style="width: 1rem;">
                            Wishlist
                        </a>
                    </li>
                </section>
                <section class="container-bottom">
                    <div style="display: flex; justify-content: center;">
                        <h2 class="heading">Meine GitHub-Repositories:</h2>
                    </div>
                    <div class="content-bar">
                        <div class="content-box">
                            <h4 style="margin-block-end: 1rem;">Diese Webpage</h4>
                            <a href="https://github.com/gelbphoenix/gelbphoenix.github.io" class="box-botton">Repository</a>
                        </div>
                    </div>
                </section>
        `;
    }
}