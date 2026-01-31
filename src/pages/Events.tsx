import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { EventSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight,
  Mountain,
  Tent,
  Clock,
  AlertCircle,
  Camera,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";

interface EventItem {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  region: string;
  type: 'raduno' | 'evento' | 'workshop';
  attendees?: number;
  maxAttendees?: number;
  image: string;
  details: string[];
  organizer: string;
  contact?: string;
  website?: string;
}

const eventsData: EventItem[] = [
  {
    id: 'raduno-nazionale-2026',
    name: 'Raduno Nazionale Tende da Tetto 2026',
    description: 'Il grande raduno annuale della community italiana per appassionati di tende da tetto e campeggio. Tre giorni di avventura, condivisione e divertimento sulle sponde del Lago di Pietrafitta.',
    startDate: '2026-05-01',
    endDate: '2026-05-03',
    location: 'Lago di Pietrafitta, frazione di Piegaro (PG), Umbria',
    region: 'Umbria',
    type: 'raduno',
    image: '/img_raduni/2026.05.01-03_LagoDiPietrafitta-RadunoNazionale/Raduno_Locandina2026.jpg',
    details: [
      'Tre giorni di community building e avventura',
      'Incontro con altri appassionati di tende da tetto',
      'Condivisione di esperienze di viaggio',
      'Escursioni e attività all\'aria aperta',
      'Cena comunitaria',
      'Atmosfera rilassata sulle sponde del lago'
    ],
    organizer: 'Tende da Tetto e Campeggio Community',
    contact: 'info@tendedatettoecampeggio.it'
  }
];

// Dati delle gallerie fotografiche per gli eventi passati
interface PastEventGallery {
  id: string;
  title: string;
  date: string;
  location: string;
  folder: string;
  photos: string[];
}

const pastEventsGalleries: PastEventGallery[] = [
  {
    id: '2025-raduno-nazionale',
    title: 'Raduno Nazionale 2025',
    date: '16-17-18 maggio 2025',
    location: 'Grazie di Curtatone',
    folder: '/img_raduni/2025_GrazieCurtatone-RadunoNazionale',
    photos: [
      'dronata pere.jpg',
      'DSCN4760.JPG',
      'DSCN4761.JPG',
      'DSCN4762.JPG',
      'DSCN4763.JPG',
      'DSCN4765.JPG',
      'DSCN4767.JPG',
      'DSCN4768.JPG',
      'DSCN4770.JPG',
      'DSCN4771.JPG',
      'DSCN4773.JPG',
      'DSCN4774.JPG',
      'DSCN4775.JPG',
      'DSCN4776.JPG',
      'DSCN4777.JPG',
      'DSCN4778.JPG',
      'DSCN4779.JPG',
      'DSCN4782.JPG',
      'DSCN4783.JPG',
      'DSCN4784.JPG',
      'DSCN4785.JPG',
      'DSCN4786.JPG',
      'DSCN4787.JPG',
      'DSCN4789.JPG',
      'DSCN4790.JPG',
      'DSCN4792.JPG',
      'DSCN4793.JPG',
      'DSCN4794.JPG',
      'DSCN4795.JPG',
      'DSCN4796.JPG',
      'DSCN4797.JPG',
      'DSCN4798.JPG',
      'DSCN4799.JPG',
      'DSCN4800.JPG',
      'DSCN4801.JPG',
      'DSCN4802.JPG',
      'DSCN4803.JPG',
      'DSCN4804.JPG',
      'DSCN4805.JPG',
      'DSCN4806.JPG',
      'DSCN4807.JPG',
      'DSCN4808.JPG',
      'DSCN4809.JPG',
      'DSCN4814.JPG',
      'DSCN4815.JPG',
      'DSCN4816.JPG',
      'DSCN4817.JPG',
      'DSCN4818.JPG',
      'DSCN4819.JPG',
      'DSCN4820.JPG',
      'DSCN4821.JPG',
      'DSCN4822.JPG',
      'DSCN4823.JPG',
      'DSCN4824.JPG',
      'DSCN4825.JPG',
      'DSCN4826.JPG',
      'DSCN4827.JPG',
      'DSCN4828.JPG',
      'DSCN4829.JPG',
      'DSCN4830.JPG',
      'DSCN4831.JPG',
      'DSCN4832.JPG',
      'DSCN4833.JPG',
      'DSCN4834.JPG',
      'DSCN4835.JPG',
      'DSCN4836.JPG',
      'DSCN4837.JPG',
      'DSCN4838.JPG',
      'DSCN4839.JPG',
      'DSCN4840.JPG',
      'DSCN4841.JPG',
      'DSCN4842.JPG',
      'DSCN4843.JPG',
      'DSCN4844.JPG',
      'DSCN4845.JPG',
      'DSCN4846.JPG',
      'DSCN4847.JPG',
      'DSCN4848.JPG',
      'DSCN4849.JPG',
      'DSCN4850.JPG',
      'DSCN4851.JPG',
      'DSCN4852.JPG',
      'DSCN4853.JPG',
      'DSCN4854.JPG',
      'DSCN4855.JPG',
      'DSCN4856.JPG',
      'DSCN4857.JPG',
      'DSCN4858.JPG',
      'DSCN4859.JPG',
      'DSCN4860.JPG',
      'DSCN4861.JPG',
      'DSCN4862.JPG',
      'DSCN4863.JPG',
      'DSCN4864.JPG',
      'DSCN4865.JPG',
      'DSCN4866.JPG',
      'DSCN4867.JPG',
      'DSCN4868.JPG',
      'DSCN4869.JPG',
      'DSCN4870.JPG',
      'DSCN4871.JPG',
      'DSCN4872.JPG',
      'DSCN4873.JPG',
      'DSCN4874.JPG',
      'DSCN4875.JPG',
      'DSCN4876.JPG',
      'DSCN4877.JPG',
      'DSCN4878.JPG',
    ]
  },
  {
    id: '2025-raduno-offroad',
    title: 'Raduno Off Road 2025',
    date: '6-7-8 giugno 2025',
    location: 'Velo Veronese',
    folder: '/img_raduni/2025.06.06-08_RadunoOffRoad-VeloVeronese',
    photos: [
      '493605264_1032845295700014_1519388451197069495_n.jpg',
      '516952598_24993192873604259_9211183868473409949_n.jpg',
      '517529682_24993192793604267_4867142347432108759_n.jpg',
      '518136112_24993202196936660_3849321663611145532_n.jpg',
    ]
  },
  {
    id: '2025-gemellaggio-dachzeltnomaden',
    title: 'Gemellaggio Dachzeltnomaden 2025',
    date: '3-6 luglio 2025',
    location: 'Forte Leone',
    folder: '/img_raduni/2025.07.03-06_GemellaggioDachzeltnomadenForteLeone',
    photos: [
      '20250704_DACHZELT-CAMP-Italia-2025_Heiko-Baßler__3.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Heiko-Baßler__34.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Heiko-Baßler__37.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Heiko-Baßler__7.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne_.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne__3.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne__4.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne__5.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne__5.webp',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker_00006.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker_00011.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker_00012.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker_00016.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker_00022.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker_00024.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker_00025.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker_00032.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker_00065.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker_00073.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker__16.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker__63.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker__64.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Rebecca-Patrick-Becker__75.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Sascha_Drohne_.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Sascha_Drohne__4.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Sascha_Drohne__5.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Setup_Campleben__61.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Setup_Campleben__76.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Setup_Campleben__8.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Thomas_Brassel__20.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Thomas_Brassel__5.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Thomas_Brassel__7.jpg',
      '20250704_DACHZELT-CAMP-Italia-2025_Thomas_Brassel__8.jpg',
      '484801815_973675604950317_762020816742591662_n.jpg',
      '516292822_122229634448159830_2527426171135005486_n.jpg',
      '517377413_122229634508159830_5070786330705371849_n.jpg',
      '517390654_122229634502159830_2032659870657547114_n.jpg',
      '518220744_122229634496159830_5539814317826649550_n.jpg',
      '526961737_25204645502458994_7910159512578864391_n.jpg',
      '527136452_25204666749123536_9005182005717294723_n.jpg',
      '527364035_25188063870783824_6368320066242695584_n.jpg',
      '527542991_25188098687447009_4496531759855569308_n (1).jpg',
      '527987345_10239308255353957_3477742899921162296_n.jpg',
      '528202742_10239308236673490_8006731828639336829_n.jpg',
      '528232054_10239308262914146_8592267450495260715_n.jpg',
    ]
  },
  {
    id: '2025-game-camp',
    title: 'Game Camp 2025',
    date: '19-20-21 settembre 2025',
    location: 'Roncoscaglia',
    folder: '/img_raduni/2025.09.19-21_GameCampRoncoscaglia',
    photos: [
      '518320832_10233659270055031_4625301647581986243_n.jpg',
      '548833480_10239966990701929_1544675358287914159_n.jpg',
      '549820998_10239966715255043_3372471514507455655_n.jpg',
      '550261377_1119234307061112_7982195040798993430_n.jpg',
      '550318727_10239966716575076_2503376957714948932_n.jpg',
      '550681878_24799440299675973_2953862743951664794_n.jpg',
      '552025112_24799442666342403_6185738690554620174_n.jpg',
      '552214771_10239966989821907_6687058275670408833_n.jpg',
      '552598047_24799440766342593_2645871391429172905_n.jpg',
      '552658812_24799443919675611_2059706526263927330_n.jpg',
      '552930504_24799442186342451_1489458232073802537_n.jpg',
      '553135075_24799443706342299_6252160628412079426_n.jpg',
      '553195941_24799444159675587_3814120691223561625_n.jpg',
      '554088436_24799440096342660_8871233814470791236_n.jpg',
      '554102211_24799443759675627_4035821534085664310_n.jpg',
      '554104161_24799442343009102_7790641646934008674_n.jpg',
      '554519011_24799441413009195_3980530625309665922_n.jpg',
      '554557272_24799442933009043_44840744139684213_n.jpg',
      '554775414_24799439876342682_2940291945458218356_n.jpg',
      '554991354_24799441006342569_3487372099195140644_n.jpg',
      'DJI_0706.JPG',
      'DJI_0709.JPG',
    ]
  },
  {
    id: '2023-raduno-nazionale',
    title: 'Raduno Nazionale 2023',
    date: '27-28 maggio 2023',
    location: 'Gambulaga',
    folder: '/img_raduni/2023_Gambulaga-RadunoNazionale',
    photos: [
      '350116927_215205598037693_6581753451405941394_n.png',
      '350265094_1626595107850920_3862374572783183962_n.png',
      '350340763_233105006105111_548215823153931591_n.png',
      '350527546_3619989624993482_8844326724114602391_n.png',
      '350528195_1423565094854282_4093923491110981576_n.png',
    ]
  },
  {
    id: '2023-raduno-itinerante',
    title: 'Raduno Itinerante 2023',
    date: '8-9 luglio 2023',
    location: 'Cartigliano - Passo Cereda',
    folder: '/img_raduni/2023_CartiglianoPassoCereda-Radunoitinerante',
    photos: [
      '358428378_10227128528978051_8842215743112065674_n.jpg',
      '358457449_10231352293099873_7450772024028015237_n.jpg',
      '358641230_10221565510743281_7216739415438803252_n.jpg',
      '358986845_10227128527418012_2285863160253064146_n.jpg',
      '359526064_10227128530578091_6607937042318659640_n.jpg',
      '499561906_10226110016793092_485668372022326052_n.jpg',
      '504357325_10237822750217257_4242963538627277819_n.jpg',
      '504466469_10237822746537165_2189854817258945284_n.jpg',
      '504595554_10237506521832065_124633012655107656_n.jpg',
    ]
  },
  {
    id: '2023-raduno-enogastronomico',
    title: 'Raduno Enogastronomico 2023',
    date: '26-27 agosto 2023',
    location: 'Vinchio',
    folder: '/img_raduni/2023.08.26-27_RadunoEnogastronomicoVinchio',
    photos: [
      '479976995_954126340238577_8536736466765174992_n.jpg',
      '480455591_953527100298501_7253948745336821072_n.jpg',
      '480480582_954126093571935_1111642399881387755_n.jpg',
    ]
  },
  {
    id: '2023-raduno-autunnale',
    title: 'Raduno Autunnale 2023',
    date: '7-8 ottobre 2023',
    location: 'Maso Molino, Valli del Pasubio',
    folder: '/img_raduni/2023.10.07-08_MasoMolinoValliDelPasubio',
    photos: [
      '480786396_957956033188941_8110187197843491100_n.jpg',
      '506049633_10238690383904150_2814164019743515342_n.jpg',
      '506698170_10238690381024078_2262544457231487394_n.jpg',
    ]
  },
  {
    id: '2024-raduno-primaverile',
    title: 'Raduno Primaverile 2024',
    date: '13-14 aprile 2024',
    location: 'Villa di Cartigliano',
    folder: '/img_raduni/2024.04.13-14_VillaDiCartigliano',
    photos: [
      '480838771_1141170970893359_2105896506044095331_n.jpg',
      '481216162_965365412448003_7889078027841161172_n.jpg',
      '492307632_10212747235912880_9144569189997939692_n.jpg',
      '492826375_10212747234832853_237536036651497165_n.jpg',
      '497164089_23963458216618973_6393360366996805294_n.jpg',
      '497501256_23963458176618977_8000359353627565660_n.jpg',
      'DSCN4613.jpg',
      'DSCN4614.jpg',
      'DSCN4616.jpg',
      'DSCN4623.jpg',
      'DSCN4650.jpg',
      'DSCN4654.jpg',
      'DSCN4656.jpg',
      'DSCN4661.jpg',
    ]
  },
  {
    id: '2024-raduno-nazionale',
    title: 'Raduno Nazionale 2024',
    date: '24-25-26 maggio 2024',
    location: 'Lago di Bolsena',
    folder: '/img_raduni/2024.05.24-26_LagoDiBolsena-RadunoNazionale',
    photos: [
      '445740228_17888305956026718_4020425921983063414_n.jpg',
      '475447237_122203203254159830_3837361742842805759_n.jpg',
      '475758026_122203203686159830_8602881848001234987_n.jpg',
      '475836757_122203203596159830_1381067588696735412_n.jpg',
      '481898444_965234405794437_3229384107391737496_n.jpg',
      '481975442_967800715537806_4572587022301903820_n.jpg',
      'A7C00795 - Copia.JPG',
      'A7C00796.JPG',
      'A7C00803.JPG',
      'A7C00823.JPG',
      'A7C00827.JPG',
      'A7C00836.JPG',
      'A7C00869.JPG',
      'A7C00893.JPG',
      'A7C00921.JPG',
      'A7C00923.JPG',
      'A7C00928.JPG',
      'A7C00930.JPG',
      'A7C00938.JPG',
      'A7C00939.JPG',
      'A7C00940.JPG',
      'A7C00965.JPG',
      'A7C00996.JPG',
      'A7C01002.JPG',
      'A7C01010.JPG',
      'A7C01011.JPG',
      'A7C01020.JPG',
      'A7C01039.JPG',
      'A7C01041.JPG',
      'A7C01053.JPG',
      'A7C01074.JPG',
      'A7C01076.JPG',
      'A7C01098.JPG',
      'DJI_0012.JPG',
      'DJI_0013.JPG',
      'DJI_0015.JPG',
      'DJI_0017.JPG',
      'DJI_0019.JPG',
      'DJI_0019b.jpg',
    ]
  },
  {
    id: '2022-raduno-estivo',
    title: 'Raduno Estivo 2022',
    date: '25-26 giugno 2022',
    location: 'Val Malene',
    folder: '/img_raduni/2024.06.25-26_ValMalene',
    photos: [
      '490590144_10232308762613189_3772117499196475386_n.jpg',
      '490730023_10232308762733192_748836612577628289_n.jpg',
    ]
  },
  {
    id: '2024-raduno-autunnale',
    title: 'Raduno Autunnale 2024',
    date: '14-15 settembre 2024',
    location: 'Lago di Caldonazzo',
    folder: '/img_raduni/2024.09.14-15_LagoCaldonazzo',
    photos: [
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_2990.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_2991.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_2994.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_2995.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_2998.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_2999.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3002.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3003.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3005.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3013.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3014.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3016.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3018.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3020.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3025.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3028.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3034.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3036.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3038.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3039.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3041.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3042.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3043.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3049.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3055.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3059.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3063.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3066.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3069.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3073.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3074.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3078.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3080.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3084.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3086.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3090.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3094.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3098.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3104.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3105.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3108.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3110.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3112.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3116.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3118.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3122.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3132.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3140.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3143.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3145.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3151.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3153.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3156.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3165.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3168.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3169.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3171.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3174.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3176.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3181.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3183.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3186.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3194.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3198.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3206.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3210.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3211.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3215.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3238.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3249.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3258.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3265.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3279.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3295.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3299.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3300.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3315.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3319.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3321.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3334.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3338.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3342.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3343.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3347.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3357.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3366.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3385.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3394.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3402.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3418.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3435.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3437.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3466.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3478.jpg',
      'Camping Punta Lago_Raduno tende da tetto_Set24_GA_MG_3481.jpg',
    ]
  },
  {
    id: '2022-raduno-nazionale',
    title: 'Raduno Nazionale 2022',
    date: '4-5 giugno 2022',
    location: 'Camping Riva del Setta, Rioveggio',
    folder: '/img_raduni/2022.06.04-05_CampingRivaDelSetta-RadunoNazionale',
    photos: [
      'EZVZ0797.JPG',
      'IMG_3160.JPG',
      'IMG_3174.JPG',
      'IMG_3189.JPG',
      'IMG_3196.JPG',
      'IMG_3197.JPG',
      'IMG_3207.JPG',
      'IMG_3216.JPG',
      'IMG_3220.JPG',
      'IMG_3226.JPG',
      'IMG_3228.JPG',
    ]
  },
  {
    id: '2021-raduno-nazionale',
    title: 'Raduno Nazionale 2021',
    date: '26-27 giugno 2021',
    location: 'Picchio Verde, Licciana Nardi',
    folder: '/img_raduni/2021_AgriturismoPicchioVerde-RadunoNazionale',
    photos: [
      'IMG_4511 72dpi.jpg',
      'IMG_4551 72dpi.jpg',
      'IMG_4648 72dpi.jpg',
      'IMG_4664 72dpi.jpg',
      'IMG_4735 72dpi.jpg',
      'IMG_4741 72dpi.jpg',
      'IMG_4750 72dpi.jpg',
      '_17A3345 72dpi.jpg',
      '_17A3347 72dpi.jpg',
      '_17A3348 72dpi.jpg',
      '_17A3364 72dpi.jpg',
      '_17A3366 72dpi.jpg',
      '_17A3402 72dpi.jpg',
      '_17A3438 72dpi.jpg',
      '_17A3444 72dpi.jpg',
      '_17A3509 72dpi.jpg',
      '_17A3532 72dpi.jpg',
      '_17A3560 72dpi.jpg',
      '_17A3561 72dpi.jpg',
    ]
  }
];

const Events = () => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = `${siteUrl}/eventi`;
  
  // State per la galleria
  const [selectedGallery, setSelectedGallery] = useState<PastEventGallery | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openGallery = (galleryId: string) => {
    const gallery = pastEventsGalleries.find(g => g.id === galleryId);
    if (gallery) {
      setSelectedGallery(gallery);
      setCurrentPhotoIndex(0);
    }
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (selectedGallery) {
      setCurrentPhotoIndex((prev) => 
        prev === selectedGallery.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevPhoto = () => {
    if (selectedGallery) {
      setCurrentPhotoIndex((prev) => 
        prev === 0 ? selectedGallery.photos.length - 1 : prev - 1
      );
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'raduno':
        return { label: 'Raduno', color: 'bg-red-500/10 text-red-700' };
      case 'workshop':
        return { label: 'Workshop', color: 'bg-blue-500/10 text-blue-700' };
      case 'evento':
        return { label: 'Evento', color: 'bg-green-500/10 text-green-700' };
      default:
        return { label: 'Evento', color: 'bg-gray-500/10 text-gray-700' };
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'raduno':
        return Tent;
      case 'workshop':
        return Mountain;
      case 'evento':
        return Users;
      default:
        return Calendar;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Eventi e Raduni - Tende da Tetto e Campeggio Community"
        description="Scopri i prossimi raduni, workshop ed eventi della community italiana di tende da tetto e campeggio. Raduni annuali, workshop di formazione, meetup comunitari e tanto altro."
        canonicalUrl={canonicalUrl}
        keywords="raduni tende da tetto, eventi campeggio, workshop, raduno, community events, tende da tetto italia"
        ogType="website"
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Eventi', url: canonicalUrl }
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background" aria-label="Eventi e raduni della community">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Calendar className="h-12 w-12 text-primary mr-4" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Eventi e Raduni
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Scopri i prossimi raduni, workshop ed eventi della nostra community. 
                Momenti di condivisione, apprendimento e avventura con altri appassionati 
                di tende da tetto e campeggio in tutta Italia.
              </p>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Prossimi Appuntamenti</h2>
                <p className="text-muted-foreground">
                  {eventsData.length} evento programmato • Partecipazione libera per tutti i membri della community
                </p>
              </div>

              <div className="flex justify-center">
                {eventsData.map((event) => {
                  const typeInfo = getTypeLabel(event.type);
                  const EventIcon = getEventIcon(event.type);
                  const startDate = new Date(event.startDate);
                  const endDate = new Date(event.endDate);
                  const isSameDay = startDate.toDateString() === endDate.toDateString();

                  return (
                    <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow max-w-xl w-full">
                      {/* Event Image */}
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img 
                          src={event.image} 
                          alt={event.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        <Badge className={`absolute top-4 left-4 ${typeInfo.color}`}>
                          <EventIcon className="h-3 w-3 mr-1" aria-hidden="true" />
                          {typeInfo.label}
                        </Badge>
                      </div>

                      {/* Event Content */}
                      <CardContent className="pt-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 text-center bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent whitespace-nowrap">
                          {event.name}
                        </h3>

                        <p className="text-muted-foreground mb-6 text-center">
                          {event.description}
                        </p>

                        {/* Event Meta */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-start gap-3">
                            <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <div className="flex-1">
                              <p className="font-semibold text-foreground">
                                {startDate.toLocaleDateString('it-IT', { 
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                              {!isSameDay && (
                                <p className="text-sm text-muted-foreground">
                                  fino al {endDate.toLocaleDateString('it-IT', { 
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <div className="flex-1">
                              <p className="font-semibold text-foreground">{event.location}</p>
                              <p className="text-sm text-muted-foreground">{event.region}</p>
                            </div>
                          </div>

                          {event.maxAttendees && (
                            <div className="flex items-start gap-3">
                              <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                              <div className="flex-1">
                                <p className="font-semibold text-foreground">
                                  {event.attendees || 0} / {event.maxAttendees} partecipanti
                                </p>
                                <div className="w-full bg-secondary rounded-full h-2 mt-2">
                                  <div 
                                    className="bg-primary rounded-full h-2" 
                                    style={{ width: `${((event.attendees || 0) / event.maxAttendees) * 100}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Highlights */}
                        <div className="mb-6">
                          <p className="text-sm font-semibold text-foreground mb-2">Highlights:</p>
                          <ul className="space-y-1">
                            {event.details.slice(0, 3).map((detail, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                            {event.details.length > 3 && (
                              <li className="text-sm text-muted-foreground">
                                +{event.details.length - 3} altre attività
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <Link to="/raduno-nazionale-2026">
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            Scopri di più
                            <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Timeline */}
        <section className="py-16 bg-secondary/30" aria-label="Cronologia eventi passati">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  📅 Appuntamenti Passati
                </h2>
                <p className="text-muted-foreground">
                  La nostra storia di raduni e incontri dal 2021 ad oggi
                </p>
              </div>

              <div className="space-y-8">
                {/* 2025 */}
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground font-bold text-xl px-4 py-2 rounded-lg shadow-md">
                      2025
                    </div>
                    <div className="flex-1 h-0.5 bg-primary/30"></div>
                  </div>
                  <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-primary hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2025-raduno-nazionale')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Tent className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Nazionale</p>
                          <p className="text-sm text-muted-foreground">16-17-18 maggio • Grazie di Curtatone</p>
                        </div>
                      </div>
                    </Card>
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-amber-500 hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2025-raduno-offroad')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-amber-500 text-white p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Mountain className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Off Road</p>
                          <p className="text-sm text-muted-foreground">6-7-8 giugno • Velo Veronese</p>
                        </div>
                      </div>
                    </Card>
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-blue-500 hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2025-gemellaggio-dachzeltnomaden')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-blue-500 text-white p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Users className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Gemellaggio Dachzeltnomaden</p>
                          <p className="text-sm text-muted-foreground">3-6 luglio • Forte Leone</p>
                        </div>
                      </div>
                    </Card>
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-green-500 hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2025-game-camp')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-green-500 text-white p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Tent className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Game Camp</p>
                          <p className="text-sm text-muted-foreground">19-20-21 settembre • Roncoscaglia</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* 2024 */}
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/90 text-primary-foreground font-bold text-xl px-4 py-2 rounded-lg shadow-md">
                      2024
                    </div>
                    <div className="flex-1 h-0.5 bg-primary/30"></div>
                  </div>
                  <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-primary hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2024-raduno-primaverile')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Tent className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Primaverile</p>
                          <p className="text-sm text-muted-foreground">13-14 aprile • Villa di Cartigliano</p>
                        </div>
                      </div>
                    </Card>
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-primary hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2024-raduno-nazionale')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Tent className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Nazionale</p>
                          <p className="text-sm text-muted-foreground">24-25-26 maggio • Lago di Bolsena</p>
                        </div>
                      </div>
                    </Card>
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-blue-400 hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2024-raduno-autunnale')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-blue-400 text-white p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Autunnale</p>
                          <p className="text-sm text-muted-foreground">14-15 settembre • Lago di Caldonazzo</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* 2023 */}
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/80 text-primary-foreground font-bold text-xl px-4 py-2 rounded-lg shadow-md">
                      2023
                    </div>
                    <div className="flex-1 h-0.5 bg-primary/30"></div>
                  </div>
                  <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-primary hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2023-raduno-nazionale')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Tent className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Nazionale</p>
                          <p className="text-sm text-muted-foreground">27-28 maggio • Gambulaga</p>
                        </div>
                      </div>
                    </Card>
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-amber-500 hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2023-raduno-itinerante')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-amber-500 text-white p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Mountain className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Itinerante</p>
                          <p className="text-sm text-muted-foreground">8-9 luglio • Cartigliano - Passo Cereda</p>
                        </div>
                      </div>
                    </Card>
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-purple-500 hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2023-raduno-enogastronomico')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-purple-500 text-white p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Tent className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Enogastronomico</p>
                          <p className="text-sm text-muted-foreground">26-27 agosto • Vinchio</p>
                        </div>
                      </div>
                    </Card>
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-green-500 hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2023-raduno-autunnale')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-green-500 text-white p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Mountain className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Autunnale</p>
                          <p className="text-sm text-muted-foreground">7-8 ottobre • Maso Molino, Valli del Pasubio</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* 2022 */}
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/70 text-primary-foreground font-bold text-xl px-4 py-2 rounded-lg shadow-md">
                      2022
                    </div>
                    <div className="flex-1 h-0.5 bg-primary/30"></div>
                  </div>
                  <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-primary hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2022-raduno-nazionale')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Tent className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Nazionale</p>
                          <p className="text-sm text-muted-foreground">4-5 giugno • Rioveggio</p>
                        </div>
                      </div>
                    </Card>
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-green-500 hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2022-raduno-estivo')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-green-500 text-white p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Mountain className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Estivo</p>
                          <p className="text-sm text-muted-foreground">25-26 giugno • Val Malene</p>
                        </div>
                      </div>
                    </Card>
                    <Card className="p-4 bg-background/80 backdrop-blur border-l-4 border-red-400 hover:shadow-md transition-shadow opacity-60">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Raduno Autunnale</p>
                          <p className="text-sm text-muted-foreground">24-25 settembre • Pontremoli</p>
                          <Badge variant="outline" className="mt-1 text-red-500 border-red-300 text-xs">Annullato per maltempo</Badge>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* 2021 */}
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/60 text-primary-foreground font-bold text-xl px-4 py-2 rounded-lg shadow-md">
                      2021
                    </div>
                    <div className="flex-1 h-0.5 bg-primary/30"></div>
                  </div>
                  <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card 
                      className="p-4 bg-background/80 backdrop-blur border-l-4 border-primary hover:shadow-md transition-shadow cursor-pointer hover:bg-background/90 relative"
                      onClick={() => openGallery('2021-raduno-nazionale')}
                    >
                      {/* Icona foto in alto a destra */}
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground p-1.5 rounded-full shadow-md">
                        <Camera className="h-4 w-4" />
                      </div>
                      <div className="flex items-start gap-3 pr-8">
                        <Tent className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">Raduno Nazionale</p>
                          <p className="text-sm text-muted-foreground">26-27 giugno • Picchio Verde, Licciana Nardi</p>
                          <Badge variant="secondary" className="text-xs mt-1">🎉 Il primo raduno!</Badge>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Gallery Modal */}
        <Dialog open={selectedGallery !== null} onOpenChange={(open) => !open && closeGallery()}>
          <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden">
            <DialogHeader className="p-4 pb-2">
              <DialogTitle className="flex items-center justify-between">
                <div>
                  <span className="text-xl">{selectedGallery?.title}</span>
                  <p className="text-sm text-muted-foreground font-normal mt-1">
                    {selectedGallery?.date} • {selectedGallery?.location}
                  </p>
                </div>
              </DialogTitle>
            </DialogHeader>
            
            {selectedGallery && (
              <div className="relative flex-1 flex flex-col">
                {/* Main Image */}
                <div className="flex-1 relative bg-black/5 flex items-center justify-center min-h-0">
                  <img
                    src={`${selectedGallery.folder}/${encodeURIComponent(selectedGallery.photos[currentPhotoIndex])}`}
                    alt={`Foto ${currentPhotoIndex + 1} di ${selectedGallery.photos.length}`}
                    className="max-w-full max-h-[60vh] object-contain select-none pointer-events-none"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    draggable={false}
                  />
                  {/* Overlay trasparente per impedire il click diretto sull'immagine */}
                  <div 
                    className="absolute inset-0" 
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevPhoto}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background shadow-md transition-all"
                    aria-label="Foto precedente"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background shadow-md transition-all"
                    aria-label="Foto successiva"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Photo Counter */}
                <div className="text-center py-2 text-sm text-muted-foreground">
                  {currentPhotoIndex + 1} / {selectedGallery.photos.length}
                </div>

                {/* Thumbnails */}
                <div className="p-4 pt-2 overflow-x-auto">
                  <div className="flex gap-2 justify-center flex-wrap">
                    {selectedGallery.photos.map((photo, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPhotoIndex(index)}
                        onContextMenu={(e) => e.preventDefault()}
                        className={`w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                          index === currentPhotoIndex 
                            ? 'border-primary shadow-md' 
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={`${selectedGallery.folder}/${encodeURIComponent(photo)}`}
                          alt={`Miniatura ${index + 1}`}
                          className="w-full h-full object-cover select-none"
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                          draggable={false}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Info Section */}
        <section className="py-16 bg-secondary/50" aria-label="Informazioni sulla partecipazione agli eventi">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Come Partecipare
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 bg-background/80 backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">Iscriviti alla Community</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Unisciti al nostro gruppo Facebook per restare aggiornato su tutti gli eventi e le novità della community.
                  </p>
                </Card>

                <Card className="p-6 bg-background/80 backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">Segui gli Annunci</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Iscriviti alla nostra newsletter per ricevere gli inviti ufficiali e i dettagli degli eventi direttamente via email.
                  </p>
                </Card>

                <Card className="p-6 bg-background/80 backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">Condividi Esperienze</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Dopo l'evento, condividi le tue foto e esperienze nel nostro gruppo per ispirare altri appassionati.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Non vedi un evento nella tua zona?
              </h2>
              <p className="text-muted-foreground mb-8">
                Proponi un raduno o un evento! Contattaci per organizzare un gathering comunitario nella tua regione.
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Proponi un Evento
                  <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Render EventSchema for each event */}
        {eventsData.map((event) => (
          <EventSchema 
            key={event.id}
            name={event.name}
            description={event.description}
            startDate={event.startDate}
            endDate={event.endDate}
            location={event.location}
            image={event.image}
            url={`${siteUrl}/eventi/${event.id}`}
            organizer={event.organizer}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Events;
