import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  "dormire-tenda-freddo-52-gallerie-pasubio": {
    title: "Dormire in tenda da tetto anche col freddo? Sì, si può!",
    excerpt: "La nostra esperienza alle 52 Gallerie del Pasubio: come affrontare il freddo autunnale in tenda da tetto con l'attrezzatura giusta.",
    content: [
      "## La nostra esperienza alle 52 Gallerie del Pasubio",
      "Quando si parla di tenda da tetto, molti la associano all'estate, ai tramonti infiniti e alle notti tiepide sotto le stelle. Ma la verità è che, con la giusta attrezzatura, si può dormire in tenda anche quando le temperature scendono. Noi l'abbiamo sperimentato a inizio ottobre, durante un weekend alle 52 Gallerie del Pasubio, e ne siamo tornati con il sorriso (e senza un briciolo di freddo).",
      "Siamo partiti il venerdì sera dalla provincia di Verona, direzione Bocchetta Campiglia, punto di partenza del celebre sentiero delle 52 Gallerie. Arrivati al parcheggio principale (6€ per 24h), la temperatura era già piuttosto bassa: un anticipo d'inverno che ci ha fatto capire che sarebbe servito tutto il calore possibile.",
      "Abbiamo aperto la nostra tenda da tetto Columbus dell'Autohome, una compagna di viaggio ormai inseparabile. Prima di metterci comodi, abbiamo applicato anche il telo invernale (sempre Autohome), studiato proprio per migliorare l'isolamento termico e proteggere dal vento. Dentro, i sacchi a pelo Ferrino con comfort fino a –15 °C e, per non farci mancare nulla, abbiamo acceso il riscaldamento ausiliario.",
      "**Risultato?** Una notte al caldo, confortevole e silenziosa, cullati solo dai suoni del bosco. Addormentarsi sapendo che fuori fa freddo, ma dentro la tenda si sta benissimo, è una sensazione impagabile.",
      "## Le 52 Gallerie del Pasubio: un capolavoro di ingegneria e storia",
      "Le 52 Gallerie del Pasubio, conosciute anche come Strada delle 52 Gallerie, sono un itinerario escursionistico unico nel suo genere, situato tra le province di Vicenza e Trento.",
      "Realizzate durante la Prima Guerra Mondiale dal Genio Militare Italiano, queste gallerie furono scavate nella roccia tra il 1917 e il 1918 per collegare Bocchetta Campiglia alle Porte del Pasubio, consentendo il trasporto sicuro di uomini e rifornimenti lontano dal tiro nemico.",
      "Il percorso, lungo circa 6,5 km solo in salita, si snoda tra pareti rocciose e panorami mozzafiato sul massiccio del Pasubio. Ogni galleria ha una sua particolarità: alcune sono dritte e brevi, altre tortuose, scavate a spirale nella montagna o aperte su vertiginosi scorci.",
      "Con un dislivello di circa 900 metri, è un'escursione che unisce storia, avventura e natura — un'esperienza che lascia davvero il segno.",
      "## L'escursione",
      "L'indomani ci siamo svegliati con un cielo non proprio limpido e aria frizzante. Mettiamo gli zaini in spalla e indossiamo le pile da testa: è così che ha inizio la salita lungo il percorso delle 52 Gallerie.",
      "La vista lungo il tragitto è spettacolare, e ogni galleria racconta un pezzo di storia e di fatica umana.",
      "Dopo circa 7,5 km di salita e 894 m di dislivello positivo, siamo arrivati al Rifugio Achille Papa, dove ci siamo concessi un panino e una birretta con vista sulle cime del Pasubio. Il rientro è avvenuto lungo la Strada degli Scarubbi, un percorso più dolce ma altrettanto panoramico, per un totale di circa 15 km.",
      "## Consigli per dormire in tenda da tetto in autunno e inverno",
      "Se vuoi provare anche tu l'esperienza di dormire in tenda da tetto quando fa freddo, ecco qualche consiglio utile basato sulla nostra esperienza:",
      "**Isolamento termico** – Se la tua tenda lo permette, applica un telo invernale o un sovra telo aggiuntivo. Fa davvero la differenza.",
      "**Riscaldamento ausiliario** – Un piccolo riscaldatore a gasolio o a benzina (come il nostro) garantisce comfort e sicurezza, ma assicurati sempre di avere una buona ventilazione.",
      "**Sacchi a pelo adeguati** – Investi in sacchi a pelo con comfort termico adatto alle temperature previste. I nostri Ferrino fino a –15 °C sono stati perfetti.",
      "**Prepara un piano B** – In caso di neve o ghiaccio intenso, meglio avere un rifugio o una sistemazione alternativa nelle vicinanze.",
      "## Conclusioni",
      "Dormire in tenda da tetto nei mesi freddi non solo è possibile, ma può essere anche incredibilmente appagante. La chiave è prepararsi bene, conoscere i propri limiti e avere l'attrezzatura giusta. Quell'esperienza al Pasubio ci ha ricordato che la libertà di viaggiare non ha stagione: basta la voglia di partire, un buon sacco a pelo e il rumore del vento fuori dalla tenda."
    ],
    author: "Sara Sarti",
    authorAvatar: "",
    readTime: "6 min",
    location: "52 Gallerie del Pasubio",
    category: "Tips",
    date: "8 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
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
      "## Dal Veneto ai Pirenei: il viaggio inizia",
      "Siamo partiti dalla provincia di Verona, direzione Spagna, ma prima di varcare il confine ci siamo concessi una tappa in Val di Susa dove ci siamo fermati in un'area sosta camper comunale per trascorrere la notte. Il mattino seguente siamo entrati in Francia attraverso il Monginevro.",
      "La prima sosta è stata a **Carcassonne**, la città fortificata dal fascino medioevale, perfetta per calarsi subito nell'atmosfera del viaggio.",
      "Da lì abbiamo puntato verso i Pirenei Atlantici francesi fino a **Espelette**, un piccolo villaggio basco famoso per i peperoncini rossi appesi alle facciate delle case. Dopo quasi 1.400 km, la nostra avventura spagnola aveva finalmente inizio. Abbiamo sostato presso l'area camper privata \"ERREKA\" a 4km dal villaggio, facilmente raggiungibile con le bici, che dispone anche di un ristorante che propone piatti tipici baschi.",
      "## I Paesi Baschi: tra oceano, storia e natura",
      "Il nostro ingresso in Spagna è stato a **San Sebastián**, dove la splendida Baia della Concha ci ha accolti con la sua eleganza e le sue onde perfette per i surfisti. Le biciclette che abbiamo portato con noi ci hanno permesso di muoverci liberamente lasciando il nostro Doblò camperizzato presso il Camping Oliden (leggermente decentrato ma provvisto di ciclabile), consentendoci di spostarci lungo la costa, tra lungomare e scorci panoramici. Abbiamo preso la funicolare e siamo saliti sul Monte Igueldo dove, oltre a poter ammirare il belvedere è possibile godere delle giostre e degli intrattenimenti proposti, per grandi e piccini.",
      "Abbiamo poi proseguito verso **Guernika**, città simbolo della memoria storica, e non potevamo perderci l'escursione a **San Juan de Gaztelugatxe**, l'eremo arroccato sull'oceano reso celebre da Il Trono di Spade. Per potervi accedere in alta stagione è necessario prenotare online l'ingresso, in quanto contingentato. Si tratta di un percorso a piedi di circa 2,6 km che parte dal parcheggio e porta, attraverso 231 scalini, all'eremo.",
      "Abbiamo scelto di sostare presso il Camping Portuondo in quanto comodo per poter fare l'escursione a San Juan de Gaztelugatxe. Abbiamo lasciato il nostro \"carrozzone\" in campeggio e con le bici abbiamo raggiunto il paese di Bermeo (4,5km) da dove parte il bus n.3517 che porta all'eremo.",
      "La quarta tappa ci ha fatti raggiungere **Bilbao**, moderna e vibrante, con il suo iconico Museo Guggenheim e i suggestivi ponti che attraversano il fiume Nervión.",
      "## Cantabria e Asturie: tra coste, montagne e tradizioni",
      "Lasciati i Paesi Baschi, siamo entrati in Cantabria, dove ci hanno accompagnati i paesaggi verdi e la brezza dell'oceano. Abbiamo visitato **Santander** e **Llanes**, incastonate tra spiagge e scogliere, e poi via verso le Asturie, cuore naturale del Nord.",
      "Ci siamo fermati presso il Camping Picos de Europa, comodo per poter fare l'indomani l'escursione ai **Laghi di Covadonga**, all'interno del Parco Nazionale dei Picos de Europa. È stata un'esperienza indimenticabile! Nonostante ci trovassimo ad un'altitudine di circa 1200m slm, il paesaggio lasciava intendere tutt'altro. Anche per questa escursione gli ingressi sono contingentati ed è necessario prenotare per tempo il bus che in alta stagione accompagna i turisti fino al parcheggio principale dei laghi. Da lì poi è possibile proseguire a piedi lungo i numerosi sentieri presenti.",
      "Da lì siamo saliti fino al **Cabo de Peñas**, dove abbiamo dormito in libera con una vista mozzafiato sull'oceano Atlantico — una di quelle notti che restano nel cuore.",
      "A Ferragosto ci siamo trovati tra Avilés e Luarca, immersi in una festa popolare asturiana fatta di musica, tradizione e bicchieri di sidro che non smettevano mai di riempirsi.",
      "## Galizia: dove finisce la terra e inizia l'oceano",
      "Lasciate le Asturie, siamo entrati in Galizia, terra di fari e vento.",
      "La prima tappa è il **faro di Cabo Ortegal**, spettacolare punto panoramico dove l'oceano mostra tutta la sua forza. Decidiamo così di fermarci un paio di notti presso il Camping Fontesin per goderci le calde giornate di sole, le lunghe spiagge e le onde agitate dell'oceano.",
      "Riprendiamo il nostro viaggio on the road e raggiungiamo **La Coruña**, città elegante e vivace. Percorriamo con il nostro \"carrozzone\" la **Costa da Morte**, una zona costiera della Galizia conosciuta per le sue condizioni marine pericolose che nel corso della storia, hanno causato numerosi naufragi e da cui prende il suo nome. Raggiungiamo **Muxía**, uno dei luoghi più autentici e suggestivi della regione: visitiamo il santuario \"Nosa señora da barca\" che si affaccia sull'oceano ed è di grandissimo effetto!",
      "La decima tappa è **Santiago de Compostela**, meta spirituale e simbolica anche per chi, come noi, non ci è arrivato a piedi ma su quattro ruote. Abbiamo sostato all'area camper privata Lavacolla dove per la prima volta abbiamo conosciuto un gestore che parla perfettamente italiano. Questa area sosta risulta strategica per visitare Santiago grazie al servizio bus (n.6) con fermata a 400m dall'area camper e che passa ogni venti minuti.",
      "## Verso l'interno: Castiglia, Navarra e ritorno",
      "Dalla costa ci siamo spostati verso l'interno, entrando in Castiglia.",
      "In quei giorni la regione era colpita da numerosi incendi, quindi abbiamo dovuto deviare il percorso, ma siamo comunque riusciti a visitare **León** e **Burgos**, due città ricche di storia e fascino.",
      "Da lì abbiamo raggiunto **Vitoria-Gasteiz**, città verde e ordinata, e poi **Pamplona**, famosa per la corsa dei tori ma tranquilla in quel periodo estivo. Trascorriamo la notte presso il Camping Ezcaba, leggermente decentrato rispetto al centro di Pamplona, ma facilmente raggiungibile tramite pista ciclabile.",
      "Una delle tappe più sorprendenti del viaggio è stata il **Parco Naturale delle Bardenas Reales**, un paesaggio quasi lunare, fatto di canyon e deserti d'argilla. Si tratta di un sito naturale semidesertico, visitabile gratuitamente in auto/camper/bici/moto. È necessario stare lungo il percorso sterrato tracciato e seguire le indicazioni riportate nella cartina che viene consegnata all'ingresso del parco.",
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
      "**Viaggiare con la tenda da tetto non è solo un modo di spostarsi — è uno stile di vita, una scelta di semplicità e autenticità che ci fa sentire davvero a casa, ovunque decidiamo di fermarci.**"
    ],
    author: "Sara Sarti",
    authorAvatar: "",
    readTime: "4 min",
    location: "Spagna del Nord",
    category: "Destinazioni",
    date: "10 Gennaio 2026",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
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
      "![Camperizzazione amovibile Camper Boxes](/www/img_articles/i_nostri_viaggi_in_camper/1-camperizzazione-amovibile-camper-boxes.jpg)",
      "Lo stivaggio dei vestiti e degli oggetti personali si trova all'interno dell'abitacolo: grazie alla rimozione dei due sedili della seconda fila (abbiamo 3 posti davanti), i nostri cassettoni si aprono verso l'interno, permettendoci di avere tutto a portata di mano senza uscire dal mezzo.",
      "Come per tutte le soluzioni Camper Boxes, l'allestimento è totalmente amovibile: nessun foro, nessun fissaggio al telaio. La struttura è saldamente ancorata tramite cinghie ferma carico, così da poter trasformare il veicolo in base alle necessità, dal lavoro alle vacanze.",
      "## I nostri primi viaggi in minivan: dalla pianura alla Liguria passando per Collodi",
      "Abbiamo acquistato il Tourneo a dicembre, ma il primo vero viaggio è arrivato solo a fine aprile: un itinerario semplice ma ricco, partito da Bologna e concluso a Genova, con tappa finale al Parco di Pinocchio a Collodi.",
      "I nostri itinerari hanno sempre un'impronta **mista**: piacevole per noi adulti, divertente per i bambini e adatta anche alla nostra cagnolina. Alterniamo visite culturali, soste nella natura, camminate nei boschi e tappe più turistiche.",
      "### Grazzano Visconti",
      "La prima meta del viaggio è stata Grazzano Visconti, borgo che desideravamo visitare da tempo. Già dal parcheggio abbiamo sperimentato uno dei grandi vantaggi di viaggiare con un mezzo compatto: abbiamo potuto lasciare il veicolo nell'area auto anziché nel parcheggio camper, pagando la metà. Un piccolo dettaglio, che racconta la libertà e la spontaneità che un van di queste dimensioni consente.",
      "### Val Trebbia: Brugnello e Bobbio",
      "Proseguendo, la Val Trebbia ci ha regalato paesaggi rilassanti, boschi e un fiume cristallino. A Brugnello, borgo minuscolo e sospeso nel tempo, la vista dall'alto abbraccia l'intera valle.",
      "![Val Trebbia - Borgo di Brugnello](/www/img_articles/i_nostri_viaggi_in_camper/2-val_trebbia_borgo_brugnello.jpg)",
      "La tappa successiva è stata Bobbio, con sosta all'area comunale vicino al centro storico: il luogo perfetto per inaugurare la veranda da furgone e mettere alla prova la cucina estraibile. Cena semplice con sottofondo musicale del fiume Trebbia e visita al celebre Ponte Gobbo.",
      "![Cucina estraibile Camper Boxes con veranda](/www/img_articles/i_nostri_viaggi_in_camper/3-cucina-estrabile-camper-boxes-veranda.jpg)",
      "### Genova e la costa ligure",
      "Dopo Bobbio siamo arrivati a Genova, con il paesaggio che cambia dalle montagne tranquille al tessuto urbano della città portuale. Ci siamo sistemati al Camping Villa Doria a Pegli, immerso nel verde, lontano dal traffico e ben collegato al centro.",
      "Per andare all'Acquario abbiamo utilizzato i mezzi pubblici: dal campeggio si raggiunge facilmente la stazione ferroviaria di Genova Pegli, che dista pochi minuti a piedi, e da lì abbiamo preso il treno verso il centro cittadino. Sostando in campeggio, i bambini hanno avuto la possibilità di giocare liberamente vicino alla nostra piazzola e di fare amicizia con i vicini: una famiglia francese con un figlio dell'età dei nostri. Un esempio perfetto di come il viaggio in famiglia possa essere esperienza sociale e interculturale.",
      "Sulla strada del ritorno, Boccadasse, Sori e Santa Margherita Ligure ci hanno regalato tappe rilassanti tra spiagge e panorami pittoreschi.",
      "### Toscana: Quercia delle Streghe e Montecarlo",
      "In Toscana abbiamo fatto sosta nei pressi di Lucca, per visitare la suggestiva Quercia delle Streghe a Capannori, un albero monumentale carico di leggende e atmosfera quasi mistica.",
      "![Quercia delle Streghe - Capannori](/www/img_articles/i_nostri_viaggi_in_camper/4-%20quercia-capannori.jpg)",
      "Da lì, senza un programma preciso, abbiamo scoperto Montecarlo, borgo medievale che non era nei piani ma si è rivelato una sorpresa meravigliosa. Abbiamo cenato tra mura antiche e il giorno seguente visitato il Parco di Pinocchio, con Agapi al seguito (sì, i cani sono ammessi!).",
      "## Giugno: Isola d'Elba",
      "A giugno siamo ripartiti da Bologna con traghetto prenotato, direzione Isola d'Elba. Prima tappa: Golfo di Baratti, notte all'area sosta Sant'Ignazio tra mare e relax.",
      "Poi imbarco per Portoferraio e sistemazione al Camping Lacona, base per tutta la vacanza.",
      "Abbiamo scaricato dal van la cucina estraibile, posizionata sotto il gazebo, e dormito in tenda per tutta la settimana. Viaggio più stanziale del solito, ma con il van libero per esplorare l'isola.",
      "![Cucina estraibile in campeggio](/www/img_articles/i_nostri_viaggi_in_camper/5-%20cucina-estraibile-in-campeggio.jpg)",
      "## Agosto: Abruzzo",
      "Ad agosto siamo partiti da Silvi Marina, nostra base per il mese, e il nostro spirito esploratore ci ha portato nell'entroterra.",
      "Tappe principali: Riserva del Lupo a Popoli, Camping Wolf a Civitella Alfedena, passeggiate tra daini e torte fatte in casa.",
      "![Centro del Lupo - Popoli](/www/img_articles/i_nostri_viaggi_in_camper/6-%20centro-lupo-popoli.jpg)",
      "Per i bambini è stata un'esperienza educativa: hanno imparato a rispettare la natura e gli animali selvatici, scoprendo che il lupo non è solo paura, ma simbolo di equilibrio e vita libera.",
      "Successivamente, Pescocostanzo e Camping Snow Village nei pressi di Roccaraso, con piazzole immerse nella natura. Sulla via del ritorno, picnic nel Bosco di Sant'Antonio e visita al borgo di Pacentro, con castello e canyon spettacolare.",
      "## La magia di viaggiare con un minivan compatto",
      "Viaggiare con un mezzo piccolo significa libertà e spontaneità: puoi conoscere la meta finale, ma lasciarti sorprendere lungo il percorso. Fermarsi ovunque, cucinare, dormire e vivere esperienze senza stress è un grande vantaggio, soprattutto in famiglia.",
      "In questi viaggi abbiamo imparato che il bello non è solo la destinazione, ma tutto ciò che accade tra una tappa e l'altra: paesaggi, incontri, giochi e piccole avventure.",
      "![Van Camper Boxes](/www/img_articles/i_nostri_viaggi_in_camper/7-van-camper-boxes.jpg)",
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
    image: "/www/img_articles/i_nostri_viaggi_in_camper/7-van-camper-boxes.jpg",
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
  }
};

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? guidesData[slug] : null;

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
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={guide.image} 
            alt={guide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <Link to="/#guide" className="inline-flex items-center text-primary hover:underline mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Torna alle Guide
                </Link>
                <Badge className="mb-4 bg-primary/90">{guide.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {guide.title}
                </h1>
                <p className="text-xl text-muted-foreground">{guide.excerpt}</p>
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
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-foreground">{guide.author}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {guide.date}
                    </div>
                  </div>
                </div>
              )}
              {!guide.author && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {guide.date}
                </div>
              )}
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                {guide.readTime} di lettura
              </div>
              {guide.location && (
                <div className="flex items-center text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {guide.location}
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
            <div className="prose prose-lg max-w-none">
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
                  const match = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
                  if (match) {
                    return (
                      <figure key={index} className="my-6 flex flex-col items-center">
                        <img 
                          src={match[2]} 
                          alt={match[1]}
                          className="w-full md:w-3/4 lg:w-2/3 h-auto max-h-[300px] md:max-h-[350px] object-cover rounded-lg shadow-lg"
                        />
                        <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                          {match[1]}
                        </figcaption>
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
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {renderFormattedText(paragraph)}
                  </p>
                );
              })}
            </div>

            {/* Engagement */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t">
              <Button variant="outline" className="gap-2">
                <ThumbsUp className="h-4 w-4" />
                {guide.likes} Mi piace
              </Button>
              <Button variant="outline" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                {guide.comments} Commenti
              </Button>
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
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
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
