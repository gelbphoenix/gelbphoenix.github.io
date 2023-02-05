import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home | Phoenix Paulina Schmid");
    };

    async getHtml() {
        return `
            <section class="container" id="welcome">
                <div class="welcome" id="welcome">
                    <div class="welcome-bl">
                        <img src="/frontend/index/Design ohne Titel (72).png" alt="Platzhalter" class="welcome-img">
                    </div>
                    <div class="welcome-br">
                        <div class="welcome-msg">
                            <h2>Herzlich Willkommen!</h2>
                            <h3>
                                Phoenix Paulina Schmid,<br>
                                <span style="font-style: italic; font-size: medium;">
                                    Politikerin und <br> Lernende Developerin
                                </span>
                            </h3>
                            <p style="padding-left: 10px; padding-right: 10px;">
                                Willkommen auf meiner Seite mit angehängtem Portfolio.
                            </p>
                        </div>
                    </div>
                </div>              
            </section>
            <section class="container-bottom" id="contact">
                <div style="display: flex; justify-content: center;">
                    <h3 class="heading">
                        Kontakt:
                    </h3>
                </div>
                <div class="content-bar">
                    <div class="content-box-map">
                        <div class="contact-map">
                            <iframe style="border-radius: 20px; max-width: 100%; border: 0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78878.1180286658!2d8.30075100000001!3d51.84376980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba2917dbfe9f83%3A0x427f28131548350!2s33378%20Rheda-Wiedenbr%C3%BCck!5e0!3m2!1sde!2sde!4v1673994201563!5m2!1sde!2sde" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                            
                        </div>
                    </div>
                    <div class="content-box">
                        <div class="contact-sm">
                            <div>
                                <a href="/social_media" class="box-botton" data-link>
                                    <span style="font-style: italic;">Social Media</span>
                                </a>
                            </div>
                            <div style="padding-top: 25px;">
                                <a href="mailto:phoenix.schmid@fn.de" class="box-botton">
                                    <span style="font-style: italic;">E-Mail</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}