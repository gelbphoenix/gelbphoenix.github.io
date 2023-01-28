import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Impressum | Phoenix Paulina Schmid");
    };

    async getHtml() {
        return `
        <section class="container-bottom" style="display: flex; justify-content: center;">
            <div class='impressum'>
                <h1>Impressum</h1>
                <p>Angaben gemäß § 5 TMG</p>
                <p>Phoenix Paulina Schmid<br> 
                    (Adresse aus Privatsgründen auf Anfrage)<br>
                </p>
                <p>
                    <strong>Kontakt:</strong> <br>
                    E-Mail:<a href='mailto:phoenix@gelbphoenix.de'>phoenix@gelbphoenix.de</a></br>
                </p>
                <p>
                    <strong>Haftungsausschluss: </strong><br><br>
                    <strong>Haftung für Links</strong><br><br>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
            </div>
        </section>
        `;
    }
}