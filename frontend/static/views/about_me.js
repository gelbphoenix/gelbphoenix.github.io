import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Über mich | Phoenix Paulina Schmid");
    };

    async getHtml() {
        return `
            <section class="container-bottom" id="about_me">
                <div>
                    <h3 class="heading">
                        Über mich:
                    </h3>
                </div>
                <div class="content-bar" style="align-items: flex-start;">
                    <div class="content-am">
                        <h4>Politik:</h4>
                        <div id="politic-infos" style="flex-direction: column;">
                            <p>
                                Ich bin 2019 der FDP und den Jungen Liberalen beigetreten. 2019 wurde ich ebenfalls auch Beisitzerin im Bezirks&#173;vorstand der Julis OWL, welches ich bis 2020 ausgeübt habe.<br><br>
                                Nach der Bundestagswahl 2021 bin ich der liberalen queer&#173;politischen Vorfelds&#173;organisa&#173;tion LiSL beigetreten und wurde 2022 in den Landesvorstand von LiSL NRW gewählt.
                            </p>
                        </div>
                    </div>                    
                    <div class="content-am">
                        <h4>Coding:</h4>
                        <div id="code-infos" class="code-style" style="display:flex; flex-direction: column;">
                            <p>
                                In der Vergangenheit habe ich ein bisschen mich in der Scriptsprache Batch ausprobiert, allerdings schnell wieder an der Aktivität die Motivation verloren. Ende 2022/Anfang 2023 dann, habe ich das Interesse am Programmieren gefunden und angefangen dies zu lernen.<br><br>
                                Aktuell wurden von mir mit HTML, CSS und Javascript nur einige private Browser&#173;erweiter&#173;ungen und Webpages gecoded.
                            </p>
                            <a href="/projects" class="box-botton">
                                <span style="font-style: italic;">Zu meinen Projekten</span>
                            </a>
                        </div>
                    </div>                    
                    <div class="content-am">
                        <h4>Generell:</h4>
                        <div id="general-infos" style="padding-left: 5px; padding-right: 5px;">
                            <p>
                                2001 wurde ich in der Stadt Essen im Ruhrgebiet geboren. 2007 dann, zog ich als 5 Jährige nach Ostwestfalen-Lippe in die Stadt Schloß Holte-Stukenbrock, in der ich auch meinen Realschulabschluss gemacht habe.<br>
                                2021 zog ich dann nach Rheda-Wiedenbrück.<br>
                                <span style="font-style: italic;">To be continued...</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}