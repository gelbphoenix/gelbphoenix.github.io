import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Datenschutz | Phoenix Paulina Schmid");
    };

    async getHtml() {
        return `
        <section class="container-bottom" style="display: flex; justify-content: center;">
            <div class="impressum">
                <h1>Datenschutzerklärung</h1>
                <h2 id="m14">Einleitung</h2>
                <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot“).</p>
                <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
                <p>Stand: 16. Januar 2023</p>
                <h2>Inhaltsübersicht</h2>
                <ul>
                    <li><a>Einleitung</a></li>
                    <li><a>Verantwortlicher</a></li>
                    <li><a>Übersicht der Verarbeitungen</a></li>
                    <li><a>Maßgebliche Rechtsgrundlagen</a></li>
                    <li><a>Sicherheitsmaßnahmen</a></li>
                    <li><a>Bereitstellung des Onlineangebotes und Webhosting</a></li>
                    <li><a>Kontakt- und Anfragenverwaltung</a></li>
                    <li><a>Präsenzen in sozialen Netzwerken (Social Media)</a></li>
                    <li><a>Plugins und eingebettete Funktionen sowie Inhalte</a></li>
                    <li><a>Änderung und Aktualisierung der Datenschutzerklärung</a></li>
                    <li><a>Rechte der betroffenen Personen</a></li>
                </ul>
                <h2>Verantwortliche</h2>
                <p>Phoenix Paulina Schmid</p>
                <p>
                    E-Mail-Adresse: 
                    <a href="mailto:phoenix@gelbphoenix.de">
                        phoenix@gelbphoenix.de
                    </a><br>
                    Impressum: 
                    <a href="/imprint" target="_blank">
                        https://gelbphoenix.de/imprint
                    </a>
                </p>
                <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
                <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
                <h3>Arten der verarbeiteten Daten</h3>
                <ul>
                    <li>Kontaktdaten.</li>
                    <li>Inhaltsdaten.</li>
                    <li>Nutzungsdaten.</li>
                    <li>Meta-/Kommunikationsdaten.</li>
                </ul>
                <h3>Kategorien betroffener Personen</h3>
                <ul>
                    <li>Kommunikationspartner.</li>
                    <li>Nutzer.</li>
                </ul>
                <h3>Zwecke der Verarbeitung</h3>
                <ul>
                    <li>Kontaktanfragen und Kommunikation.</li>
                    <li>Verwaltung und Beantwortung von Anfragen.</li>
                    <li>Feedback.</li>
                    <li>Marketing.</li>
                    <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                    <li>Informationstechnische Infrastruktur.</li>
                </ul>
                <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
                <p>Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.</p>
                <ul>
                    <li>
                        <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
                    </li>
                </ul>
                <p>Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick auf die Begründung, Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.</p>
                <h2 id="m27">Sicherheitsmaßnahmen</h2>
                <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
                <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.</p>
                <p>TLS-Verschlüsselung (https): Um Ihre via unserem Online-Angebot übermittelten Daten zu schützen, nutzen wir eine TLS-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https:// in der Adresszeile Ihres Browsers.</p>
                <h2>Bereitstellung des Onlineangebotes und Webhosting</h2><p>Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.</p>
                <ul>
                    <li>
                        <strong>Verarbeitete Datenarten:</strong>
                        Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li><li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li><li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.).).</li><li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li></ul><p><strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong></p><ul class="m-elements"><li><strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz: </strong>Für die Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem entsprechenden Serveranbieter (auch "Webhoster" genannt) mieten oder anderweitig beziehen; <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li></ul><h2 id="m182">Kontakt- und Anfragenverwaltung</h2><p>Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.</p>
                <ul>
                    <li>
                        <strong>Verarbeitete Datenarten:</strong>
                        Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li><li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li><li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback (z.B. Sammeln von Feedback via Online-Formular); Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li><li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li></ul><h2 id="m136">Präsenzen in sozialen Netzwerken (Social Media)</h2><p>Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Daten der Nutzer, um mit den dort aktiven Nutzern zu kommunizieren oder um Informationen über uns anzubieten.</p>
                <p>Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer erschwert werden könnte.</p>
                <p>Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können z.B. anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräte gespeichert werden (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind).</p>
                <p>Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-Out) verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.</p>
                <p>Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff auf die Daten der Nutzer und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns wenden.</p>
                <ul>
                    <li>
                        <strong>Verarbeitete Datenarten:</strong>
                        Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                        <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
                        </li>
                        <li>
                            <strong>Zwecke der Verarbeitung:</strong> 
                            Kontaktanfragen und Kommunikation; Feedback (z.B. Sammeln von Feedback via Online-Formular); Marketing.
                        </li>
                        <li>
                            <strong>Rechtsgrundlagen:</strong> 
                            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                        </li>
                    </ul>
                    <p>
                        <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Instagram: </strong>Soziales Netzwerk; 
                            <strong>Dienstanbieter:</strong> Meta Platforms Irland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland; 
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); 
                            <strong>Website:</strong> 
                            <a href="https://www.instagram.com" target="_blank">https://www.instagram.com</a>; 
                            <strong>Datenschutzerklärung:</strong> 
                            <a href="https://instagram.com/about/legal/privacy" target="_blank">https://instagram.com/about/legal/privacy</a>.
                        </li>
                        <li>
                            <strong>LinkedIn: </strong>Soziales Netzwerk; 
                            <strong>Dienstanbieter:</strong> LinkedIn Irland Unlimited Company, Wilton Plaza Wilton Place, Dublin 2, Irland; 
                            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); 
                            <strong>Website:</strong> 
                            <a href="https://www.linkedin.com" target="_blank">https://www.linkedin.com</a>; 
                            <strong>Datenschutzerklärung:</strong> 
                            <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">https://www.linkedin.com/legal/privacy-policy</a>; 
                            <strong>Auftragsverarbeitungsvertrag:</strong> <a href="https://legal.linkedin.com/dpa" target="_blank">https://legal.linkedin.com/dpa</a>; 
                            <strong>Standardvertragsklauseln (Gewährleistung Datenschutzniveau bei Verarbeitung in Drittländern):</strong> 
                            <a href="https://legal.linkedin.com/dpa" target="_blank">https://legal.linkedin.com/dpa</a>; 
                            <strong>Widerspruchsmöglichkeit (Opt-Out):</strong> 
                            <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.
                    </li>
                    <li>
                        <strong>Twitter: </strong>Soziales Netzwerk; 
                        <strong>Dienstanbieter:</strong> Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2 D02 AX07, Irland, Mutterunternehmen: Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA; 
                        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); 
                        <strong>Datenschutzerklärung:</strong> 
                        <a href="https://twitter.com/privacy" target="_blank">https://twitter.com/privacy</a>, 
                        (Settings: <a href="https://twitter.com/personalization" target="_blank">https://twitter.com/personalization</a>).
                    </li>
                </ul>
                <h2>Plugins und eingebettete Funktionen sowie Inhalte</h2>
                <p>Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend bezeichnet als "Drittanbieter”) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos oder Stadtpläne handeln (nachfolgend einheitlich bezeichnet als "Inhalte”).</p>
                <p>Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner sogenannte Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den Seiten dieser Webseite, ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische Informationen zum Browser und zum Betriebssystem, zu verweisenden Webseiten, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten als auch mit solchen Informationen aus anderen Quellen verbunden werden.</p>
                <ul>
                    <li>
                        <strong>Verarbeitete Datenarten:</strong>
                        Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
                    </li>
                    <li>
                        <strong>Betroffene Personen:</strong>
                        Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
                    </li>
                    <li>
                        <strong>Zwecke der Verarbeitung:</strong>
                        Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
                    </li>
                    <li>
                        <strong>Rechtsgrundlagen:</strong>
                        Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                    </li>
                </ul>
                <p>
                    <strong>Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
                </p>
                <ul>
                    <li>
                        <strong>Google Fonts (Bezug vom Google Server): </strong>
                            Bezug von Schriften (und Symbolen) zum Zwecke einer technisch sicheren, wartungsfreien und effizienten Nutzung von Schriften und Symbolen im Hinblick auf Aktualität und Ladezeiten, deren einheitliche Darstellung und Berücksichtigung möglicher lizenzrechtlicher Beschränkungen. Dem Anbieter der Schriftarten wird die IP-Adresse des Nutzers mitgeteilt, damit die Schriftarten im Browser des Nutzers zur Verfügung gestellt werden können. Darüber hinaus werden technische Daten (Spracheinstellungen, Bildschirmauflösung, Betriebssystem, verwendete Hardware) übermittelt, die für die Bereitstellung der Schriften in Abhängigkeit von den verwendeten Geräten und der technischen Umgebung notwendig sind. Diese Daten können auf einem Server des Anbieters der Schriftarten in den USA verarbeitet werden - Beim Besuch unseres Onlineangebotes senden die Browser der Nutzer ihre Browser HTTP-Anfragen an die Google Fonts Web API (d.h. eine Softwareschnittstelle für den Abruf der Schriftarten). Die Google Fonts Web API stellt den Nutzern die Cascading Style Sheets (CSS) von Google Fonts und danach die in der CCS angegebenen Schriftarten zur Verfügung. Zu diesen HTTP-Anfragen gehören (1) die vom jeweiligen Nutzer für den Zugriff auf das Internet verwendete IP-Adresse, (2) die angeforderte URL auf dem Google-Server und (3) die HTTP-Header, einschließlich des User-Agents, der die Browser- und Betriebssystemversionen der Websitebesucher beschreibt, sowie die Verweis-URL (d.h. die Webseite, auf der die Google-Schriftart angezeigt werden soll). IP-Adressen werden weder auf Google-Servern protokolliert noch gespeichert und sie werden nicht analysiert. Die Google Fonts Web API protokolliert Details der HTTP-Anfragen (angeforderte URL, User-Agent und Verweis-URL). Der Zugriff auf diese Daten ist eingeschränkt und streng kontrolliert. Die angeforderte URL identifiziert die Schriftfamilien, für die der Nutzer Schriftarten laden möchte. Diese Daten werden protokolliert, damit Google bestimmen kann, wie oft eine bestimmte Schriftfamilie angefordert wird. Bei der Google Fonts Web API muss der User-Agent die Schriftart anpassen, die für den jeweiligen Browsertyp generiert wird. Der User-Agent wird in erster Linie zum Debugging protokolliert und verwendet, um aggregierte Nutzungsstatistiken zu generieren, mit denen die Beliebtheit von Schriftfamilien gemessen wird. Diese zusammengefassten Nutzungsstatistiken werden auf der Seite „Analysen“ von Google Fonts veröffentlicht. Schließlich wird die Verweis-URL protokolliert, sodass die Daten für die Wartung der Produktion verwendet und ein aggregierter Bericht zu den Top-Integrationen basierend auf der Anzahl der Schriftartenanfragen generiert werden kann. Google verwendet laut eigener Auskunft keine der von Google Fonts erfassten Informationen, um Profile von Endnutzern zu erstellen oder zielgerichtete Anzeigen zu schalten; <strong>Dienstanbieter:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland;
                            <strong>Rechtsgrundlagen:</strong>
                            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                            <strong>Website:</strong>
                            <a href="https://fonts.google.com/" target="_blank">https://fonts.google.com/</a>;
                            <strong>Datenschutzerklärung:</strong>
                            <a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>; 
                            <strong>Weitere Informationen:</strong> 
                            <a href="https://developers.google.com/fonts/faq/privacy?hl=de" target="_blank">https://developers.google.com/fonts/faq/privacy?hl=de</a>.
                        </li>
                </ul>
                <h2>Änderung und Aktualisierung der Datenschutzerklärung</h2>
                <p>Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.</p>
                <p>Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.</p>
                <h2>Rechte der betroffenen Personen</h2>
                <p>Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</p>
                <ul>
                    <li>
                        <strong>Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.</strong></li>
                        <li>
                            <strong>Widerrufsrecht bei Einwilligungen:</strong>
                            Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
                        </li>
                        <li>
                            <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.</li><li><strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</li><li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.</li><li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
                        </li>
                        <li>
                            <strong>Beschwerde bei Aufsichtsbehörde:</strong> Entsprechend den gesetzlichen Vorgaben und unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs, haben Sie ferner das Recht,  bei einer Datenschutzaufsichtsbehörde, insbesondere einer Aufsichtsbehörde im Mitgliedstaat, in dem Sie sich gewöhnlich aufhalten, der Aufsichtsbehörde Ihres Arbeitsplatzes oder des Ortes des mutmaßlichen Verstoßes, eine Beschwerde einzulegen, wenn Sie der Ansicht sei sollten, dass die Verarbeitung der Ihre Person betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
                        </li>
                </ul>
            </div>
        </section> 
        `;
    }
}