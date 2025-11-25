import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Cookie className="h-10 w-10 text-primary mr-3" />
                <h1 className="text-4xl font-bold text-foreground">Cookie Policy</h1>
              </div>
              <p className="text-muted-foreground">Ultimo aggiornamento: Novembre 2025</p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Cosa Sono i Cookie</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet, 
                  smartphone) quando visiti un sito web. Sono ampiamente utilizzati per far funzionare i siti web 
                  in modo più efficiente e per fornire informazioni ai proprietari del sito.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Tipi di Cookie Utilizzati</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sul nostro sito utilizziamo i seguenti tipi di cookie:
                </p>
                
                <div className="bg-secondary/30 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookie Tecnici (Necessari)</h3>
                  <p className="text-muted-foreground text-sm">
                    Sono essenziali per il funzionamento del sito. Includono cookie che permettono di navigare 
                    nel sito e utilizzarne le funzionalità. Non possono essere disattivati.
                  </p>
                </div>

                <div className="bg-secondary/30 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookie Analitici</h3>
                  <p className="text-muted-foreground text-sm">
                    Ci permettono di contare le visite e le fonti di traffico per misurare e migliorare 
                    le prestazioni del nostro sito. Ci aiutano a sapere quali pagine sono più o meno popolari.
                  </p>
                </div>

                <div className="bg-secondary/30 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookie di Preferenza</h3>
                  <p className="text-muted-foreground text-sm">
                    Permettono al sito di ricordare le scelte che hai fatto (come la lingua o il tema) 
                    e fornire funzionalità personalizzate.
                  </p>
                </div>

                <div className="bg-secondary/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookie di Terze Parti</h3>
                  <p className="text-muted-foreground text-sm">
                    Il nostro sito può includere contenuti di terze parti (es. video, mappe, widget social). 
                    Queste terze parti possono impostare i propri cookie. Non abbiamo controllo su questi cookie.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookie Specifici Utilizzati</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-border rounded-lg">
                    <thead className="bg-secondary/50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Nome</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Tipo</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Durata</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Scopo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 text-sm text-muted-foreground">theme</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Preferenza</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">1 anno</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Memorizza preferenza tema chiaro/scuro</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-muted-foreground">cookie_consent</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Necessario</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">1 anno</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Memorizza il consenso ai cookie</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Come Gestire i Cookie</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Puoi controllare e/o eliminare i cookie come desideri. Puoi eliminare tutti i cookie già 
                  presenti sul tuo dispositivo e impostare la maggior parte dei browser per impedire che vengano salvati.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Per gestire i cookie nel tuo browser:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
                  <li><strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie e dati dei siti web</li>
                  <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
                  <li><strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni sito</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Conseguenze della Disattivazione</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Se decidi di bloccare i cookie, alcune funzionalità del sito potrebbero non funzionare correttamente. 
                  I cookie tecnici sono necessari per il funzionamento base del sito.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Aggiornamenti a Questa Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Potremmo aggiornare questa Cookie Policy periodicamente. Ti invitiamo a controllare questa 
                  pagina regolarmente per eventuali modifiche.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contatti</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Per domande sulla nostra Cookie Policy, contattaci attraverso la nostra pagina Contatti.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
