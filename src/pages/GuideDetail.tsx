import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle
} from "lucide-react";

// Dati di esempio - in futuro verranno da un database
const guidesData: Record<string, {
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  authorAvatar: string;
  readTime: string;
  location: string;
  category: string;
  date: string;
  image: string;
  likes: number;
  comments: number;
}> = {
  "tende-da-tetto-confronto-morbide-guscio-rigido-ibride": {
    title: "Tende da tetto a confronto: morbide vs a guscio rigido vs ibride",
    excerpt: "Guida completa alle tre famiglie di tende da tetto: morbide a libro, guscio rigido a pantografo e ibride. Vantaggi, svantaggi e quale scegliere per il tuo stile di viaggio.",
    content: [
      "Nel mondo delle tende da tetto per auto, tre sono le grandi famiglie che dominano il mercato: le **tende da tetto morbide** (o con apertura a libro), le **tende da tetto a guscio rigido** (o con apertura a pantografo e compasso) e le **tende ibride**.",
      "Tutte permettono di trasformare il veicolo in un vero mini-camper, ma presentano differenze importanti in termini di comodità, rapidità di utilizzo, aerodinamica e versatilità. Vediamole nel dettaglio.",
      "![Confronto tra i diversi tipi di tende da tetto](/img_articles/gusci_comparazione/tende_gusci.png)",
      "## 1. Tende da tetto morbide con apertura a libro",
      "**Esempi:** Swisskings, Yakima, Decathlon, Thule Tepui, ecc.",
      "### Come funzionano",
      "Si aprono ribaltando una parte della tenda verso l'esterno, creando una superficie di appoggio che poggia su una scala telescopica. Una metà della tenda rimane sopra il tetto dell'auto, l'altra \"sporge\" nel vuoto.",
      "### Vantaggi",
      "**Spazio interno maggiore**\n\nGrazie all'estensione laterale, offrono spesso:\n- Superfici letto più ampie\n- Maggiore altezza interna in alcune zone\n- Possibilità di ospitare comodamente 2–3 persone (talvolta anche 4)\n- Permettono in caso di pioggia di salire all'asciutto in tenda",
      "**Prezzo più accessibile**\n\nIn media costano meno rispetto ai modelli a pantografo, rendendole ideali per:\n- Chi si avvicina per la prima volta al mondo delle tende da tetto\n- Famiglie o gruppi",
      "**Versatilità**\n\nMolti modelli permettono:\n- L'aggiunta di verande, tende annesse o stanze inferiori\n- Utilizzo prolungato in campeggio stanziale",
      "### Svantaggi",
      "**Tempi di apertura e chiusura più lunghi**\n\nRichiedono:\n- Apertura manuale\n- Posizionamento della scala\n- Maggiore attenzione in fase di chiusura del telo",
      "**Maggiore ingombro**\n- Più voluminose una volta aperte\n- Più sensibili al vento\n- Meno aerodinamiche durante la guida",
      "**Gestione più complessa in caso di pioggia o fango**\n\nIl telo può bagnarsi o sporcarsi facilmente, rendendo la chiusura meno pratica.",
      "## 2. Tende da tetto a guscio rigido o con apertura a pantografo e compasso",
      "**Esempi:** Maggiolina, Xalpharooftent, James Baroud, Autohome, ecc.",
      "### Come funzionano",
      "Sono costituite da un guscio rigido che si solleva verticalmente o maggiormente in un lato, tramite molle a gas o manovella. Il tessuto resta sempre protetto all'interno del guscio quando chiusa.",
      "![Tenda da tetto a guscio rigido](/img_articles/gusci_comparazione/tende_gusci_2.png)",
      "### Vantaggi",
      "**Apertura e chiusura rapidissime**\n\nIn pochi secondi:\n- Si aprono quasi senza sforzo\n- Si chiudono anche con condizioni meteo avverse\n\nIdeali per chi fa itinerari in movimento, con soste frequenti.",
      "**Aerodinamica e silenziosità**\n- Profilo compatto\n- Minori consumi\n- Meno rumore durante la marcia",
      "**Maggiore protezione dagli agenti atmosferici**\n\nIl guscio rigido:\n- Protegge il tessuto da pioggia, sole e sporco\n- Aumenta la durata nel tempo\n- Migliora l'isolamento termico e acustico",
      "### Svantaggi",
      "**Spazio interno più contenuto**\n- Superficie letto generalmente più ridotta\n- Meno adatte a famiglie numerose",
      "**Costo più elevato**\n\nEsistono vari materiali di cui è fatta la scocca: vetroresina, ABS, alluminio, carbonio. La qualità dei materiali e la meccanica incidono sul prezzo finale.",
      "**Minore possibilità di accessori esterni**\n- Veranda o ampliamenti spesso non disponibili e meno spaziosi\n- Meno flessibilità in campeggio stanziale",
      "## 3. Tende da tetto ibride",
      "**Esempi:** iKamper Skycamp, Vickywood Hybrid, ecc.",
      "### Come funzionano",
      "Sono costituite da un guscio rigido che si solleva lateralmente nel lato lungo per poi avere una struttura che esce e va ad appoggiarsi alla scaletta estendendo molto la superficie.",
      "### Vantaggi",
      "**Apertura e chiusura simili ai tempi di una pieghevole**\n\nIn pochi secondi:\n- Si aprono quasi senza sforzo\n- Si chiudono anche con condizioni meteo avverse\n- Sono disponibili estensioni e annex veramente molto spaziosi",
      "**Aerodinamica e silenziosità**\n- Profilo compatto\n- Minori consumi\n- Meno rumore durante la marcia",
      "**Maggiore protezione dagli agenti atmosferici**\n\nIl guscio rigido:\n- Protegge il tessuto da pioggia, sole e sporco\n- Aumenta la durata nel tempo\n- Migliora l'isolamento termico e acustico",
      "### Svantaggi",
      "**Costo più elevato**\n\nEsistono vari materiali di cui è fatta la scocca: vetroresina, ABS, alluminio, carbonio. La qualità dei materiali e la meccanica incidono sul prezzo finale.",
      "**Tempi di apertura e chiusura più lunghi**\n\nRichiedono:\n- Apertura manuale\n- Posizionamento della scala\n- Maggiore attenzione in fase di chiusura del telo",
      "## Quale tenda da tetto scegliere?",
      "La scelta dipende principalmente da come viaggi e come vivi il campeggio. È importante iniziare a scegliere la propria tenda dalle esigenze, non da un modello:",
      "| Esigenza | Pieghevole | Guscio rigido | Ibrida |\n|----------|:----------:|:-------------:|:------:|\n| Famiglia o più persone | ✅ | ❌ | ✅ |\n| Viaggi itineranti | ❌ | ✅ | ❌ |\n| Apertura/chiusura rapida | ❌ | ✅ | ❌ |\n| Budget contenuto | ✅ | ❌ | ❌ |\n| Uso in tutte le stagioni | ⚠️ | ⚠️ | ⚠️ |\n| Campeggio stanziale | ✅ | ❌ | ✅ |",
      "## Conclusione",
      "Non esiste una tenda da tetto \"migliore in assoluto\", ma la **tenda giusta per il tuo stile di viaggio**.",
      "Le tende a libro privilegiano spazio e versatilità, mentre le tende a guscio rigido puntano su comfort, rapidità e protezione.",
      "Sul nostro sito **Tende da tetto e campeggio** trovi convenzioni con produttori e rivenditori di tutti i modelli, con schede tecniche dettagliate e consigli personalizzati per aiutarti a scegliere la soluzione più adatta alle tue avventure."
    ],
    author: "Lo Staff di Tende da Tetto",
    authorAvatar: "/logo_tende.jpg",
    readTime: "5 min",
    location: "Italia",
    category: "Attrezzatura",
    date: "31 Gennaio 2026",
    image: "/img_articles/gusci_comparazione/tende_gusci.png",
    likes: 0,
    comments: 0
  },
  "dieci-giorni-liberta-elba-tenda-tetto": {
    title: "Dieci giorni di libertà: due donne, una tenda da tetto e l'Italia che profuma di sale",
    excerpt: "Un viaggio di 10 giorni dall'auto camperizzata con tenda da tetto: da Genova all'Isola d'Elba, tra spiagge, biciclette e la Toscana che respira.",
    content: [
      "Partire non è mai solo spostarsi. A volte è un atto di fiducia, altre una necessità, altre ancora una dichiarazione d'indipendenza. Per noi è stato tutto questo insieme. Dieci giorni, un'auto camperizzata con tenda da tetto, due biciclette sempre pronte e una rotta che da Genova ci ha portate fino all'Isola d'Elba, attraversando il blu del Tirreno e il verde ruvido della Toscana.",
      "Non cercavamo una vacanza comoda. Cercavamo spazio, lentezza, strade secondarie e la sensazione di poterci fermare quando volevamo. E così è stato.",
      "## Da Genova al mare aperto",
      "Lasciare Genova significa salutare una città verticale, intensa, che ti accompagna fino all'ultimo tornante prima di aprirsi al mare. L'auto è carica ma ordinata: il necessario, niente di più. La tenda da tetto è lì, promessa di notti sospese. Le biciclette sul retro sono una certezza: saranno le nostre vere ali.",
      "Il viaggio verso Piombino scorre tra autostrada e strade costiere, con il mare che appare e scompare. Arrivare al porto è sempre un piccolo rito: l'attesa del traghetto, il vento, l'odore di salsedine. Quando l'Isola d'Elba emerge all'orizzonte, verde e montuosa, capiamo subito che dieci giorni forse non basteranno.",
      "![L'arrivo all'Isola d'Elba, panorama mozzafiato sul mare turchese](/img_articles/nat_vale_elba/01_elba.jpg)",
      "## Capoliveri: il cuore dell'isola",
      "Sbarcare all'Elba è come entrare in un'altra dimensione. Le distanze si accorciano, il tempo rallenta. Capoliveri diventa il nostro punto di riferimento: un borgo arroccato, vivo, con vicoli che sembrano fatti apposta per perdersi.",
      "Parcheggiamo l'auto, sistemiamo la nostra \"casa mobile\" e iniziamo a muoverci in bicicletta. Salite impegnative, discese che tolgono il fiato, panorami che ripagano ogni goccia di sudore. Pedalare sull'isola significa sentirla davvero: il profumo della macchia mediterranea, il rumore delle cicale, il silenzio improvviso quando la strada si affaccia sul mare.",
      "## Spiagge, una diversa dall'altra",
      "Ogni giorno una spiaggia. A volte due. Sabbia chiara, ciottoli, scogli, calette nascoste. L'Elba non si concede tutta subito, va esplorata. Raggiungiamo alcune spiagge direttamente in bici, altre combinando pedalate e brevi tratti a piedi.",
      "Ci sono mattine in cui arriviamo presto, quando il mare è liscio come vetro e sembra aspettarti. Altre volte restiamo fino al tramonto, con la pelle salata e la sensazione di aver vissuto qualcosa di semplice e perfetto. Il mare diventa una costante, un compagno di viaggio che cambia colore e umore ma non delude mai.",
      "![Momenti al tramonto sul mare](/img_articles/nat_vale_elba/02_elba.jpg)",
      "## Vivere in poco, vivere meglio",
      "La nostra auto camperizzata è essenziale, ma è tutto ciò che ci serve. Cuciniamo sempre lì: pasta veloce, verdure, piatti semplici che sanno di casa anche a chilometri di distanza. La sera, dopo le giornate in bici, mangiare sedute davanti all'auto, con il cielo che si spegne lentamente, è uno dei momenti più belli.",
      "Per le notti ci appoggiamo a strutture di campeggio: una scelta che ci permette di essere autonome ma anche di avere un punto sicuro, una doccia calda, un contatto umano. Aprire la tenda da tetto è ormai un gesto automatico. Dormire lì sopra, con i rumori dell'isola intorno, regala un senso di protezione e libertà difficile da spiegare.",
      "## L'addio all'isola e il ritorno sulla terraferma",
      "Lasciare l'Elba non è facile. C'è sempre la sensazione di aver saltato qualcosa, una spiaggia in più, una strada non percorsa. Ma il viaggio continua.",
      "Rientriamo in Toscana e ci dirigiamo verso Baratti e San Vincenzo. Il paesaggio cambia: più ampio, più dolce. Qui la bici assume un altro ritmo. Pedaliamo tra pinete, strade bianche, tratti costieri che sembrano disegnati per essere attraversati lentamente.",
      "## Baratti e San Vincenzo: la Toscana che respira",
      "Il Golfo di Baratti è una pausa naturale. Mare calmo, storia etrusca, luce morbida. Ci fermiamo, nuotiamo, osserviamo. San Vincenzo invece è più viva, più movimentata, ma mantiene un equilibrio che ci piace. Anche qui troviamo il nostro ritmo: bici di giorno, cucina serale, notti tranquille.",
      "La Toscana ci accoglie con la sua bellezza discreta. Non serve cercarla, è ovunque: nei filari, nelle strade che salgono leggere, nei piccoli bar dove una pausa diventa un incontro.",
      "![Spiaggia all'Isola d'Elba](/img_articles/nat_vale_elba/03_elba.jpg)",
      "## Tornare a Genova, diverse",
      "Il rientro verso Genova segna la fine dei dieci giorni. L'auto è più disordinata, le biciclette portano i segni delle strade percorse, noi siamo stanche ma piene. Tornare non significa perdere ciò che abbiamo vissuto, ma portarlo con noi.",
      "Questo viaggio non è stato solo una vacanza. È stato un modo di abitare il tempo, di dimostrare che la libertà non ha bisogno di grandi mezzi, ma di scelte consapevoli.",
      "Due donne, una tenda da tetto, qualche chilometro di strada e moltissimi ricordi. L'Italia, vista così, è ancora più bella. E noi sappiamo già che non sarà l'ultimo viaggio."
    ],
    author: "Nat e Vale",
    authorAvatar: "",
    readTime: "4 min",
    location: "Isola d'Elba, Toscana",
    category: "Destinazioni",
    date: "31 Gennaio 2026",
    image: "/img_articles/nat_vale_elba/01_elba.jpg",
    likes: 0,
    comments: 0
  },
  "viaggio-nozze-tenda-tetto-namibia": {
    title: "Viaggio di nozze in tenda da tetto in Namibia",
    excerpt: "Dove forse tutto è cominciato: la storia di Chiara e Piero, un budget limitato, e un viaggio indimenticabile di 17 giorni e 5.000 km attraverso deserti, oceani e savane.",
    content: [
      "## Dove forse tutto è cominciato",
      "Siamo nel 2018. La giovane coppia Chiara e Piero si appresta a sposarsi: la voglia di vivere un viaggio unico è tanta, ma ahimè il budget è limitato. Dopo alcune proposte ricevute da diverse agenzie di viaggio, emerge l'idea della Namibia, una destinazione che aveva colpito in modo particolare Piero, senza però immaginare che fosse tra le più costose per quanto riguarda i viaggi organizzati.",
      "Dopo aver sfogliato due album fotografici in agenzia, arriva il momento del preventivo: una cifra che supera abbondantemente il budget disponibile. Sembrava impossibile poter raggiungere la Namibia. Forse proprio per questo, o magari per la forza evocativa di quelle immagini, Chiara — fino a quel momento poco convinta — trova il coraggio e, una volta usciti dall'agenzia, si gira verso Piero e gli dice:",
      "**\"Noi andiamo in Namibia, vero?\"**",
      "![Tropico del Capricorno nel cuore della Namibia](/img_articles/namibia_viaggio_nozze/DSCN1226.JPG)",
      "Da quel momento inizia la ricerca della soluzione migliore per visitare questo stupendo Paese, che in breve tempo si rivela essere il noleggio di un'auto con tenda da tetto e tutto l'occorrente per il campeggio. Piero arrivava da una solida esperienza di campeggio, dagli scout all'alpinismo, mentre Chiara, a parte una singola notte in tenda, avrebbe vissuto il suo vero battesimo proprio in Africa.",
      "Decidiamo di organizzare tutto in autonomia: scegliere le destinazioni, pianificare le tappe, trovare le sistemazioni e, soprattutto, l'autonoleggio. Un vero road trip alla scoperta di quello che può essere definito un Paese per pazienti macinatori di chilometri.",
      "## Un Paese nato per la tenda da tetto",
      "La Namibia, oltre a offrire paesaggi spettacolari e una natura incontaminata da esplorare in ogni sua forma, sembra nata apposta per i viaggi in tenda da tetto. Spazi sconfinati, strutture attrezzate in modo eccellente e una grande ospitalità ci hanno fatto innamorare di questa terra, dal deserto all'oceano.",
      "In **17 giorni** percorriamo strade polverose e infinite, macinando oltre **5.000 chilometri**, visitando molte delle mete più famose e fermandoci anche in luoghi meno conosciuti.",
      "![Paesaggi sconfinati in Namibia](/img_articles/namibia_viaggio_nozze/DSCN1956.JPG)",
      "## Il nostro itinerario",
      "Partendo dalla capitale Windhoek ci dirigiamo verso sud, attraversando il Kalahari fino ad arrivare al Fish River Canyon, senza lasciarci sfuggire la foresta degli alberi faretra. Proseguiamo poi fino a toccare per la prima volta l'oceano Atlantico a Lüderitz, avvistando fenicotteri nelle lagune e pinguini a Diaz Point, senza perdere la suggestiva città fantasma dei cercatori di diamanti di Kolmanskop.",
      "Dopo aver incrociato i cavalli del deserto, la Namibia ci stupisce ancora con il Namib, il deserto più antico del mondo: dune color pesca da ammirare all'alba, da scalare lentamente e da cui poi correre giù a perdifiato.",
      "Risalendo verso nord, la tappa a Swakopmund e Walvis Bay è d'obbligo: qui avvistiamo otarie, delfini e una ricchissima fauna marina, passeggiamo tra le vie della cittadina e visitiamo i suoi musei, prima di affrontare la misteriosa Skeleton Coast, tra relitti e la più grande colonia di otarie al mondo.",
      "![Incontri ravvicinati con la fauna africana](/img_articles/namibia_viaggio_nozze/DSCN3102.JPG)",
      "## Damaraland ed Etosha",
      "È poi l'entroterra a regalarci paesaggi davvero a perdita d'occhio, permettendoci di campeggiare ai piedi dello Spitzkoppe, in un ritorno alle origini dell'umanità, testimoniato dagli straordinari graffiti rupestri dei nostri antenati. Da qui inizia l'esplorazione del Damaraland, alla ricerca dei leggendari elefanti del deserto, unici nel loro genere, capaci di percorrere anche 100 chilometri al giorno per raggiungere le poche sorgenti d'acqua.",
      "Tra la notte passata nel campeggio più incantevole del viaggio e la visita a siti preistorici e foreste pietrificate questa regione ci ha conquistato, premiandoci dell'avvistamento del nostro primo elefante proprio l'ultimo giorno.",
      "Questo è solo un assaggio di ciò che ci aspetta nei giorni successivi: l'**Etosha National Park**, il parco nazionale più grande della Namibia, dove è possibile avvistare la fauna africana guidando in completa autonomia. Un luogo che merita più giorni di esplorazione, dall'alba al tramonto, osservando animali magnifici: dai coloratissimi uccelli fino ai leoni e ai giganteschi elefanti.",
      "![La Nostra auto con tenda da tetto](/img_articles/namibia_viaggio_nozze/DSCN3839.JPG)",
      "## Il ritorno e il mal d'Africa",
      "Ormai il viaggio volge al termine, ma la strada di rientro verso la capitale ci riserva ancora alcune sorprese, come il più grande meteorite mai scoperto sulla Terra o il Waterberg Plateau Park, un rigoglioso altopiano ricco di paesaggi e animali.",
      "La Namibia ci ha stregato. La tenda da tetto si è rivelata il modo migliore per esplorarla, anche grazie agli ottimi servizi: dal noleggio di veicoli completamente equipaggiati alle strutture ricettive, dove non sono mai mancati pulizia e comfort.",
      "Un viaggio rimasto nella mente e nel cuore. L'unico difetto? Il rischio concreto di ammalarsi di \"mal d'Africa\" e di passare il tempo, una volta tornati, a pianificare il prossimo viaggio."
    ],
    author: "Piero e Chiara",
    authorAvatar: "",
    readTime: "5 min",
    location: "Namibia",
    category: "Destinazioni",
    date: "29 Gennaio 2026",
    image: "/img_articles/namibia_viaggio_nozze/DSCN1226.JPG",
    likes: 0,
    comments: 0
  },
  "forte-leone-dachzelt-camp-italia": {
    title: "Forte Leone: da scoperta casuale a DACHZELT CAMP Italia 🇮🇹",
    excerpt: "A 1.500 metri di quota, immerso nelle montagne venete, il Forte Leone è diventato teatro di un evento epico: il gemellaggio tra la community italiana e quella tedesca dei Dachzeltnomaden.",
    content: [
      "## Viva l'Italia!",
      "A 1.500 metri di quota, immerso nelle montagne venete, il Forte Leone non è solo un'antica fortezza austro-ungarica: è un luogo epico, con una vista mozzafiato e un'energia speciale. Un posto dove storia, natura e avventura si incontrano. Oggi è uno dei luoghi storicamente più affascinanti del Veneto e, fino a poco tempo fa, un vero segreto da insider.",
      "![Il campo visto dall'alto: tende da tetto, veicoli e la community riunita](/img_articles/forte_leone_raduno_articolo/20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne_.jpg)",
      "## Una scoperta per caso (che cambia tutto)",
      "Rebecca, l'amministratrice Dachzeltnomaden e Patrick hanno scoperto il Forte Leone quasi per caso, grazie a Park4Night. Appena arrivati, il pensiero è stato immediato:",
      "**\"Qui bisognerebbe davvero organizzare un DACHZELT CAMP!\"**",
      "Subito dopo, il dubbio: \"Tanto non ci daranno mai il permesso…\"",
      "E invece si sbagliavano di grosso.",
      "Il destino ha fatto il resto. Piero, fondatore della community italiana \"Tende da Tetto a Campeggio\", vive proprio in questa zona e da tempo c'era l'idea di organizzare un evento gemellaggio con il gruppo tedesco. Quando anche Laura, dell'ente turistico locale, ha accolto l'idea con entusiasmo, tutto ha iniziato a muoversi velocemente.",
      "Ed ecco che, quasi per magia, è nato il **DACHZELT CAMP Italia – Forte Leone**.",
      "A volte bastano un luogo perfetto, qualche idea un po' folle e le persone giuste pronte a mettersi in gioco.",
      "## Due community, una sola passione",
      "Ciò che ha reso questo lungo weekend davvero speciale non è stata solo la cornice spettacolare, ma soprattutto l'incontro tra due community unite dalla stessa passione: il campeggio in tenda da tetto.",
      "Italiano e tedesco si sono mescolati fin da subito in conversazioni spontanee, risate, nuove amicizie e momenti autentici sotto le nostre tende e attorno al fuoco. Il tutto spesso accompagnato dall'immancabile aperitivo italiano, servito con stile, generosità e grande spirito di condivisione.",
      "![Panorama mozzafiato dal Forte Leone](/img_articles/forte_leone_raduno_articolo/20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker_00006.jpg)",
      "## Meteo perfetto… contro ogni previsione",
      "Le previsioni non erano delle migliori: temporali, pioggia e persino grandine prima e dopo l'evento.",
      "Ma durante il DACHZELT CAMP Italia? Sole pieno, cielo limpido, serate miti e panorami incredibili.",
      "A quanto pare, anche il meteo aveva voglia di campeggiare al Forte Leone.",
      "## Attività per tutti, senza obblighi",
      "Il programma era ricco, ma mai vincolante. Ognuno poteva vivere il weekend seguendo i propri ritmi:",
      "- Visite guidate al Forte Leone, tra storia e panorami\n- Noleggio e-bike per esplorare i dintorni\n- Passeggiate nella natura montana\n- Visita al museo locale\n- Un piccolo mercato con prodotti regionali: vini, formaggi, caprini e salumi",
      "Un equilibrio perfetto tra scoperta, relax e condivisione.",
      "## Bambini liberi, natura vera",
      "Per i più piccoli, il Forte Leone è stato un vero paradiso.",
      "Giochi all'aria aperta, frisbee, esplorazioni tra i prati, coroncine di fiori improvvisate e serate attorno al fuoco con popcorn e marshmallow.",
      "Il momento più sorprendente? La visita improvvisa di una mandria di mucche che ha attraversato il prato del campeggio. Scene così possono succedere solo qui.",
      "E a pochi passi, il Rifugio Cima Capo, dove concedersi qualche prodotto tipico, dal latte fresco alla grappa.",
      "![Serata attorno al falò: l'atmosfera magica del camp](/img_articles/forte_leone_raduno_articolo/20250704_DACHZELT-CAMP-Italia-2025_Thomas_Brassel__20.jpg)",
      "## Quando il cibo diventa linguaggio universale",
      "La cucina è stata uno dei veri ponti culturali dell'evento.",
      "Ogni mattina colazione insieme con pane fresco e vista sulle montagne. Nel pomeriggio, birra e aperöl per la community tedesca, aperitivo \"alla italiana\" per gli amici italiani.",
      "E la sera? Griglie accese, piatti condivisi e tante risate.",
      "All'inizio c'era un piccolo \"problema culturale\": cena alle 17 per i tedeschi, alle 21 per gli italiani. La soluzione è stata semplice e perfetta: tutti a tavola alle 19.",
      "Una cena internazionale, rilassata e autentica, attorno al fuoco.",
      "## Grazie di cuore",
      "Circa **150 persone** e **100 veicoli** hanno preso parte a questo evento speciale.",
      "Un ringraziamento speciale va alla Pro Loco di Arsiè e in particolare a Laura, che con energia e grande organizzazione ha reso possibile tutto questo.",
      "È stato un weekend che porteremo a lungo nel cuore: nuove amicizie, paesaggi incredibili, sorrisi sinceri e tanta voglia di tornare.",
      "**Grazie mille, Italia. Torneremo.**",
      "![Foto di gruppo: la grande famiglia del DACHZELT CAMP Italia](/img_articles/forte_leone_raduno_articolo/20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne__4.jpg)",
      "## Never stop!",
      "Dopo un evento, in realtà, è già tempo di pensare al prossimo.",
      "La domenica ci siamo salutati con sorrisi e qualche lacrima, ripensando a un DACHZELT CAMP Italia intenso, rilassato e semplicemente bellissimo.",
      "E chissà… magari l'anno prossimo, di nuovo qui, con il Forte Leone a farci da sfondo."
    ],
    author: "Lo Staff di Tende da Tetto",
    authorAvatar: "/logo_tende.jpg",
    readTime: "8 min",
    location: "Forte Leone, Veneto",
    category: "Eventi",
    date: "29 Gennaio 2026",
    image: "/img_articles/forte_leone_raduno_articolo/20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne_.jpg",
    likes: 0,
    comments: 0
  },
  "dormire-tenda-freddo-52-gallerie-pasubio": {
    title: "Dormire in tenda da tetto anche col freddo? Sì, si può!",
    excerpt: "La nostra esperienza alle 52 Gallerie del Pasubio: come affrontare il freddo autunnale in tenda da tetto con l'attrezzatura giusta.",
    content: [
      "## La nostra esperienza alle 52 Gallerie del Pasubio",
      "Quando si parla di tenda da tetto, molti la associano all'estate, ai tramonti infiniti e alle notti tiepide sotto le stelle. Ma la verità è che, con la giusta attrezzatura, si può dormire in tenda anche quando le temperature scendono. Noi l'abbiamo sperimentato a inizio ottobre, durante un weekend alle 52 Gallerie del Pasubio, e ne siamo tornati con il sorriso (e senza un briciolo di freddo).",
      "![](/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.13.jpeg)",
      "Siamo partiti il venerdì sera dalla provincia di Verona, direzione Bocchetta Campiglia, punto di partenza del celebre sentiero delle 52 Gallerie. Arrivati al parcheggio principale (6€ per 24h), la temperatura era già piuttosto bassa: un anticipo d'inverno che ci ha fatto capire che sarebbe servito tutto il calore possibile.",
      "![](/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.39.jpeg)",
      "Abbiamo aperto la nostra tenda da tetto Columbus dell'Autohome, una compagna di viaggio ormai inseparabile. Prima di metterci comodi, abbiamo applicato anche il telo invernale (sempre Autohome), studiato proprio per migliorare l'isolamento termico e proteggere dal vento. Dentro, i sacchi a pelo Ferrino con comfort fino a –15 °C e, per non farci mancare nulla, abbiamo acceso il riscaldamento ausiliario.",
      "![](/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.40.jpeg)",
      "**Risultato?** Una notte al caldo, confortevole e silenziosa, cullati solo dai suoni del bosco. Addormentarsi sapendo che fuori fa freddo, ma dentro la tenda si sta benissimo, è una sensazione impagabile.",
      "![](/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.40%20%281%29.jpeg)",
      "## Le 52 Gallerie del Pasubio: un capolavoro di ingegneria e storia",
      "Le 52 Gallerie del Pasubio, conosciute anche come Strada delle 52 Gallerie, sono un itinerario escursionistico unico nel suo genere, situato tra le province di Vicenza e Trento.",
      "![](/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.41.jpeg)",
      "Realizzate durante la Prima Guerra Mondiale dal Genio Militare Italiano, queste gallerie furono scavate nella roccia tra il 1917 e il 1918 per collegare Bocchetta Campiglia alle Porte del Pasubio, consentendo il trasporto sicuro di uomini e rifornimenti lontano dal tiro nemico.",
      "![](/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.41%20%281%29.jpeg)",
      "Il percorso, lungo circa 6,5 km solo in salita, si snoda tra pareti rocciose e panorami mozzafiato sul massiccio del Pasubio. Ogni galleria ha una sua particolarità: alcune sono dritte e brevi, altre tortuose, scavate a spirale nella montagna o aperte su vertiginosi scorci.",
      "![](/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.42.jpeg)",
      "Con un dislivello di circa 900 metri, è un'escursione che unisce storia, avventura e natura — un'esperienza che lascia davvero il segno.",
      "## L'escursione",
      "L'indomani ci siamo svegliati con un cielo non proprio limpido e aria frizzante. Mettiamo gli zaini in spalla e indossiamo le pile da testa: è così che ha inizio la salita lungo il percorso delle 52 Gallerie.",
      "![](/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.43%20%281%29.jpeg)",
      "La vista lungo il tragitto è spettacolare, e ogni galleria racconta un pezzo di storia e di fatica umana.",
      "![](/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.43%20%282%29.jpeg)",
      "Dopo circa 7,5 km di salita e 894 m di dislivello positivo, siamo arrivati al Rifugio Achille Papa, dove ci siamo concessi un panino e una birretta con vista sulle cime del Pasubio. Il rientro è avvenuto lungo la Strada degli Scarubbi, un percorso più dolce ma altrettanto panoramico, per un totale di circa 15 km.",
      "![](/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.43%20%283%29.jpeg)",
      "## Consigli per dormire in tenda da tetto in autunno e inverno",
      "Se vuoi provare anche tu l'esperienza di dormire in tenda da tetto quando fa freddo, ecco qualche consiglio utile basato sulla nostra esperienza:",
      "![](/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.44.jpeg)",
      "**Isolamento termico** – Se la tua tenda lo permette, applica un telo invernale o un sovra telo aggiuntivo. Fa davvero la differenza.",
      "**Riscaldamento ausiliario** – Un piccolo riscaldatore a gasolio o a benzina (come il nostro) garantisce comfort e sicurezza, ma assicurati sempre di avere una buona ventilazione.",
      "**Sacchi a pelo adeguati** – Investi in sacchi a pelo con comfort termico adatto alle temperature previste. I nostri Ferrino fino a –15 °C sono stati perfetti.",
      "**Prepara un piano B** – In caso di neve o ghiaccio intenso, meglio avere un rifugio o una sistemazione alternativa nelle vicinanze.",
      "## Conclusioni",
      "Dormire in tenda da tetto nei mesi freddi non solo è possibile, ma può essere anche incredibilmente appagante. La chiave è prepararsi bene, conoscere i propri limiti e avere l'attrezzatura giusta. Quell'esperienza al Pasubio ci ha ricordato che la libertà di viaggiare non ha stagione: basta la voglia di partire, un buon sacco a pelo e il rumore del vento fuori dalla tenda.",
      "![Sara e Guido Freddo](/img_articles/dormire_freddo/Sara%20e%20Guido%20Freddo.jpeg)"
    ],
    author: "Sara Sarti",
    authorAvatar: "/img_articles/autori/sara%20sarti/sara%20e%20guido%20avatar%20autori.png",
    readTime: "6 min",
    location: "52 Gallerie del Pasubio",
    category: "Tips",
    date: "8 Gennaio 2026",
    image: "/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.43%20%282%29.jpeg",
    likes: 0,
    comments: 0
  },
  "tende-da-tetto-super-ciurma-tempo-lento": {
    title: "Tende da Tetto, La Super Ciurma e L'Arte del Tempo Lento",
    excerpt: "Viaggiare con bambini e cani, camperizzazione fai-da-te e l'arte di recuperare il tempo lento: la storia di una famiglia nomade accessibile.",
    content: [
      "Sono Giulia, e se c'è una cosa che ho imparato in oltre quarant'anni di vita, è che la passione è il carburante più potente che esista.",
      "Quella passione non mi ha solo spinto a laurearmi in Medicina Veterinaria e a trasformarmi in Toelettatrice esperta—competenze fondamentali per la mia ciurma nomade—ma mi ha anche spinto a non smettere mai di esplorare. L'outdoor non è un hobby, è un'estensione naturale della mia vita professionale e personale.",
      "Ma non sono sola.",
      "![La Super Ciurma pronta per l'avventura](/img_articles/arte_tempo_lento_giulia_brenno/70bcbd07-91d1-4d9a-ab43-d25822677043.jpg)",
      "Sono il Capitano di una vera e propria ciurma nomade, la cui missione è fuggire dal rumore della quotidianità per recuperare l'unica cosa che conta davvero: il **Tempo Lento**.",
      "Viaggio da sola, o meglio, con il mio equipaggio: Brenno (quasi 6 anni, il nostro Nostromo e Capitano in Seconda) e i due Marinai pelosi, Mirò e Magique, due Barboni Nani che pesano più in intelligenza che in stazza.",
      "Il nostro Veliero non è un'astronave 4x4, ma una fidata Dacia Dokker 1600 GPL, accuratamente camperizzata in modalità essenziale e, ovviamente, munita della nostra fedele tenda da tetto.",
      "Al grido di battaglia di Brenno – \"SI SALPAAAAAA!\" – partiamo tutti e quattro all'avventura. La nostra storia è la dimostrazione che l'overlanding, le rooftop tent e il campeggio non sono un privilegio per pochi muniti di budget illimitati. Sono uno stile di vita accessibile a chiunque abbia tanta organizzazione e, soprattutto, tantissima passione.",
      "## 1. Dalle Tende Canadesi alla Rooftop Tent: Il Salto di Qualità nel Bivacco",
      "La mia storia con l'outdoor non è iniziata su un materassino di lusso, ma sul terriccio umido di un campsite italiano, in una vecchia e pesante tenda canadese. Non frequentavo ancora l'asilo negli anni '80, ma già respiravo quell'aria di libertà e quella leggera fragranza mattutina di rugiada che solo il campeggio selvaggio sa regalare.",
      "Quell'esperienza pionieristica mi ha permesso di toccare con mano l'evoluzione del campeggio: dalla scomodità della tenda da terra (un incubo logistico sotto la pioggia improvvisa), all'efficienza ingombrante dei camper moderni, fino ad approdare al mio equilibrio perfetto: la **rooftop tent (RTT)**.",
      "Negli anni, ho acquisito non solo attrezzatura, ma soprattutto competenze: tecniche di montaggio rapido, gestione dell'umidità e metodi per ottimizzare ogni centimetro cubo.",
      "### Perché la RTT è la Soluzione Ideale per la Famiglia Nomade",
      "Quando si viaggia da soli con un bambino piccolo e cani, la velocità e la sicurezza sono tutto. La RTT ha risolto le mie principali sfide logistiche:",
      "**1. Velocità di Montaggio (Il Fattore \"Solo Adulto\"):** Montare una tenda da terra tradizionale da sola, con un bambino che reclama attenzione o sotto la minaccia di un temporale, è logorante. La RTT, specialmente un modello hardshell o un softshell a montaggio assistito (con pistoni a gas), si apre e si chiude in pochi minuti. Questo è cruciale: meno tempo dedicato alla logistica, più tempo per la vita da campo.",
      "**2. Sicurezza e Comfort Riparato:** Salire sul tetto significa isolarsi dal terreno umido, da insetti striscianti e, diciamocelo, dal freddo che si insinua nelle ossa. Ho scelto un modello con un materasso di alta qualità (almeno 7 cm ad alta densità), spesso equipaggiato con un **tappeto anti-condensa** sotto il materasso per garantire notti asciutte.",
      "**3. Gestione Cani a Terra:** La RTT mi permette di essere al sicuro e rialzata con Brenno, mentre i cani rimangono a terra, nel loro spazio designato (sotto l'awning o nella veranda). Non solo offrono una guardia silenziosa, ma si evita il problema igienico di trasportare terra e peli in uno spazio limitato in altezza.",
      "**Tips per l'Upgrade:** Se state valutando una RTT, non lesinate sulla qualità del tessuto (denier) e sul sistema di ventilazione. Una buona RTT deve resistere a carichi di vento elevati e deve avere prese d'aria multiple per prevenire la condensa interna, nemica giurata del campeggiatore.",
      "## 2. La Super Ciurma in Azione: L'Arte dell'Autosufficienza",
      "Le reazioni che ricevo quando racconto il mio setup di viaggio sono quasi sempre le stesse: \"Da sola? Con un bambino *e* due cani? Ma come fai?\"",
      "Ebbene sì, è fattibile. Non si tratta di avere \"coraggio\" da supereroina, ma di trasformare le mie due grandi passioni – cinofilia e outdoor – in una sinergia perfetta di competenze e organizzazione ferrea.",
      "### Gestire l'Equipaggio a Quattro Zampe: Competenze Veterinarie in Campo",
      "Essendo una professionista cinofila, so bene che la stabilità emotiva dei miei cani, Mirò e Magique (due Barboni Nani), dipende interamente dalla prevedibilità. L'ambiente cambia, ma le regole no.",
      "#### La Tana Sicura e la Routine Intatta",
      "**1. I Kennel Morbidi sono Fondamentali:** I Barboni sono sensibili, ma addestrati al kennel fin da cuccioli. Sotto la veranda dell'awning, i loro kennel morbidi da viaggio (facili da piegare e lavare) diventano la loro \"tana\" sicura. Questo non è solo riposo; è un punto di riferimento psicologico dove sanno di essere al sicuro quando siamo al campo base, soprattutto quando ci allontaniamo brevemente per brevi escursioni in e-bike.",
      "**2. Sicurezza Notturna e Legami di Bivacco:** Di notte, i cani sono legati al veicolo o a un tie-down sicuro (mai a un albero o elemento non robusto), ma con una lunghezza che permetta loro di muoversi liberamente nell'area protetta dell'awning. La loro presenza è un deterrente naturale e il loro udito affinato un allarme discreto.",
      "#### Checklist Veterinaria e Primo Soccorso Avanzato",
      "L'esperienza da veterinaria mi obbliga a una preparazione medica superiore al normale.",
      "**Il Kit VET da Campo:** Non basta una scatola di cerotti. Il mio kit include sutura adesiva per piccole ferite (utile in montagna), cortisonici ad uso topico (per reazioni allergiche a insetti), soluzione fisiologica per lavaggi oculari e il mio \"cavallo di battaglia\": una bustina di carbone attivo (fondamentale in caso di ingestione accidentale di sostanze strane trovate per terra).",
      "**Gestione Ambientale:** Preoccupazione primaria: i parassiti. Prima di ogni partenza, controllo che i trattamenti antiparassitari siano aggiornatissimi (collare più spot-on, per massima copertura). In estate, controllo quotidianamente i peli lunghi dei Barboni per zecche.",
      "### Brenno, Il Nostromo: Crescere nella Logistica",
      "Brenno è cresciuto tra cani e tende. Il suo ruolo di \"Nostromo\" non è un vezzo; è una responsabilità che lo connette all'ambiente. A quasi sei anni, ha compiti precisi commisurati alla sua età.",
      "**Coinvolgimento = Sicurezza e Autonomia:**",
      "**Allestimento e Disallestimento:** Brenno aiuta ad aprire i cuscini, gonfiare il materassino anti-rollio per la notte e raccogliere la legna secca per il fuoco da campo (ovviamente, supervisionato). Coinvolgerlo trasforma l'allestimento in un gioco di cooperazione, non in un ostacolo.",
      "**La Scala del Veliero:** La scala della RTT è pericolosa se usata male. Invece di proibirgliela, l'ho trasformata in una lezione motoria avanzata. Regola ferrea: salire e scendere sempre usando la regola dei **tre punti di contatto** (due mani e un piede, o viceversa) e solo quando il Capitano è presente. Questo non solo aumenta la sicurezza, ma sviluppa la sua consapevolezza motoria.",
      "## 3. Il Veliero: Dacia Dokker e Setup Overlanding Accessibile",
      "La mia Dacia Dokker 1.6 GPL è la prova vivente che l'overlanding è una filosofia di autosufficienza e esplorazione, non un concorso a chi ha il mezzo 4x4 più costoso.",
      "La Dokker è robusta, facile da mantenere e, grazie al GPL, relativamente economica nei consumi per i lunghi trasferimenti.",
      "### Dettagli Tecnici del Setup: Peso, Stoccaggio e Potenza",
      "#### Il Vettore: Scelta della RTT in Relazione al Veicolo",
      "Il Dokker non è un fuoristrada pesante; la gestione del peso sul tetto è vitale per la stabilità e la dinamica di guida.",
      "**Portaggio:** Ho investito in un sistema di **barre portatutto di alta qualità** (spesso sottovalutate) che distribuisse il carico statico (quando siamo fermi e dormiamo) e dinamico (quando guidiamo) in modo uniforme. Ho optato per una RTT leggera, un modello softshell, preferibilmente sotto i 60 kg totali, per non compromettere troppo il baricentro in curva.",
      "#### La Camperizzazione Minimalista e Modulare",
      "La Dokker è camperizzata in modo **reversibile** e minimalista.",
      "**Sistema Modulare:** L'installazione interna consiste in moduli cucina e stoccaggio rimovibili. Questi sono box in compensato marino che si incastrano perfettamente quando i sedili posteriori sono abbassati, creando un piano di lavoro e una zona living interna (utile in caso di pioggia estrema).",
      "**Cucina da Esterni:** L'area cucina è allestita sul retro: un fornello a doppio fuoco (GPL o bomboletta) e un piccolo lavandino con pompa a immersione collegata a un serbatoio d'acqua da 15 litri. Essenziale e fuori bordo.",
      "#### Gestione Energetica",
      "Essere autosufficienti richiede energia, ma non ho un doppio impianto fisso.",
      "**Power Station Portatile:** Ho optato per una moderna **Power Station al Litio** (circa 500Wh). Questa gestisce le luci a LED del campo, ricarica i dispositivi e, cosa cruciale, alimenta il nostro frigo/freezer portatile (a compressore). È un sistema più flessibile e leggero rispetto all'installazione di una batteria servizi fissa.",
      "### L'Accessorio Salva-Vita: La Scialuppa E-Bike",
      "L'e-bike con carrello è la nostra \"scialuppa di salvataggio\" e il nostro modo di ridurre l'impatto ambientale. Spesso parcheggiamo il Dokker in un punto sicuro (un'area di bivacco remota, se consentito) e usiamo la bici elettrica per:",
      "**1. Esplorazione Lenta:** Raggiungiamo sentieri o laghi senza dover riaccendere il motore e muovere l'intero Veliero.",
      "**2. Rifornimenti Veloci:** Se il villaggio più vicino è a 5-10 km, la e-bike ci permette di fare la spesa rapidamente, minimizzando i consumi di GPL.",
      "Questo è il vero overlanding: esplorare e connettersi col territorio, non solo guidare attraverso di esso.",
      "![Il nostro setup in azione](/img_articles/arte_tempo_lento_giulia_brenno/aad44a18-2294-48f9-bf18-261c25ac5c86.jpg)",
      "## 4. L'Arte della Partenza: Il File Segreto di Giulia",
      "Il coraggio da solo finisce dopo il primo imprevisto serio. Quello che non finisce è l'organizzazione maniacale.",
      "Il mio sistema operativo è racchiuso in un meticoloso **file digitale** (gestito via cloud, accessibile offline), sviluppato durante le lunghe giornate del lockdown. Questo file non è solo una lista; è la mia mappa logistica e la mia assicurazione contro lo stress.",
      "### Logistica Multilivello: Dal Mezzo al Pasto",
      "Il file è strutturato per coprire ogni ambito logistico della ciurma, con liste di controllo precise.",
      "#### 1. Preparazione Mezzo e RTT (Manutenzione Navale)",
      "**Check Veicolare Pre-Viaggio:** Non solo pressione pneumatici (inclusa la ruota di scorta, spesso dimenticata), ma anche la verifica dei liquidi, dei freni e il rifornimento completo del serbatoio GPL.",
      "**Setup RTT:** Controllo dell'integrità del telo, verifica del tensionamento delle cerniere, e il kit di riparazione rapida (pezze adesive e nastro sigillante per il telo).",
      "**Power Management:** Carica al 100% della Power Station, batterie per droni (per documentazione), power bank e pila frontale.",
      "#### 2. Logistica Cani (I Marinai)",
      "**Cibo Pesato:** Calcolo la quantità esatta di crocchette necessarie per i giorni di viaggio + un extra del 20% per imprevisti. Non si viaggia a occhio con l'alimentazione degli animali.",
      "**Identificazione e Documenti:** Oltre ai farmaci, nel File Segreto ho la scansione del libretto sanitario e del microchip. Ricerco preventivamente l'ubicazione di almeno due cliniche veterinarie aperte H24 lungo la rotta principale.",
      "**Sicurezza:** Guinzagli lunghi da bivacco (tipo long-line, ma in materiale resistente e visibile), pettorine da passeggio (meglio del collare per il controllo), e tappetini isolanti per la notte (anche sotto l'awning fa freddo).",
      "#### 3. Logistica Brenno (Il Nostromo)",
      "**Abbigliamento Funzionale:** La chiave è il sistema multi-strato. Maglietta termica, pile intermedio, giacca esterna resistente all'acqua. Questo garantisce comfort dal caldo diurno al freddo pungente in tenda.",
      "**Kit di Intrattenimento Anti-Digitale:** Binocolo, lenti d'ingrandimento, quaderno per il Diario di Bordo e matite. La filosofia è: l'ambiente è l'intrattenimento. (Solo in caso di pioggia incessante si ricorre a un tablet, ma con tempo limitato.)",
      "#### 4. La Cambusa e Gestione Rifiuti",
      "**Pianificazione dei Pasti:** Semplice e nutriente. Spesso preparo a casa salse base o sughi pronti sottovuoto per ridurre i tempi di cottura. Utilizzo contenitori modulari ed etichettati (C1: Colazione, C2: Pranzo Pronto, C3: Spezie e Condimenti).",
      "**La Regola del \"Leave No Trace\":** Sistema di raccolta differenziata in sacchi robusti. L'immondizia non si brucia e non si lascia. Si riporta a valle, sempre.",
      "Questa preparazione elimina il 90% dello stress pre-partenza, liberando energia mentale per la vera avventura.",
      "## 5. Oltre l'Overlanding: Ritrovare il Tempo Lento",
      "Viviamo in un'epoca frenetica. Per i bambini, questo eccesso di stimoli può indurre una chiusura mentale, una sorta di protezione contro il sovraccarico sensoriale. Noi, invece, facciamo l'esatto opposto: carichiamo la macchina e scappiamo.",
      "Quando arriviamo al sito, l'apertura della tenda (operazione che è diventata un rito, non una fatica) segna l'inizio del recupero del nostro bene più prezioso: il Tempo Lento.",
      "### Il Valore della Manualità e dell'Essenzialità",
      "In tenda, si vive con poco. Brenno impara in modo viscerale il concetto di non sprecare e il piacere di fare con le mani. L'acqua è preziosa (si calcola al litro), il cibo è limitato, l'elettricità è quella che abbiamo accumulato.",
      "L'attività più semplice – come accendere il fornelletto a spirito, lavare i piatti all'aperto con acqua limitata o montare il tendalino – diventa un momento di apprendimento e cooperazione. Si rallenta perché si deve rallentare. La natura impone i suoi ritmi, e noi li accettiamo.",
      "### L'Educazione al Silenzio e allo Stupore",
      "La magia della rooftop tent si manifesta quando ci si ritira per la notte. Sollevati da terra, il silenzio è amplificato, rotto solo dai suoni naturali: il vento sulle foglie, il fruscio di un animale nel bosco, o il ritmico picchiettio della pioggia sul telo.",
      "Ci riprendiamo **IL TEMPO** di emozionarci.",
      "Ci prendiamo il tempo di sederci in silenzio, piedi nell'erba, guardando un tramonto che non è filtrato da vetri o schermi. Condividiamo lo stupore per un cielo pieno di stelle, lontano dall'inquinamento luminoso della città.",
      "Sono questi momenti condivisi che cementano la nostra Super Ciurma.",
      "Ricordo una delle nostre ultime uscite al Nord. Una sera, la pioggia ha iniziato a picchiettare ritmicamente sul telo in poliestere della tenda. Era un suono ovattato, cullante, simbolo di protezione e calore.",
      "Brenno mi ha bisbigliato, con quella voce piccola e sonnolenta:",
      "\"Mamma… senti le gocce… sta piovendo e siamo al sicuro…\"",
      "\"Sì, tesoro, le sento,\" gli ho risposto, abbracciandolo al caldo nel sacco a pelo. \"E tu… cosa senti?\"",
      "Ha riflettuto un istante, gli occhi fissi sul tetto sopra di noi. E poi, la risposta che vale tutta la fatica dell'organizzazione:",
      "\"Sento che sono fortunato mamma. Ho il Veliero, la tenda… e sento l'odore della pioggia buona.\"",
      "In quel momento, cullati dal ticchettio, sapevo che il file segreto, la Dacia Dokker e ogni singola scelta logistica avevano trovato il loro scopo supremo: creare ricordi autentici e inestimabili, liberi dalla tirannia dell'orologio.",
      "![Il Tempo Lento: momenti autentici in famiglia](/img_articles/arte_tempo_lento_giulia_brenno/d735da1c-560c-4eda-81bf-66470ee9ff44.jpg)",
      "## Pronti a Salpare? I Prossimi Passi per la Vostra Ciurma",
      "La nostra avventura è la prova che non serve aspettare il furgone perfetto o l'attrezzatura da spedizione. Serve iniziare con quello che si ha e una dose massiccia di organizzazione.",
      "Se il nostro stile di vita vi ha ispirato e sognate di adottare la rooftop tent come vostra prossima casa viaggiante, ecco il nostro consiglio finale:",
      "**1. Iniziate con la Logistica:** Prima di acquistare, mappate le vostre esigenze. Chi dorme con chi? Quanto spazio è realmente necessario? Il peso della tenda è compatibile con il vostro veicolo?",
      "**2. Abbracciate l'Essenziale:** L'overlanding accessibile significa rinunciare al superfluo. Scegliete attrezzatura multifunzionale.",
      "**3. Il Tempo è la Vostra Moneta:** Usate la tenda da tetto per scappare, anche solo per un weekend. Recuperate quel tempo lento che la vita moderna ci ha rubato.",
      "**E voi? Qual è il vostro grido di battaglia? Uniamo le forze. Condividete le vostre storie di overlanding accessibile nei commenti e salpiamo insieme verso la prossima avventura!**"
    ],
    author: "Giulia e Brenno",
    authorAvatar: "",
    readTime: "15 min",
    location: "Italia",
    category: "Tips",
    date: "9 Gennaio 2026",
    image: "/img_articles/arte_tempo_lento_giulia_brenno/70bcbd07-91d1-4d9a-ab43-d25822677043.jpg",
    likes: 0,
    comments: 0
  },
  "spagna-del-nord-on-the-road": {
    title: "Spagna del Nord on the road: 19 giorni di libertà e natura!",
    excerpt: "Un viaggio indimenticabile attraverso Paesi Baschi, Cantabria, Asturie e Galizia con la tenda da tetto. 19 giorni di strade, oceano e montagne.",
    content: [
      "## Un'estate all'insegna della libertà",
      "Agosto, due settimane centrali, 19 giorni pieni di strade, profumi, paesaggi e libertà.",
      "Viaggiare on the road con la tenda da tetto è per noi ormai uno stile di vita: semplice, essenziale, ma soprattutto libero. Nessuna prenotazione, solo la voglia di scoprire giorno per giorno dove la strada ci porterà. Quest'estate abbiamo deciso di esplorare la Spagna del Nord, una terra selvaggia e autentica, dove oceano e montagne si incontrano e ogni curva regala panorami mozzafiato.",
      "![](/img_articles/spagna_del_nord_sara_guido/IMG_20250810_110344.jpg)",
      "## Dal Veneto ai Pirenei: il viaggio inizia",
      "Siamo partiti dalla provincia di Verona, direzione Spagna, ma prima di varcare il confine ci siamo concessi una tappa in Val di Susa dove ci siamo fermati in un'area sosta camper comunale per trascorrere la notte. Il mattino seguente siamo entrati in Francia attraverso il Monginevro.",
      "La prima sosta è stata a **Carcassonne**, la città fortificata dal fascino medioevale, perfetta per calarsi subito nell'atmosfera del viaggio.",
      "Da lì abbiamo puntato verso i Pirenei Atlantici francesi fino a **Espelette**, un piccolo villaggio basco famoso per i peperoncini rossi appesi alle facciate delle case. Dopo quasi 1.400 km, la nostra avventura spagnola aveva finalmente inizio. Abbiamo sostato presso l'area camper privata \"ERREKA\" a 4km dal villaggio, facilmente raggiungibile con le bici, che dispone anche di un ristorante che propone piatti tipici baschi.",
      "![](/img_articles/spagna_del_nord_sara_guido/IMG_20250810_144054.jpg)",
      "## I Paesi Baschi: tra oceano, storia e natura",
      "Il nostro ingresso in Spagna è stato a **San Sebastián**, dove la splendida Baia della Concha ci ha accolti con la sua eleganza e le sue onde perfette per i surfisti. Le biciclette che abbiamo portato con noi ci hanno permesso di muoverci liberamente lasciando il nostro Doblò camperizzato presso il Camping Oliden (leggermente decentrato ma provvisto di ciclabile), consentendoci di spostarci lungo la costa, tra lungomare e scorci panoramici. Abbiamo preso la funicolare e siamo saliti sul Monte Igueldo dove, oltre a poter ammirare il belvedere è possibile godere delle giostre e degli intrattenimenti proposti, per grandi e piccini.",
      "![](/img_articles/spagna_del_nord_sara_guido/IMG_20250811_153250.jpg)",
      "Abbiamo poi proseguito verso **Guernika**, città simbolo della memoria storica, e non potevamo perderci l'escursione a **San Juan de Gaztelugatxe**, l'eremo arroccato sull'oceano reso celebre da Il Trono di Spade. Per potervi accedere in alta stagione è necessario prenotare online l'ingresso, in quanto contingentato. Si tratta di un percorso a piedi di circa 2,6 km che parte dal parcheggio e porta, attraverso 231 scalini, all'eremo.",
      "![](/img_articles/spagna_del_nord_sara_guido/IMG_20250812_190521.jpg)",
      "Abbiamo scelto di sostare presso il Camping Portuondo in quanto comodo per poter fare l'escursione a San Juan de Gaztelugatxe. Abbiamo lasciato il nostro \"carrozzone\" in campeggio e con le bici abbiamo raggiunto il paese di Bermeo (4,5km) da dove parte il bus n.3517 che porta all'eremo.",
      "La quarta tappa ci ha fatti raggiungere **Bilbao**, moderna e vibrante, con il suo iconico Museo Guggenheim e i suggestivi ponti che attraversano il fiume Nervión.",
      "![](/img_articles/spagna_del_nord_sara_guido/IMG_20250814_133935.jpg)",
      "## Cantabria e Asturie: tra coste, montagne e tradizioni",
      "Lasciati i Paesi Baschi, siamo entrati in Cantabria, dove ci hanno accompagnati i paesaggi verdi e la brezza dell'oceano. Abbiamo visitato **Santander** e **Llanes**, incastonate tra spiagge e scogliere, e poi via verso le Asturie, cuore naturale del Nord.",
      "![](/img_articles/spagna_del_nord_sara_guido/IMG_20250814_204119.jpg)",
      "Ci siamo fermati presso il Camping Picos de Europa, comodo per poter fare l'indomani l'escursione ai **Laghi di Covadonga**, all'interno del Parco Nazionale dei Picos de Europa. È stata un'esperienza indimenticabile! Nonostante ci trovassimo ad un'altitudine di circa 1200m slm, il paesaggio lasciava intendere tutt'altro. Anche per questa escursione gli ingressi sono contingentati ed è necessario prenotare per tempo il bus che in alta stagione accompagna i turisti fino al parcheggio principale dei laghi. Da lì poi è possibile proseguire a piedi lungo i numerosi sentieri presenti.",
      "![](/img_articles/spagna_del_nord_sara_guido/IMG_20250815_074014.jpg)",
      "Da lì siamo saliti fino al **Cabo de Peñas**, dove abbiamo dormito in libera con una vista mozzafiato sull'oceano Atlantico — una di quelle notti che restano nel cuore.",
      "A Ferragosto ci siamo trovati tra Avilés e Luarca, immersi in una festa popolare asturiana fatta di musica, tradizione e bicchieri di sidro che non smettevano mai di riempirsi.",
      "## Galizia: dove finisce la terra e inizia l'oceano",
      "Lasciate le Asturie, siamo entrati in Galizia, terra di fari e vento.",
      "La prima tappa è il **faro di Cabo Ortegal**, spettacolare punto panoramico dove l'oceano mostra tutta la sua forza. Decidiamo così di fermarci un paio di notti presso il Camping Fontesin per goderci le calde giornate di sole, le lunghe spiagge e le onde agitate dell'oceano.",
      "![](/img_articles/spagna_del_nord_sara_guido/IMG_20250817_152218.jpg)",
      "Riprendiamo il nostro viaggio on the road e raggiungiamo **La Coruña**, città elegante e vivace. Percorriamo con il nostro \"carrozzone\" la **Costa da Morte**, una zona costiera della Galizia conosciuta per le sue condizioni marine pericolose che nel corso della storia, hanno causato numerosi naufragi e da cui prende il suo nome. Raggiungiamo **Muxía**, uno dei luoghi più autentici e suggestivi della regione: visitiamo il santuario \"Nosa señora da barca\" che si affaccia sull'oceano ed è di grandissimo effetto!",
      "![](/img_articles/spagna_del_nord_sara_guido/IMG_20250821_154053.jpg)",
      "La decima tappa è **Santiago de Compostela**, meta spirituale e simbolica anche per chi, come noi, non ci è arrivato a piedi ma su quattro ruote. Abbiamo sostato all'area camper privata Lavacolla dove per la prima volta abbiamo conosciuto un gestore che parla perfettamente italiano. Questa area sosta risulta strategica per visitare Santiago grazie al servizio bus (n.6) con fermata a 400m dall'area camper e che passa ogni venti minuti.",
      "## Verso l'interno: Castiglia, Navarra e ritorno",
      "Dalla costa ci siamo spostati verso l'interno, entrando in Castiglia.",
      "In quei giorni la regione era colpita da numerosi incendi, quindi abbiamo dovuto deviare il percorso, ma siamo comunque riusciti a visitare **León** e **Burgos**, due città ricche di storia e fascino.",
      "Da lì abbiamo raggiunto **Vitoria-Gasteiz**, città verde e ordinata, e poi **Pamplona**, famosa per la corsa dei tori ma tranquilla in quel periodo estivo. Trascorriamo la notte presso il Camping Ezcaba, leggermente decentrato rispetto al centro di Pamplona, ma facilmente raggiungibile tramite pista ciclabile.",
      "Una delle tappe più sorprendenti del viaggio è stata il **Parco Naturale delle Bardenas Reales**, un paesaggio quasi lunare, fatto di canyon e deserti d'argilla. Si tratta di un sito naturale semidesertico, visitabile gratuitamente in auto/camper/bici/moto. È necessario stare lungo il percorso sterrato tracciato e seguire le indicazioni riportate nella cartina che viene consegnata all'ingresso del parco.",
      "![](/img_articles/spagna_del_nord_sara_guido/IMG_20250822_100521.jpg)",
      "Il percorso circolare è di circa 34km e occorrono almeno 3 ore per completarlo: le strade sono sterrate ma in buone condizioni; tuttavia, la velocità massima consentita è di 40km/h. È possibile fermarsi per fare foto nei punti panoramici ed è severamente proibito oltrepassare, anche a piedi, le zone interdette dai cartelli che indicano la zona militare.",
      "L'ultima sosta spagnola è stata **Saragozza**, con la sua splendida Basilica del Pilar, prima di rientrare in Francia per un'ultima notte a La Grande Motte, vicino a Montpellier.",
      "## Viaggiare con la tenda da tetto: il nostro modo di essere liberi",
      "Da dieci anni viaggiamo con il nostro Fiat Doblò soprannominato \"carrozzone\" che Guido ha camperizzato studiandone ogni minimo dettaglio. Internamente la zona giorno è dotata di frigo, fornello, lavandino e wc chimico; sopra invece abbiamo la zona notte grazie all'installazione della tenda da tetto Columbus dell'Autohome. Questa disposizione ci consente di stare all'interno del mezzo in caso di brutto tempo (farci da mangiare, rilassarci, ecc.).",
      "È il nostro piccolo mondo: ci regala autonomia, comfort essenziale e, soprattutto, libertà.",
      "Apertura e chiusura in pochi minuti, ogni giorno un panorama diverso, la possibilità di scegliere sul momento dove dormire — che sia un campeggio, un'area sosta o un punto panoramico isolato.",
      "Viaggiare così significa vivere la vacanza all'aria aperta, senza vincoli, a contatto con la natura e con il ritmo lento delle strade secondarie.",
      "## La strada come casa",
      "La Spagna del Nord ci ha regalato 19 giorni di emozioni, incontri, paesaggi e libertà assoluta.",
      "Ogni tappa è stata diversa, ogni alba un nuovo inizio.",
      "**Viaggiare con la tenda da tetto non è solo un modo di spostarsi — è uno stile di vita, una scelta di semplicità e autenticità che ci fa sentire davvero a casa, ovunque decidiamo di fermarci.**",
      "![Sara e Guido](/img_articles/spagna_del_nord_sara_guido/Sara%20e%20Guido.jpg)"
    ],
    author: "Sara Sarti",
    authorAvatar: "/img_articles/autori/sara%20sarti/sara%20e%20guido%20avatar%20autori.png",
    readTime: "4 min",
    location: "Spagna del Nord",
    category: "Destinazioni",
    date: "10 Gennaio 2026",
    image: "/img_articles/spagna_del_nord_sara_guido/IMG_20250817_152218.jpg",
    likes: 0,
    comments: 0
  },
  "viaggiare-famiglia-minivan-camperboxes": {
    title: "Viaggiare in famiglia con il nostro minivan: esperienze di libertà e scoperta",
    excerpt: "La nostra vita in viaggio con un Ford Tourneo allestito fai-da-te: famiglia, cane e avventure tra Val Trebbia, Liguria, Elba e Abruzzo.",
    content: [
      "Quando abbiamo acquistato il nostro Ford Tourneo, l'obiettivo era duplice: un mezzo pratico per il lavoro e, allo stesso tempo, un compagno di viaggio per le nostre avventure in famiglia. Da qui è nata l'idea di realizzare un allestimento completamente amovibile, progettato e costruito da noi, che rispondesse alle esigenze di quattro persone (due adulti e due bambini di 3 e 6 anni) e della nostra cagnolina di taglia media, Agapi.",
      "## Il nostro minivan e l'allestimento amovibile",
      "La sfida principale era ricavare uno spazio letto interno abbastanza ampio da permetterci di dormire tutti e quattro comodamente. Abbiamo quindi ideato una rete letto estensibile con doghe in legno e struttura in alluminio: solida, leggera e modulare.",
      "Dal portellone posteriore si accede anche alla cucina estraibile, montata su guide: un modulo compatto ma completo, con fornello, vani dedicati, taniche per acqua chiara e grigia e un piccolo pianale a scomparsa che ospita il frigorifero a 12V.",
      "![Camperizzazione amovibile Camper Boxes](/img_articles/i_nostri_viaggi_in_camper/1-camperizzazione-amovibile-camper-boxes.jpg)",
      "Lo stivaggio dei vestiti e degli oggetti personali si trova all'interno dell'abitacolo: grazie alla rimozione dei due sedili della seconda fila (abbiamo 3 posti davanti), i nostri cassettoni si aprono verso l'interno, permettendoci di avere tutto a portata di mano senza uscire dal mezzo.",
      "Come per tutte le soluzioni Camper Boxes, l'allestimento è totalmente amovibile: nessun foro, nessun fissaggio al telaio. La struttura è saldamente ancorata tramite cinghie ferma carico, così da poter trasformare il veicolo in base alle necessità, dal lavoro alle vacanze.",
      "## I nostri primi viaggi in minivan: dalla pianura alla Liguria passando per Collodi",
      "Abbiamo acquistato il Tourneo a dicembre, ma il primo vero viaggio è arrivato solo a fine aprile: un itinerario semplice ma ricco, partito da Bologna e concluso a Genova, con tappa finale al Parco di Pinocchio a Collodi.",
      "I nostri itinerari hanno sempre un'impronta **mista**: piacevole per noi adulti, divertente per i bambini e adatta anche alla nostra cagnolina. Alterniamo visite culturali, soste nella natura, camminate nei boschi e tappe più turistiche.",
      "### Grazzano Visconti",
      "La prima meta del viaggio è stata Grazzano Visconti, borgo che desideravamo visitare da tempo. Già dal parcheggio abbiamo sperimentato uno dei grandi vantaggi di viaggiare con un mezzo compatto: abbiamo potuto lasciare il veicolo nell'area auto anziché nel parcheggio camper, pagando la metà. Un piccolo dettaglio, che racconta la libertà e la spontaneità che un van di queste dimensioni consente.",
      "### Val Trebbia: Brugnello e Bobbio",
      "Proseguendo, la Val Trebbia ci ha regalato paesaggi rilassanti, boschi e un fiume cristallino. A Brugnello, borgo minuscolo e sospeso nel tempo, la vista dall'alto abbraccia l'intera valle.",
      "![Val Trebbia - Borgo di Brugnello](/img_articles/i_nostri_viaggi_in_camper/2-val_trebbia_borgo_brugnello.jpg)",
      "La tappa successiva è stata Bobbio, con sosta all'area comunale vicino al centro storico: il luogo perfetto per inaugurare la veranda da furgone e mettere alla prova la cucina estraibile. Cena semplice con sottofondo musicale del fiume Trebbia e visita al celebre Ponte Gobbo.",
      "![Cucina estraibile Camper Boxes con veranda](/img_articles/i_nostri_viaggi_in_camper/3-cucina-estrabile-camper-boxes-veranda.jpg)",
      "### Genova e la costa ligure",
      "Dopo Bobbio siamo arrivati a Genova, con il paesaggio che cambia dalle montagne tranquille al tessuto urbano della città portuale. Ci siamo sistemati al Camping Villa Doria a Pegli, immerso nel verde, lontano dal traffico e ben collegato al centro.",
      "Per andare all'Acquario abbiamo utilizzato i mezzi pubblici: dal campeggio si raggiunge facilmente la stazione ferroviaria di Genova Pegli, che dista pochi minuti a piedi, e da lì abbiamo preso il treno verso il centro cittadino. Sostando in campeggio, i bambini hanno avuto la possibilità di giocare liberamente vicino alla nostra piazzola e di fare amicizia con i vicini: una famiglia francese con un figlio dell'età dei nostri. Un esempio perfetto di come il viaggio in famiglia possa essere esperienza sociale e interculturale.",
      "Sulla strada del ritorno, Boccadasse, Sori e Santa Margherita Ligure ci hanno regalato tappe rilassanti tra spiagge e panorami pittoreschi.",
      "### Toscana: Quercia delle Streghe e Montecarlo",
      "In Toscana abbiamo fatto sosta nei pressi di Lucca, per visitare la suggestiva Quercia delle Streghe a Capannori, un albero monumentale carico di leggende e atmosfera quasi mistica.",
      "![Quercia delle Streghe - Capannori](/img_articles/i_nostri_viaggi_in_camper/4-%20quercia-capannori.jpg)",
      "Da lì, senza un programma preciso, abbiamo scoperto Montecarlo, borgo medievale che non era nei piani ma si è rivelato una sorpresa meravigliosa. Abbiamo cenato tra mura antiche e il giorno seguente visitato il Parco di Pinocchio, con Agapi al seguito (sì, i cani sono ammessi!).",
      "## Giugno: Isola d'Elba",
      "A giugno siamo ripartiti da Bologna con traghetto prenotato, direzione Isola d'Elba. Prima tappa: Golfo di Baratti, notte all'area sosta Sant'Ignazio tra mare e relax.",
      "Poi imbarco per Portoferraio e sistemazione al Camping Lacona, base per tutta la vacanza.",
      "Abbiamo scaricato dal van la cucina estraibile, posizionata sotto il gazebo, e dormito in tenda per tutta la settimana. Viaggio più stanziale del solito, ma con il van libero per esplorare l'isola.",
      "![Cucina estraibile in campeggio](/img_articles/i_nostri_viaggi_in_camper/5-%20cucina-estraibile-in-campeggio.jpg)",
      "## Agosto: Abruzzo",
      "Ad agosto siamo partiti da Silvi Marina, nostra base per il mese, e il nostro spirito esploratore ci ha portato nell'entroterra.",
      "Tappe principali: Riserva del Lupo a Popoli, Camping Wolf a Civitella Alfedena, passeggiate tra daini e torte fatte in casa.",
      "![Centro del Lupo - Popoli](/img_articles/i_nostri_viaggi_in_camper/6-%20centro-lupo-popoli.jpg)",
      "Per i bambini è stata un'esperienza educativa: hanno imparato a rispettare la natura e gli animali selvatici, scoprendo che il lupo non è solo paura, ma simbolo di equilibrio e vita libera.",
      "Successivamente, Pescocostanzo e Camping Snow Village nei pressi di Roccaraso, con piazzole immerse nella natura. Sulla via del ritorno, picnic nel Bosco di Sant'Antonio e visita al borgo di Pacentro, con castello e canyon spettacolare.",
      "## La magia di viaggiare con un minivan compatto",
      "Viaggiare con un mezzo piccolo significa libertà e spontaneità: puoi conoscere la meta finale, ma lasciarti sorprendere lungo il percorso. Fermarsi ovunque, cucinare, dormire e vivere esperienze senza stress è un grande vantaggio, soprattutto in famiglia.",
      "In questi viaggi abbiamo imparato che il bello non è solo la destinazione, ma tutto ciò che accade tra una tappa e l'altra: paesaggi, incontri, giochi e piccole avventure.",
      "![Van Camper Boxes](/img_articles/i_nostri_viaggi_in_camper/7-van-camper-boxes.jpg)",
      "E si può vivere tutto questo ancora meglio grazie a un mezzo organizzato e pensato per essere funzionale. Le camperizzazioni amovibili di Camper Boxes nascono proprio con questo obiettivo: sfruttare al massimo ogni centimetro del mezzo, dando un posto a tutto e rendendo l'esperienza di viaggio più semplice e ordinata. Moduli pratici, personalizzabili e adattabili a van e minivan diversi permettono di organizzare gli spazi, avere sempre tutto a portata di mano e trasformare rapidamente l'interno in ciò che serve—zona cucina, area notte o carico.",
      "È così che anche un mezzo compatto diventa una piccola casa su ruote: funzionale, accogliente e pronta a seguirti ovunque, con tutto ciò che serve davvero per sentirsi liberi.",
      "Sul nostro sito (www.camperboxes.it) trovi idee, progetti e soluzioni per ottimizzare gli spazi in viaggio con moduli amovibili su misura."
    ],
    author: "Arianna e David di Camperboxes",
    authorAvatar: "",
    readTime: "12 min",
    location: "Italia",
    category: "Destinazioni",
    date: "7 Gennaio 2026",
    image: "/img_articles/i_nostri_viaggi_in_camper/7-van-camper-boxes.jpg",
    likes: 0,
    comments: 0
  },
  "guida-completa-tende-da-tetto": {
    title: "Guida Completa alle Tende da Tetto",
    excerpt: "Tutto quello che devi sapere per scegliere la tenda da tetto perfetta per le tue avventure",
    content: [
      "Le tende da tetto rappresentano una rivoluzione nel mondo del campeggio. A differenza delle tende tradizionali, si montano sul tetto della tua auto, offrendoti comfort, praticità e una vista panoramica unica.",
      "## Perché scegliere una tenda da tetto?",
      "I vantaggi sono molteplici: montaggio rapido in pochi minuti, isolamento dal terreno (addio umidità e insetti!), maggiore sicurezza, e la possibilità di campeggiare praticamente ovunque tu possa parcheggiare.",
      "## Tipologie di tende da tetto",
      "Esistono principalmente due categorie: le tende a **soffietto** (soft-top) e quelle a **guscio rigido** (hard-top). Le prime sono più economiche e leggere, le seconde offrono maggiore comodità e velocità di apertura.",
      "### Tende a soffietto",
      "Ideali per chi inizia, hanno un prezzo più accessibile (dai 800€ ai 2000€) e si piegano riducendo l'ingombro. Il montaggio richiede circa 5-10 minuti.",
      "### Tende a guscio rigido",
      "Per i più esigenti, si aprono in pochi secondi grazie a pistoni a gas. Prezzo più elevato (dai 2000€ ai 5000€) ma comodità impareggiabile.",
      "## Come scegliere la tenda giusta",
      "Considera questi fattori: **numero di persone** (esistono modelli da 2, 3 o 4 posti), **peso massimo supportato** dal tuo veicolo, **budget disponibile**, e **frequenza di utilizzo**.",
      "## Accessori indispensabili",
      "Non dimenticare: scala di accesso, materasso di qualità (spesso incluso), telo anti-condensa, e illuminazione interna a LED.",
      "## Conclusioni",
      "Investire in una tenda da tetto significa investire in libertà. Con la giusta preparazione, ogni weekend può trasformarsi in un'avventura indimenticabile!"
    ],
    author: "Marco Rossi",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
    readTime: "8 min",
    location: "",
    category: "Attrezzatura",
    date: "15 Novembre 2024",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    likes: 342,
    comments: 47
  },
  "10-campeggi-piu-belli-italia": {
    title: "I 10 Campeggi Più Belli d'Italia",
    excerpt: "Scopri i campeggi più spettacolari del nostro paese, perfetti per chi viaggia con tenda da tetto",
    content: [
      "L'Italia offre scenari mozzafiato per gli amanti del campeggio con tenda da tetto. Abbiamo selezionato per voi i 10 campeggi più belli, testati dalla nostra community.",
      "## 1. Camping Seiser Alm - Alto Adige",
      "Ai piedi dell'Alpe di Siusi, il più grande altopiano d'Europa. Vista sulle Dolomiti, aria pura e sentieri infiniti. Prezzo: €28/notte.",
      "## 2. Camping Lake Garda - Veneto",
      "Direttamente sul lago, con spiaggia privata e possibilità di sport acquatici. Ideale per famiglie. Prezzo: €25/notte.",
      "## 3. Camping Baia del Silenzio - Liguria",
      "Un angolo di paradiso tra Sestri Levante e le Cinque Terre. Mare cristallino e borghi da cartolina. Prezzo: €32/notte.",
      "## 4. Camping Dolomiti - Trentino",
      "Nel cuore della Val di Fassa, perfetto per escursioni estive e sci invernale. Prezzo: €30/notte.",
      "## 5. Camping Costa Smeralda - Sardegna",
      "Spiagge caraibiche e macchia mediterranea. Un po' caro ma ne vale ogni centesimo. Prezzo: €45/notte.",
      "## 6. Camping Lago di Como - Lombardia",
      "Atmosfera romantica, ville storiche e montagne che si tuffano nel lago. Prezzo: €27/notte.",
      "## 7. Camping Maremma - Toscana",
      "Natura selvaggia, cavalli allo stato brado e tramonti indimenticabili. Prezzo: €22/notte.",
      "## 8. Camping Gran Paradiso - Valle d'Aosta",
      "Nel primo parco nazionale italiano, tra stambecchi e ghiacciai. Prezzo: €24/notte.",
      "## 9. Camping Gargano - Puglia",
      "Foreste di pini, grotte marine e il mare più bello dell'Adriatico. Prezzo: €26/notte.",
      "## 10. Camping Etna - Sicilia",
      "Campeggiare ai piedi del vulcano attivo più alto d'Europa. Esperienza unica! Prezzo: €23/notte.",
      "## Consigli per la prenotazione",
      "Prenotate con anticipo, soprattutto in alta stagione. Molti campeggi offrono sconti per soggiorni prolungati e per i membri della nostra community!"
    ],
    author: "Sara Bianchi",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
    readTime: "12 min",
    location: "Italia",
    category: "Destinazioni",
    date: "10 Novembre 2024",
    image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?auto=format&fit=crop&w=1200&q=80",
    likes: 528,
    comments: 89
  },
  "checklist-campeggio-perfetto": {
    title: "Check-list per il Campeggio Perfetto",
    excerpt: "Non dimenticare mai più nulla: la lista completa per organizzare la tua avventura",
    content: [
      "Quante volte sei arrivato al campeggio e ti sei accorto di aver dimenticato qualcosa di fondamentale? Con questa checklist non succederà più!",
      "## 🏕️ Attrezzatura Base",
      "- Tenda da tetto (ovviamente!)\n- Scala di accesso\n- Materasso e cuscini\n- Sacco a pelo adatto alla stagione\n- Telo anti-condensa\n- Illuminazione LED interna",
      "## 🍳 Cucina da Campo",
      "- Fornello a gas + bombole di ricambio\n- Set pentole da campeggio\n- Posate e piatti (meglio se riutilizzabili)\n- Tagliere e coltello multiuso\n- Borsa frigo o frigorifero portatile\n- Scorta d'acqua (minimo 5L a persona)",
      "## 👕 Abbigliamento",
      "- Vestiti a strati (la sera rinfresca!)\n- Giacca impermeabile\n- Scarpe da trekking\n- Ciabatte per la doccia\n- Costume da bagno\n- Cappello e occhiali da sole",
      "## 🧰 Attrezzi e Sicurezza",
      "- Kit pronto soccorso\n- Torcia frontale + batterie\n- Corda e moschettoni\n- Duct tape (risolve tutto!)\n- Multi-tool o coltellino svizzero\n- Caricatore portatile per telefono",
      "## 📱 Tecnologia Utile",
      "- GPS o mappe offline scaricate\n- App meteo\n- Powerbank solare\n- Radio a manovella (per emergenze)",
      "## 📋 Documenti",
      "- Documenti personali\n- Tessera sanitaria\n- Assicurazione viaggio\n- Prenotazione campeggio\n- Contatti emergenza",
      "## 💡 Pro Tips",
      "1. Prepara la borsa almeno 2 giorni prima\n2. Fai una lista personalizzata e aggiornala dopo ogni viaggio\n3. Tieni un kit base sempre pronto in auto\n4. Controlla il meteo prima di partire\n5. Avvisa sempre qualcuno del tuo itinerario",
      "Buon campeggio! 🏕️"
    ],
    author: "Luca Verdi",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    readTime: "5 min",
    location: "",
    category: "Tips",
    date: "5 Novembre 2024",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
    likes: 256,
    comments: 32
  },
  "manutenzione-tenda-da-tetto": {
    title: "Manutenzione della Tenda da Tetto",
    excerpt: "Come prenderti cura della tua tenda per farla durare nel tempo: pulizia, impermeabilizzazione e stoccaggio",
    content: [
      "Una tenda da tetto ben mantenuta può durare molti anni. Ecco come prendertene cura al meglio.",
      "## 🧼 Pulizia Regolare",
      "Dopo ogni utilizzo, è importante pulire la tenda per rimuovere sporco, polvere e residui. Usa acqua tiepida e un sapone neutro, evitando detergenti aggressivi che potrebbero danneggiare il tessuto impermeabile.",
      "## 💧 Impermeabilizzazione",
      "Con il tempo, il trattamento impermeabile può perdere efficacia. Controlla regolarmente la tenuta all'acqua e riapplica un prodotto impermeabilizzante specifico quando necessario.",
      "## 📦 Stoccaggio Corretto",
      "Quando non usi la tenda per lunghi periodi, conservala in un luogo asciutto e ventilato. Evita luoghi umidi o troppo caldi. Se possibile, conservala semi-aperta per permettere la circolazione dell'aria.",
      "## 🔧 Controlli Periodici",
      "Verifica regolarmente le cerniere, le cuciture e i meccanismi di apertura. Lubrifica le parti mobili e sostituisci eventuali componenti danneggiati.",
      "## ⚠️ Cosa Evitare",
      "- Mai riporre la tenda bagnata\n- Non usare candeggina o solventi\n- Evitare l'esposizione prolungata al sole quando chiusa\n- Non sovraccaricare la tenda con peso eccessivo"
    ],
    author: "Marco Rossi",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    readTime: "6 min",
    location: "",
    category: "Attrezzatura",
    date: "1 Novembre 2024",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1200&q=80",
    likes: 189,
    comments: 23
  },
  "viaggiare-con-bambini-tenda-tetto": {
    title: "Viaggiare con Bambini in Tenda da Tetto",
    excerpt: "Consigli pratici per organizzare avventure family-friendly: sicurezza, comfort e divertimento",
    content: [
      "Viaggiare con i bambini in tenda da tetto è un'esperienza meravigliosa che crea ricordi indelebili. Ecco i nostri consigli per rendere tutto più semplice e sicuro.",
      "## 👶 Sicurezza Prima di Tutto",
      "La sicurezza è fondamentale quando si viaggia con i bambini. Assicurati che la tenda sia stabile, che la scala sia sicura e che ci siano barriere adeguate per evitare cadute durante la notte.",
      "## 🛏️ Comfort e Sonno",
      "I bambini hanno bisogno di dormire bene. Porta sacchi a pelo adatti alla loro età, cuscini familiari e magari il loro peluche preferito. Una routine della buonanotte aiuta anche in campeggio.",
      "## 🎒 Cosa Portare",
      "- Pannolini e salviette (più del previsto)\n- Cambio vestiti abbondante\n- Snack e biberon\n- Giochi compatti e silenziosi\n- Kit di pronto soccorso pediatrico\n- Protezione solare e cappellino",
      "## 🎮 Intrattenimento",
      "Pianifica attività adatte all'età: passeggiate nella natura, giochi all'aperto, osservazione stelle. Coinvolgi i bambini nella preparazione del campo base.",
      "## 📍 Scelta del Campeggio",
      "Preferisci campeggi family-friendly con servizi dedicati: aree giochi, bagni puliti, docce calde. Verifica che ci siano attività per bambini nelle vicinanze.",
      "## 💡 Tips dai Genitori",
      "1. Parti per viaggi brevi inizialmente\n2. Sii flessibile con i programmi\n3. Porta sempre più acqua del necessario\n4. Prevedi tempo di riposo\n5. Coinvolgi i bambini nelle decisioni"
    ],
    author: "Laura Gialli",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
    readTime: "9 min",
    location: "",
    category: "Tips",
    date: "15 Ottobre 2024",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    likes: 342,
    comments: 56
  },
  "sardegna-tenda-tetto-itinerario": {
    title: "Sardegna in Tenda da Tetto: Itinerario 7 Giorni",
    excerpt: "Un viaggio completo alla scoperta delle spiagge più belle, con tappe e campeggi consigliati",
    content: [
      "La Sardegna è il paradiso per chi viaggia con la tenda da tetto: spiagge mozzafiato, campeggi attrezzati e libertà assoluta.",
      "## 📅 Itinerario Consigliato",
      "### Giorno 1-2: Costa Smeralda",
      "Parti da Olbia e dirigiti verso la Costa Smeralda. Campeggia a Porto Cervo e visita le spiagge di Liscia Ruja e Capriccioli. Acque cristalline e panorami indimenticabili.",
      "### Giorno 3: Arcipelago della Maddalena",
      "Prendi il traghetto da Palau per visitare l'arcipelago. La Spiaggia Rosa è un must (anche se balneazione vietata, vale la vista). Campeggio consigliato: Camping Isuledda.",
      "### Giorno 4-5: Alghero e Capo Caccia",
      "Costeggia verso ovest fino ad Alghero. Visita le Grotte di Nettuno e goditi il tramonto dal promontorio. Campeggio Laguna Blu è perfetto.",
      "### Giorno 6: Spiagge del Sud",
      "Scendi verso Chia e Tuerredda, tra le spiagge più belle dell'isola. Sabbia bianca finissima e mare turchese.",
      "### Giorno 7: Cagliari e Rientro",
      "Visita Cagliari, esplora il Poetto e la città vecchia prima del rientro.",
      "## 🏕️ Campeggi Consigliati",
      "- Camping Village Isuledda (La Maddalena)\n- Camping Laguna Blu (Alghero)\n- Camping Torre Chia (Chia)\n- Camping Capo Ferrato (Costa Rei)",
      "## 💡 Consigli Pratici",
      "- Prenota i campeggi in alta stagione\n- Porta scorta d'acqua (nell'interno può scarseggiare)\n- Usa creme solari ecologiche\n- Rispetta il divieto di balneazione dove segnalato\n- Assaggia la cucina locale: porceddu, malloreddus, seadas!"
    ],
    author: "Luca Verdi",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    readTime: "15 min",
    location: "Sardegna",
    category: "Destinazioni",
    date: "10 Ottobre 2024",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    likes: 478,
    comments: 67
  },
  "dolomiti-tenda-tetto-itinerario": {
    title: "Dolomiti in Tenda da Tetto: Itinerario 5 Giorni",
    excerpt: "Tra passi alpini e laghi cristallini: l'itinerario perfetto per gli amanti della montagna",
    content: [
      "Le Dolomiti offrono scenari mozzafiato per chi viaggia in tenda da tetto. Un paradiso per escursionisti e amanti della natura.",
      "## 🏔️ Itinerario 5 Giorni",
      "### Giorno 1: Val Gardena",
      "Parti da Bolzano e sali in Val Gardena. Prima tappa: Ortisei. Campeggia al Camping Sassolungo con vista sulle cime dolomitiche. Escursione al Rifugio Alpe di Siusi.",
      "### Giorno 2: Passo Sella e Val di Fassa",
      "Attraversa il Passo Sella (2.240m) e scendi in Val di Fassa. Sosta a Canazei, escursione al Lago di Carezza, uno dei più fotografati delle Dolomiti. Campeggio Marmolada.",
      "### Giorno 3: Cortina d'Ampezzo",
      "Raggiungi Cortina attraverso il Passo Falzarego. Visita le Tre Cime di Lavaredo (imperdibile!). Campeggio Rocchetta con vista sulle montagne.",
      "### Giorno 4: Lago di Misurina e Tre Cime",
      "Escursione mattutina alle Tre Cime di Lavaredo (circa 3 ore andata-ritorno). Pomeriggio al Lago di Misurina, chiamato 'la perla delle Dolomiti'.",
      "### Giorno 5: Val Pusteria e Rientro",
      "Scendi in Val Pusteria, visita Brunico e le sue fortificazioni. Ultima tappa al Lago di Braies prima del rientro.",
      "## 🏕️ Campeggi Montani",
      "- Camping Sassolungo (Ortisei)\n- Camping Marmolada (Canazei)\n- Camping Rocchetta (Cortina)\n- Camping Olympia (Dobbiaco)",
      "## ⛰️ Escursioni Consigliate",
      "- Tre Cime di Lavaredo (difficoltà media)\n- Alpe di Siusi (facile)\n- Seceda (panoramica)\n- Lago di Braies (facile)",
      "## 💡 Consigli Essenziali",
      "- Porta abbigliamento a strati (le temperature cambiano velocemente)\n- Verifica condizioni meteo quotidianamente\n- Prenota campeggi in anticipo\n- Porta kit pronto soccorso montagna\n- In alta stagione, parti presto per le escursioni popolari",
      "## 🍽️ Specialità da Provare",
      "Non perdere i canederli, lo speck, lo strudel e i formaggi locali. Fermati nei rifugi per piatti tipici con vista!"
    ],
    author: "Marco Rossi",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    readTime: "12 min",
    location: "Dolomiti",
    category: "Destinazioni",
    date: "5 Ottobre 2024",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    likes: 623,
    comments: 94
  },
  "campeggio-libero-tenda-tetto-monte-grappa": {
    title: "Campeggio libero in tenda da tetto: due giorni di solitudine sul Monte Grappa",
    excerpt: "Due giorni in solitaria sul Monte Grappa con la Jeep Renegade 4x4 e la tenda da tetto Yakima: silenzio, natura e campeggio libero responsabile.",
    content: [
      "## Ci sono luoghi che non hanno bisogno di essere condivisi",
      "Ci sono luoghi che non hanno bisogno di essere condivisi con nessuno, se non con sé stessi.",
      "Per me, il campeggio libero in tenda da tetto è proprio questo: una scelta consapevole di solitudine, silenzio e immersione totale nella montagna.",
      "La mia \"zona libera\" è spesso il Monte Grappa. Un luogo che conosco bene e che, cosa non da poco, posso raggiungere in meno di un'ora da casa. Questa vicinanza mi permette di partire anche all'ultimo momento, seguendo il meteo, l'istinto o semplicemente il bisogno di staccare.",
      "## La libertà di scegliere lo spot giusto",
      "Quando si viaggia con una tenda da tetto Yakima montata sulla Jeep Renegade 4x4, il concetto di \"posto dove dormire\" cambia completamente.",
      "Non si cercano campeggi o aree attrezzate, ma punti isolati, costoni di montagna, strade boschive poco battute, radure affacciate sul vuoto.",
      "Grazie alla trazione integrale, posso raggiungere spot che con un'auto normale sarebbero difficili — se non impossibili — da affrontare. Non parlo di off-road estremo, ma di quelle strade di montagna che richiedono grip, altezza da terra e sicurezza. Questo apre possibilità enormi per chi ama il campeggio libero in modo responsabile.",
      "Arrivati allo spot, bastano pochi minuti: parcheggio, apertura della tenda, e il campo è pronto. Nessun picchetto, nessun terreno da livellare. Solo la montagna tutto intorno.",
      "![Jeep Renegade sul costone del Monte Grappa](/img_articles/campeggio__libero_Monte_grappa/Immagine1.jpg)",
      "*La libertà ha bisogno di spazio. Quando il silenzio diventa casa. La Jeep Renegade con tenda da tetto Yakima, sola su un costone del Monte Grappa, raggiunto in meno di un'ora ma lontanissimo da tutto. Qui il campeggio libero è scelta consapevole: fermarsi, restare, ascoltare la montagna e vivere il tempo senza distrazioni.*",
      "## Andare in libera da soli",
      "Andare in campeggio libero da soli è un'esperienza che divide: c'è chi non lo farebbe mai e chi, dopo averlo provato, non riesce più a farne a meno.",
      "Restare isolati per un paio di giorni, senza rumori artificiali, senza orari, senza connessione, cambia il modo in cui si percepisce il tempo.",
      "Il bosco non è più uno sfondo, ma diventa protagonista: il vento tra gli alberi, i rumori notturni, la luce che cambia durante il giorno.",
      "La solitudine non pesa, anzi. È voluta, cercata. Ed è proprio questa scelta che permette di apprezzare davvero la montagna, senza distrazioni.",
      "## Vivere lentamente, anche solo per due giorni",
      "Sul Monte Grappa, soprattutto in certi spot isolati, il ritmo rallenta naturalmente.",
      "Si cucina qualcosa di semplice, si osserva il panorama, si legge, si cammina nei dintorni. La sera arriva presto e il cielo, lontano dalle luci, regala stelle che in città ci si dimentica perfino esistano.",
      "Dormire in tenda da tetto, sospesi sopra l'auto, dà una sensazione di protezione ma anche di apertura totale verso l'ambiente. Al mattino, basta aprire la tenda per avere davanti bosco e montagne, senza filtri.",
      "![Strada boschiva, tenda aperta nel cuore del bosco](/img_articles/campeggio__libero_Monte_grappa/Immagine2.jpg)",
      "*La strada finisce, l'esperienza comincia. Dove arrivano solo le ruote giuste. Una strada boschiva, il profumo degli alberi e la possibilità di fermarsi per giorni in totale solitudine. Grazie al 4x4 della Renegade e alla tenda da tetto, anche gli spot più isolati diventano casa, sempre nel rispetto del bosco e della montagna.*",
      "## Tenda da tetto e rispetto per l'ambiente",
      "Il campeggio libero, soprattutto in montagna, richiede rispetto e consapevolezza.",
      "Scegliere spot già battuti, non lasciare tracce, non disturbare la fauna e ripartire lasciando tutto esattamente com'era — o meglio.",
      "La tenda da tetto aiuta anche in questo: minimo impatto, nessun segno sul terreno, nessuna modifica dell'ambiente."
    ],
    author: "Igor Ferrazzi",
    authorAvatar: "",
    readTime: "4 min",
    location: "Monte Grappa, Italia",
    category: "Destinazioni",
    date: "12 Febbraio 2026",
    image: "/img_articles/campeggio__libero_Monte_grappa/Immagine1.jpg",
    likes: 0,
    comments: 0
  },
  "intervista-esperti-carcamp-menabo": {
    title: "Intervista con gli esperti di Carcamp e Menabò",
    excerpt: "Per tutta la community l'intervista fatta con gli esperti di settore Carcamp e Menabò per la conoscenza dei dettagli tecnici delle barre portatutto.",
    content: [
      "Per tutta la community l'intervista fatta con gli esperti di settore Carcamp e Menabò per la conoscenza dei dettagli tecnici delle barre, sperando di potervi dare informazioni complete e precise per scegliere al meglio dove sistemare le nostre amate tende!",
      "In riferimento alla vostra comunicazione, e con l'obiettivo di fornire chiarimenti tecnici corretti e univoci a beneficio degli utenti del gruppo \"Tende da Tetto e Campeggio\", riportiamo di seguito le risposte alle domande ricevute.",
      "Le informazioni fornite si basano sulle normative di riferimento, sulle indicazioni dei costruttori e sull'esperienza tecnica maturata nel settore delle barre portatutto e delle tende da tetto.",
      "![Barre portatutto Menabò](/img_articles/barre_menabo/img_menabo000.jpg)",
      "## L'intervista",
      "### Quale materiale è consigliato per il montaggio di una tenda da tetto: acciaio o alluminio?",
      "L'alluminio è generalmente il materiale preferibile per l'installazione di una tenda da tetto, in quanto consente di ridurre il peso complessivo sul tetto del veicolo e offre migliori caratteristiche aerodinamiche.",
      "L'acciaio può essere utilizzato in contesti specifici, ma risulta meno vantaggioso in termini di peso e gestione del carico.",
      "![Dettaglio barre in alluminio](/img_articles/barre_menabo/img_menabo001.jpg)",
      "### Il carico massimo dinamico indicato dal produttore riguarda la singola barra o l'intero set?",
      "Il carico massimo dinamico dichiarato dal produttore si riferisce all'intero set di barre, salvo diversa indicazione esplicita.",
      "La dicitura può essere riportata come \"Max Load\" o \"Carico massimo\" e deve sempre essere interpretata come valore complessivo della coppia di barre.",
      "### Le auto con tetto liscio (senza rail) hanno punti di ancoraggio predisposti dalla casa madre?",
      "In molti casi i veicoli con tetto liscio dispongono di soluzioni predisposte dalla casa madre, ma non in modo universale. Le principali casistiche sono:",
      "- **Fixpoints:** punti filettati nascosti sotto coperture o modanature del tetto (idonei per il montaggio di tenda da tetto)\n- **Sistemi a morsa (clamp, attacco a ganascina):** fissaggio sul telaio porta in assenza di fixpoints",
      "Si precisa tuttavia che, allo stato attuale, il sistema a morsa risulta **non adatto** all'installazione di tende da tetto in quanto maggiormente limitato in termini di portata e distribuzione dei carichi.",
      "![Sistema di fissaggio barre](/img_articles/barre_menabo/img_menabo002.jpg)",
      "### Qual è la differenza tra carico massimo dinamico e carico statico?",
      "- **Carico dinamico:** carico massimo consentito con il veicolo in movimento\n- **Carico statico:** carico massimo ammesso a veicolo fermo (sosta, campeggio)",
      "È sempre necessario attenersi alle specifiche del costruttore, verificando sia il carico dinamico massimo sia l'eventuale valore di carico statico dichiarato.",
      "### Se le barre hanno un carico massimo dinamico di 75 kg, quanto carico statico possono sopportare?",
      "In linea generale, la portata statica delle barre può essere stimata in circa **2,5 volte il carico dinamico**.",
      "Nel caso di barre con carico dinamico pari a 75 kg, il carico statico teorico risulta quindi pari a circa **187,5 kg**.",
      "Resta fondamentale considerare anche il limite del tetto del veicolo e del sistema di fissaggio.",
      "![Barre montate su veicolo](/img_articles/barre_menabo/img_menabo003.jpg)",
      "### Come cambia la portata con auto dotate di barre longitudinali aperte? E con auto dotate di barre longitudinali chiuse (flush rail)?",
      "Indipendentemente dalla tipologia di barre longitudinali (aperte o flush rail), la portata effettiva è sempre determinata dal valore più basso tra:",
      "- Limite dichiarato dal costruttore del veicolo (tetto/rail)\n- Limite del kit barre installato",
      "### Dopo quanti chilometri è consigliato il controllo del fissaggio e del serraggio delle barre?",
      "Si consiglia un primo controllo dopo circa **50 km** dall'installazione. Successivamente, i controlli andrebbero effettuati ogni **1.000 km**, anticipandoli in caso di:",
      "- Utilizzo su fondi sconnessi\n- Impiego gravoso\n- Presenza di rumori o vibrazioni anomale",
      "### Qual è la velocità massima consigliata con una tenda da tetto montata?",
      "Si raccomanda di non superare i **130 km/h**, adattando comunque la velocità al carico, al veicolo e al tipo di percorso.",
      "![Tenda da tetto montata su barre](/img_articles/barre_menabo/img_menabo004.jpg)",
      "### Caricare il tetto incide sui consumi di carburante?",
      "Il carico sul tetto incide sui consumi, in particolare quando è voluminoso (tende da tetto, box, ecc.), a causa del peggioramento dell'aerodinamica. L'incremento dei consumi dipende da molteplici fattori (veicolo, forma del carico, velocità, condizioni ambientali).",
      "L'effetto diventa esponenziale all'aumentare della velocità, soprattutto in ambito autostradale. A titolo puramente esemplificativo, riportiamo valori medi realistici, considerando un'auto di segmento medio in condizioni di utilizzo standard:",
      "| Condizione | 60 km/h | 130 km/h |\n|------------|:-------:|:--------:|\n| Senza carichi sul tetto | ~20 km/l | ~16 km/l |\n| Con tenda da tetto installata | ~18,5–19 km/l | ~12–13 km/l |",
      "L'impatto sui consumi è contenuto alle basse velocità, mentre diventa più rilevante in autostrada, dove la resistenza aerodinamica incide in modo significativo. I valori possono variare in funzione del veicolo, della tenda installata e delle condizioni di guida.",
      "## Intervistati",
      "**Incaricato Tecnico CARCAMP® F.lli Menabò S.r.l.**\nDiego Meloni",
      "**Incaricato Tecnico F.lli Menabò S.r.l.**\nLuca Menabò"
    ],
    author: "Lo Staff di Tende da Tetto",
    authorAvatar: "/logo_tende.jpg",
    readTime: "8 min",
    location: "Italia",
    category: "Attrezzatura",
    date: "14 Febbraio 2026",
    image: "/img_articles/barre_menabo/carcamp_menabo_cover.png",
    likes: 0,
    comments: 0
  }
};

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? guidesData[slug] : undefined;
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = `${siteUrl}/guide/${slug}`;

  // Helper function to convert Italian date to ISO string
  const getISODate = (italianDate: string): string => {
    const months: Record<string, string> = {
      'Gennaio': '01', 'Febbraio': '02', 'Marzo': '03', 'Aprile': '04',
      'Maggio': '05', 'Giugno': '06', 'Luglio': '07', 'Agosto': '08',
      'Settembre': '09', 'Ottobre': '10', 'Novembre': '11', 'Dicembre': '12'
    };
    
    const parts = italianDate.split(' ');
    if (parts.length === 3) {
      const day = parts[0].padStart(2, '0');
      const month = months[parts[1]] || '01';
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    return new Date().toISOString();
  };

  if (!guide) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Guida non trovata</h1>
            <p className="text-muted-foreground mb-8">
              La guida che stai cercando non esiste o è stata rimossa.
            </p>
            <Link to="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Torna alla Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={guide.title}
        description={guide.excerpt}
        canonicalUrl={canonicalUrl}
        ogType="article"
        ogImage={guide.image}
        keywords={`${guide.category}, ${guide.location}, tende da tetto, campeggio, ${guide.title}`}
        author={guide.author}
        publishedTime={getISODate(guide.date)}
        articleSection={guide.category}
      />
      <ArticleSchema 
        headline={guide.title}
        description={guide.excerpt}
        image={guide.image}
        datePublished={getISODate(guide.date)}
        author={guide.author}
        url={canonicalUrl}
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Guide', url: `${siteUrl}/guide` },
          { name: guide.title, url: canonicalUrl }
        ]}
      />
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <img 
            src={guide.image} 
            alt={guide.title}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 pt-28 sm:pt-32">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <Link to="/#guide" className="inline-flex items-center text-primary font-semibold hover:underline mb-3 sm:mb-5 drop-shadow-sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Torna alle Guide
                </Link>
                <div className="mb-3 sm:mb-5">
                  <Badge className="bg-primary text-white shadow-sm">{guide.category}</Badge>
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {guide.title}
                </h1>
                <p className="text-base sm:text-xl text-muted-foreground line-clamp-3 sm:line-clamp-none">{guide.excerpt}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b">
              {guide.author && (
                <div className="flex items-center gap-3">
                  {guide.authorAvatar ? (
                    <img 
                      src={guide.authorAvatar} 
                      alt={guide.author}
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-contain bg-white p-1"
                    />
                  ) : (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-foreground mb-2">{guide.author}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {guide.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {guide.readTime}
                      </div>
                      {guide.location && (
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {guide.location}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {!guide.author && (
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {guide.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {guide.readTime}
                  </div>
                  {guide.location && (
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {guide.location}
                    </div>
                  )}
                </div>
              )}
              <div className="flex items-center gap-4 ml-auto">
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Condividi
                </Button>
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Salva
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-justify">
              {guide.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("![")) {
                  const match = paragraph.match(/!\[(.*?)\]\((.*)\)/);
                  if (match) {
                    return (
                      <figure key={index} className="my-6 sm:my-8 flex flex-col items-center">
                        <img 
                          src={match[2]} 
                          alt={match[1]}
                          loading="lazy"
                          className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/5 h-auto rounded-lg shadow-md"
                        />
                        {match[1] && (
                          <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                            {match[1]}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n");
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                // Supporto per tabelle markdown
                if (paragraph.startsWith("|") && paragraph.includes("|")) {
                  const allRows = paragraph.split("\n");
                  // Filtra la riga separatrice (quella con ---)
                  const rows = allRows.filter(row => row.trim() && !row.match(/^[\s|:-]+$/));
                  
                  if (rows.length >= 2) {
                    const headers = rows[0].split("|").filter(cell => cell.trim()).map(cell => cell.trim());
                    const dataRows = rows.slice(1).map(row => 
                      row.split("|").filter(cell => cell.trim()).map(cell => cell.trim())
                    );
                    
                    const renderCell = (cell: string) => {
                      if (cell === "✅") return <span className="text-green-500 text-2xl font-bold">✓</span>;
                      if (cell === "❌") return <span className="text-red-500 text-2xl font-bold">✗</span>;
                      if (cell === "⚠️") return <span className="text-amber-500 text-2xl font-bold">⚠</span>;
                      return cell;
                    };
                    
                    return (
                      <div key={index} className="my-8 -mx-4 sm:mx-0 overflow-x-auto">
                        <table className="min-w-full border-collapse bg-card rounded-lg overflow-hidden shadow-md border border-muted/30 text-xs sm:text-sm md:text-base">
                          <thead>
                            <tr className="bg-muted/50">
                              {headers.map((header, i) => (
                                <th key={i} className={`py-1.5 px-1 sm:py-3 sm:px-3 md:px-5 text-foreground font-semibold border-b border-muted/30 whitespace-nowrap ${i === 0 ? 'text-left' : 'text-center'}`}>
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {dataRows.map((row, rowIndex) => (
                              <tr key={rowIndex} className="border-b border-muted/20 hover:bg-muted/10 transition-colors">
                                {row.map((cell, cellIndex) => (
                                  <td key={cellIndex} className={`py-1.5 px-1 sm:py-3 sm:px-3 md:px-5 ${cellIndex === 0 ? 'text-left text-foreground font-medium whitespace-nowrap' : 'text-center'}`}>
                                    {renderCell(cell)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                }
                // Supporto per il testo in grassetto **testo**
                const renderFormattedText = (text: string) => {
                  const parts = text.split(/(\*\*.*?\*\*)/g);
                  return parts.map((part, i) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  });
                };
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4 text-justify">
                    {renderFormattedText(paragraph)}
                  </p>
                );
              })}
            </div>

            {/* Related Guides */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-foreground mb-8">Altre Guide</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(guidesData)
                  .filter(([key]) => key !== slug)
                  .slice(0, 2)
                  .map(([key, g]) => (
                    <Link key={key} to={`/guide/${key}`}>
                      <Card className="group hover:shadow-elegant transition-all overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={g.image} 
                            alt={g.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-6">
                          <Badge variant="secondary" className="mb-2">{g.category}</Badge>
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {g.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                            {g.excerpt}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default GuideDetail;
