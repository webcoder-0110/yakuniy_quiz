import type { Subject } from './types'

/**
 * TEST SAVOLLARI MANBASI (namuna).
 * Siz bu faylni tahrirlab, savol-javoblarni almashtirib yana ishlatishingiz mumkin.
 *
 * Qoidalar:
 * - options: javoblar ro'yxati
 * - correctIndex: options ichidagi to'g'ri javob indeksi (0 dan boshlanadi)
 * - timePerQuestionSec: har bir savolga beriladigan vaqt (sekund)
 */
export const testBank: Subject[] = [
  {
    id: 'dinshunoslik',
    title: 'Dinshunoslik',
    tagline: 'Dinlar tarixi va asosiy tushunchalar bo‘yicha testlar',
    topics: [
      
  {
    "id": "din-1",
    "title": "1-qism: Dinshunoslik fani asoslari va milliy dinlar (1-50 savollar)",
    "description": "Dinshunoslik fanidan yakuniy nazorat testlari",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "din-1-q1",
        "prompt": "Teologiya so‘zi ma‘nosi qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "theos-xudo, logos-ta‘limot",
          "theos-xudo, sophia-donishmandlik",
          "aqiyda(aqada, aqoid)-bir narsani ikkinchiga mahkam bog‘lash",
          "da‘na-kimgadir bo‘ysinmoq, e‘tiqod qilmoq"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q2",
        "prompt": "Dinning funktsiyalari to‘g‘ri berilgan qatorni toping?",
        "options": [
          "dunyoqarash shakllantirish, kompensatorlik, kommunikativlik, regulyativlik, integratsion-dezintegratsion, madaniyatni targ‘ib qilish, legitimlashtirish-legitimlarni olib tashlash",
          "din fenomenologiyasi, din sotsiyalogiyasi, din psixologiyasi, din falsafasi, din tarixi",
          "mintaqaviy tasniflash(qita‘larda tarqalishiga ko‘ra), jo‘g‘rofiy mintaqasiga ko‘ra(sharq dinlari yoki g‘arb dinlari), qadimgi dinlar(siyosiy mintaqalariga ko‘ra Messopotamiya dinlari, Fors dinlari), dinlarning mamlakatlar hududlariga ko‘ra(Falastin dinlari, Arabiston yarim oroli dinlari)",
          "urug‘-qabila dinlari, millat-davlat dinlari, jahon dinlari"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q3",
        "prompt": "Olimlar muayan e’tiqod din deb atalishi uchun uch asosiy xususiyatga ega bo‘lishi lozimligini ta‘kidlaydilar. Bu asosiy xususiyatlar qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "Xudo(topinish ob‘ekti), kult yoki kultlar majmuasi(ibodat), diniy tashkilotlar",
          "transtsendent dinlar va immanent dinlar (antropomorf, zooantropomorf, zoomorf)",
          "politeistik dinlar, genoteizm dinlari, monotestik dinlar",
          "teologik yondoshuv, (Odam va Havvo) va materialistik yondoshuv"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q4",
        "prompt": "Qiyosiy dinshunoslik metodlarini toping?",
        "options": [
          "mavzular asosida, dinlar bo‘yicha qiyosiy o‘rganish, xolislik(betaraflik)",
          "din a‘zolardan iborat organizm, udo Tvorushka, dinlardagi asliyat va bugungi kundagi voqeylik o‘rtasidagi farqni hisobga olish, qiyosiylik o‘zining doirasidan tashqariga chiqmasligi kerak...",
          "tipologik metod, etnik jihatiga ko‘ra, e‘tiqod qiluvchilar soniga ko‘ra, hozirgi davrda mavjudligi jihatidan",
          "genetik metod, tarkibiy-funksional metod"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q5",
        "prompt": "Islom olamida dinlarni o‘rganishga oid asarlar qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "“Ad-Diyonat”(Dinlar) Hasan ibn Muso an-Navbaxtiy (910), “Al-Firaq” (Firqalar) Abu Mansur Abdulqodir al-Bag‘dodiy (1038), “Al-Milal” yo‘nalishidagi (xalqlar) Qozi Abu Bakr Baqilloniy (1012), Ar-Radd (Raddiya) imom G‘azzoliy (1111)",
          "“Tarix” Gerodot (mil.avv. V asr),”tarix otasi”",
          "“Al-Osorul boqiya” (Boqiy asarlar) Abu Rayhon Beruniyning qiyosiy dinshunoslikka oid asari va “Tahqiqun ma lilhind...”",
          "“Qiyosiy mifologiya”(1856) va “Dinlarning asosi va shakllanishiga oid dars baholari”(1870) Maks Myuller"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q6",
        "prompt": "Dinlarning shakllanishi va eng qadimgi dinlar evoluytsiyasi bu.",
        "options": [
          "Animizm-jon-ruh, Totemizm, Fetishizm-tumor, Shamanizm, Magiya-sehrgarlik",
          "Buddizm, xristianlik, islom",
          "Tangrichilik, zardushtiylik, moniylik",
          "Yahudiylik, vedizm, braxmanlik, hindiylik, jaynizm, sikxiylik, konfutsiylik, daochilik, sintoizm"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q7",
        "prompt": "“Din” so‘zi qaysi tildan olingan va istilohiy ma’nosini bilasizmi?",
        "options": [
          "arabcha “da’na” va “diynun” fe‘lidan,”e‘tiqod qilmoq” va “imon”",
          "o‘zbek tilidan, “ishonch” yoki “ibodat”",
          "turkiy xalqlardan, “darm”,”nom”,”den”",
          "ibroniy tilidan, “dath”- “qonun”,”hukm”"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q8",
        "prompt": "Dinshunoslik fanining anglosakslardagi nomlanishini toping?",
        "options": [
          "ing “History of Religions”",
          "nem. “Religions Wissenschaft”",
          "rus. “religio”",
          "lat. “relegere”"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q9",
        "prompt": "“Aqida bilmagan shaytona eldur, agar ming yil amal deb qilsa, eldur” misralar muallifini toping?",
        "options": [
          "So‘fi Ollohyor",
          "Abu Hanifa",
          "imom Buxoriy",
          "imom Termiziy"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q10",
        "prompt": "Dinshunoslik “religious studies” so‘zini qo‘llagan olim",
        "options": [
          "nem.Fridrix Maks Myuller, ”Sharqning muqaddas kitoblari tarjima silsilasi”da, Oksfordda",
          "golland.S.R.Tile va Pierre Daniel Chantepie de la Saussaye",
          "Abu Rayhon Beruniy “Hindiston” asarida",
          "Abu Rayhon Beruniy “al-Osor al-boqiya an al-qurun al-xoliya” asarida"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q11",
        "prompt": "Yahudiy dini vakillari tarixi va adabiy-badiiy manbalarda qanday nomlar bilan tilga olinadi?",
        "options": [
          "“Yahudiy”,”Ibroniy”, “Isroil o‘g‘illari”",
          "Ishoq payg‘ambarning o‘g‘li Yoqubning 12 nafar o‘g‘lidan biri “Yahuda” nomi bilan",
          "“Ibroniy” yoki “ibri”-“narigi tomonning odami”,”kelgindi”nomi bilan",
          "“Isroil”-“xudo bilan kurashib uni enggan” degan ma‘noda"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q12",
        "prompt": "Yahudiylik dinining muqaddas manbalari nomi to‘g‘ri berilgan qatorni toping?",
        "options": [
          "Tanah 1-bo‘limi:(Tora-Tavrot); 2- bo‘limi:Naviim; 3- bo‘limi:Ketuvim",
          "Talmud, Mishna va Gemara",
          "Zabur",
          "Qadimgi Ahd"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q13",
        "prompt": "Yahudiylik ta‘limotida Xudo Yaxve tomonidan Tur tog‘ida Musoga nozil qilingan “O‘n(10) amr”(Tavrotning “Chiqish” va “Ikkinchi qonun” kitobida) to‘g‘ri berilgan javobni toping?",
        "options": [
          "Dunyoni yaratgan, yakka-yu yagona Yaxvedan boshqa iloh yo‘qligiga imon keltirish, Yaxvedan boshqaga ibodat qilmaslik, Xudoning nomini bo‘lar bo‘lmasga tilga olavermaslik, Shanba kunini muqaddas bilib u kunda dam olish, Ota-onani hurmat qilish, Qotillik qilmaslik, Zino qilmaslik, O‘g‘rilik qilmaslik, O‘z yaqinlari haqqiga yolg‘on guvohlik bermaslik, O‘z yaqinlari uyiga, ayoliga... ko‘z olaytirmaslik",
          "Rosh-Ashona, Yom-Kipur, Pesax, Shavuot, Sukkot, Purim, Xanukka...",
          "Dovud yuldduzi, Menora, Xamsa, Kipi",
          "Saduqiylik, Farziylar, Esseylar"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q14",
        "prompt": "Vedalar-(muqaddas ilohiy bilimlar) nechta bo‘limdan iborat?",
        "options": [
          "4 ta bo‘limdan, Rig-Veda, Sama-Veda, Yajur-Veda, Atxarva-Veda",
          "2ta bo‘limdan, Shruti va Smitriga",
          "5 ta bo‘limdan, Vedalarning muqaddasligi, Guru tan olinishi...",
          "3 ta bo‘limdan, Braxma, Vishnu, Shiva"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q15",
        "prompt": "Hinduizm diniagi xudolar panteoni qaysi qatorda to‘g‘ri berilgan?",
        "options": [
          "Trimurti(uchlik)ya‘ni, Braxma(yaratuvchi), Vishnu(qo‘riqlovchi), Shiva(yo‘q qiluvchi)",
          "Shivaizm va Vishnuizm",
          "Karma(qonun), sansara(ruhning ko‘chib yurishi)",
          "Braxmanlar, kshatriylar, vayshlar, shudralar, chandallar"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q16",
        "prompt": "24 nafar tirtxakar(payg‘ambar yoki avliyo) asos solgan din?",
        "options": [
          "Jaynizm(Vardxamana)",
          "Jina-“muzaffar”",
          "Maxavira(ulug‘ qahromon)",
          "“Acharanga-sutra” va “Yogashastra”"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q17",
        "prompt": "Hindistonning Panjob shtatida guru(ustoz)Nanak(1469-1539) asos solgan va unga ergashganlar dini bu.?",
        "options": [
          "Sikxizm(sikxiylik)",
          "Xalsa(kesh,kanxa,kach,kara,kirpan)",
          "Guru Grantx",
          "Oltin Haram ibodatxonasi"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q18",
        "prompt": "Mil.avv. VI asrda Kun Tszi asos solgan din?",
        "options": [
          "Konfutsiylik",
          "Daochilik",
          "Tyan(Tien)",
          "Li (qonun)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q19",
        "prompt": "Li Tan(taxallusi Lao-keksa,Tszi-donishmand) asos solgan din?",
        "options": [
          "Daochilik(Yo‘l)",
          "Dao de tsin(xit.”Dao qonunlari) muqaddas kitobi",
          "Taypindao(buyuk tenglik ta‘limoti)",
          "Udoumidao(besh dou guruch ta‘limoti)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q20",
        "prompt": "Qaysi milliy dinda ruhoniylar “Kannusi” deb nomlanadi?",
        "options": [
          "Sintoizmda",
          "Kodziki(Qadimiy ishlar haqida qaydlar)",
          "Kami kulti(xudolarga sig‘inish),iloh yoki ruh",
          "Dzindzya(ibodatxona)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q21",
        "prompt": "Avestoning tarkibiy tuzilishi...?",
        "options": [
          "1.Videvdat, 2.Yasna, 3.Visparad, 4.Yasht",
          "1.Gatlar, 2.Gas",
          "1.Avesto,2.Apastak,3.Ovisto,4.Abisto,5.Ovusto,6.Avasto",
          "1.Zend,2.Denkart, 3.xo‘rdak Avesto(kichik Avesto)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q22",
        "prompt": "Zardushtiylikning diniy iyerarxiyasi?",
        "options": [
          "Ratu,Mobadan Mobad,Sar-mobad,Dastur,Mobad,Xirband,Mobadyor",
          "Daxma,Novus,Nasusa",
          "Podyob,Barashnum,Dron,Xum",
          "Behdin,Sadre,Kushtini"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q23",
        "prompt": "Zardushtiylikning kunlik diniy marosimlari bu...?",
        "options": [
          "Kunlik namoz amali bu goh marosimi, ya‘ni Xavan goh, Rapitvin goh, Uzarin goh, Aivisrutrim goh, Ushaxin goh",
          "Sog‘did(it yordamida devlarni quvish)",
          "Podyob(o‘likni to‘liq yuvish),Barashnum(gunoh qilgan kishini poklash)",
          "Dron(maxsus tayorlangan non),xum(maxsus tayorlangan ichimlik)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q24",
        "prompt": "Zardushtiylik ta‘limoti?",
        "options": [
          "Aivitak suvi qirg‘og‘ida 45-kecha samoga chiqishi, Vohumanah nomli farishta Zardusht ruhini poklashi, Axurmazda huzuriga borishi, Avesto inom etilishi...",
          "Sadre(oq ko‘ylak), Kushti(maxsus kamar)...",
          "Kunlik namoz amali bu goh marosimi...",
          "Otashkade, Soh otash Varaxram..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q25",
        "prompt": "Govmard bu...?",
        "options": [
          "Birinchi inson(ho‘kiz odam)",
          "Birinchi shoh(Yima yoki Jamshid)",
          "Axriman",
          "Axurmazda"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q26",
        "prompt": "Zardushtiylikda tabiatning ulug‘lanishi qaysi qatorda tog‘ri berilgan?",
        "options": [
          "Olov,Yer,Suv,Havo",
          "Axurmazda,Mitra,Anaxita,Xumo",
          "Zardusht,Zaratushtra,Zoroastr",
          "Zantu,Vis,Daxyu,Vara,Nmana"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q27",
        "prompt": "Zardusht jamoalari Hindistonning qaysi shahar hududida yashaydi?",
        "options": [
          "Mumbay(Bombey)",
          "Xorazm",
          "Balx",
          "Tehron"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q28",
        "prompt": "”Zardushtiylar.E‘tiqodlari va urf-odatlari” asari muallifi...?",
        "options": [
          "Meri Boyis",
          "Firdavsiy",
          "A.Dyuperron",
          "Abu Rayhon Beruniy"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q29",
        "prompt": "Eron shohlaridan kim Zardushtiylik dinining targ‘ibotchisi bo‘lgan?",
        "options": [
          "shoh Vishtasp",
          "Shopur I",
          "podshoh Doro",
          "Bratarvaxsh"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q30",
        "prompt": "Zardushtiylikda balog‘at yoshi...?",
        "options": [
          "15 yosh",
          "12 yosh",
          "7 yosh",
          "9 yosh"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q31",
        "prompt": "Meditatsiya bu...",
        "options": [
          "fikrlash",
          "axloq",
          "nasihat",
          "haqiqat"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q32",
        "prompt": "Buddaviylik dini nechta amaliy qismdan iborat...",
        "options": [
          "axloq, meditatsiya, donolik",
          "qotillikdan saqlanish, o‘g‘rlikdan saqlanish, gumrohlikdan saqlanish",
          "yolg‘on,qalbaki narsalardan saqlanish, mast qiluvchi narsalardan saqlanish",
          "to‘g‘ri tushunish, to‘g‘ri niyat qilish, to‘g‘ri o‘zini tutish"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q33",
        "prompt": "Buddaviylik dini ta’limoti nechta haqiqatda ifodasini topgan?",
        "options": [
          "4 ta",
          "8 ta",
          "10 ta",
          "3 ta"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q34",
        "prompt": "Buddaviylik dini muqaddas kitobi nomi qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "Tripitaka",
          "Lamaizm",
          "Maxayana",
          "Xinayana"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q35",
        "prompt": "Buddizm dini asosiy maqsadi bu...",
        "options": [
          "nirvana holatiga yetishish",
          "axloq normalariga rioya qilish",
          "donishmandlikka yetishish",
          "meditatsiyaga erishish"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q36",
        "prompt": "Dxarma...",
        "options": [
          "qonun,ta’limot",
          "kichik arava",
          "katta arava",
          "tana"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q37",
        "prompt": "Sangxa...",
        "options": [
          "rohiblar jamoasi",
          "sezgi",
          "harakat",
          "shogirdlar jamoasi"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q38",
        "prompt": "Surxondaryo viloyati hududidagi buddaviylik dini yodgorliklari majmuasi qaysi qatorda to‘g‘ri berilgan?",
        "options": [
          "Zurmala,Qoratepa,Fayoztepa,Dalvarzintepa",
          "Tibet,Bamiyan vohasi",
          "Buryatiya,Tuva",
          "Quva,O‘ratepa,Qorovultepa"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q39",
        "prompt": "Dalay-Lama so‘zi ma’nosi...",
        "options": [
          "dengizdek ulug‘ lama,",
          "nurlangan daraxt",
          "ulug‘ lama,",
          "tirik xudo"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q40",
        "prompt": "Quyidagilardan qaysi biri vixara uslubidagi ibodatxona hisoblanadi?",
        "options": [
          "Fayoztepa",
          "Qoratepa",
          "Zo‘rmala",
          "Ayritom"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q41",
        "prompt": "Xristianlik asosan qaerlarda tarqalgan?",
        "options": [
          "Evropa, shimoliy va janubyy amerika, avstraliya va qisman afrika qitasining janubiy qismida",
          "Evropa, avstraliya, sharqiy osiyo mamlakatlarida",
          "Evropa va amerika qitalarida, qisman osiyo qitasining sharqiy qismida",
          "Avstraliya, evropa va qisman sharqiy osiyo mamlakatlarida"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q42",
        "prompt": "Xristianlik qayerda vujudga keldi?",
        "options": [
          "Rim imperiyasining sharqiy qismi falastinda",
          "Rossiyada",
          "Rim imperiyasining janubiy xududlarida",
          "Yevropada"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q43",
        "prompt": "Iso nomiga qo’shiluvchi masih so’zining ma'nosi nima?",
        "options": [
          "Silangan, siylangan",
          "Xoloskor, ilohiy",
          "Iloxiy, muqaddas",
          "Muqaddas xudo"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q44",
        "prompt": "Xristianlik qaysi din negizida yuzaga kelgan?",
        "options": [
          "Yahudiylik",
          "Nasroniylik",
          "Buddaviylik",
          "Islom"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q45",
        "prompt": "Xristian jamoasining shakllanishi, uning aqidalarini tartibga solinishi, cherkov munosabatlarining ishlab chiqilishi qaysi davrga to’g’ri keladi?",
        "options": [
          "IV asr boshlarida 324 yili",
          "V asr boshlarida 424 yili",
          "III asr o’rtalarida",
          "II asr o’rtalarida"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q46",
        "prompt": "Butun olam xristian sobori qaysi shaxarda o’tkazilgan?",
        "options": [
          "Nikey",
          "Rimda",
          "Istambul",
          "Konstantinopolda"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q47",
        "prompt": "Katolik va pravoslav cherkovlariga ajralishi qaysi yili rasman tan olindi?",
        "options": [
          "1054 yili",
          "1050 yili",
          "1072 yili",
          "1052 yili"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q48",
        "prompt": "“Bibliya” so’zining ma'nosi nima?",
        "options": [
          "Kitob, o’ram",
          "Saylanma",
          "Donolik kitobi",
          "Xushxabar"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q49",
        "prompt": "“Bibliya” ning yahudiy diniga ta'lluqli kitoblari nima deb ataladi?",
        "options": [
          "“qadimiy ahd”",
          "“yangi ahd”",
          "“luka injili”",
          "“musoning besh kitobi"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-1-q50",
        "prompt": "Xristianlik dinida nechta yirik yo‘nalish (oqim) bor?",
        "options": [
          "3 ta",
          "2 ta",
          "5 ta",
          "4 ta"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "din-2",
    "title": "2-qism: Islom dini tarixi va mohiyati (51-100 savollar)",
    "description": "Dinshunoslik fanidan yakuniy nazorat testlari",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "din-2-q51",
        "prompt": "Xaniflik harakati bu...",
        "options": [
          "Yakka xudolik haqidagi ta’limot yoki haqiqat izlovchilar",
          "O‘zini payg’ambar deb bilgan kishilar",
          "Politeistik ta’limot",
          "yahudiylikdagi sekta nomi"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q52",
        "prompt": "Islomgacha Arabiston yarim orolida diniy manzara qanday bo‘lgan?",
        "options": [
          "Ko‘pxudolik,totemizm,fetishizm,animizm",
          "Yahudiylik va xristianlik",
          "Johiliyat davri",
          "Badaviylar dinga e’tiqod qilmagan"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q53",
        "prompt": "Islom dini muqaddas manbalarini ko‘rsating?",
        "options": [
          "Quro’n,hadisi,Ijmo’,Qiyos",
          "Shariat talablari",
          "Tafsir ilmi",
          "Fatvolar"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q54",
        "prompt": "Tafsir ilmi qanday ilm?",
        "options": [
          "Qurʼon oyatlarini sharhlash, tushuntirib berish ilmi",
          "“Tafsir” so‘zi arabcha so‘zdan olingan bo‘lib, “bayon qilish, ochib berish va ravshan qilish”",
          "“Tafsir bil maʼsur”. Bu qismdagi tafsirda mufassir Qurʼoni karim oyatlarini...",
          "“Tafsir bir – ray”. Bu qismda mufassir o‘z fikri va ijtihodi ila tafsir qilsa..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q55",
        "prompt": "Islomda insonlarning amallari tasnifi qaysi bandda to‘g’ri berilgan?",
        "options": [
          "Farz,Vojib,Sunnat,Mustahab,Muboh,Harom,Makruh,Mustakrah.",
          "Farz - Alloh taolo buyurgan amaldir , Vojib - bajarilishi shart bo‘lgan amal...",
          "Mustahab - Payg‘ambarimiz ba’zan bajargan va ba’zan bajarishni lozim ko‘rmagan amaldir...",
          "Makruh - islom dini ta’qiqlagan amal..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q56",
        "prompt": "Muhammad alayhissalomning tavallud topishlari va vafoti qaysi sanada to‘gri berilgan?",
        "options": [
          "milodiy 21-aprel 571-yil Makka - 8 iyun 632 yil Madina",
          "miloddan avvalgi 5 yil-milodning 30 yili",
          "622 yil 16 iyul-Muharram oyining 1 kuni",
          "Zulhijja oyining 8-10 kunlari - Haj kunlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q57",
        "prompt": "Islom ta’limotining asosini nima tashkil qiladi?",
        "options": [
          "Iymon,Islom,Ehson",
          "Iymon 7 aqidaga asoslanadi",
          "Islomning 5 rukni bor",
          "Ehson (arab. – yaxshilik, samimiylik, muruvvat...)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q58",
        "prompt": "Islomda nechta oqim bor?",
        "options": [
          "2 ta, VII asrda islom 2 ta yirik oqimga bo`lingan: Sunniylik va Shialik",
          "Yakkaxudoga,Payg’ambarlikka,Taqdirga,Oxiratga,Imomatga",
          "Ro‘za hayiti (Ramazon) va Qurbon hayiti",
          "Mavlud va Juma"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q59",
        "prompt": "Quro’nning tarkibi qaysi bandda to‘g’ri berilgan?",
        "options": [
          "islom dinining muqaddas kitobi, 30 pora (qism), 114 sura, 6236 oyat, 77439 kalima, 325743 harfdan iborat to`plam",
          "(arab, hikoya, xabar) – bu Muhammad (s.a.v.)ning aytgan so`zlari, qilgan ishlari...",
          "Qur’on va Hadisda aniq ko`rsatma berilmagan huquqiy masalalarni hal etishda faqih va mujtahidlarning...",
          "Qur’on, Hadis (Sunnat) va Ijmo’da biror huquqiy masalaga aniq javob topilmaganida..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q60",
        "prompt": "Movarounnahrda islom dinining tarqalishi qaysi davrga to‘g’ri keladi?",
        "options": [
          "751-yilda Abbosiylar xalifaligi va Xitoy Tan sulolasi oʻrtasida Markaziy Osiyoni nazorat qilish uchun Talas jangi mintaqada ommaviy islomni qabul qilishni boshlab bergan.",
          "Amudaryo daryosi shimolida joylashgan hududlar arablar tomonidan „Movaro un-nahr“ deb atalgan.",
          "Arab xalifaligining Markaziy Osiyoni fath qilishi VII—VIII asrlarga to‘g’ri keladi",
          "“Madrasa” soʻzi birinchi marta X asrda Movarounnahrda ishlatilgan."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q61",
        "prompt": "Kalom ilmining lug‘aviy va ictilohiy ma’nolari…?",
        "options": [
          "Kalom-arab. “so‘z”, “hutq”, “gap”, musulmon kishinig e‘tiqodi, aqidasi va dunyoqarashini belgilab beradigan ta’limot",
          "“al-fiqh al-Akbar”, “Tavhid”, “Aqida”, “Kalom”, “Usul ad-din”",
          "Mutakallimlar",
          "Islomning sof e’tiqodlarini adashgan zalolat ahlining shubha va gumonlaridan himoya qilish."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q62",
        "prompt": "Aqida sohasida faoliyat olib borgan olimlarning eng mashhurlari…?",
        "options": [
          "Abu Mansur Moturidiy(853-944) va Abul Hasan Ash’ariy(873-941)",
          "Abu Xafs Nasafiy(1068-1142) va Abdul Yusuf Pazdaviy (1030-1099 )",
          "Alouddin Mansur(vaf.1143) va Ibrohim ibn Isxoq Saffor Buxoriy (vaf.1139)",
          "Abul Fath Alouddin Muhammad ibn Abdilhamid..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q63",
        "prompt": "“Kitab ta’vilot ahli sunna” yoki “Ta’vilot al-Qur’on” asari muallifi…?",
        "options": [
          "Abu Mansur Moturidiy",
          "Alouddin Mansur",
          "Abu Xafs Nasafiy",
          "Abul Hasan Ash‘ariy"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q64",
        "prompt": "Mutakallimlar aqida masalasida qanday manbaga tayangan?",
        "options": [
          "Naqliy dalil(Qur‘on oyatlari,hadislar,sahobiy va tobeiylar ijmosi), ijtihod va aqliy dalillarga",
          "Faqat Qur‘onga",
          "Faqat Hadisga",
          "Faqat Ijmo‘ga"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q65",
        "prompt": "Mut’aziliylarning xatosi nimada?",
        "options": [
          "Aqliy dalillarni naqliy dalillardan uctun qo‘yishi",
          "”Uzoqlashganlar”,”ajralib chiqqanlar”,asoschisi Vosil ibn Ato...",
          "xalifa Ma‘mun(813-833) mut‘azila ta‘limotini davlat dini deb tan olgan",
          "xalifa Mutavakkil(847-861) mut‘azila ta‘limotini “shakkoklik” dini deb e‘lon qilgan"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q66",
        "prompt": "Islom ruknlari (arkon ad-din al-islomiy) qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "Imon,namoz,zakot,ro‘za,haj",
          "Allohning borligi va birligiga, Farishtalarga, Ilohiy kitoblarga, Payg‘ambarlarga, Oxiratga, Taqdirga, Qiyomatga e‘tiqod",
          "Ilohiyot,Nubuvvat,Kavniyot,Sam‘iyot(Faybiyot)",
          "Iymon,islom,ehson"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q67",
        "prompt": "Aqida so‘zining lug‘aviy va istilohiy ma’nosi?",
        "options": [
          "Aqida- so‘zi (ko‘pligi – aqoid) arabcha -aqada fe’lidan olingan bo‘lib, undan bir narsani ikkinchi bir narsa bilan bog‘lash ma’nosi kelib chiqadi. Istilohda esa, mo‘minni ma’lum bir g‘oyalar bilan bog‘lab turuvchi e’tiqodlar yig‘indisiga aytiladi.",
          "Bu ilmning maqsadi diniy aqidalarni qat’iy dalillar ila isbotlash va undagi shubhalarni rad qilishdir",
          "to‘g‘ri aqida bilan ikki dunyo saodatini hosil qilishdir",
          "”Kalom ilmi farzi ayn bo‘lgan usul ad-dinning sharhidir..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q68",
        "prompt": "„Al-Fiqh al-akbar” nomini birinchi qo‘llagan va shu bilan aqoid ilmiga oid mashhur risolasini yozgan olim kim?",
        "options": [
          "Abu Hanifa",
          "Abul Hasan al-Asha’riy",
          "Abu Hafs an-Nasafiy",
          "Abu Mansur al-Moturidiy"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q69",
        "prompt": "Haj ziyoratiga boruvchilarni yo‘lto‘sar qaroqchilardan himoya qilish uchun qo‘riqlab boruvchi soqchilarning shart bo’lgani kabi, chuqur bilimga ega bo’lmagan oddiy musulmonlaarning diniy e’tiqodlarini turli bid’at va noto’g’ri g’oyalardan qo’riqlash uchun kalom ilmini o’rganish vojibdir” fikrini kim qaysi asarida yozgan?",
        "options": [
          "Abu Homid Muhammad G’azzoliy „Ihyo ulum ad-din” asarida",
          "Qur’oni Karimda",
          "Muhammad (s.a.v)rivoyati",
          "Shayx Muhammad Sodiq Muhammad Yusuf „Imon” asarida"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q70",
        "prompt": "Hadis turlari va tasnifi to’g’ berilgan qatorni toping?",
        "options": [
          "To ‘ g’ri javob B,C,D",
          "Qudsiy hadislar (ma’nosi Allohdan bo‘lib, aytilishi, ya’ni lafzi Rasulullohdan)",
          "Hadis an-nabaviy(ma’no ham, lafz ham Rasulullohdan)",
          "Sahih,Hasan,Za’if"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q71",
        "prompt": "Hadislarning tarkibiy qismlari qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "matn(mazmuni) va isnodi(roviylar zanjiri)",
          "hofiz(100.000 ta hadisning matni va isnodini yodlagan kishi)",
          "hujjat(300.000 ta hadisni turli yo‘llari bilan bilgan kishi)",
          "Axbor(shialikda Muhammad (s.a.v.) va Ali (r.a.)ning so‘zlari,amallari"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q72",
        "prompt": "Ahli sunna val jamoaga tegishli dastlabki fiqh maktablari?",
        "options": [
          "1.Madina huquq maktabi, 2.Makka huquq maktabi, 3.Basra huquq maktabi,5. Kufa huquq maktabi, 6.Shom huquq maktabi.",
          "1.Kufa va Basra (Iroq) ilk huquq maktabi negizida Abu Hanifa hanafiy mazhabiga asos soldi; 2. Imom Malik Madina... 3. Imom Shofe‘iy... 4. Ahmad ibn Hanbal...",
          "Qur‘oni Karim,Payg‘ambar alayhissalomning sunnatlari,Ijmo‘, Qiyos.",
          "“Masolihi mursala”-shariatda uning e‘tiborga olinganligi yoki bekor qilinganligi ma‘lum bo‘lmagan hukm..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q73",
        "prompt": "Hanafiy mazhabi tarqalgan hududlar…",
        "options": [
          "Shom, Turkiya, Turkiston, Pokiston, Hindiston, Bangladesh va boshqa davlatlarda keng tarqalgan.",
          "Misr, Suriya, Indoneziya, Malayziya, Filippin, Tayland va Afrikaning ba‘zi davlatlarida tarqalgan.",
          "Libiya, Tunis, Jazoir, Mag‘rib, Mavritaniya, Nigeriya va Afrikaning ba‘zi davlatlarida tarqalgan.",
          "Arabiston yarim orolida tarqalgan."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q74",
        "prompt": "“Islomdagi eng xatarli bid‘at” va “dinsizlikka olib boruvchi ko‘prik” iborasi kimga tegishli fikr…?",
        "options": [
          "suriyalik olim Ramazon Butiyga",
          "O‘zbekistonlik mashhur olim,shayx Muhammad solih Muhammadyusufga",
          "muftiy Nuriddin Xoliqnazarovga",
          "muftiy Usmonxon Alimovga"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q75",
        "prompt": "“Fiqh”-so‘zi lug‘aviy va istilohiy ma‘nosini toping?",
        "options": [
          "”fahm”(bir narsani nozik joylarigacha tushunish), shar‘iy dalillardan far‘iy hukmlarni chiqarishga fiqh” deiladi.",
          "”Alloh kimga yaxshilikni iroda qilsa,uni dinda faqih qilib quyadi”.",
          "Shar‘iy dalil deganda bu Qur‘on va Muhammad (s.a.v.) sunnatlari.",
          "Shariyatda Ibodat va muomalotni o‘z ichiga oluvchi hukmlar far‘iy hukmlardir."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q76",
        "prompt": "Ahli sunna val jamoaga tegishli fiqhiy mazhablar?",
        "options": [
          "Hanafiylik (asoschisi Abu Hanifa No‘mon ibn Sobit), Molikiylik (asoschisi madinalik Molik ibn Anas), Shofe‘iylik (asoschisi Muhammad ibn Idris Shofe‘iy), Hanbaliylik (asoschisi Ahmad ibn Hanbal)",
          "Sunniylik, Shialik, Xavorijlar",
          "Mu‘tazila, moturidiya, ash‘ariya",
          "Zaydiylar, Ja‘fariylik"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q77",
        "prompt": "O‘zbekistonga hanafiylik mazhabini olib kelgan va tarqalishiga sababchi bo‘lgan olim kim?",
        "options": [
          "Abu Xafs Kabir (Ahmad ibn Hafs ibn Zaburqon ibn Abdulloh ibn Buxoriy)",
          "Muhammad ibn Ali ibn Ismoil al-Qaffol ash-Shoshiy",
          "Burhoniddin Marg‘inoniy",
          "Imom al-Buxoriy"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q78",
        "prompt": "“Kitob al-Hidoya” asari muallifi…",
        "options": [
          "Abulhasan Ali ibn Abubakr ibn Abduljalil al-Farg‘oniy al-Rishtoniy al-Marg‘inoniy",
          "fiqhshunos olim Abu Zayd Ubaydillo ibn Umar ibn Iso Qoziy Dabusiy",
          "fiqhshunos olim Abu Lays Nasr ibn Muhammad ibn Ahmad ibn Ibrohim as-Samarqandiy",
          "Abulfath Muhammad ibn Mahmud ibn Husayn ibn Ahmad Ustrushaniy."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q79",
        "prompt": "“Hidoya” (arabcha so‘z - yoʻllanma) asari bo ‘limlari nechta?",
        "options": [
          "4 jild, 57 kitob, 165 bob, 152 fasldan tarkib topgan",
          "112 kitob",
          "4 juz,4 bo‘lim",
          "1juz, 64 fasl."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q80",
        "prompt": "Shariyat amallarining tasnifi to‘g‘ri berilgan qatorni toping?",
        "options": [
          "farz, vojib, sunat, mustahab, harom, muboh, makruh, mustakrah.",
          "farz, vojib, sunat.",
          "mustahab, muboh",
          "harom, makruh, mustakra"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q81",
        "prompt": "“Al-Fiqh-ul-Akbar” asari muallifi…?",
        "options": [
          "Imomi A’zam Abu Hanifa No‘mon ibn Sobit al-Ko‘fiy",
          "imom Molik Ibn Anas",
          "Abu Abdulloh Muhammad ibn Idris ibn Abbos ash-Shofiʼiy",
          "Ibn Hanbal"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q82",
        "prompt": "Tasavvufga berilgan ta‘riflardan qaysi biri to‘g‘ri deb bilasiz?",
        "options": [
          "islomda insonni ruhiy va axloqiy jihatdan komillik sari etaklovchi ta‘limot",
          "Zohidlik(zuhd), tarkidunyochilik,taqvodorlik,parhezkorlik haqidagi dunyoqarash",
          "Hidoyat va ibodat haqidagi ta‘limot",
          "Obidlik va zohidlikni ixtiyor qilgan guruh."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q83",
        "prompt": "Tasavvufga berilgan zohiriy va botiniy ta’rif qaysi bandda to‘g’ri berilgan?",
        "options": [
          "to‘g’ri javob B va D",
          "”Suf”-jun kiyim, so‘fiy esa jun mato kiyim kiygan kishi",
          "Kambag’al sahobalar,”ahli suffa” yoki “ashobi suffa”",
          "Qalbni Alloh zikri bilan pokiza qiluvchi so‘fiylar, ya’ni “safo ul-qalb” uchun jonbozlik ko‘rsatgan kishilar"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q84",
        "prompt": "Tasavvufning tarixiy taraqqiyot davri to‘g’ri berilgan qatorni toping?",
        "options": [
          "Zohidlik davri(8-11 asr),so‘fiylik maktablari(9-11 asr),so‘fiylik tariqatlari(12-asr)",
          "1.Tavba(qaytish),2.Tavakkul(o‘zini topshirish), 3.Rizo(rozilik)...",
          "Zohid-(tiyiluvchi),Obid-(ibodat qiluvchi),Nosik-(taqvodar) ma’nosini beradi",
          "Tasavvuf dastlab VIII asr o‘rtalarida zohidlik harakati sifatida paydo bo‘lgan"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q85",
        "prompt": "Zohidlik va so‘fiylik maktablari to‘g’ri berilgan bandni toping?",
        "options": [
          "to‘g’ri javob B va D",
          "Madina zohidlik maktabi, Basra zohidlik maktabi, Kufa zohidlik maktabi, Xurosan zohidlik maktabi",
          "Uvays Karaniy (Alisher Navoiyda),Abu Hoshim Kufiy(Abdurahmon Jomiyda)",
          "Nishopur so‘fiylik maktabi, Misr so‘fiylik maktabi, Damashq so‘fiylik maktabi, Bag’dod so‘fiylik maktabi"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q86",
        "prompt": "Tasavvuf ilmidan dars beruvchi shaxslarga qanday unvon berilgan…?",
        "options": [
          "shayx, murshid, pir, eshon, xoja, mavlo, mavlono, maxdum",
          "Murid,solih,ahli dil,ahli hol, mutasavvuf",
          "Valiy, avliyo, qutb, aqtob, avtod, chilton, abdol, abror, ahror, nujabo, nuqabo, siddiq",
          "Oshiq, faqir, haqir, darvesh, qalandar, zohid, orif, devona, ahli muhabbat, ahli suluk, savdoyi,gado"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q87",
        "prompt": "Tasavvufdan saboq oluvchi shaxs…",
        "options": [
          "Murid, solih, ahli dil, ahli hol, mutasavvuf",
          "shayx, murshid, pir, eshon, xoja, mavlo, mavlono, maxdum",
          "Valiy, avliyo, qutb, aqtob, avtod, chilton, abdol, abror, ahror, nujabo, nuqabo, siddiq",
          "Oshiq, faqir, haqir, darvesh, qalandar, zohid, orif, devona, ahli muhabbat, ahli suluk, savdoyi,gado."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q88",
        "prompt": "Tasavvuf bo‘yicha oliy maqomlarga erishgan sohibkaromat pirlarga qanday unvon berilgan?",
        "options": [
          "Valiy, avliyo, qutb, aqtob, avtod, chilton, abdol, abror, ahror, nujabo, nuqabo, siddiq",
          "Murid, solih, ahli dil, ahli hol, mutasavvuf",
          "shayx, murshid, pir, eshon, xoja, mavlo, mavlono, maxdum",
          "Oshiq, faqir, haqir, darvesh, qalandar, zohid, orif, devona, ahli muhabbat, ahli suluk, savdoyi,gado"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q89",
        "prompt": "Valiy(avliyo) so‘zi…",
        "options": [
          "Allohning do‘sti",
          "shayxlarga berilgan eng oliy unvon",
          "O‘rinbosar",
          "Qoziqlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q90",
        "prompt": "Qutb bu…",
        "options": [
          "Tasavvufda shayxlarga beriladigan eng oliy unvon",
          "Yordam beruvchi",
          "Chihlton(qirq kishidan iborat)",
          "Insonlarning foydasi uchun faoliyat ko‘rsatadigan avliyolar."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q91",
        "prompt": "Nafs nima.....?",
        "options": [
          "Nafs bu insonga kamolga yetmog‘i uchun berilgan fe’l-atvor",
          "Nafs bu farishtalarga berilgan maqom",
          "Nafs bu jinlar uchun berilgan ibodat vositasi",
          "Nafs bu insonning xulq-atvori namoyon bo‘lishi."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q92",
        "prompt": "Nafsning martabalari qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "Ammora, lavomma ,mulhima, mutmainna, roziya, marziya, komila(sofiya)",
          "Ochlik, to‘qlik, poklik, johillik, yemak-ichmoq,tubanlik",
          "Tuban , pushaymon , solih, yetuklik, rozilik,xotirjam, ilohi nur",
          "Istak, hoyu-havvos, lazzat, hirs, ofat, fahsh,kibr."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q93",
        "prompt": "Nafsi ammora xos xususiyatlar qaysi qatorda to‘g‘ri berilgan?",
        "options": [
          "B va D javoblar to‘g‘ri",
          "Kibr, kin,baxil,shahvat,hirs,hasad",
          "Pushaymon,vahima,uyqu,oxirat,bema’ni",
          "G‘azab,g‘aflat,jaholat,shirk,kufr,ujb"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q94",
        "prompt": "Nafsi ammoraning nechta alomati bor?",
        "options": [
          "12 ta",
          "6 ta",
          "10 ta",
          "4 ta"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q95",
        "prompt": "Nafsi lavomma alomatiga qaysi ta’rif nisbatan to‘g‘ri?",
        "options": [
          "Pushaymon qilib o‘zini malomat(tanqid) qilgan nafs",
          "Bema’ni gapni ko‘p gapirish",
          "Yaxshi kiyinish va yaxshi yashash orzusi",
          "Yeb-ichishga hirs qo‘yish"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q96",
        "prompt": "Nafsi mulhima qanday sifatlarda namoyon bo‘ladi?",
        "options": [
          "B va C javoblar to‘g‘ri",
          "Solih amallarda , chiroyli xulqda,sabr va shukurda,ilmda",
          "Halol va haromga e’tiborli bo‘lganda",
          "Nafs va hoyu-havvosni jilovlashda"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q97",
        "prompt": "Nafsi mutmainna alomatiga berilgan ta’rifning qaysi biri to‘g‘ri?",
        "options": [
          "B va D javoblar to‘g‘ri",
          "Yetuklik maqomi bo‘lib nafsning hoyu-havvoslarini jilovlash",
          "Chiroyli axloqlar bilan ziynatlashuv",
          "Amal,tavakkul,ochlik,riyozat,ibodat,tafakkul"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q98",
        "prompt": "Ixlos,ehson,Alloh zikri,foydasiz gaplardan uzoqlashish sifati bu ...",
        "options": [
          "Nafsi roziya martabasida",
          "Nafsi marziya martabasida",
          "Nafsi ammorada",
          "Nafsi lavommada"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q99",
        "prompt": "Nafsi marziya bu...",
        "options": [
          "B,C,D javoblar to‘g‘ri",
          "Bandalar yetisha oladigan yuksak martaba",
          "Nafs Alloh taoladan, Alloh taola ham nafsdan rozi",
          "Chiroyli xulqlar ortidan ehsonlar kelishi"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-2-q100",
        "prompt": "Nafsi kamola(sofiya) bu...",
        "options": [
          "Payg‘ambarlik martabasi",
          "Ilohi nur",
          "Farishtalar maqomi",
          "Nafsi solih"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "din-3",
    "title": "3-qism: Zamonaviy diniy ta'limotlar va oqimlar (101-150 savollar)",
    "description": "Dinshunoslik fanidan yakuniy nazorat testlari",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "din-3-q101",
        "prompt": "Movarounnahrda tasavvuf ta’limotining vujudga kelishida muhim rol o‘ynagan shaxs…",
        "options": [
          "Abu Ya’qub Yusuf al-Hamodoniy(1040-1140)",
          "Xoja Abduxoliq G’ijduvoniy(1106-1179)",
          "Xoja Axmad Yassaviy(1093-1166)",
          "Najmiddin Kubro al-Xivaqiy(1145-1221)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q102",
        "prompt": "Xoja Axmad Yassaviy so‘fiylik ta’limotining mohiyati…",
        "options": [
          "To‘g’ri javob B va D",
          "Riyozat(qiynlish,nafs istagidab voz kechish),Chilla(fors.qirq),Zikr(yodga olish),Mujohada(kurashmoq,nafsi ammoraga)",
          "”Devoni hikmat”da",
          "Ma’rifaatulloh(Allohni tanish),Jo‘mardlik, rostgo‘ylik, Tavakkul(o ‘zini Allohga topshirish)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q103",
        "prompt": "Najmiddin Kubro al-Xivaqiy so‘fiylik ta’limotining mohiyati…",
        "options": [
          "1.At-tavba(“men”likdan xalos bo ‘lish),2.az-zuhud fi-d-dunyo,3.at-tavakkul ala-lloh... 10.Rido",
          "Bu tariqat zikrni ovoz chiqarmasdan “xufiya”ijro etgan,”Usuli ashara”asari",
          "Bahoiya,xilvatiya,firdavsiya,nuriya,rukniya,hamadoniya,nurbaxshiya,barzanjiya shohobchalari",
          "1.oq rang -islomni, 2.sariq rang -imonni, 3.zangori rang - ehsonni, 4.yashil rang -itminon (ishonch)ni..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q104",
        "prompt": "Bahoyddin Naqshband(1318-1389) so‘fiylik ta’limotining mohiyati…",
        "options": [
          "«Dast ba koru, dil ba yor!» (“Qo‘l ishda, Olloh dilda”)",
          "13 ta asar yozgan, Ular orasida “Hayotnoma”, “Dalili oshiqon”, “Odob al-solikin” kabi asarlar alohida ahamiyatga ega.",
          "1.shariat bilan zohirni poklash, 2.tariqat bilan botinni poklsh, 3.haqiqat bilan qurbi ilohiyga erishmoq, 4.ma’rifat bilan Allohga erishmoq.",
          "Ahroriya,mazhariya mujaddidiya,xolidiya"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q105",
        "prompt": "Buxoro shahridagi yetti pir ziyoratgohi ketma-ketligini belgilang?",
        "options": [
          "1.Xoja Abduxoliq G’ijduvoniy, 2.Xoja Muhammad Orif ar-Revgariy, 3.Xoja Mahmud Anjir Fag’naviy, 4.Xoja Ali Romitaniy, 5.Xoja Muhammad Bobo Samosiy, 6.Xoja Sayid Amir Kulol Buxoriy, 7. Bahouddin Naqshband",
          "1.Sahihul Buxoriy», 2.«Sahihi Muslim», 3.«Sunani Abu Dovud», 4.«Jome’i Termiziy»...",
          "5.Xoja Muhammad Bobo Samosiy, 6.Xoja Sayid Amir Kulol Buxoriy, 7. Bahouddin Naqshband",
          "1.Xoja Abduxoliq G’ijduvoniy, 2.Xoja Muhammad Orif ar-Revgariy, 3.Xoja Mahmud Anjir Fag’naviy, 4.Xoja Ali Romitaniy"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q106",
        "prompt": "Hozirgi vaqtdagi ayrim tariqat vakillarning da’volari nimalarda namoyon bo‘lmoqda?",
        "options": [
          "To‘g’ri javob A,B,S da",
          "O‘zgalarning diniy va dunyoviy marosimlarida ishtirok etmaslik, qoplama tish qo‘ygan kishining tahorati mukammal bo‘lmaydi...",
          "O‘z pirlarini ideal shaxs deb bilish",
          "Maxsi-kalish kiyish, chopon va salla o‘rab yurish"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q107",
        "prompt": "Diniy sektalarga berilgan ta’rifning to‘g’risini toping?",
        "options": [
          "ma’lum bir dinning rasmiy aqidalariga zid rvishda ajralib chiqqan yoki mavjud dinlar va konfessiyalarga umuman aloqasi bo‘lmagan holda din bayrog’i ostida faoliyat ko‘rsatadigan guruhlar.",
          "muayan diniy ta’limot doirasida shakllangan va o‘ziga xos xususiyatlarga ega e’tiqod va ushbu e’tiqodga ergashuvchiklar jamoasi.",
          "bir mintaqa,hudud aholisi uchun begona bo ‘lgan,muayan tarixiy sharoit yoki ijtimoiy vaziyat sababli o‘sha erga kirib kelgan yoki kirishga harakat qiladigan dinlar",
          "Mavjud diniy ta’limotlar,ulardagi muayan qoidalarning davr talabiga moslashishi."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q108",
        "prompt": "Bahoiylik qanday diniy yo’nalish?",
        "options": [
          "XIX asrda Eronda bobiylik yo‘nalishi zamirida vujudga kelgan diniy yo‘nalishdir. Bob arabcha so‘z-“eshik”, asoschisi sherozlik Sayid Ali Muhammad, shogirdi Mirza Husayn Ali Nuriy...",
          "Bahoiylikning ta’limoti “Kitobi Aqdas”(Eng muqaddas kitob) va ”Kitobi Ikon”(Mustahkam ishonch kitobi)da berilgan.",
          "Bahoiylik ta’limotiga ko‘ra-barcha dinlar bir ildizdan tarqalgan,payg’ambarlar birodar...",
          "Isroilning Akka shahriga qarab ibodat qiladigan diniy oqim."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q109",
        "prompt": "O‘zbekistonda faoliyati kuzatilgan norasmiy diniy jamoalar qatoriga qo‘yidagilarning qaysi birlarini qo‘yish mumkin?",
        "options": [
          "”Ma’rifatchilar”,”Shohidiylar”,”Baxshillochilar”",
          "”Ma’rifat”,”Tilak”,”Namoz-sig’inish”,”Rost-Qur’on”",
          "”Quro’ndan ma’ruf”,Mormonlar",
          "Bahoiylik,Ahmadiya(Qodiyoniya),Iegovo shohidlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q110",
        "prompt": "Kibermakon tushunchasini dastlab ishlatgan yozuvchi kim?",
        "options": [
          "To‘g’ri javob B va D",
          "Uilyam Gibson 1982 yil «Sojjenie Xrom» («Burning Chrome») nomli hikoyasida yozadi",
          "Aydarbek Tulepov oʻzining “ISHID fitnasi” kitobida",
          "Uilyam Gibsonning 1990 yilda yozib tugatgan “Neuromancer” nomli texno-utopik fantastik trilogiyasida qo‘llagan"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q111",
        "prompt": "Kibermakon tushunchasiga berlgan qaysi ta’rif to‘g’ri?",
        "options": [
          "To‘g’ri javob B va D",
          "axborot texnologiyalari yordamida yaratilgan virtual muhit",
          "texnik vositalar yordamida yaratilgan, insonga uning his-tuygʻulari orqali uzatiladigan dunyo",
          "kompyuter tarmog‘i orqali bir-biri bilan bog‘langan va bir vaqtning o‘zida turli geografik nuqtada kesishuvchi har qanday mavjud kompyuterning grafik sifatidagi ma’lumotlariga o‘ralashib qolgan kishilar jamoasi tushuniladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q112",
        "prompt": "Kiberxavfsizlik tushunchasining mohiyatini bilasizmi",
        "options": [
          "kibermakonda shaxs, jamiyat va davlat manfaatlarining tashqi va ichki tahdidlardan himoyalanganlik holati",
          "O‘zbekiston Respublikasining qonuni: Kiberxavfsizlik to‘g‘risida 15.04.2022 yil",
          "Axborotni qabul qilish,saqlash,uni qayta ishlash hamda undan turli jarayonlarni boshqarishda foydalanish bilan shug’ullanadigan fan",
          "Kibernetika terminini ilk marta yunon faylasufi Platon tilga olgan bo‘lsa, AQShlik N.Viner “Kibernetika” kitobini 1947 yil yozgan."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q113",
        "prompt": "Kiberzo‘ravonlikni yoki cuberbullingni nima deb bilasiz",
        "options": [
          "internetdagi bezorilik yoki qasddan haqorat qilish,tuhmat qilish,tahdid qilish zamonaviy aloqa vositalaridan foydalangan holda",
          "SMS xabarlari",
          "Odobsiz so‘zlar",
          "Bezovta qiluvchi qo‘ng’iroq"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q114",
        "prompt": "Kiberterrorizm nima?",
        "options": [
          "bu tahdid yoki qoʻrqitish orqali, internetdan foydalangan holda, siyosiy yoki mafkuraviy muvaffaqiyatga erishish maqsadida uyushtiriluvchi kiberhujumlardir",
          "Bu ijtimoiy media, xabar almashish platformalari, o'yin platformalari va mobil telefonlarda sodir bo'lishi mumkin",
          "kibermakonda apparat, apparat-dasturiy va dasturiy vositalardan foydalangan holda qasddan amalga oshiriladigan, kiberxavfsizlikka tahdid soladigan harakat",
          "Kiber atama Sharqiy Yevropa jargonida ayyor, ayyor yoki ko'cha aqlli odamni tasvirlash uchun paydo bo'lgan..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q115",
        "prompt": "O‘zbekiston Respublikasi Oliy sudi tomonidan ekstremizm va terrorizm g‘oyalari bilan yo‘g‘rilgan deb topilgan, respublika hududiga olib kirish, tayyorlash, tarqatish va namoyish etish taqiqlangan materiallar ro‘yxati qaysi bandda to‘g’ri berilgan",
        "options": [
          "Meta(Facebook)da-138 ta, Telegrammda-390 ta, instagrammda-107 ta, YoTubeda-46 ta, OK.RUda-23 ta, Tik-Tokda-36 ta, internet sahifalaridagi materiallar- 63 ta= jami 803 ta",
          "Ijtimoiy tarmoqlardagi diniy mazmundagi materiallarga “ layk ” bosish yoki “ ulashishdan ” ehtiyot bo‘lish lozim",
          "Diniy mazmundagi materiallarni tarqatish maqsadida qonunga xilof ravishda tayyorlash, saqlash... jarima solishga sabab bo‘ladi",
          "ma’muriy jazo qo‘llanilganidan keyin sodir etilgan bo‘lsa, jinoiy javobgarlikka sabab bo‘ladi."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q116",
        "prompt": "Qur’oni Karimda axborot iste’mol madaniyati haqidagi oyat qaysi bandda to‘g’ri berilgan?",
        "options": [
          "Ey mo‘minlar!Agar sizlarga biror fosiq kimsa xabar keltirsa... (Xujurot surasi 6-oyat)",
          "“Ey dono odam! Sen eng avvalo narsalarning mohiyatini bil...” Jaloliddin Rumiy",
          "Ezgulik va taraqqiyotga xizmat qiluvchi ma’lumotlarni axborot dunyosidan saralab olish layoqati",
          "http//www.religions.uz, http//www.muslim.uz, http//www.ziyo.uz, http//www.hidoyat.uz. domenlaridan foydalanish."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q117",
        "prompt": "“Al-Qoida”-(asos, poydevor, tayanch) terroristik tashkiloti qachon, qayerda paydo bo‘lgan?",
        "options": [
          "1989-1990 yillarda Afg’onistonda, Usama Bin Lodin tomonidan, sobiq sovetlar ittifoqiga qarshi qurollangan kuchlarni moddiy va harbiy jihatdan yordam ko‘rsatish orqali",
          "Al-Qoidaning dasturiga musulmon oʻlkalarda xorijiy taʼsirlarga chek qoʻyish va yangi islomiy xalifalik yaratish kiradi",
          "“Al-Qoida» 2001 yil 11 sentyabrda Nyu-Yorkdagi egizak minoralarga qilingan hujum tashkilotchisi",
          "Barcha javoblar to‘g’ri."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q118",
        "prompt": "Ixvanul muslimin yoki al-ixvon al- muslimin (musulmon birodarlari) diniy siyosiy tashkiloti maqsadi bu…",
        "options": [
          "1928 yil Misrning Ismoiliya shahria tuzilgan,asoschisi shayx Hasan al Banno,maqsadi-musulmon o‘lkalarda ”islomiy adolat”tamoyillariga asoslangan jamiyat barpo etish",
          "”Mo‘tadil birodarlar”(Hasan al Banno va Sayyid Qutb izdoshlari)...",
          "Musulmon birodarlarining ”Al-ixvon al-muslimin” jurnali 1933 yil chiqa boshladi",
          "Misr,Suriya,Iordaniya,Livand faoliyat ko‘rsatadigan tashkilot."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q119",
        "prompt": "“ISHID”-Iroq-Shom islom davlati qachon va qayerd paydo bo‘ldi?",
        "options": [
          "2006 yil 15 oktyabrda Iroq v Suriyada bir guruh qurolli jamoalarning yig‘ilishi natijasida yuzaga kelgan. Abu Umar ismli shaxs yetakchi etib saylangan...",
          "Tashkilot xalifalikni qaytarish va shariatni tatbiq qilishni maqsad qiladi",
          "Harakatning “Dobiq” nomli jurnali bor",
          "1.Iroqdagi notinchlik.2. Suriyadagi keskin vaziyat.3.“Al-Qoida”ni siyosiy maydonda sustlashishi..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q120",
        "prompt": "“Boko haram” qachon va qayerda paydo bo‘ldi va maqsadi?",
        "options": [
          "Asoschisi va yuzaga kelish tarixi. “Boko haram” tashkilotiga 2002-yilda Nigeriyaning Mayduguri shahrida Muhammad Yusuf tomonidan asos solingan...",
          "islom niqobi ostidagi radikal oqim. Jamoaning rasmiy nomi “Jama’at ahli sunna li-d-da’va va-l-jihod”...",
          "Misr Arab Respublikasining sobiq muftiysi Aliy Juma aytadi...",
          "Islomda barcha davlat va shar’iy boshqaruv ishlari “sho‘ro” (maslahat kengashi) asosida amalga oshiriladi..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q121",
        "prompt": "”Turkiston islom harakati”(sobiq “O‘zbekiston islom harakati”) diniy eksterimistik va terroristik tashkiloti paydo bo‘lishi tarixi va maqsadi?",
        "options": [
          "Ushbu tashkilot 1996 yilda “O‘zbekiston islom harakati” nomi ostida tashkil etilgan...",
          "“Turkiston islom harakati” so‘ngi yillarda talofatlar, strukturaviy o‘zgarishlar, rahbar a'zolar orasidagi yo‘qotishlarga duch keldi...",
          "Harakat strategiyasi. Tashkilot o‘z maqsadiga erishish uchun qo‘paruvchilik va terrorchilik haraktlarni amalga oshirish...",
          "Odamlarni “islomlashtirish”, “taqvoga chaqirish”, “kadr” tayyorlash, “jihod”ni amalga oshirishga tayyorlash."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q122",
        "prompt": "Hizb at-Tahrir al-islomiy (Hizbut tahrir) diniy-eksterimistik tashkilotning tarixi va maqsadini bilasizmi?",
        "options": [
          "\"Hizbut tahrir\" (toʻliq nomi \"Hizb at-tahrir al-islomiy\" -\"Islom ozodlik partiyasi\") -siyosiylashgan diniy tashkilot (oqim). Falastinda Taqiyuddin Nabhoniy (1909-1979) asos solgan...",
          "Hizb ut-Tahrir ( arabcha: ) -1950-yillar boshida falastinlik ulamo Taqi ad-Din an-Nabhoniy tomonidan xalifalik barpo etish uchun kurashayotgan transmilliy islomiy harakat...",
          "Partiya piramida shaklida tarkibiy tuzilma ko'rinishida tashkil topgan. « Doriis »lardan tarkib topgan «halqa»dagi 4-5 kishi guruh rahbari - mushrif »dan saboq oladilar...",
          "«Hizbut-tahrir al-islomiy»ning boshqa norasmiy diniy tashkilotlardan farqi hujumni asosan fikrga qaratadilar..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q123",
        "prompt": "Respublikamiz hududida tashkil topib, hozirda faoliyati deyarli to’xtatilgan noan`anaviy ham islom ta`limotiga ham konstitutsiyaviy davlatchilik asoslariga zid bo’lgan guruh “Akromiylar” kimlar edi?",
        "options": [
          "Barcha javoblar to ‘g’ri.",
          "Akromiylar 1996-1997 yillarda Andijonda tashkil topib, uning nomi guruh asoschisi - 1963 yilda tug’ilgan Yo’ldoshev Akrom nomi bilan bog’liq...",
          "Akromiylar siyosiy hokimiyatga erishishning 5 bosqichini rejalashtirganlar – “sirli ”, “ moddiy ”, “uzviy”, “maydon” va “oxirat ”...",
          "Bu guruh a`zolari asosan hunarmandlardan iborat bo’lib, ular rasmiy ishxonalardan bo’shab, jamoa ma`qullagan mehnat faoliyati bilan shug’ullanganlar..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q124",
        "prompt": "”Vahobiylar” kimlar edi va ularning maqsadi?",
        "options": [
          "Vahhobiylik -islom dinining sunniylik yoʻnalishi hanbaliya mazhabidagi oqim. Arabiston yarim orolining markaziy qismi (Najd)da 18-asr oʻrtalarida paydo boʻlgan...",
          "Vahhobiylik taʼlimoti oʻsha paytdayoq norozilik tugʻdirgan. Ibn Abdulvahhobni hatto oʻzi tugʻilgan joy — Uyaynadan quvib chiqarishgan...",
          "Amir Muhammad ibn Saud (1725-65) bu ishda vahhobiylik taʼlimotidan foydalandi...",
          "1803 yili vahhobiylar Makkani, keyin Madina shahrini bosib olishdi. U erdagi barcha qabrtoshlarni, hatto Bibi Fotima va sahobalar sog‘anasidagi qabr toshlarni buzib tashlashdi..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q125",
        "prompt": "”Nurchilik” diniy-eksterimistik tashkiloti tarixi va asoschisi?",
        "options": [
          "” Nurchilik ” ( turkcha-Nurculuk ) diniy-fundamental harakat. Xalq tilida “ Nurchilar ” degan nom bilan ham mashhur. Asoschisi Said Nursiy (1876-1960)...",
          "Tashkilot g‘oyalari. Harakat o‘z faoliyatida Said Nursiy tomonidan yozilgan “Risolai Nur” kulliyotida bayon etilgan g‘oyalarga asoslanadi...",
          "“Nurchilar” Turkiyaning amaldagi davlat tuzumi o‘rniga islom shariatiga muvofiq qonun-qoidalarni joriy qilish orqali g‘arazli maqsadlarga yetishni ko‘zlaydi...",
          "Turkiyada yuzaga kelgan. Asl maqsadi- mavjud hokimiyatga qarshi chiquvchi mutaassib kishilarni tarbiyalashdan iborat..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q126",
        "prompt": "“Salaf” so‘zi va salafiylar kimlar?",
        "options": [
          "”Salaf” so'zi arab tilida «avvalda o'tganlar, o'tmishda yashaganlar», “Salafiy” – “o'tmishda o'tgan ajdodlar yo'lidan boruvchi » ma'nolarini beradi...",
          "Islom adabiyotida “salaflar” so‘zi yoki dastlabki musulmonlar tushunchasi Rasululloh sollallohu alayhi va sallamning hijratlaridan keyin 400-yilgacha bo‘lgan davrda vafot etganlarni o‘z ichiga oladi...",
          "Salafiy” tushunchasini alohida atama va harakat sifatida Muhammad Abdo tomonidan, Rasululloh sollallohu alayhi vasallamdan 13 asrdan keyin paydo qilingan bo‘lib...",
          "Soxta “salafiylar” ning fikricha, Rasulullohning muborak qabrlarini ziyorat qilish bid'at va zalolatdir..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q127",
        "prompt": "2021-yil 2-iyulda Oʻzbekiston Respublikasi Prezidentining Farmoni asosida qabul qilingan 2021-2026-yillarga moʻljallangan ekstremizm va terrorizmga qarshi kurashish boʻyicha Oʻzbekiston Milliy strategiyasining maqsadi?",
        "options": [
          "Barcha javoblar to‘g’ri.B,C,D.",
          "ekstremizm va terrorizm g‘oyalari tarqalishining oldini olish maqsadida vatanparvarlik, an’anaviy qadriyatlar va bag‘rikenglik mafkurasini targ‘ib qilish;",
          "voyaga yetmaganlar va yoshlar orasida ekstremizm va terrorizm g‘oyalari tarqalishining oldini olish...",
          "Internet jahon axborot tarmog‘idan ekstremistik va terrorchilik maqsadlarda foydalanishga qarshi kurashish..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q128",
        "prompt": "Oʻzbekiston Respublikasining “Ekstremizmga qarshi kurashish toʻgʻrisida”gi Qonuni qachon qabul qilingan",
        "options": [
          "2018 yil 30 iyul sanasida",
          "1991 yil 14 iyun sanasida",
          "1998 yil 1 may sanasida",
          "2021 yil 6 iyul sanasida."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q129",
        "prompt": "” Terrorizm” deganda nimani tushunasiz?",
        "options": [
          "siyosiy, diniy, mafkuraviy va boshqa maqsadlarga erishish uchun shaxsning hayoti, sog‘lig‘iga xavf tug‘diruvchi, mol-mulk va boshqa moddiy obyektlarning yo‘q qilinishi... qaratilgan, O‘zbekiston Respublikasining Jinoyat kodeksida javobgarlik nazarda tutilgan zo‘rlik, zo‘rlik ishlatish bilan qo‘rqitish yoki boshqa jinoiy qilmishlar;",
          "2000 yil 12 dekabrda qabul qilingan O‘zbekiston Respublikasining “Terrorizmga qarshi kurash to‘g‘risida”gi qonuninini.",
          "terrorchi-terrorchilik faoliyatini amalga oshirishda ishtirok etayotgan, shuningdek terrorchilik faoliyatida ishtirok etish uchun xorijga chiqib ketishni yoxud O‘zbekiston Respublikasi hududi orqali harakatlanishni amalga oshirgan shaxs;",
          "terrorchilik tashkiloti — ikki yoki undan ortiq shaxsning yoki terrorchilik guruhlarining terrorchilik faoliyatini amalga oshirish uchun barqaror birlashuvi."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q130",
        "prompt": "O‘zbekiston musulmonlar idorasi qachon tashkil topgan?",
        "options": [
          "Oʻzbekiston musulmonlariga rahbarlik qiluvchi diniy tashkilot. 1943-yil 20-oktabrda Toshkentda boʻlib oʻtgan Oʻrta Osiyo va Qozogʻiston musulmonlari qurultoyida taʼsis etilgan. Toshkentdagi Baroqxon madrasasida joylashgan.",
          "Eshon Boboxon ibn Abdulmajidxon (1858–1957) – oʻzbek islom diniy arbobi... Oʻrta Osiyo va Qozogʻiston musulmonlari diniy boshqarmasi (SADUM) asoschilaridan biri...",
          "Oʻrta Osiyo va Qozogʻiston musulmonlari diniy boshqarmasi (oʻzbekcha: O‘rta Osiyo va Qozog‘iston musulmonlari diniy boshqarmasi , Sovet Ittifoqi tarkibiga kirgan...",
          "O‘zbekisto musulmonlar idorasi 1996 yildan."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q131",
        "prompt": "Xalqaro islom sivilizatsiya markazi qaysi shaharda joylashgan?",
        "options": [
          "Toshkentda Xastiimom majmuasida (Hazrati imom majmuasi)",
          "Hazrati Imom majmuasi imom Abu Bakr Muhammad ibn Ali Ismoil ash-Qaffol Shoshiy qabri atrofida bunyod etilgan.",
          "Imom Buxoriy nomidagi Toshkent islom instituti 1969-yil tashkil etilgan...",
          "Samarqand viloyatida, Payariq tumani, Xoʻja Ismoil shaharchasida."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q132",
        "prompt": "O‘zbekiston Respublikasi din ishlari bo‘yicha qo‘mitasi qachon tashkil topgan?",
        "options": [
          "O'zbekiston Respublikasi Prezidentining 1992-yil 7-mart kunidagi “O'zbekiston Respublikasi Din ishlari bo'yicha qo'mitani tashkil etish to'g'risida” gi Farmoniga muvofiq tashkil etilgan.",
          "mahalliy davlat hokimiyati organlari bilan birgalikda vijdon erkinligi va diniy tashkilotlar toʻgʻrisidagi qonun hujjatlariga muvofiq diniy masalalarni hal qilishda yagona siyosatni amalga oshiradi.",
          "davlat organlarining respublika hududida joylashgan diniy tashkilotlar bilan oʻzaro aloqasi va hamkorligini taʼminlaydi",
          "davlat siyosatida qonun hujjatlarida belgilangan tartibda roʻyxatdan oʻtkazilgan diniy tashkilotlar manfaatlarini aks ettiradi."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q133",
        "prompt": "Vijdon erkinligi va e’tiqod erkinligi tushunchasi ta’rifi qaysi bandda to‘g’ri berilgan?",
        "options": [
          "B va D javoblar to‘g’ri.",
          "bu fuqarolarning xohlagan dinga e’tiqod qilish yoki hech qaysi dinga e’tiqod qilmaslik bo‘yicha kafolatlangan konstitutsiyaviy huquqidir.",
          "O‘zbekiston Respublikasida ta’lim tizimi dindan ajratilgandir.",
          "shaxsning biror dinni ixtiyor etib, unga e’tiqod qilishi huquqinii anglatadi.. Lekin bu huquq vijdon erkinligi qoidalari ruxsat beradigan dahriy bo‘lish huquqini kafolatlamaydi."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q134",
        "prompt": "“Har bir inson fikr, vijdon va din erkinligi huquqiga egadir; bu huquq o'z dini yoki maslagini o‘zgartirish erkini...\" bu fikrlar qaysi hujjatda ifoddalangan?",
        "options": [
          "1948 yil 10 dekabrdagi “Inson huquqlari umumjahon deklaratsiyasida”gi 18 moddada.",
          "1995 yil 25 oktyabrdagi “bag’rikenglik tamoiyllari deklaratsiyasi”da 1.1 moddada.",
          "1966 yil 19 dekabrdagi “Fuqarolik va siyosiy huquqlar to‘g‘risidagi xalqaro pakt”da 18 modda.",
          "Ilohiy-samoviy kitoblarda."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q135",
        "prompt": "Davlat va din munosabatlarini tartibga solishning tiplari to‘g’ri, ketma-ket berilgan bandni toping?",
        "options": [
          "identifikatsion model,separatsion model,kooperatsion model.",
          "kooperatsion model, separatsion model, identifikatsion model.",
          "separatsion model, identifikatsion model, kooperatsion model.",
          "Barcha javoblar to‘g’ri berilgan."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q136",
        "prompt": "O‘zbekistonda davlatning din va diniy tashkilotlar bilan o‘zaro munosabatlarida qanday tamoiyllar amal qiladi",
        "options": [
          "dindorlarning diniy tuyg‘ularini hurmat qilish; diniy e’tiqodlarni fuqarolarning yoki ular uyushmalarining xususiy ishi deb tan olish...",
          "Hamma uchun vijdon erkinligi kafolatlanadi. Har bir inson xohlagan dinga e’tiqod qilish yoki hech qaysi dinga e’tiqod qilmaslik huquqiga ega...",
          "O‘zbekiston Respublikasi fuqarolari, dinga munosabatidan qat'i nazar, qonun oldida tengdir...",
          "Ateizm, Skeptitsizm, Antiklerikalizm, Deizm, Panteizm."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q137",
        "prompt": "2019 yildan buyon O‘zbekiston Suriya, Iroq va Afg‘onistondagi ayollar va bolalarni qaytarish bo‘yicha beshta «Mehr» operatsiyasini o‘tkazdi. Mojaroli hududlardan mamlakatga qacha kishi olib kelindi?",
        "options": [
          "531 nafar kishi",
          "93 nafar kishi",
          "501 nafar kishi",
          "1000 nafardan ortiq kishi"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q138",
        "prompt": "SHHTning Mintaqaviy aksilterror tuzilmasi (MATT) qaysi shaharda joylashgan va faoliyati qachondan boshlandi?",
        "options": [
          "Toshkent shahrida, 1-yanvar 2004-yildan faoliyat koʻrsata boshladi",
          "Ostana shahrida, 1-yanvar 2004-yildan faoliyat koʻrsata boshladi",
          "Dushanbe shahrida, 1-yanvar 2004-yildan faoliyat koʻrsata boshladi",
          "Ashxobod shahrida, 1-yanvar 2004-yildan faoliyat koʻrsata boshladi."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q139",
        "prompt": "Jaholatga qarshi ma’rifat bilan kurashish konsepsiyasining mohiyati qaysi bandda to‘g’ri berilgan?",
        "options": [
          "Fikrga qarshi fikr bilan kurashish, G’oyaga qarshi g’oya bilan kurashish, Jaholatga qarshi ma’rifat bilan kurashish.",
          "“Jaholatga qarshi – ma’rifat” shiori ostida Toshkent shahri Xasti Imom majmuasi hududida Islom sivilizatsiya markazi tashkil etilishi.",
          "“Bir bolaga yetti mahalla ham ota, ham ona” degan maqolning haqiqiy ma’nosini anglaydigan vaqt keldi...",
          "“O`z uyingni o`zing asra!” degan da’vatga bugun “O`z bolangni o`zing asra!” degan qo`shimcha kiritilishi."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q140",
        "prompt": "O‘zbekistonda “Vijdon erkinligi va diniy tashkilotlar to‘g‘risida”gi qonunning yangi tahriri qachon qabul qilindi?",
        "options": [
          "2021 yil 5 iyul",
          "1998 yil 1 may",
          "1991 yil 14 iyun",
          "1918 yil 20 yanvar."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q141",
        "prompt": "Yangi tahrirdagi “Vijdon erkinligi va diniy tashkilotlar to‘g‘risida”gi qonun nechta bob va moddadan iborat?",
        "options": [
          "6 bob va 35 modda",
          "6 bob va 23 modda",
          "6 bob va 30 modda",
          "26 bob 128 modda"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q142",
        "prompt": "O‘zbekiston Respublikasi Konstitutsiyasining qaysi moddalari vijdon erkinligi va diniy tashkilotlarga taalluqli ?",
        "options": [
          "35,71,75 moddalar",
          "4,18,41 moddalar",
          "63,70,76 moddalar",
          "89,98,117 moddalar"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q143",
        "prompt": "Diniy ta’lim muassasasi nima?",
        "options": [
          "muyyan konfessiyaga mansub bo‘lgan, diniy tashkilotning professional xizmatchilarini va ular uchun zarur bo‘lgan diniy xodimlarni tayyorlash uchun diniy tashkilotlarning O‘zbekiston Respublikasi bo‘yicha Markaziy boshqaruv organi tomonidan tashkil etilgan muassasa",
          "fuqarolarning belgilangan tartibda ro‘yxatdan o‘tkazilgan, birgalikda dinga e’tiqod qilish, ibodat qilish, diniy rasm-rusumlar va marosimlarni bajarish maqsadida tashkil etilgan ko‘ngilli birlashmasi...",
          "O‘zbekiston Respublikasining tegishli tumani (shahari) hududida doimiy yashayotgan, o‘n sakkiz yoshga to‘lgan, ellik nafardan kam bo‘lmagan O‘zbekiston Respublikasi fuqarolari tashabbusi bilan tashkil etilgan, faoliyatini Qoraqalpog‘iston Respublikasi, viloyatlar... hududida amalga oshiruvchi diniy tashkilot",
          "diniy ta’lim muassasalarida o‘quvchilarga ma’lum bir konfessiyaga oid diniy bilimlar berishga qaratilgan jarayon"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q144",
        "prompt": "Missionerlik ta’rifi to‘g‘ri berilgan qatorni toping ?",
        "options": [
          "aniq maqsadga qaratilgan mafkuraviy ta’sir o‘tkazish orqali shaxsni (bir guruh shaxslarni) o‘z diniga kiritish maqsadida unga (ularga) diniy qarashlarni majburan singdirishga va diniy ta’limotni tarqatishga doir faoliyat",
          "missionerlik faoliyatining bir konfessiyaga e’tiqod qiluvchilarni boshqa konfessiyalarga o‘tkazishga qaratilgan shakli",
          "diniy tashkilot sifatida ro‘yxatdan o‘tmasdan faoliyat ko‘rsatish, diniy tashkilot tomonidan faoliyatni o‘zi turgan joydan, shu jumladan ibodat qilinadigan binolardan... xususiy tartibda diniy ta’lim faoliyati bilan shug‘ullanish",
          "bir konfessiyaning mahalliy diniy tashkilotlari, shuningdek diniy ta’lim muassasalari faoliyatini muvofiqlashtirish maqsadida O‘zbekiston Respublikasining kamida sakkizta ma’muriy-hududiy birligida ro‘yxatdan o‘tib faoliyat ko‘rsatayotgan mahalliy diniy tashkilotlar tomonidan tashkil etilgan diniy tashkilot."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q145",
        "prompt": "Fuqarolarga vijdon erkinligini ta’minlashning ustuvorliklari nimalardan iborat ?",
        "options": [
          "teng shart-sharoit yaratish, diniy bag‘rikenglikni ta’minlash, dunyoviy davlat qurishni saqlab qolish, qonunchilikni ta’minlash, tahdid soluvchi diniy g‘oya va qarashlarga qarshi kurashish",
          "o‘zaro aralashmaslik, davlat konfessiyalarning tinch-totuv yashashiga kafil bo‘lishi, diniy tashkilotlar davlat vazifasini bajarmaydi, diniy ruhdagi siyosiy partiya va boshqa jamoat tashkilotlari tuzishga yo‘l qo‘ilmaydi",
          "qonun oldida tenglik, rasmiy hujjatlarda fuqaroning dinga munosabati ko‘rsatilmaydi, diniy e’tiqodi bo‘yicha biror ustunlik yoki cheklov belgilashga yo‘l qo‘yilmaydi",
          "ta’lim tizimi dindan ajratilgan, har kim diniy ta’lim muassasalarida professional diniy ta’lim olish huquqiga ega..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q146",
        "prompt": "Diniy rasm-rusumlar va marosimlar qaerlarda o‘tkazilishi belgilangan?",
        "options": [
          "ibodat qilinadigan binoda yoki diniy tashkilot joylashgan joyda, dafn etish joylarida, ziyoratgohlarda, fuqaroning xohishiga ko‘ra uyda, qamoq va jazoni ijro etish, kasalxona va boshqa joylarda...",
          "diniy tashkilotlar dinga e’tiqod qiluvchilardan majburiy pul yig‘imlari va to‘lovlar undirishga... haqli emas",
          "O‘zbekiston Respublikasi hududida diniy mazmundagi materiallarni tayyorlash, olib kirish va tarqatish jamiyatda konfessiyalararo totuvlik hamda diniy bag‘rikenglik buzilishiga olib keladigan... materiallar tarqalishining oldini olish maqsadida dinshunoslik ekspertizasining ijobiy xulosasi olinganidan keyin amalga oshiriladi",
          "tegishli diniy professional ta’limga ega bo‘lgan shaxs diniy tashkilotning rahbari bo‘lishi mumkin..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q147",
        "prompt": "”Vijdon erkinligi va diniy tashkilotlar to‘g‘risida”gi qonun ijrosini ta’minlash va mohiyatini tushuntirishni qaysi organlar ta’minlaydi?",
        "options": [
          "Din ishlari bo‘yicha qo‘mita va Adliya vazirligi",
          "O‘zbekiston musulmonlar idorasi va uning viloyat vakilliklari",
          "Viloyat va tuman hokimiyati",
          "Fuqarolarni o‘zini o‘zi boshqarish organlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q148",
        "prompt": "Diniy tashkilotlarning qanday huquqi va majburiyatlari bor?",
        "options": [
          "B va D javoblar to‘g‘ri.",
          "mol-mulk va undan foydalanish, xayriya faoliyatini amalga oshirish, diniy tadbirlar o‘tkazish, tadbirkorlik tuzilmasini tuzish...",
          "diniy tashkilotlar davlat organlarining g‘ayriqonuniy qarorlari, ular mansabdor shaxslarining harakatlari ustidan bo‘ysunuv tartibida yuqori turuvchi organga yoki sudga shikoyat qilish huquqiga ega",
          "O‘zbekiston Respublikasi Konstitutsiyasi, qonunlariga va o‘z ustaviga rioya qilish,ibodat qilinadigan va o‘tkaziladigan joylarda qo‘lay shart-sharoit yaratish..."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q149",
        "prompt": "Diniy tashkilotni ro‘yxatdan o‘tkazish muddati qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "murojaatdan so‘ng bir oyda",
          "murojaatdan so‘ng o‘n besh kunda",
          "uch ish kunida",
          "olti oygacha muddatda."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-3-q150",
        "prompt": "Fundametalizm tushunchasi... va diniy fundamentalizm ma’nosi...",
        "options": [
          "lat.”asos”, ijtimoiy hodisaning dastlabki ko’rinishi, din vujudga kelgan ilk davrga qaytish, barha muammolarni shu yo’l bilan hal qilish mumkin degan ta’limot",
          "1910 yil Protestantlik oqimi tarkibida paydo bo’ldi",
          "Bibliyaning mutloq mukmmalligiga ishonishni mustahkamlash",
          "Barcha dinlardagi diniy-konservativ ruhdagi yo’nalish."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "din-4",
    "title": "4-qism: Xalqaro diniy tashkilotlar va mutanosiblik (151-200 savollar)",
    "description": "Dinshunoslik fanidan yakuniy nazorat testlari",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "din-4-q151",
        "prompt": "Radikalizm tushunchasi ma’nosi...",
        "options": [
          "lat.”radix”-ildiz, siyosiy tuzum va ijtimoiy institutlarni tubdan oʻzgartirishga qaratilgan gʻoya va harakatlarni ifodalovchi siyosiy yoki diniy oqim",
          "Muxoliflarga nisbatan qoʻllaniladigan termin",
          "So’l siyosiy partiyalarga nisbatan ishlatiladigan co’z",
          "Eksterimizmning nazariy manbai."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q152",
        "prompt": "Aqidaparastlik tushunchasini izohlang ...",
        "options": [
          "arab.” aqida ”,”ishonch”,”Biron narsani ikkinchisiga bog’lash”,biron bir g’oyani mutlaqlashtirish",
          "Ko’r-ko’rona qo’llash",
          "Ta’sir doirasini kengaytirish",
          "Dinning mohiyatini buzib talqin qilish."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q153",
        "prompt": "Eksterimizm...diniy eksterimizm-chi?",
        "options": [
          "lat.”aql bovar qilmas darajada”,”haddan oshish”, jamiyat uchun an’anaviy bo’lgan diniy qadriyatlar va aqidalarni rad etish",
          "Soxta dunyoqarash",
          "Qonunlarga zid g’oyalarni targ’ib qilish",
          "Radikal qarashlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q154",
        "prompt": "Mutaassiblik(fanatizm)...",
        "options": [
          "frantsuzcha “ibodat”,”o’zgacha g’oyalarga murosasiz munosabatda bo’lish,boshqa mazhablarni butunlay rad etish,”qattiq ishonish”",
          "Eksterimizmning ildizi",
          "Terrorizmning zamini",
          "O’ziga xos diniy dunyoqarash."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q155",
        "prompt": "Terrorizm va diniy terrorizm mohiyati?",
        "options": [
          "lat.”qo’rqitish”,”dahshatga solish”, siyosiy, diniy, mafkuraviy va boshqa maqsadlarga erishish uchun shaxsning hayoti, sog‘lig‘iga xavf tug‘diruvchi, mol-mulk va boshqa moddiy obyektlarning yo‘q qilinishi xavfini keltirib chiqaruvchi... jinoiy qilmishlar;",
          "oldindan til biriktirib terrorchilik harakatini sodir etgan, bunday harakatga tayyorgarlik ko‘rgan yoki uni sodir etishga suiqasd qilgan shaxslar guruhi;",
          "lat.”qo’rqitish”,”dahshatga solish”, terrorchilik faoliyatini amalga oshirishda ishtirok etayotgan, shuningdek terrorchilik faoliyatida ishtirok etish uchun xorijga chiqib ketishni yoxud O‘zbekiston Respublikasi hududi orqali harakatlanishni amalga oshirgan shaxs;",
          "terrorchilik harakatini uyushtirish, rejalashtirish, tayyorlash va amalga oshirishdan, terrorchilik harakatiga undashdan, terrorchilik tashkilotini tuzishdan... iborat bo‘lgan faoliyat;"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q156",
        "prompt": "Al-Qoida lug’aviy ma’nosi?",
        "options": [
          "arab.”asos”, Usoma bin Muhammad bin Avad bin Lodin Saudiya Arabistonilik harbiy islomchi boʻlgan. Al-Qoida tashkilotini tuzganlikda gumon qilinadi.",
          "Maktab al-xidamat”(Pokiston) buyurosi a’zolari",
          "1992 yil Xartum(Sudan)dagi tuzilgan tashkilot",
          "Afg’onistonda Sovet Armiyasiga qarshi kurashgan ko’ngillilar."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q157",
        "prompt": "Inson huquqlari to’g’risidagi xalqaro billga qaysi hujjatlar kiradi?",
        "options": [
          "Inson huquqlari Umumjahon Deklaratsiyasi, Iqtisodiy, ijtimoiy va madaniy huquqlar to’g’risidagi xalqaro Pakt, Fuqarolik va siyosiy huquqlar to’g’risidagi xalqaro Pakt va xususiy shikoyatlar hamda o’lim jazosini bekor qilish to’g’risidagi ikkita bayonnoma",
          "Din yoki etiqod asosida toqatsizlik va kamsitishlarning har qanday shakllarini yo’qotish to’g’risidagi Deklaratsiya va YUNESKOning “Ta’lim sohasida kamsitish bilan kurash to’g’risidagi Konventsiya",
          "”Bola huquqlari to’g’risidagi Konventsiya” va Inson huquqlari va asosiy erkinliklarini himoya qilish bo’yicha Evropa Konventsiyasi”",
          "Evropada xavfsizlik va hamkorlik bo’yicha Yakunlovchi Akt” va Evropada xavfsizlik va hamkorlik bo’yicha Kengash ishtirokchilari bo’lgan davlatlarning Vena uchrashuvi Yakunlovchi hujjati”"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q158",
        "prompt": "BMTning terrorizmning oldini olishga va unga qarshi kurashga qaratilgan nechta hujjati bor?",
        "options": [
          "13 ta (11 Konventsiya va 2 ta Protokol)",
          "7 ta xalqaro shartnoma",
          "24 ta",
          "15 ta (11 Konventsiya va 4 ta Protokol)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q159",
        "prompt": "BMTning Global antiterror strategiyasi qachon qabul qilingan?",
        "options": [
          "2006 yil",
          "1991 yil",
          "2011 yil",
          "1975 yil"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q160",
        "prompt": "BMTning Global antiterror strategiyasining asosiy yo’nalishlari qaysi qatorda to’g’ri berilgan?",
        "options": [
          "terrorizmni keltirib chiqaruvchi shart-sharoitlarga qarshi kurash, bevosita terrorizmga qarshi kurash, BMT a'zo davlatlarining terrorizmga qarshi kurashdagi salohiyatini oshrish, inson huquqlari va erkinliklarini himoya qilish",
          "Davlat chegaralarini buzish, xorijlik yo’riqchilarning qatnashishi, maxsus lagerlarda tayorgarlik ko’rish, yollanma shaxslar bo’lgan eksterimistik guruhlar sodir etishi",
          "Mintaqaviy mojarolar, agressiv millatchilik, korruptsiya va jinoyatchilik, ekologik va yadroviy qurol muammosi, mahalliychilik va urug’-aymoqchilik",
          "Etnik va millatlararo qarama-qarshiliklar, diniy eksterimizm va fundamentalizm,aqidaparastlik,terrorizm,mutaassiblik"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q161",
        "prompt": "O’zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev BMTning 2023 yil 20-sentyabr 78-sessiyasidagi nutqida qator masalalarni ilgari surdi. Shu jumladan terrorizmga oid...",
        "options": [
          "Birlashgan Millatlar Tashkiloti Bosh kotibi tomonidan ilgari surilgan “Ish o‘rinlarini yaratish va ijtimoiy himoya global akseleratori” borasidagi tashabbusi doirasida tajriba almashish uchun 2024 yili BMT shafeligida “Ijtimoiy himoya: barqaror taraqqiyot sari yo‘l” butunjahon konferensiyasi hamda Osiyo xotin-qizlari forumini O‘zbekistonda o‘tkazish taklif etdi.",
          "5 marta “Mehr” insonparvarlik missiyasi o’tkazib, 530 nafar fuqaro (ayol va bolalar)yurtimizga qaytarildi",
          "Jahon miqyosida dinlararo bag‘rikenglik va hamjihatlik g‘oyalarini keng targ‘ib etish maqsadida O‘zbekistonda YUNESKO shafeligida Dinlararo muloqot va bag‘rikenglik xalqaro markazini tashkil etishni taklif qildi.",
          "Majburiy va bolalar mehnatiga qarshi kurashni butun dunyo miqyosida kuchaytirish zarurligi aytildi."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q162",
        "prompt": "Shanxay Hamkorlik Tashkiloti(ShHT) qachon tuzildi va a’zolari berilgan qatorni to’g’ri toping?",
        "options": [
          "2001 yil 15 iyun, 9 davlat, Qozog’iston, Xitoy, Qirg’iziston, Rossiya, Tojikiston, O’zbekiston, Hindiston, Pokiston, Eron",
          "2001 yil 28 sentyabr, AQSH, Xitoy, Rossiya, Frantsiya, Buyuk Britaniya",
          "1948 yil 10 dekabr, Xitoy, Yaponiya, Koreya, Vetnam, Indoneziya, Malayziya",
          "2001yil 4 dekabr, Xitoy, Rossiya, Qozog’iston, Qirg’ziston, O’zbekiston, Tojikiston."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q163",
        "prompt": "BMT, ShHT, EXHT va MDH xalqaro tashkilotlari tuzilmasi tarkibidagi aksilterror qo’mitalari (idoralar) qaysi qatorda to’g’ri berilgan?",
        "options": [
          "BMT aksilterroristik qo’mitasi, EXHT kotibiyatining aksilterroristik tizimi, ShHT mintaqaviy aksilterroristik tuzulmasi, MDH aksilterroristik markazi, Interpol",
          "Xavfsizlik Kengashi, Bosh Assambleya, Interpol",
          "Xalqaro sud, Interpol",
          "BMT, ShHT, EXHT, MDH, Interpol tarkibida aksilterroristik idoralar mavjud emas."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q164",
        "prompt": "O’zbekiston Respublikasi qonuni “Terrorizmga qarshi kurash to’g’risida”gi qachon qabul qilingan?",
        "options": [
          "2000 yil 15 dekabr",
          "2021 yil 5 iyul",
          "1991 yil 14 iyun",
          "1998 yil 1 may"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q165",
        "prompt": "Eksterimistik va terroristik guruhlar o’z maqsadlariga erishish uchun qaysi omillardan foydalanadi?",
        "options": [
          "Asosiy ichki va tashqi omillardan",
          "davlatlardagi ma’naviy devalvatsiyadan",
          "Savodsizlikdan",
          "Homiylik qiluvchi kuchlardan"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q166",
        "prompt": "Terroristik harakatlarning qanday ko’rinishlari bor?",
        "options": [
          "G’oyaviy, etnik, diniy, jinoiy, iqtisodiy, individual, axborot, siyosiy terrorizmlar",
          "Nimfomaniya va Saddizm",
          "Kosmopolitizm va animalizm",
          "Ratsional va irratsional"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q167",
        "prompt": "Jaholatga qarshi kurashning metodologik asosi nima deb bilasiz?",
        "options": [
          "Ma’rifat",
          "Jaholat",
          "Aql",
          "Tafakkur"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q168",
        "prompt": "2021-2026 yillarga mo’ljallangan eksterimizm va terrorizmga qarshi kurashish bo’yicha O’zbekiston Respublikasi milliy strategiyasi qachon qabul qilindi?",
        "options": [
          "2021 yil 1iyul",
          "2020 yil 1 iyul",
          "1992 yil 8 dekabr",
          "1991 yil 14 iyun"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q169",
        "prompt": "Diniy katarsis(poklanish) nima va bu termin dinshunoslikda qanday talqin qilinadi?",
        "options": [
          "Katarsis (yunoncha so‘z “katharsis”- poklanish) - ruhning hissiy va jismoniy nopokliklardan tozalanishi. Aristotel \"Poetika\" asarida bu terminni ishlatgan. Din uni inson ruhining axloqsizliklardan poklanishi deb talqin qiladi",
          "Katarsis (yunoncha so‘z “katharsis”- poklanish) tananing og'riqli kasallikdan xalos bo'lishi yoki tiklanishi",
          "Katarsis (yunoncha so‘z “katharsis”- poklanish) gipnoz yo‘li bilan inson ruhiga ta’sir o‘tkazish",
          "Katarsis (yunoncha so‘z “katharsis”- poklanish) zavq olish."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q170",
        "prompt": "Sekulyarizm (lat.secular”, “secularus”) zo‘zi ma’nosi qaysi bandda to‘g’ri berilgan?",
        "options": [
          "Dunyoviylik",
          "Dahriylik",
          "Ateizm",
          "Eksterimizm"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q171",
        "prompt": "Resekulyarizatsiya termini ma’nosi to‘g’ri berilgan qatorni toping?",
        "options": [
          "Dahriylik va ateizm hukm surgan davrga barham berish",
          "Davlat va din o‘rtasidagi muloqot",
          "Jamiyatning marginallashuvi",
          "”Xalifalik”davlatini tuzish vasvasasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q172",
        "prompt": "2024 yil O‘zbekistonda faoliyat ko‘rsatayotgan o‘rta islom bilim yurt(madrasa)lari soni to‘g’ri berilgan javobni belgilang?",
        "options": [
          "10",
          "12",
          "14",
          "11"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q173",
        "prompt": "O‘zbekistonda islom oliy o‘quv yurtlari nechta?",
        "options": [
          "4 ta, Imom Buxoriy nomidagi Toshkent islom instituti (1969 y), Mir Arab oliy madrasasi (2017 y) , Hadis ilmi oliy maktabi (2018 y) Imom Termiziy nomidagi islom instituti (2024 y)",
          "1 ta, O‘zbekiston xalqaro islom akademiyasi(2018 y)",
          "1 ta, Toshkent islom universiteti (1999 y)",
          "1 ta , Al-Azhar (970-972 y),Qohira."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q174",
        "prompt": "O‘zbekistonda faoliyat ko‘rsatayotgan xalqaro islom ilmiy-tadqiqot markazlari nechta?",
        "options": [
          "4 ta, Islom sivilizatsiyasi markazi, Imom Buxoriy xalqaro ilmiy-tadqiqot, Imom Moturidiy xalqaro ilmiy-tadqiqot, Imom Termiziy xalqaro ilmiy-tadqiqot markazlari",
          "5 ta, Hadis va Kalom (Samarqand), Aqida(Qarshi), Tasavvuf(Buxoro), Huquq(Farg’ona) ilmiy maktablari",
          "5 ta, Malaka oshirish markazi(Toshkent),malaka oshirish markazi mintaqaviy filiali(Nukus)...",
          "197 ta noislomiy diniy tashkilot,(shuning 179 tasi xristian, 8 tasi yahudiy...)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q175",
        "prompt": "“Tavba” kitobi muallifi kim?",
        "options": [
          "Abu Homid G’azzoliy",
          "imom Buxoriy",
          "imom Termiziy",
          "Alisher Navoiy"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q176",
        "prompt": "“Ihyou ulumid-din” (“Din ilmlarini jonlantirish”) asari muallifi…?",
        "options": [
          "imom, “Hujjatul-Islom” Muhammad ibn Muhammad ibn Ahmad Abu Homid At-Tusiy Al-G’azzoliy",
          "Abu Nasr Muhammad ibn Muhammad ibn Uzlugʻ Tarxon Forobiy",
          "Mavlono Jaloliddin Rumiy (30-sentyabr 1207, Balx, Afgʻoniston – 17-dekabr 1273, Koʻniya, Turkiya)",
          "Nikolay Aleksandrovich Berdyaev(1874-1948),”Din va hurfikrlilik” asari."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q177",
        "prompt": "“Tavba” nechta bosqichni o‘z ichiga oladi (imom G’azzoliyda)…?",
        "options": [
          "3 ta,ilm,hol,fe’l",
          "2 ta,ilm va hol",
          "1 ta ilm",
          "2 ta,hol va fe’l."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q178",
        "prompt": "Imom Ismoil al-Buxoriyning “Al-Adab al-mufrad”(Adab durdonalari) asari nechta hadisni o‘z ichiga olgan?",
        "options": [
          "1322 ta",
          "600 ta",
          "644 bobni",
          "Kutub sitta(olti kitob)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q179",
        "prompt": "“Mukoshafatul qulub”( Qalblar kashfiyoti) asari muallifi…?",
        "options": [
          "Gʻazzoliy, Abu Hamid Muhammad ibn Muhammad al-Gʻazzoliy [1058 - Tus (Eron) -1111]",
          "Shayx Muhammad Sodiq Muhammad Yusuf ibn Muhammad Ali (1952-2015)",
          "Husayn Voiz Koshifiy (taxallusi; asl ismi Kamoliddin;laqabi Voiz; tax. 1442/46...)",
          "Abu Iso Muhammad ibn Iso ibn Savra ibn Muso ibn Zahhoq Sullamiy Zariyr Bug‘iy Termiziy,(824-892)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q180",
        "prompt": "“Muxtasar islom tarixi” risolasi muallifi…?",
        "options": [
          "Abdurauf Fitrat(risola)",
          "Shayx Muhammad Sodiq Muhammad Yusuf(1-2 kitob)",
          "Mahmudxo‘ja Behbudiy(darslik)",
          "Abdulla Avloniy(asar)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q181",
        "prompt": "”Insonlarning karami dinidadur, muruvvati aqlindadur, hasabi axloqindadur” Rasuli akram nabiyyi muhtaram sallolohu alayhi vassalam fikri kimning qaysi asarida keltirlgan?",
        "options": [
          "Abdulla Avloniy,”Turkiy guliston yoxud axloq”asarida",
          "Shayx Muhammad Sodiq Muhammad Yusuf,”Islom tarixi” asarida",
          "Mahmudxo‘ja Behbudiyning “Padarkush” dramasida",
          "Imom Buxoriyning „Al-jomeʼ as-sahih”asarida"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q182",
        "prompt": "Fransuzcha “qayta tug’ilish” degan ma’noni anglatuvchi so‘zni toping?",
        "options": [
          "Voskres",
          "Parlament",
          "Konstitutsiya",
          "Renessans"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q183",
        "prompt": "Imom Termiziyning 1200 yilligini keng nishonlash haqidagi Prezident qarori qachon qabul qilingan edi?",
        "options": [
          "19.08.2024 yil",
          "19.08.2023 yil",
          "oktyabr 2024 yil",
          "noyabr 2024 yil"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q184",
        "prompt": "“Iqrornoma”asari muallifi…?",
        "options": [
          "Lev Nikolayevich Tolstoy(1880 y.)",
          "Nikolay Aleksandrovich Berdyaev",
          "A.S.Pushkin",
          "muallifi noma’lum"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q185",
        "prompt": "“Olov olovni o‘chirmagani kabi, yovuzlik bilan yovuzlikni yo‘qotib bo‘lmaydi” va “Xudoni qidirib yashang, shunda Xudosiz hayot bo‘lmaydi” iqtiboslar muallifi…?",
        "options": [
          "Lev Nikolayevich Tolstoy",
          "Nikolay Aleksandrovich Berdyaev",
          "A.S.Pushkin",
          "Mixail Yuryevich Lermontov"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q186",
        "prompt": "Islom dini qadriyatlarining talqini qo‘yidagi O‘zbekiston diniy ulamolarining qaysi birining asarida batafsil o‘rganilgan?",
        "options": [
          "Shayx Muhammad Sodiq Muhammad Yusuf,”Baxtiyor oila”",
          "Usmonxon Alimov,”Oilada farzand tarbiyasi”",
          "Nuriddin Xoliqnazarov,”Yoshlarga nasihatim”",
          "Tohir Malik,”Oxirat”"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q187",
        "prompt": "“Taloq” nima?",
        "options": [
          "arab. -qoʻyib yubormoq, ajralmoq -shariatga koʻra nikohning bekor qilinishi(taloq)",
          "arabcha soʻzdan olingan boʻlib tarjimasi: “birlashish”(nikoh)",
          "arab. -maʼlum vaqt, ayollar uchun belgilangan muxlat - shariat boʻyicha eri oʻlgan yoki eridan ajrashgan xotinlar boshqa erga chiqishi uchun oʻtishi shart boʻlgan muhlat(idda)",
          "er o‘zining halol bo‘lgan ayolini, o‘ziga abadiy mahram bo‘lgan ayollarning qarashi joiz bo‘lmagan oila a’zosiga o‘xshatishidir(zihor)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q188",
        "prompt": "“Qohira Deklaratsiyasi” qachon qabul qilingan?",
        "options": [
          "1943 yil 22-noyabrda Misrda(Qohirada),AQSh,Buyuk Britaniya, cobiq SSSR",
          "1943 yil 4-6 dekabr Misrda",
          "1948 yil 10 dekabr",
          "1990 yil 20 iyun"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q189",
        "prompt": "Islom hamkorlik tashkiloti (IHT) dunyodagi nufuzli xalqaro tashkilotlardan biri va eng yirik xalqaro islom tashkilotidir.Bu tashkilot qachon paydo bo‘lgan?",
        "options": [
          "IHT 1969 yil 25 sentyabrda Marokash poytaxti Robotda o'tkazilgan islom davlatlari rahbarlarining birinchi yig'ilishida tashkil etilgan.",
          "2011-yil 28-iyungacha Islom konferensiyasi tashkiloti deb nomlangan.",
          "Islom olami ta’lim, fan va madaniyat tashkiloti (inglizcha: ICESCO'' ) 1981-yil 28-25-yanvar kunlari Muqaddas Makka shahrida bo‘lib o‘tgan uchinchi islom anjumanida tashkil etilgan.",
          "Islom Tarraqqiyoti Banki(ITB) 1974 yil tashkil topgan.Jidda shahrida."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q190",
        "prompt": "Arab davlatlari ligasining maqsadi?",
        "options": [
          "aʼzo davlatlar oʻrtasidagi munosabatlarni yaqinlashtirish va ular oʻrtasidagi hamkorlikni muvofiqlashtirish, ularning mustaqilligi va suverenitetini himoya qilish va arab davlatlarining ishlari va manfaatlarini umumiy tarzda koʻrib chiqish hisoblanadi.",
          "arab ligasi rasmiy ravishda Arab davlatlari uyushmasi Arab dunyosidagi mintaqaviy tashkilotdir. Arab Ligasi 1945-yil 22-martda Qohirada tuzilgan...",
          "Islom olami uyushmasi xalqaro islom tashkiloti, ruxoniylarning 1962 yil may oyida Makkada boʻlib oʻtgan konferensiyasida asos solingan...",
          "Musulmonlar birligini taʼminlash va islom aqidalariga asoslangan tuzum oʻrnatish."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q191",
        "prompt": "Har yili Arab olami,Afrika va Osiyodan uchta shahar islom madaniyati poytaxti sifatida tanlab olinadi.O‘zbekistonda islom madaniyati poytaxti maqomini olgan shaharlar qaysi bandda to‘g’ri berilgan?",
        "options": [
          "Toshkent(2007),Buxoro(2020),Samarqand(2025)",
          "Qohira(2020),Tunis(2019),Quddus(2014)",
          "Lusayl,Susha(2024),Bhagavan bandargohi va Bissan(Gveniya)",
          "Xiva(1990) Shahrisabz(2002)"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q192",
        "prompt": "Toshkent islom institutida oliy diniy o‘quv yurtidan keyingi ta’lim- islom fanlari bo‘yicha falsafa doktori (PhD) ilmiy darajasini berishni nazarda tutuvchi tayanch doktorantura hamda islom fanlari bo‘yicha fan doktori (Doctor of Science) ilmiy darajasini berishni nazarda tutuvchi doktorantura tizimi qachon tashkil etildi?",
        "options": [
          "2017 yil 14 sentabr.",
          "2017 yil 2 noyabr",
          ".2017 yil 18 oktyabr",
          "2017 yil 6 noyabr"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q193",
        "prompt": "”Haj” so‘zining lug’aviy va istilohdagi ma’nosi?",
        "options": [
          "”ulug’ narsani qasd qilish” va “maxsus makonda,ma’lum vaqtda,maxsus amallar bilan maxsus ibodatni ado etishdir”.",
          "”Ziyorat”,Baytullohning maxsus ziyoratidir.Baytullohni tavob qilib,Safo va Marva oralig’ida etti marta sa’y qilishdir.",
          "Safo va Marva tepaliklari orasida chopish, umra va haj marosimlari shartlaridan biri.",
          "“ Muzdalifada ziyoratchilar shaytonni toshbo'ron qilish uchun toshlar yig'ishi”"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q194",
        "prompt": "Islom dinida diniylik va dunyoviylik qanday tafsiflanadi?",
        "options": [
          "Diniylik inson qalbiga bog’liq hissiyot.Dunyoviylik esa dinni siyosiy jarayonlardan ajratish va diniylikni barcha uchun asos qilib olmaslik tamoyili turadi.",
          "”Dinda(dinga) zo‘rlash yo‘q”(Qur‘on,Baqara surasi 256-oyat).",
          "Diniylik va dunyoviylik dunyo va inson hayotining mohiyatiga turlicha qarash usullaridir.",
          "”Ey Rabbimiz, bizga bu dunyoda ham yaxshilik ato etgin, oxiratda ham yaxshilik(ato etgin) va bizni do‘zax azobidan asragin” (Qur‘on,Baqara surasi 201-oyat)."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q195",
        "prompt": "“Ajdodlarimiz o‘z vaqtida yuksak ma’naviyati, boy ilmiy merosi, ijodi bilan butun dunyoga ustozlik qilganlar. Ular boshqalarga ergashmagan, boshqalarni o‘z ortidan ergashtirganlar. Shuning uchun din peshvolari ham bugun ergashuvchi emas, ergashtiruvchi bo‘lishlari lozim”. Bu fikrlar kimning asaridan olingan?",
        "options": [
          "Shavkat Mirziyoyev asaridan",
          "Islom Karimov asaridan",
          "Nuriddin Xoliqnazarov asaridan",
          "Muhammad Sodiq Muhammad Yusuf asaridan"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q196",
        "prompt": "O‘zbekiston Respublikasi Prezidenti Sh.Mirziyoev asarlarida diniy islohotlarning yoritilishining o‘ziga xos xususiyatlari?",
        "options": [
          "Barcha javoblar to‘gri.",
          "Din masalasini- ma’rifat bilan bog‘lab tahlil qildi;",
          "Oila, maktab, mahalla va jamiyatda-sog‘lom turmush tarzini shakllantirishda dinni muhim ma’naviy omil sifatida e’tirof etdi;",
          "diniy va dunyoviy ilmlar uyg‘unligi yangi O‘zbekiston tamoyiliga aylandi;"
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q197",
        "prompt": "O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyevning 2024 yil nashr etilgan kitobi nomi?",
        "options": [
          "Hozirgi zamon va yangi O‘zbekiston",
          "Yangi O‘zbekiston strategiyasi",
          "Jamiyat hayotining tanasi iqtisodiyot bo‘lsa, uning joni va ruhi ma’naviyatdir.",
          "2024 yil kitobi chop etilmagan."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q198",
        "prompt": "O‘zbekistonda dindorlar va diniy tashkilotlar qaysi qonunga rioya qilishlari lozim?",
        "options": [
          "O‘zbekiston Respublikasi Konstitutsiyasi va “Vijdon erkinligi va diniy tashkilotlar to‘g’risida”gi qonunga;",
          "O‘zbekiston musulmonlar idorasi nizom va fatvolariga",
          "Islom olami uyushmasi nizom va fatvolariga",
          "Inson huquqlari umumjahon Deklaratsiyasiga."
        ],
        "correctIndex": 0
      },
      {
        "id": "din-4-q199",
        "prompt": "Hozirga qadar Qur’oni Karimning o‘zbek tiliga ma’nolar tarjimasi necha marta nechta muallif tomonidan amalga oshirildi?",
        "options": [
          "7 marta 7 nafar muallif tomonidan",
          "1 marta 1 nafar muallif tomonidan",
          "7 marta 10 nafar muallif tomonidan",
          "1 marta 2 nafar muallif tomonidan."
        ],
        "correctIndex": 0
      }
    ]
  }
,
  
    ],
  },
  {
    id: 'falsafa',
    title: 'Falsafa',
    tagline: 'Falsafa',
    topics: [

  {
    "id": "fal-1",
    "title": "1-qism: Falsafa faniga kirish va ontologiya (1-50 savollar)",
    "description": "Falsafa",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "fal-1-q1",
        "prompt": "«Falsafa» so‘zining lug‘aviy ma’nosi to‘g‘ri ko‘rsatilgan javobni belgilang?",
        "options": [
          "Yunoncha, phileo – sevaman va sophia – donolik",
          "Yunoncha, phileo – sevaman va sophia – bilish",
          "Lotincha,phileo – sevaman va sophia – donishmandlik",
          "Lotincha, phileo – sevaman va sophia – donolik"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q2",
        "prompt": "Tarixda o‘zini birinchi faylasuf deb atagan kishi kim?",
        "options": [
          "Pifagor",
          "Diogen Laertskiy",
          "Aristotel",
          "Abu Nasr Forobiy"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q3",
        "prompt": "Falsafa fanining tadqiqot ob’ekti va predmeti nima?",
        "options": [
          "Borliq, bir butun borliq ravojlanishining eng umumiy qonunlari",
          "Inson ongi va ma’naviyati, ularning rivojlanish qonunlari.",
          "Inson va jamiyat, jamiyat rivojlanishining eng umumiy qonunlari.",
          "Tabiat va jamiyat, ularning rivojlanish qonunlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q4",
        "prompt": "Dunyoqarashning qanday tarixiy shakllari bor?",
        "options": [
          "mifologik, diniy, falsafiy",
          "dunyoni sezish, dunyoni idrok etish, dunyoni tushunish",
          "ijtimoiy, gnoseologik, psixologik",
          "totemizm, fetishizm, animizm, magiya"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q5",
        "prompt": "Dunyoqarashga berilgan ta’rif qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "inson o‘zligini va dunyoni zaruriy ravishda anglashi, tushunishi, bilishi hamda baholashi natijasida yuzaga kelgan bilimlari asosida shakllangan tasavvurlari va nazariy xulosalari tizimidir",
          "bilish, qadriyatlarga munosabat va xulq-atvorni belgilash funksiyalari",
          "bu turli xalqlarning dunyoning kelib chiqishi, tabiat hodisalari, fantastik mavjudotlar, xudolar va qahramonlarning ishlari haqidagi tasavvurini ifodalovchi muayyan tarzda tizimga solingan dunyoqarashdir",
          "bu kishilarning tabiiy va ijtimoiy hodisalarni ilohiy kuchlar asosida aks ettiruvchi qarash va tasavvurlari hamda ana shu ilohiy kuchlarga bo‘lgan ishonch va e’tiqodlaridir"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q6",
        "prompt": "Falsafa fani funksiyalari bu....",
        "options": [
          "dunyoqarash, bilish, metodologik, integrativ, madaniy, aksiologik, axloqiy, tarbiyaviy",
          "antropologik materializm, vulgar materializm, dialektik materializm",
          "deizm, panteizm, idealizm, optimizm, agnostitsizm",
          "neoklassik va antiklassik oqim"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q7",
        "prompt": "”Falsafa” yoki “filosofiya” so‘zining sharq ijtimoiy tafakkuridagi shakli",
        "options": [
          "«hikmatni qadrlash",
          "«donishmandlikni sevish»",
          "”olam sirlarini bilish”",
          "“umr mazmuni”"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q8",
        "prompt": "Qadimgi Hind falsafiy maktablarini ko‘rsating.",
        "options": [
          "Nyaya, Sankxiya, Mimansa",
          "Milet, Yoga, Mimansa",
          "Chorvaka, Lokayata, Daosizm",
          "Chorvaka, Mazdakizm, Daosizm"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q9",
        "prompt": "YUNESKO tomonidan qachondan buyon “Jahon falsafa kunlari” nishonlanadi.",
        "options": [
          "2002 yildan, har yili noyabr oyining uchinchi payshanba kuni",
          "2004 yildan, har yili dekabr oyining uchinchi payshanba kuni",
          "2008 yildan, har yili yanvar oyining uchinchi payshanba kuni",
          "“Jahon falsafa kunlari” nishonlanadigan kun mavjud emas."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q10",
        "prompt": "Naqshbandiyning ma’naviy ustozi...",
        "options": [
          "Hamadoniy",
          "Yassaviy.",
          "Fag‘naviy.",
          "G‘azzoliy."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q11",
        "prompt": "Forobiyning eng yirik fundamental asari...",
        "options": [
          "Fozil odamlar shahri haqida risola.",
          "O‘tmish xalqlardan qolgan yodgorliklar.",
          "Aql haqida risola.",
          "Davlat haqida risola."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q12",
        "prompt": "Platonning g‘oyalar haqidagi ta’limoti qaysi asarida o‘z ifodasini topgan?",
        "options": [
          "Davlat haqida",
          "Ruh fenomenologiyasi",
          "Metafizika",
          "Aql haqida"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q13",
        "prompt": "Pragmatizm ta’limotining asoschisi?",
        "options": [
          "Ch.Pirs",
          "Z.Freyd",
          "F.Nisshe",
          "I.Kant"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q14",
        "prompt": "Falsafaning qaysi sohasida borliq va yo‘qlik, mavjudlik va nomavjudlik muammolariga doir masalalar o‘rganiladi?",
        "options": [
          "Ontologiyada",
          "Gnoseologiyada",
          "Aksiologiyada",
          "Ijtimoiy falsafada"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q15",
        "prompt": "Borliqni tushunishga nisbatan dialektik yondoshuvni ilk bor kim ilgari surdi?",
        "options": [
          "Geraklit",
          "Fales",
          "Anaksimandr",
          "Ksenofan"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q16",
        "prompt": "“Ontologiya” atamasi muomalaga kiritgan olimlarni belgilang.",
        "options": [
          "1606 yilda nemis faylasufi Yakob Lorxard tomonidan yozilgan «Ogdoas scholastica» asarida tilga olinadi.\n\"Ontologiya\" atamasi Rudolf Goklenius tomonidan 1613 yilda o‘zining \"Falsafiy lug‘at” («Lexicon philosophicum, quo tanquam clave philisophiae fores aperiunter. Francofurti») va birozdan keyin Iogan Klauberg tomonidan 1656 yilda \"«Metaphysika de ente, quae rectus Ontosophia», yozilgan asarida muomalaga kiritilgan",
          "Bu atamani amaliyotda foydalanish masalasini Kristian fon Volf o‘rgangan holda \"ontologiya\" va \"metafizika\" atamalarini semantik ( yunoncha semantikos – ifodalovchi,bildiruvchi) jihatdan aniq ajratib ber",
          "XX asr falsafasida Nikolay Gartman (\"yangi ontologiya\"), Martin Xaydegger (\"fundamental ontologiya\") va boshqa shu kabi faylasuflar maxsus ontologik muammolar bilan shug‘ullanishgan",
          "“Ontologiya” atamasi qadimgi yunon tiligi «ontos – borliq va logos – ta’limot» degan so‘zlardan olingan bo‘lib, «borliq haqidagi ta’limot», degan ma’noni anglatadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q17",
        "prompt": "Materiya nima?",
        "options": [
          "Ob’ektiv reallikni ifodalovchi falsafiy kategoriya.",
          "Olamdagi barcha ob’ektiv va sub’ektiv mavjud narsalar va hodisalar.",
          "Borliqni, butun dunyoni barcha rang-barang shakllari bilan jamuljam holda aks ettiruvchi tushuncha.",
          "Muayyan jismning aynan shu jism ekanligini bulgilovchi xususiyatlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q18",
        "prompt": "Harakat shakllarining klassifikatsiyasi bu..",
        "options": [
          "mexanik, fizik, kimyoviy, biologik, ijtimoiy",
          "harakat va harakatsizlik",
          "progress va regress",
          "ekstensiv va intensiv cheksizlikdagi harakat."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q19",
        "prompt": "O‘zaro aloqadorlik va rivojlanish to‘g‘risidagi falsafiy ta’limot (rivojlanish falsafasi) qanday nomlanadi?",
        "options": [
          "Dialektika..",
          "Ontologiya",
          "Metafizika.",
          "Sofistika."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q20",
        "prompt": "Taraqqiyotning sababini qaysi bir qonun ochib beradi?",
        "options": [
          "Taraqqiyotning sababini dialektik ziddiyatlilik qonuni ochib beradi.",
          "Taraqqiyotning sababini dialektikaning qonun va kategoriyalari ochib beradi.",
          "Taraqqiyotning sababini miqdor o‘zgarishlarining sifat o‘zgarishlariga o‘zaro o‘tish qonuni ochib beradi.",
          "Taraqqiyotning sababini inkorni inkor qonuni ochib beradi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q21",
        "prompt": "Gnoseologiya(yun.gnosis-logos) va epistemologiya(yun.epistemologia)…",
        "options": [
          "Bir ma’no, bilish nazariyasi",
          "Tajribadan avvalgi bilim(apriori-avval)",
          "Bilishni inkor qilish(a-gnosis)",
          "Bilish asosi sezgi(sensus-his)"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q22",
        "prompt": "Bilish deb nimaga aytiladi?",
        "options": [
          "Insonning borliq va uning ob’ektiv qonunlarini o‘rganishi, anglashi va o‘zlashtirishi hamda egallashlariga aytiladi.",
          "Insonning borliq haqidagi tartibga solingan bilimlariga aytiladi.",
          "Har bir narsa va hodisaning yaxshi jihatini hamda kelajagini bilishga aytiladi.",
          "Optimizm-ya’ni,optimus- har bir ishga ishonch bilan qarashga aytiladi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q23",
        "prompt": "Haqiqat tushunchasiga ta’rif qaysi qatorda to‘g‘ri berilganligini toping?",
        "options": [
          "Bilimning voqeylikka, o‘z predmetiga mos kelishiga",
          "Tugallangan bilimga",
          "To‘liq bo‘lmagan bilimga",
          "Mutlaq haqiqatga"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q24",
        "prompt": "Amaliyot haqidagi falsafiy ta’limot qaysi javobda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "Praksiologiya.",
          "Aksiologiya.",
          "Gerontologiya.",
          "Metodologiya."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q25",
        "prompt": "Logika(grekcha logike), mantiq(arabcha) termin bo‘lib bu...",
        "options": [
          "So‘z,fikr,aql degan ma’nolarni beradi.",
          "Sezgi,idrok,tasavvur degan ma’nolarni beradi",
          "Tushuncha,hukm,xulosa degan ma’nolarni beradi",
          "Ayniyat,ziddiyat,uchinchisi istisno,yetarli asos degan ma’nolarni beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q26",
        "prompt": "Tushunchani shakllantirishning mantiqiy usullarini toping?",
        "options": [
          "Taqqoslash, analiz va sintez, mavhumlashtirish, umumlashtirish",
          "Yakka tushunchalar, umumiy tushunchalar, to‘planma tushunchalar",
          "Aniq tushunchalar, mavhum tushunchalar, ijobiy tushunchalar, nisbatli va nisbatsiz tushunchalar.",
          "Sezish, idrok, tasavvur, tushuncha, hukm, xulosa."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q27",
        "prompt": "Hukm sifat jihatidan turlari qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "Tasdiq va inkor hukmlar",
          "Umumiy tasdiq, juz’iy tasdiq,",
          "Atributiv, munosabat, mavjudlik hukmlari",
          "Umumiy inkor, juz’iy inkor"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q28",
        "prompt": "Hukmlarning miqdor jihatidan tasnifi qaysi qatorda to‘g‘ri qo‘yilgan?",
        "options": [
          "Yakka, juz’iy, umumiy hukmlar",
          "Umumiy tasdiq va juz’iy tasdiq hukmlar",
          "Birlashtiruvchi(kon’yuktiv), ajratuvchi(diz’yunktiv), shartli hukmlar",
          "Umumiy inkor va juz’iy inkor hukmlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q29",
        "prompt": "Jamiyat tushunchasiga qaysi ta’rif to‘g‘ri deb hisoblaysiz?",
        "options": [
          "Kishilar faoliyati jarayonida ular o‘rtasida amal qiladigan axloqiy, diniy, siyosiy, iqtisodiy, huquqiy, mafkuraviy munosabatlarning, tarixan tarkib topgpn oila, din, davlat, axloq, siyosat, huquq va shu kabi ijtimoiy institutlarning majmuidir.",
          "Jamiyat -uni tashkil etuvchi kishilar faoliyatining majmuidir.",
          "Jamiyat-odamlarni uyushtirishning tarixiy shakllaridir.",
          "Ijtimoiy falsafa - jamiyat hayoti va rivojlanishining eng umumiy qonunlarini to‘g‘risidagi fan sohasidir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q30",
        "prompt": "Tarixiy taraqqiyotga nisbatan qanday metodologik yondoshuv tamoyil konsepsiyalari mavjud?",
        "options": [
          "Monistik va plyuralisik; chiziqli va davriy; formatsion va sivilizatsion.",
          "Iqtisodiy, kommunikatsiya vositalari, ayirboshlash va iste’mol qilish.",
          "Oila, davlat, jamoa, qishloq, shahar.",
          "Polis(Aristotel “Siyosat” asarida), davlat, jamoa, qishloq, shahar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q31",
        "prompt": "Inson tushunchasiga bugungi ilmiy adabiyotlarda berilayotgan ta’rifning qaysi biri to‘g‘ri deb bilasiz?",
        "options": [
          "Inson ijtimoiy-tarixiy jarayonning,moddiy va ma’naviy madaniyat taraqqiyotining sub’ekti bo‘lib,hayotning boshqa sohalari bilan genetik bog‘langan,ammo o‘zining mehnat qurollari yaratish va ishlab chiqarish qobiliyati,til va ongga egaligi tufayli ajralib turadigan bioijtimoiy mavjudotdir.",
          "Inson o‘z harakatlari va hissiyotlarining mas’ul sub’ekti sifatida amal qilish mumkinligini,u o‘zi idrok etayotgan narsalarni anglashi va o‘z tashabbuslarining ahamiyatini tushunishini anglatadi (shaxs).",
          "Praksiologiya (yun.praktikos-faol) falsafaning inson faoliyatini o‘rganadigan sohasidir.",
          "Inson -tana va ruhdan iborat bo‘lgan ijtimoiy mavjudotdir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q32",
        "prompt": "Inson faoliyatini boshqa tirik mavjudotlar faoliyatidan farqlovchi muhim xususiyatlar nima?",
        "options": [
          "Onglilik va maqsadga muvofiqlik",
          "Oqilonalik va irratsionallik",
          "Maqsadga muvofiqlik va hissiylik",
          "Iroda va tassavur qilish imkonining borligi"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q33",
        "prompt": "Jamiyatning muhim kichik tizimlarini ko‘rsating?",
        "options": [
          "Iqtisodiy, ijtimoiy, siyosiy, ma'naviy",
          "Oilaviy, moddiy, siyosiy",
          "Harbiy, mahalliy, iqtisodiy",
          "Oila, mahalla, davlat, xalqaro hamjamiyat"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q34",
        "prompt": "Jamiyat to‘g‘risidagi umumnazariy falsafiy fan qaysi?",
        "options": [
          "Ijtimoiy falsafa.",
          "Sotsiologiya.",
          "Falsafiy antropologiya.",
          "Tarix falsafasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q35",
        "prompt": "sivilizatsiya nima?",
        "options": [
          "U muayyan tarixiy taraqqiyotda jamiyat moddiy va ma’naviy hayoti rivojlanishining yetuklik darajasi.",
          "U urbanizatsiyalashgan (shaharlashgan) jamiyat.",
          "U to‘la erkinlik jamiyatidir.",
          "U inson o‘zgartiruvchilik faoliyatining natijasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q36",
        "prompt": "Madaniyat funksiyalari qaysi qatorda to‘g‘ri berilgan?",
        "options": [
          "evristik(bilish), axborot(informatik), kommunikativ, regulyativ, baholash (aksiologik).",
          "Moddiy va ma’naviy.",
          "Aksiologiya(axios-qadriyat), baho.",
          "moddiy-iqtisodiy, ijtimoiy-siyosiy, ma’naviy."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q37",
        "prompt": "Hamma sohada ustunlik va o‘z hukmini o‘tkazish, barchani o‘z hukmiga bo‘ysundirishni anglatuvchi tushuncha nima?",
        "options": [
          "Gegemonizm.",
          "Volyuntarizm",
          "Gedonizm.",
          "Genotsid."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q38",
        "prompt": "\"Dialektika\" falsafiy usulini kim yaratgan?",
        "options": [
          "Georg Wilhelm Friedrich Hegel",
          "Immanuil Kant",
          "Sokrat",
          "Aristotel"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q39",
        "prompt": "Axloqning funksiyalari to‘g‘ri berilgan javobni toping-chi?",
        "options": [
          "Regulyativ,baholash,bilish,tarbiyaviy.",
          "Axloqiy ong,axloqiy munosabat,axloqiy amaliyot.",
          "xudbinlik, shuhratparastlik, piar.",
          "Insonparvarlik, erkparvarlik, vatanparvarlik, millatparvarlik, tinchlikparvarlik (jo‘mardlik)."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q40",
        "prompt": "Falsafada \"nihilizm\" nima?",
        "options": [
          "Insoniyatning maqsadsizligi va hech qanday obyektiv haqiqatning mavjud emasligi g‘oyasi",
          "Faqat dunyoqarashning etikasini o‘rganish",
          "Tabiatning ijobiy va salbiy tomonlarini tan olish",
          "Haqiqatning faqat bitta shaklini tasdiqlash"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q41",
        "prompt": "«Imidj» so‘zi nimani anglatadi?",
        "options": [
          "Obraz, timsol",
          "Takabburlik",
          "Tashqi ko‘rinish",
          "Kamtarlik"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q42",
        "prompt": "Falsafada \"epistemologiya\" so‘zi nimani anglatadi?",
        "options": [
          "Bilimning kelib chiqishi va mohiyatini o‘rganish",
          "Odam va tabiat o‘rtasidagi munosabatlarni o‘rganish",
          "Insonning axloqiy qarashlarini o‘rganish",
          "Diniy qarashlarning rivojlanishini o‘rganish"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q43",
        "prompt": "Estetika atamasini birinchi bo‘lib muomalaga kiritgan olim kim?",
        "options": [
          "Nemis olimi Aleksandr Baumgarten (1714-1762)",
          "Georg Vilgelm Fridrix Gegel (1770-1831)",
          "Nemis olimi Laybniis (1646-1716)",
          "Nemis olimi X.Plesner (1892-1985)"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q44",
        "prompt": "Estetika fani kategoriyalari berilgan qatorni toping?",
        "options": [
          "Go‘zallik-ulug‘vorlik,fojiaviylik-kulgililik;estetik ideal-estetik did- estetik tuyg‘u;san’at-badiiy obraz-ijodkorlik.",
          "Estetik munosabat-estetik ob’ekt-estetik sub’ek.",
          "Nafosat, estetik ong, estetik ehtiyoj.",
          "Nafis, nozik, latif, yoqimli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q45",
        "prompt": "San’atning funksiyalari nima?",
        "options": [
          "San’atning ijtimoiy vazifalari.",
          "San’atning ahamiyati.",
          "San’at asarlarining ijtimoiy hayotdagi o‘rni va ahamiyati.",
          "Voqelikni badiiy asarlarda aks ettirish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q46",
        "prompt": "Badiiy obraz nima?",
        "options": [
          "Voqelikning in’ikosi.",
          "Badiiy metod.",
          "San’atkorning hayol qilish qobiliyati.",
          "Hayot hodisalarini tanlash, umumlashtirish, baholash va tasvirlash qobiliyati."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q47",
        "prompt": "Yangi O‘zbekiston taraqqiyot strategiyasida qanday sohalarda innovatsiyalarni rivojlantirishga katta e’tibor berilgan?",
        "options": [
          "Texnologiya, ilm-fan va sanoatni integratsiyalash",
          "Keng tarqalgan sanoatni rivojlantirish",
          "Matbuot va ommaviy axborot vositalarini rivojlantirish",
          "Ijtimoiy tarmoqlarni nazorat qilish"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q48",
        "prompt": "Globallashuv falsafiy ma’noda...",
        "options": [
          "Bu jahondagi mamlakatlarning ijtimoiy-iqtisodiy, siyosiy-huquqiy, ma’naviy-madaniy sohada o‘zaro yaqinlashuvi, yangicha sifatiy birlashuvi natijasida sodir bo‘layotgan voqea-hodisalarning tez sur’atlar bilan bir mamlakat doirasidan chiqib, umumplanetar miqyosga ega bo‘lishidir",
          "Globallashuv-muttasil davom etadigan tarixiy jarayondir",
          "Globallashuv- jahonning gomogenlashuvi va universallashuvi jarayonidir",
          "Globallashuv – milliy chegaralarning yuvilib ketish jarayonidir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q49",
        "prompt": "Ijtimoiy barqarorlik nima?",
        "options": [
          "Yuqoridagi vaziyatlarning barchasi.",
          "Jamiyat hayotining osoyishtaligi, tinch-totuvlik va uni mustahkamlash uchun shart-sharoitning mavjudligi.",
          "Jamiyatdagi ijtimoiy birliklar (millatlar, turli ijtimoiy guruhlar va qatlamlar), siyosiy partiyalar va boshqa kuchlar o‘rtasidagi hamkorlik va hamjihatlik vaziyati.",
          "Davlat, siyosiy partiyalar, jamoatchilik tashkilotlari va fuqarolar o‘rtasidagi ijtimoiy kelishuv holatining mavjudligi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-1-q50",
        "prompt": "Ijtimoiy hayotning barcha sohalarida erkinlik ustuvor bo‘lishini, jamiyatning evolyusion rivojlanish yo‘lini e’tirof etuvchi va asoslovchi nazariya, amaliyot, ijtimoiy-siyosiy va mafkuraviy oqim qanday nomlanadi?",
        "options": [
          "Liberalizm.",
          "Ijtimoiy shartnoma nazariyasi.",
          "Konstitutsionalizm.",
          "Plyuralistik demokratiya nazariyasi."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "fal-2",
    "title": "2-qism: Falsafa fanining dolzarb muammolari va yo'nalishlari (51-100 savollar)",
    "description": "Falsafa",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "fal-2-q51",
        "prompt": "Global korrupsiya hozirgi davr global muammolarining qaysi guruhiga mansub?",
        "options": [
          "Jamiyat ichki jarayonlaridagi ziddiyatli munosabatlar keltirib chiqargan global muammolarga.",
          "“Inson – jamiyat” tizimidagi munosabatlarga doir global muammolarga.",
          "“Inson – tabiat” tizimidagi munosabatlarga oid global muammolarga.",
          "Ijtimoiy-iqtisodiy qoloqlik bilan bog‘liq global muammolarga."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q52",
        "prompt": "“Butunjahon korrupsiyaga qarshi kurashish kuni” qaysi xalqaro tashkilot tomonidan qaysi kun deb beligangan?",
        "options": [
          "2003 yil 9 dekabrda BMT tomonidan tashkil etilgan konferensiyada imzolangan xalqaro konvensiyaga muvofiq 9 dekabr sanasi",
          "1787 yilda qabul qilingan AQSh Konstitutsiyasiga muvofiq 9 dekabr sanasi.",
          "2003 yil 31 oktabrdagi BMTning Korrupsiyaga qarshi konvensiyasida 9 dekabr sanasi.",
          "2003 yil 21 noyabrdagi BMT Bosh Assambleyasining rezolyusiyasiga muvofiq 9 dekabr sanasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q53",
        "prompt": "“Korrupsiya” atamasining ma’nosi...",
        "options": [
          "«Korrupsiya» atamasi lotincha «corrumpere – corruptio» degan so‘zdan olingan bo‘lib, o‘zbek tilida buzilish,aynish,tanazzul,sotib olish, sotib yuborish, degan ma’nolarni anglatadi",
          "davlat mulkini yuqori lavozimdagi amaldor shaxslar tomonidan o‘zlashtirish, o‘g‘irlash",
          "o‘zining manfaatlari yo‘lida o‘z lavozimini suiiste’mol qilish",
          "shaxsiy manfaatdorlik va jamiyat oldidagi burchining o‘rtasidagi to‘qnashuv"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q54",
        "prompt": "O‘zbekiston Respublikasining “Korrupsiyaga qarshi kurashish to‘g‘risida” qonuni qachon qabul qilingan?",
        "options": [
          "2017 yil 3 yanvar",
          "1991 yil 14 iyun",
          "1998 yil 1 may",
          "2018 yil 30 iyun"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q55",
        "prompt": "2020 yil 29 iyunda O‘zbekiston Respublikasining Prezidenti tomonidan imzolangan “O‘zbekiston Respublikasida korrupsiyaga qarshi kurashish tizimini takomillashtirish bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida”gi Farmoni bilan...",
        "options": [
          "Korrupsiyaga qarshi kurashish agentligi tashkil etildi",
          "O‘zbekistonda korrupsiyaga qarshi kurashish taktikasi ishlab chiqildi",
          "O‘zbekistonda korrupsiyaga qarshi kurashish strategiyasi ishlab chiqildi",
          "Barcha javoblar to‘g‘ri."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q56",
        "prompt": "Borliqning manzarasi qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "mifologik, diniy, tabiiy-ilmiy, falsafiy",
          "Substansiya (lot.substantia-mohiyat) va aksidentia birligi",
          "Substansiya narsa va hodisalar xilma-xilligining ichki birligi, mohiyati.",
          "Substansiya -mustaqil borliq."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q57",
        "prompt": "Skeptitsizm (yun.skeptikos-ko‘rib chiqish) so‘zi ma’nosi..",
        "options": [
          "Ishonchsizlik",
          "E’tiqod",
          "Ishonch",
          "Tajriba"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q58",
        "prompt": "Gnoseologiya(yun.gnosis-logos) va epistemologiya(yun.epistemologia)..",
        "options": [
          "Bir ma’no, bilish nazariyasi",
          "Tajribadan avvalgi bilim(apriori-avval)",
          "Bilishni inkor qilish(a-gnosis)",
          "bilish asosi sezgi(sensus-his)"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q59",
        "prompt": "Logika (grekcha logike), mantiq (arabcha) termin bu...",
        "options": [
          "So‘z, fikr, aql degan ma’nolarni beradi.",
          "Sezgi, idrok, tasavvur degan ma’nolarni beradi",
          "Tushuncha, hukm, xulosa degan ma’nolarni beradi",
          "Ayniyat, ziddiyat, uchinchisi istisno, yetarli asos degan ma’nolarni beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q60",
        "prompt": "Til bu....",
        "options": [
          "Tafakkurni ifodalash shakli",
          "Belgili axborot tizimi",
          "Sintaksis, semantika, pragmatika",
          "Sun’iy va tabiiy til."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q61",
        "prompt": "Tushunchaga qaysi bandda to‘g‘ri ta’rif berilgan?",
        "options": [
          "Narsa va hodisalarning eng muhim o‘ziga xos belgi va xususiyatlarning inson ongida aks ettiruvchi tafakkur shakli",
          "Narsa va hodisalarning muhim va nomuhim belgilarini inson ongida aks ettiruvchi tafakkur shakli",
          "Narsa va hodisalarning sezgi,idrok,tasavvurda aks etishi",
          "Narsa va hodisalarning tushuncha,hukm, xulosada ifodalanishi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q62",
        "prompt": "Mantiq fanining sohalari...",
        "options": [
          "Formal logika, dialektik logika, matematik logika",
          "Birinchi analitika, ikkinchi analitika, topika, kategoriyalar, sofistika",
          "Isaguvchi(kirish), maqulot(kategoriya), ibora(hukm), qiyos(sillogizm), birinchi analitika, burxon(isbotlash), jadal(dialektika), safsata(sofistik raddiya), xitoba(ritorika)",
          "Til ilmi, mantiq, matematika, tabiiyot va metafizika, shaharni boshqarish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q63",
        "prompt": "Formal mantiq faniga kim asos solgan",
        "options": [
          "Antik yunon mutafakkiri Arastu (Aristotel).",
          "Antik yunon mutafakkiri Aflotun (Platon).",
          "Sharq mutafakkiri Abu Nasr al-Forobiy.",
          "Nemis faylasufi G.V.Leybnis."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q64",
        "prompt": "Til belgilari bilan unda ifodalangan ob’ekt o‘rtasidagi munosabatni o‘rganuvchi fan qaysi",
        "options": [
          "Semantika.",
          "Grammatika.",
          "Sintaksis.",
          "Pragmatika."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q65",
        "prompt": "Mantiq qonun qoidalari va talablariga mos holda qurilgan, voqelikni haqqoniy aks ettiruvchi fikr, bilimlar nima",
        "options": [
          "To‘g‘ri tafakkur.",
          "Aniq fikr va bilim.",
          "Haqqoniy xulosa",
          "Mantiqiy mulohaza."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q66",
        "prompt": "Jamiyat tushunchasiga qaysi ta’rif to‘g‘ri berilgan",
        "options": [
          "Kishilar faoliyati jarayonida ular o‘rtasida amal qiladigan axloqiy, diniy, siyosiy, iqtisodiy, huquqiy, mafkuraviy munosabatlarning, tarixan tarkib topgpn oila, din, davlat, axloq, siyosat, huquq va shu kabi ijtimoiy institutlarning majmuidir.",
          "Jamiyat -uni tashkil etuvchi kishilar faoliyatining majmuidir.",
          "Jamiyat-odamlarni uyushtirishning tarixiy shakllaridir.",
          "Ijtimoiy falsafa-jamiyat hayoti va rivojlanishining eng umumiy qonunlarini to‘g‘risidagi fan sohasidir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q67",
        "prompt": "Entimema (“esda”,”yodda”,”fikrda”) nima",
        "options": [
          "Asoslardan biri yoki xulosasi tushirib qoldirilgan sillogizm",
          "Murakkab sillogizm yoki polisillogizm",
          "Murakkab sillogizmning polisillogizmlardan tashkil topgan ko‘rinishi(soritlar-sorites to‘da yoki jamlangan)ga aytiladi",
          "Progressiv yoki regressiv sorit."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q68",
        "prompt": "Tarixiy taraqqiyotga nisbatan qanday metodologik yondoshuv konsepsiyalari mavjud?",
        "options": [
          "Monistik va plyuralisik; chiziqli va davriy; formatsion va sivilizatsion.",
          "Iqtisodiy, kommunikatsiya vositalari, ayirboshlash va iste’mol qilish.",
          "Oila, davlat, jamoa, qishloq, shahar.",
          "Polis (Aristotel “Siyosat” asarida),”Fozil odamlar shahri”(Abu Nasr Forobiy)."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q69",
        "prompt": "Tarixiy taraqqiyotga monistik yondoshuv konsepsiyasiga qaysi ta’limotlar kiradi",
        "options": [
          "Marksistik va postindustrial jamiyat nazariyalari.",
          "Ibtidoiy jamoa tuzumi, quldorlik, feodalizm, kapitalizm, kommunizm.",
          "An’anaviy (sanoatlashguncha), sanoatlashgan, postsanoatlashgan (informatsion).",
          "Sivilizatsiyali(lat.(civilize-fuqarolarga yoki davlatga xos) yondoshuv."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q70",
        "prompt": "Tarixga plyuralistik yondoshuv mohiyati qaysi bandda to‘g‘ri berilgan",
        "options": [
          "Insoniyat tarixining birligini inkor etib, sivilizatsiyalar mavjudligini tan oladi, ammo rivojlanishning yagona taraqqiyot jarayoni ekanligini inkor qiladi.",
          "Chiziqli (progressistik yoki taraqqiyotparvarlik) yondoshuv tarixiy taraqqiyot g‘oyasini jahon tarixiy rivoji dinamikasining asosini tashkil etuvchi umumiy qonun sifatida qabul qiladi.",
          "Davriy(siklik) yondoshuv tarix aylanma shaklda harakat qilib oxir oqibat o‘zining boshlang‘ich holatiga qaytadi.",
          "Sivilizatsion yondoshuv (XVIII asr yevropalik ma’rifatparvarlar) yaxlit tizimga tushirilgan ta’limot emas."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q71",
        "prompt": "Axloqshunoslik (etika) fani predmetiga ta’rif qaysi bandda to‘g‘ri berilgan",
        "options": [
          "Etika (Axloqshunoslik) so‘zi yunoncha ethos - odob, urf-odat ma’nosini anglatadi. Axloq vujudga kelishi va taraqqiyotining umumiy qonuniyatlari, uning mohiyati, tarkibi, tamoyillari va me’yorlarini o‘rganadi.",
          "Gedonizm (grech. hendone - lazzatlanish) qadimgi davr falsafiy tushunchalaridan biri sifatida ko‘ngilocharlik, huzurlanish ma’nolarini beradi va uni o‘rganadi.",
          "Evdemonizm (grech. ευδαιμονία - barqarorlik, huzurbaxshlik, baxt) inson asosiy faoliyatining baxtga erishuvga intilishi bilan bog‘liq bo‘lgan axloqshunoslik yo‘nalishlardan biri sanaladi va ushbu jarayonni o‘rganadi.",
          "Axloq deb - jamiyatda kishilar o‘z xulq-atvorlarida, munosabatlarida amal qiladigan prinsiplar, normalar va qoidalar majmuiga aytiladi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q72",
        "prompt": "Yangi O‘zbekiston taraqqiyot strategiyasida ta’lim tizimi bilan bog‘liq qanday maqsadlar belgilangan?",
        "options": [
          "Ta’lim tizimining sifatini oshirish va xalqaro standartlarga moslashtirish",
          "O‘qituvchilarni sonini kamaytirish",
          "O‘quvchilarni faqat ilmiy ishlarga yo‘naltirish",
          "Xususiy maktablar sonini kamaytirish"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q73",
        "prompt": "Axloqning funksiyalari to‘g‘ri berilgan javobni topingchi",
        "options": [
          "Regulyativ, baholash, bilish, tarbiyaviy.",
          "Axloqiy ong, axloqiy munosabat, axloqiy amaliyot.",
          "xudbinlik, shuhratparastlik, piar.",
          "millatparvarlik, tinchlikparvarlik (jo‘mardlik)."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q74",
        "prompt": "“Yashil iqtisodiyot” texnologiyalarini joriy etish orqali qanday natijalarga erishish ko‘zda tutilgan?",
        "options": [
          "Yuqoridagi barchasi",
          "Elektr energiyasi ishlab chiqarishni oshirish",
          "Atrof-muhitni muhofaza qilish",
          "Energiya samaradorligini oshirish"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q75",
        "prompt": "Estetika atamasini birinchi bo‘lib muomalaga kiritgan olim kim",
        "options": [
          "Nemis olimi Aleksandr Baumgarten (1714-1762)",
          "Nemis olimi Laybniis (1646-1716)",
          "Georg Vilgelm Fridrix Gegel (1770-1831)",
          "Nemis olimi X.Plesner (1892-1985)"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q76",
        "prompt": "Estetika fani kategoriyalari berilgan qatorni toping.",
        "options": [
          "Go‘zallik - ulug‘vorlik- fojiaviylik - kulgililik; estetik ideal - estetik did - estetik tuyg‘u; san’at - badiiy obraz – badiiy ijodkorlik.",
          "Estetik munosabat-estetik ob’ekt-estetik sub’ekt.",
          "Nafosat, estetik ong, estetik ehtiyoj.",
          "Nafis, nozik, latif, yoqimli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q77",
        "prompt": "Go‘zallik tushunchasiga berilgan ta’riflarning qaysi biri to‘g‘ri",
        "options": [
          "Ijtimoiy hayotda favqulotda ahamiyat kasb etuvchi hamda narsa va hodisalarning uyg‘unligi, hamohangligi, mutanosibligi, maqsadga muvofiqligiga asoslangan qadriyatdir.",
          "Me’yor, maqsadga muvofiqlik, tartiblilik, uyg‘unlik, hamohanlik, moslik, yaxlitlik, birlik, mutanosiblik, tenglik.",
          "Maftunkorlik, foydalilik, mu’jizaviylik, tug‘yoniylik.",
          "Qo‘laylik, manfaatdorlik, yoqimlilik,chiroylilik."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q78",
        "prompt": "Qaysi soha yoshlarni ijtimoiy hayotga faol jalb qilishda asosiy ahamiyatga ega?",
        "options": [
          "Ta’lim",
          "Sog‘liqni saqlash",
          "Madaniyat",
          "Sport"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q79",
        "prompt": "Globallashuv falsafiy ma’noda...",
        "options": [
          "bu jahondagi mamlakatlarning ijtimoiy-iqtisodiy, siyosiy-huquqiy, ma’naviy-madaniy sohada o‘zaro yaqinlashuvi, yangicha sifatiy birlashuvi natijasida sodir bo‘layotgan voqea-hodisalarning tez sur’atlar bilan bir mamlakat doirasidan chiqib, umumplanetar miqyosga ega bo‘lishidir",
          "Globallashuv - muttasil davom etadigan tarixiy jarayondir",
          "Globallashuv- jahonning gemogenlashuvi va universallashuvi jarayonidir",
          "Globallashuv – milliy chegaralarning yuvilib ketish jarayonidir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q80",
        "prompt": "Falsafiy dunyoqarashga berilgan to‘g‘ri ta’rifni toping",
        "options": [
          "bu mantiqiy muhokama va xulosa chiqarishlar, isbot va raddiyalar asosida nazariy fikr yuritishlar orqali dunyoni tushuntirish va baholash tufayli hosil bo‘lgan bilim va qarashlardir",
          "olam rivojlanishining eng umumiy qonunlari va muammolarini o‘rganadi hamda falsafiy dunyoqarashni shakllantiradi",
          "tabiat, jamiyat, inson va inson tafakkurining mohiyati haqidagi eng umumiy bilimlarni o‘zida ifodalaydi",
          "insonning borliqqa bo‘lgan munosabatining metodologik asoslarini belgilab beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q81",
        "prompt": "An’anaviy falsafiy bilimlar tarkibiy tuzilishini toping",
        "options": [
          "Ontologiya, naturfalsafa, gnoseologiya, metodologiya, falsafiy antropologiya, ijtimoiy falsafa, etika, estetika, mantiq, aksiologiya, falsafa tarixi, germenevtika sharq falsafasi, g‘arb falsafasi, yevropa falsafasi, xitoy falsafasi, arab falsafasi, rus falsafasi",
          "buddaviylik falsafasi, xristian falsafasi, islom falsafasi, ratsional falsafa, pozitivistik falsafa, ateistik falsafa",
          "metafizika, tabiat falsafasi, inson falsafasi, bilish falsafasi, axloq falsafasi, ijtimoiy falsafa, tarix falsafasi, madaniyat falsafasi, siyosat falsafasi, ta’lim falsafasi,",
          "texnika falsafasi, din falsafasi, til falsafasi, san’at falsafasi, mantiq falsafasi, falsafa tarixi, futuristik falsafa"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q82",
        "prompt": "Falsafa fani funksiyalari bu...",
        "options": [
          "dunyoqarash, bilish, metodologik, integrativ, madaniy, aksiologik, axloqiy, tarbiyaviy",
          "antropologik materializm,",
          "vulgar materializm, dialektik materializm deizm, panteizm",
          "neoklassik va antiklassik oqim"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q83",
        "prompt": "Fan rivojlanishi bosqichlari to‘g‘ri ko‘rsatilgan qatorni toping?",
        "options": [
          "ilk fan davri (mil.avv.1 ming yillikdan - XII asrgacha), I-inqilob davri ya’ni, klassik fan davri (XVII-XVIII asrlar), noklassik fan davri (XIX -XX asrning 70-yillari), postnoklassik fan davri (XX asr 70 yillaridan to hozirgi davrgacha davom etmoqda)",
          "Csientizm (lot. ssientia va ingl. science – fan, bilim), Csientizm fan texnika taraqqiyotining ijobiy jihatlarini mutlaqlashtirish davri",
          "Antissientizm falsafiy bilishni ilmiy bilishdan ajratadi, uni ilmiy bilish bilan muvofiq emas, deb e’lon qiladi, u oqilonalikni kamsitadi va mistika, intuitsiya, iroda va shu kabilarni mutlaqlashtirish davri",
          "XX asrning so‘nggi o‘n yilliklari fan texnika taraqqiyoti axborot (kompyuter) inqilobi bosqichi – XXI asrning 20 - yillarigacha bo‘lgan davr."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q84",
        "prompt": "Har bir davrda falsafaning predmeti o‘zgarib va rivojlanib borgan. Mana shu o‘zgarishlar davridagi falsafa predmeti muammolari qaysi bandda to‘g‘ri berilganini toping?",
        "options": [
          "antik falsafaga- kosmotsentrizm, o‘rta asrlar falsafasiga – teotsentrizm, G‘arb uyg‘onish davri falsafasiga – antropotsentrizm, yangi davr falsafasiga – ko‘proq metodologizm xosdir",
          "Dunyo ibtidosi haqida falsafada yagona substansiya – monizm , teng huquqli mustaqil (moddiy va ruhiy) substansiya – dualizm , ko‘pchilik substansiyalardan iborat plyuralizm deb e’tirof etiladigan yo‘nalishlar mavjud",
          "materialistlar –dunyo azaldan moddiy, ong esa bu materiyaning mahsulidir, deb hisoblovchilar va idealistlar - dunyo zamirida materiyadan oldin paydo bo‘lgan va uni yaratuvchi ideal narsalar va hodisalar (ong, ruh) yotadi, degan fikrni himoya qiluvchilarga ajratilgan",
          "Odam va olam, ularning ibtidosi va intihosi, hayoti va uzaro munosabatlari, inson tafakkuri, tabiat va jamiyat taraqqiyotining eng umumiy qonuniyatlari falsafa uchun azaliy asosiy muammolardir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q85",
        "prompt": "Futurologiya qanday fan ekanligi qaysi qatorda to‘g‘ri berilgan",
        "options": [
          "kelajak haqidagi fan",
          "tabiat haqidagi fan",
          "bilish nazariyasi",
          "bilishni rad etuvchi fan."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q86",
        "prompt": "Borliq shakllarini toping",
        "options": [
          "tabiat, ijtimoiy, ma’naviy, inson",
          "Noumenal (o‘z-o‘zicha) ya’ni, real borliq",
          "Fenomenal (tajriba, zohiriy, sub’ekt) borliq.",
          "materiya, xudo, efir, ong."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q87",
        "prompt": "Borliq haqidagi turli yondoshuvlar qaysi bandda to‘g‘ri berilgan",
        "options": [
          "monizm (yun.yagona), dualizm (lot.dualis-ikki substansiya), plyuralizm.",
          "dunyo yagona azaldan moddiy - materializm",
          "ideal asos mahsuli - idealizm",
          "dunyo asosida ko‘p xillik turadi bu plyuralizm."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q88",
        "prompt": "Harakat shakllarining klassifikatsiyasini belgilang",
        "options": [
          "mexanik, fizik, kimyoviy, biologik, ijtimoiy",
          "harakat va harakatsizlik",
          "Harakat olamdagi har qanday o‘zgarish",
          "ekstensiv va intensiv cheksizlikdagi harakat."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q89",
        "prompt": "Materiyaning miqyosli-struktura darajalari bu",
        "options": [
          "mikrodunyo, makrodunyo, megadunyo",
          "mexanik in’ikos, biologik in’ikos, ijtimoiy in’ikos",
          "noorganik, organic va ijtimoiy materiya",
          "Muayyan jismning aynan shu jism ekanligini belgilovchi xususiyatlari uning atributlari deyiladi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q90",
        "prompt": "Materiyaning tashkiliy-struktura darajalari bu",
        "options": [
          "noorganik, organik, ijtimoiy",
          "mikrodunyo, makrodunyo, megadunyo",
          "mexanik in’ikos, biologik in’ikos, ijtimoiy in’ikos",
          "Muayyan jismning aynan shu jism ekanligini belgilovchi xususiyatlari uning atributlari deyiladi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q91",
        "prompt": "Harakat tiplarini belgilang",
        "options": [
          "progress va regress",
          "Rivojlanish- ilgarilanma yo‘nalishga ega bo‘lgan, miqdoriy va sifatiy o‘zgarishlardir",
          "regress- yuksalishdan tubanlikka, murakkabdan oddiyga qarab o‘zgarish",
          "regress-harakatning teskari yo‘nalishi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q92",
        "prompt": "Makon va vaqt konsepsiyalari qaysi bandda to‘g‘ri berilgan",
        "options": [
          "substansional va relyatsion konsepsiyalar",
          "substansional konsepsiyada makon va vaqtning absolyut jihatlari mutlaqlashtiriladi",
          "relyatsion konsepsiyada esa ularning nisbiy jihatlari absolyutlashtiriladi makon - materiya va moddiy aloqadorliklardan tashqarida, ularga bog‘liq bo‘lmagan",
          "holda mavjud bo‘lgan mustaqil substansiyadir (Beruniy)."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q93",
        "prompt": "Borliq mavjudligining asosiy shakllari bu",
        "options": [
          "harakat, makon, vaqt",
          "Makon - ko‘lamlilik shakli",
          "Vaqt - davomiylik(lahza)shakli",
          "makon, vaqt, harakat, ong - materiya mavjudligining ko‘rinishlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q94",
        "prompt": "Tabiat tushunchasi bu...",
        "options": [
          "biosfera, atmosfera, gidrosfera, litosfera",
          "geografik deterinizm, ijtimoiy determinizm, geosiyosat",
          "Tabiat bu butun moddiy olam",
          "Moddiy va ma’naviy olam"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q95",
        "prompt": "Tabiatning jonli qismi (biosfera) qaysi sferalarda mavjud deya e’tirof etiladi",
        "options": [
          "Atmosfera, gidrosferaning va litosferaning yuqori qismi.",
          "Atmosfera, stratosfera va litosferaning yuqori qismi.",
          "Gidrosfera, biosfera va litosfera.",
          "Atmosfera, gidrosfera, biosfera."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q96",
        "prompt": "Haqiqat tushunchasiga ta’rif qaysi qatorda to‘g‘ri berilganligini toping",
        "options": [
          "Bilimning voqelikka, o‘z ob’ektiga mos kelishi",
          "Tugallangan bilimga",
          "To‘liq bo‘lmagan bilimga",
          "Mutlaq haqiqatga"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q97",
        "prompt": "Irratsionalizm (lot. irrationalis – aqlga zid) bu...",
        "options": [
          "Bilish jarayonida aklning imkoniyatlarini cheklaydigan yoki inkor etadigan falsafiy oqim",
          "Dahshat, qo‘rquv, o‘lim inson yashashining asosini tashkil etadi.",
          "Inson mavjudlik falsafasi",
          "Inson mavjudligi asosan g‘amxo‘rlik, qat’iylik, vijdon kabilarda namoyon bo‘ladi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q98",
        "prompt": "”Eng katta boylik bu aql-zakovat va ilm, eng katta meros bu yaxshi tarbiya, eng katta qashshoqlik bu bilimsizlikdir” deb aytgan fikr muallifi kim?",
        "options": [
          "Sh.Mirziyoev",
          "I.Karimov",
          "Imom Buxoriy",
          "Imom Termiziy"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q99",
        "prompt": "Xulosa chiqarishga berilgan ta’rifning qaysi biri to‘g‘ri?",
        "options": [
          "Umumiy hukmlardan juz’iy yoki yakka hukmlarni keltirib chiqarish",
          "Bir yoki bir nechta hukmlardan muayyan qoidalar asosida yangi hukmlarni keltirib chiqarish",
          "Nisbatan torroq hukmlardan kengroq hukmlarni keltirib chiqarish",
          "Bir nechta hukmlarni qiyoslab yangi hukmlarni keltirib chiqarish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-2-q100",
        "prompt": "Deduktiv xulosa chiqarish turlari bu...",
        "options": [
          "Aylantirish, almashtirish, predikatga qarama-qarshi qo‘yish, mantiqiy kvadratga ko‘ra xulosa chiqarish",
          "Bevosita va bilvosita",
          "Ikki yoki undan ko‘p oddiy qat’iy hukmlar(asoslar)dan xulosa chiqarish",
          "Sillogizm(syllogismos-hisoblash) deduktiv xulosa chiqarish turi."
        ],
        "correctIndex": 0
      }
    ]
  },
  
  {
    "id": "fal-3",
    "title": "3-qism: Falsafa fani, mantiq, ijtimoiy masalalar (101-150 savollar)",
    "description": "Falsafa",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "fal-3-q101",
        "prompt": "Entimema (“esda”,”yodda”,”fikrda”) nima?",
        "options": [
          "Asoslardan biri yoki xulosasi tushirib qoldirilgan sillogizm",
          "Murakkab sillogizm yoki polisillogizm",
          "Murakkab sillogizmning polisillogizmlardan tashkil topgan ko‘rinishiga aytiladi",
          "Progressiv yoki regressiv sorit."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q102",
        "prompt": "Komediya bu...",
        "options": [
          "Hayot va insondagi beo‘xshovliklar, nomutanosibliklarni tasvirlovchi san’at asari.",
          "Voqelikni badiiy tasvirlash.",
          "Hazil tuyg‘usi(yumor), mas’hara(satira)",
          "Kulgililik, oliftalik, takabburlik."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q103",
        "prompt": "2026-yilga kelib, oliy ta’lim bilan qamrov darajasi necha foizga yetkazilishi rejalashtirilgan?",
        "options": [
          "50%",
          "40%",
          "60%",
          "70%"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q104",
        "prompt": "Taraqqiyotning sababini qaysi bir qonun ochib beradi?",
        "options": [
          "Taraqqiyotning sababini qarama-qarshiliklar birligi va kurashi (Dialektik ziddiyatlilik) qonuni ochib beradi.",
          "Taraqqiyotning sababini dialektikaning qonun va kategoriyalari ochib beradi.",
          "Taraqqiyotning sababini miqdor o‘zgarishlarining sifat o‘zgarishlariga o‘zaro htish qonuni ochib beradi.",
          "Taraqqiyotning sababini inkorni inkor qonuni ochib beradi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q105",
        "prompt": "Rivojlanish jarayonining qanday qilib va qay tarzda sodir bo‘lish mexanizmini dialektikaning qaysi qonuni aks ettiradi?",
        "options": [
          "Miqdor o‘zgarishlaridan sifat o‘zgarishlariga o‘zaro o‘tish qonuni.",
          "Qarama-qarshiliklar birligi va kurashi qonuni.",
          "Inkorni inkor (taraqqiyotda vorisiylik va davomlilik) qonuni.",
          "Dialektikaning barcha qonunlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q106",
        "prompt": "Rivojlanish jarayonining muayyan yo‘nalishini, qat’iy natijasini, o‘zgarishlar tendensiyasini dialektikaning qaysi qonuni ifoda etadi?",
        "options": [
          "Inkorni inkor (taraqqiyotda vorisiylik va davomlilik) qonuni.",
          "Qarama-qarshiliklar birligi va kurashi qonuni.",
          "Miqdor o‘zgarishlaridan sifat o‘zgarishlariga o‘zaro o‘tish qonuni.",
          "Dialektikaning barcha qonunlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q107",
        "prompt": "Ijtimoiy barqarorlik nima?",
        "options": [
          "yuqoridagi vaziyatlarning barchasi.",
          "Jamiyat hayotining osoyishtaligi, tinch-totuvlik va uni mustahkamlash uchun shart-sharoitning mavjudligi.",
          "Jamiyatdagi ijtimoiy birliklar (millatlar, turli ijtimoiy guruhlar va qatlamlar), siyosiy partiyalar va boshqa kuchlar o‘rtasidagi hamkorlik va hamjihatlik vaziyati.",
          "Davlat, siyosiy partiyalar, jamoatchilik tashkilotlari va fuqarolar o‘rtasidagi ijtimoiy kelishuv holatining mavjudligi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q108",
        "prompt": "Jamiyat haqidagi qaysi bir fikrni to‘g‘ri deb hisoblaysiz?",
        "options": [
          "Jamiyat ob’ektiv mavjud bo‘lib, o‘zining rivojlanish qonunlariga ega bo‘lgan ijtimoiy-iqtisodiy munosabatlar majmuidir.",
          "Jamiyat kishilarning jamoaviy yig‘indisi.",
          "Jamiyat – tabiatning “bir qismidir”.",
          "Jamiyat aql va amaliyot orqali vujudga keluvchi ma’naviy hodisa."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q109",
        "prompt": "Dunyoning asosi va mohiyatini bitta substansiyadan kelib chiqib tushuntiruvchi falsafiy ta’limotlar qanday nomlanadi?",
        "options": [
          "Monizm.",
          "Materializm",
          "Idealizm.",
          "Dualizm."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q110",
        "prompt": "Dunyo asosiga ikki substansiyaning mushtarakligi g‘oyasini ilgari suruvchi ta’limotni aniqlang?",
        "options": [
          "Dualizm.",
          "Materializm",
          "Monizm.",
          "Idealizm"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q111",
        "prompt": "Odamlarning tarixan shakllangan ehtiyojlarini qondirish uchun u yoki bu ob’ektni o‘zgartirish maqsadida ta’sir ko‘rsatish faoliyati - bu...",
        "options": [
          "Amaliyot",
          "Harakat.",
          "Tajriba.",
          "Faoliyat."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q112",
        "prompt": "Amaliyot haqidagi falsafiy ta’limot qaysi javobda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "Praksiologiya",
          "Aksiologiya",
          "Gerontologiya",
          "Metodologiya."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q113",
        "prompt": "Amaliyotning asosiy shakli bu - ...",
        "options": [
          "Mehnat.",
          "Ko‘nikma",
          "Tajriba",
          "Bilish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q114",
        "prompt": "Dunyoqarash ob’ekti va asosiy masalasi qaysi qatorda to‘g‘ri ko‘rsatilgan?",
        "options": [
          "Butun dunyo, “olam-odam” munosabatlari",
          "Butun koinot, “koinot-inson” munosabatlari.",
          "Butun tabiat, “tabiat-inson” munosabatlari.",
          "Butun insoniyat, “jamiyat-inson” munosabatlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q115",
        "prompt": "«Avecto» ta’limoti bo‘yicha ijtimoiy taraqqiyot va uning mezoni nima deb olingan?",
        "options": [
          "ezgulikka yo‘g‘rilgan axloq normalariga rioya qilish darajasi.",
          "ilm-ma’rifatning rivojlanish darajasi;",
          "ijtimoiy ongning u yoki bu konkret shaklining takomillik darajasi;",
          "buyuk shaxslarning aql idroki va shaxsiy faoliyatlari;"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q116",
        "prompt": "«Avesto» ta’limoti bo‘yicha olamning mohiyati nimada?",
        "options": [
          "dunyo - ezgulik va kaboxat kuchlariiing kurash maydonidir;",
          "dunyo - Axuramazda tomonidan yaratilgan qonun va qoidalarga amal qiluvchi narsa va hodisalar majmuasidir;",
          "dunyo - kishilarga sinov uchun ajratilgan vaqt va makonning birligidir;",
          "dunyo - doimo avj olib so‘nadigan olovdan iboratdir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q117",
        "prompt": "Fazo va vaqtning turli hisob sistemalarida turlicha namoyon bo‘ladigan, miqdoriy kattaliklar bilan o‘lchanadigan, tashqi aloqadorliklarda ko‘zga tashlanadigan, o‘zgaruvchan va nisbiy xususiyatlari nima deyiladi?",
        "options": [
          "Fazo va vaqtning metrik xususiyatlari.",
          "Fazo va vaqtning topologik xususiyatlari.",
          "Fazo va vaqtning umumiy xususiyatlari.",
          "Fazo va vaqtning absolyut va nisbiy xususiyatlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q118",
        "prompt": "Fazo va vaqtning barcha hisob sistemalarida, materiyaning barcha struktura darajalarida bir xilda saqlanuvchi, ularning tub sifatiy jihatlarini ifodalovchi fundamental xususiyatlari nima deyiladi?",
        "options": [
          "Fazo va vaqtning topologik xususiyatlari",
          "Fazo va vaqtning metrik xususiyatlari.",
          "Fazo va vaqtning umumiy xususiyatlari.",
          "Fazo va vaqtning absolyut va nisbiy xususiyatlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q119",
        "prompt": "Falsafa fanining tadqiqot ob’ekti va predmeti nima?",
        "options": [
          "Borliq, bir butun borliq rivojlanishining eng umumiy qonunlari.",
          "Tabiat va jamiyat, ularning rivojlanish qonunlari.",
          "Inson ongi va ma’naviyati, ularning rivojlanish qonunlari.",
          "Inson va jamiyat, jamiyat rivojlanishining eng umumiy qonunlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q120",
        "prompt": "Tabiat to‘g‘risidagi falsafiy fan tarmog‘i nima?",
        "options": [
          "Naturfalsafa.",
          "Fizika.",
          "Kosmologiya.",
          "Ontologiya."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q121",
        "prompt": "Ongning tarifini bering.",
        "options": [
          "ong yuksak darajada tashkil topgan materiyaning xossasi, in’ikosning oliy ruhiy shakli.",
          "ong inson mohiyatining in’ikosi.",
          "ong ma’naviyatning ifodasi.",
          "ong tafakkurlash shakli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q122",
        "prompt": "Dialektikani “bahs, munozara san’ati” deb hisoblab, “Haqiqat munozara, bahslashuv orqali qo‘lga kiritiladi” degan mashhur fikr qaysi yunon mutafakkiriga mansub?",
        "options": [
          "Suqrot (Sokrat)",
          "Arastu (Aristotel)",
          "Aflotun (Platon)",
          "Batlomus (Ptolemey"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q123",
        "prompt": "Naqshbandiyaning ikkinchi nomi Xojagon yo‘nalishi bo‘lib, bu nom kimga nisbat berib atalgan?",
        "options": [
          "Abduxoliq G‘ijduvoniy",
          "Najmiddin Kubro",
          "Yusuf al–Hamadoniy",
          "Ahmad Yassaviy"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q124",
        "prompt": "“Korrupsiya” atamasining lug‘aviy ma’nosi...",
        "options": [
          "«Korrupsiya» atamasi lotincha «corrumpere – corrupsio» degan so‘zdan olingan bo‘lib, o‘zbek tilida buzilish, aynish, tanazzul, sotib olish, sotib yuborish, degan ma’nolarni anglatadi",
          "davlat mulkini yuqori lavozimdagi amaldor shaxslar tomonidan o‘zlashtirish, o‘g‘irlash",
          "o‘zining manfaatlari yo‘lida o‘z lavozimini suiiste’mol qilish",
          "shaxsiy manfaatdorlik va jamiyat oldidagi burchining o‘rtasidagi to‘qnashuv"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q125",
        "prompt": "O‘zbekiston Respublikasining “Korrupsiyaga qarshi kurashish to‘g‘risida” qonuni qachon qabul qilingan?",
        "options": [
          "2017 yil 3 yanvar",
          "1991 yil 14 iyun",
          "1998 yil 1 may",
          "2018 yil 30 iyun"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q126",
        "prompt": "Korrupsiya — shaxsning o‘z mansab yoki xizmat mavqeidan shaxsiy manfaatlarini yoxud o‘zga shaxslarning manfaatlarini ko‘zlab moddiy yoki nomoddiy naf olish maqsadida qonunga xilof ravishda foydalanishi, xuddi shuningdek bunday nafni qonunga xilof ravishda taqdim etish”,– degan ta’rif qaysi manbada berilgan?",
        "options": [
          "“Korrupsiyaga qarshi kurashish to‘g‘risida”gi qonunda.",
          "“Ekstremizm to‘grisida”gi qonunda.",
          "Yuridik ensiklopediyada.",
          "Hadislarda."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q127",
        "prompt": "2020 yil 29 iyunda O‘zbekiston Respublikasining Prezidenti tomonidan imzolangan “O‘zbekiston Respublikasida korrupsiyaga qarshi kurashish tizimini takomillashtirish bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida”gi Farmoni bilan...",
        "options": [
          "Korrupsiyaga qarshi kurashish agentligi tashkil etildi",
          "O‘zbekistonda korrupsiyaga qarshi kurashish taktikasi ishlab chiqildi",
          "O‘zbekistonda korrupsiyaga qarshi kurashish strategiyasi ishlab chiqildi",
          "Barcha javoblar to‘g‘ri."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q128",
        "prompt": "Yangi O‘zbekiston taraqqiyot strategiyasida davlat boshqaruvining qanday tamoyillari asosiy o‘rin tutadi?",
        "options": [
          "Ochiqlik va shaffoflik",
          "Markazlashgan boshqaruv",
          "Erkin bozor iqtisodiyoti",
          "Avtoritar boshqaruv"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q129",
        "prompt": "Korrupsiyaga oid huquqbuzarlik haqida xabar bergan yoki korrupsiyaga qarshi kurashishga boshqa tarzda ko‘maklashgan shaxslarni rag‘batlantirish tartibi to‘g‘risida Nizom qachon qabul qilindi?",
        "options": [
          "Vazirlar Mahkamasining 2020 yil 31 dekabrdagi 829-son qarori bilan",
          "Vazirlar Mahkamasining 2019 yil 31 dekabrdagi 129-son qarori bilan",
          "Rag‘batlantirish bir martalik pul mukofoti, tashakkurnoma yoki esdalik sovg‘a shaklida",
          "Bazaviy hisoblash miqdorining uch baravari miqdoridan bazaviy hisoblash miqdorining yuz baravarigacha."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q130",
        "prompt": "“Ummollardan (ish yurituvchi amaldorlar) pora olishdan ehtiyot bo‘lsin. Bilsinki, to bir kishi boshqalardan pora olmasa, boshqaga pora bermaydi... Va pora olgan pora bergandan yomonroq bo‘ladi, chunki oluvchi beruvchi oldida zabun bo‘ladi” ushbu pand-nasihat qaysi asardan olingan?",
        "options": [
          "Husayn Voiz Koshifiyning “Axloqi muhsiniy” asarida",
          "“Artxashastra yoxud Siyosat ilmi” kitobida, muallifi brahman Kautilen Chanakya",
          "Shekspirning “Venesiyalik savdogar” asarida",
          "Dantening “Do‘zax” asarida."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q131",
        "prompt": "Quyidagilardan qaysi biri tushunish va tushuntirish masalalarini o‘rganuvchi falsafiy ta’limot sanaladi?",
        "options": [
          "Germenevtika.",
          "Sinergetika.",
          "Fenomenologiya.",
          "Sofistika."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q132",
        "prompt": "Materiya nima?",
        "options": [
          "Materiya – ob’ektiv reallikni ifodalovchi falsafiy tushuncha.",
          "Materiya bizni o‘rab turgan narsalar.",
          "Materiya – bu atomlar.",
          "Materiya – bu sezgilarimiz kombinatsiyasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q133",
        "prompt": "Tilning falsafiy ta’rifi va uning eng asosiy belgisi deganda...",
        "options": [
          "kishilar o‘rtasidagi aloqa vositasi;",
          "belgilar asosida axborot olish vositasi;",
          "predmetlarni tovushlar orqali ifoda etish;",
          "simvollar orqali dunyoni anglash."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q134",
        "prompt": "Ongning kelib chiqishida tabiiy va ijtimoiy omillar deganda...",
        "options": [
          "Ong - ham biologik, ham ijtimoiy taraqqiyot maxsuli ekanligi;",
          "Ong - kishi miyasining maxsuli ekanligi;",
          "Ong - ijtimoiy muhit maxsuli ekanligi;",
          "Ong - bu kishi tarbiyasining maxsuli ekanligi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q135",
        "prompt": "2017-2021 yillarda O‘zbekiston Respublikasini rivojlantirishning Harakatlar strategiyasida ko‘zda tutilgan maqsad va vazifalarni bajarish borasidagi faoliyat mezoni bo‘lgan g‘oya nima?",
        "options": [
          "Xalq davlat idoralariga emas, balki davlat idoralari xalqqa xizmat qilishi kerak.",
          "Inson manfaatlari hamma narsadan ulug‘.",
          "Amaliy natijadorlik, inson manfaati va yana bir bor inson manfaati islohotlarning bosh maqsadi va mezoni.",
          "Fuqarolar emas, hujjatlar harakatlanadi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q136",
        "prompt": "Makon qanday tushuncha?",
        "options": [
          "Makon – bu borliqning (materiyaning) tuzilishi, ko‘lami va joylashuvini ifodalovchi falsafiy tushuncha.",
          "Makon – bu borliq shaklini ifodalovchi tushuncha.",
          "Makon – bu narsalarning joylashuvini ifodalash usuli.",
          "Makon – borliqning mavjudligini, davomiyligini ifodalovchi falsafiy tushuncha."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q137",
        "prompt": "Vaqt nima?",
        "options": [
          "Vaqt – bu narsa va hodisalarning davomiyligini, izchilligini xarakterlovchi borliqning mavjudlik usuli.",
          "Vaqt – bu hodisalarning ketma-ket kelishi.",
          "Vaqt – bu narsa va hodisalarning o‘zgarishining ifodasi.",
          "Vaqt – bu cheksizlik ifodasi bo‘lgan oliy hakam."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q138",
        "prompt": "Determinizmning mohiyatini ifodalab bering?",
        "options": [
          "Narsa va hodisalarning umumiy, qonuniyatli aloqadorligi, sababli o‘zaro bog‘liqligi haqidagi ta’limot.",
          "Narsa va hodisalarning o‘zaro aloqadorligi haqidagi ta’limot.",
          "Narsa va hodisalarning tizimli, strukturaviy aloqadorligi va munosabatlari haqidagi ta’limot.",
          "Narsa va hodisalarning funksional o‘zaro aloqadorligi haqidagi ta’limot."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q139",
        "prompt": "Falsafiy bilimlar tarixida “sotsiologiya” termini va faniga kim asos solgan?",
        "options": [
          "Ogyust Kont",
          "Nikkolo Makiavelli",
          "Maks Veber",
          "Dyurkgeym."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q140",
        "prompt": "Dialektika to‘g‘risida qaysi javob eng to‘g‘ri?",
        "options": [
          "Dunyo aloqadorligi va rivojlanishining umumiy qonunlari va kategoriyalari to‘g‘risidagi ta’limot.",
          "Harakat, o‘zgarish, rivojlanish to‘g‘risidagi ta’limot.",
          "Nazariy va amaliy bilish, tadqiqotlar usuli.",
          "Rivojlanish qonunlari va kategoriyalari tizimi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q141",
        "prompt": "Fatalizm nima?",
        "options": [
          "dunyo, kishilarning kelajak taqdiri oldindan belgilab qo‘yiladi deb tushuniladigan ta’limot;",
          "tabiat ruhning moddiy ko‘rinishi deb targ‘ib etuvchi ta’limot;",
          "narsa va hodisalar o‘rtasida sababiy bog‘lanishlarnigina tan oluvchi oqim;",
          "zulmga qarshi, erkni kuylovchi inqilobiy qarashlarni o‘zida mujassam etuvchi mafkura."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q142",
        "prompt": "O‘rta Osiyoda tasavvufiy (so‘fiylik) ta’limotlarining asoschisi, “shayx ush-shuyux” (shayxlar shayxi) bo‘lmish mutasavvuf donishmand kim edi?",
        "options": [
          "Yusuf Hamadoniy",
          "Hakim at-Termiziy.",
          "Abduxoliq G‘ijduvoniy.",
          "Ahmad Yassaviy."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q143",
        "prompt": "Tabiat kuchlari va hodisalarini hissiy qiyofalar, alohida vujudlar shaklida jonlantirib tasvirlovchi, kishilarning xayolotiga asoslanuvchi qarashlar va tasavvurlar dunyoqarashning qanday turi?",
        "options": [
          "Afsonaviy",
          "Badiiy",
          "Axloqiy",
          "Falsafiy"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q144",
        "prompt": "Kishilarning tabiiy va ijtimoiy hodisalarni ilohiy kuchlar asosida aks ettiruvchi qarash va tasavvurlari hamda ilohiy kuchlarga bo‘lgan ishonch va e’tiqodlarini ularning qanday dunyoqarashi deb bilasiz?",
        "options": [
          "Diniy",
          "Afsonaviy",
          "Falsafiy",
          "badiiy-estetik"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q145",
        "prompt": "Falsafa qachon va qaerda fan bo’lib shakllangan?",
        "options": [
          "er.oldingi VI-V asrlarda, Yunonistonda;",
          "er.oldingi II-ming yillikning 2-yarmida Markaziy Osiyoda;",
          "er.oldingi II-ming yillik boshlarida Misrda;",
          "er. oldingi VI-V asrlarda, Hindistonda."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q146",
        "prompt": "O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoevning Oliy Majlisga Murojaatnomasida fuqarolarning murojaatlari bilan ishlashning o‘ziga xos demokratik instituti sifatida nima o‘zini oqlamoqda deb ta’kidlandi?",
        "options": [
          "O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalari va Virtual qabulxonasi.",
          "Davlat xizmatlari Agentligi va uning joylardagi markazlari.",
          "O‘zbekiston Respublikasi Parlamenti, deputat va senatorlar.",
          "Davlatimizning ijro hokimiyati organlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q147",
        "prompt": "Bilishning asoslari va maqsadi nima?",
        "options": [
          "kishilarning amaliy faoliyati;",
          "haqiqatni ro‘yobga chiqarish;",
          "tabiiy hodisalarni ilmiy bayon qilish;",
          "ilmiy tadqiqotning nazariy asoslari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q148",
        "prompt": "O‘zaro aloqadorlik va rivojlanish falsafasi hamda olamni bilishning falsafiy metodologiyasi sifatidagi ta’limot nima?",
        "options": [
          "Dialektika.",
          "Materializm",
          "Idealizm",
          "Metafizika."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q149",
        "prompt": "Jamiyat to‘g‘risidagi umumnazariy falsafiy fan qaysi?",
        "options": [
          "Ijtimoiy falsafa.",
          "Sotsiologiya.",
          "Falsafiy antropologiya.",
          "Tarix falsafasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-3-q150",
        "prompt": "Sivilizatsiya nima?",
        "options": [
          "u muayyan tarixiy taraqqiyotda jamiyat moddiy va ma’naviy hayoti rivojlanishining yetuklik darajasi.",
          "u urbanizatsiyalashgan (shaharlashgan) jamiyat.",
          "u to‘la erkinlik jamiyatidir.",
          "u inson o‘zgartiruvchilik faoliyatining natijasi."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "fal-4",
    "title": "4-qism: Materiya, jamiyat, davlat, san'at sohalari (151-200 savollar)",
    "description": "Falsafa",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "fal-4-q151",
        "prompt": "Falsafa tarixida o‘zining ijtimoiy-siyosiy qarashlari orqali davlat hokimiyatining bo‘linish tamoyilini (qonun chiqaruvchi, ijro etuvchi va sud hokimiyatlari) birinchi bo‘lib kimlar asoslagan?",
        "options": [
          "J.Lokk va Sh. Monteske",
          "F.Bekon va T.Gobbs",
          "R.Dekart va B. Spinoza",
          "B. Spinoza va G. Leybnis."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q152",
        "prompt": "Materiyaning miqyosli-struktura darajalari bu - ...?",
        "options": [
          "Mikroolam, makroolam va megaolam.",
          "Anorganik, organik va ijtimoiy materiya.",
          "Gidrosfera, litosfera, atmosfera va biosfera.",
          "Modda va nomodda (maydon)."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q153",
        "prompt": "Materiyaning tashkiliy-struktura darajalari bu - ...?",
        "options": [
          "Anorganik, organik va ijtimoiy materiya.",
          "Mikroolam, makroolam va megaolam.",
          "Gidrosfera, litosfera, atmosfera va biosfera.",
          "Modda va nomodda (maydon)."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q154",
        "prompt": "Hamma sohada ustunlik va o‘z hukmini o‘tkazish, barchani o‘z hukmiga bo‘ysundirishni anglatuvchi tushuncha nima?",
        "options": [
          "Gegemonizm.",
          "Gedonizm.",
          "Volyuntarizm.",
          "Genotsid."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q155",
        "prompt": "Ijtimoiy hayotning barcha sohalarida erkinlik ustuvor bo‘lishini, jamiyatning evolyusion rivojlanish yo‘lini e’tirof etuvchi va asoslovchi nazariya, amaliyot, ijtimoiy-siyosiy va mafkuraviy oqim qanday nomlanadi?",
        "options": [
          "Liberalizm.",
          "Ijtimoiy shartnoma nazariyasi.",
          "Konstitutsionalizm.",
          "Plyuralistik demokratiya nazariyasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q156",
        "prompt": "Globalistika mustaqil ilmiy yo‘nalish va ijtimoiy amaliyot jabhasi sifatida nechanchi yillardan shakllana boshladi?",
        "options": [
          "1960-yillarning oxirlaridan",
          "1950-yillarning oxirlaridan",
          "1970-yillarning oxirlaridan",
          "1980-yillarning oxirlaridan"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q157",
        "prompt": "Falsafada gnoseologiya nimani o‘rganadi ?",
        "options": [
          "Bilish jarayonining umumiy falsafiy mohiyati va qonuniyatlarini o‘rganadi.",
          "Bizning muayyan narsalar haqidagi bilimlarimiz va (yoki) e’tiqodlarimizning ishonchlilik darajasini o‘rganadi.",
          "Tafakkurning shakllari va umumiy qonuniyatlarini o‘rganadi.",
          "Bilim va e’tiqodimizning ishonchlilik darajasini o‘rganadi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q158",
        "prompt": "O‘zini qurshagan dunyodagi narsalar va hodisalarni sezgilar orqali idrok etish nima deyiladi?",
        "options": [
          "Persepsiya",
          "Apersepsiya.",
          "Tafakkur",
          "Mulohaza."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q159",
        "prompt": "«Men buning nimaligini bilmayman, biroq bilishga umid qilaman», deydigan insonning psixologik xususiyati qanday bo‘ladi?",
        "options": [
          "Optimist",
          "Gnostik",
          "Agnostik.",
          "Pessimist."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q160",
        "prompt": "Davlat nima?",
        "options": [
          "Barcha javoblar to‘g‘ri",
          "Davlat – jamiyat siyosiy tizimining odamlar, guruhlar, sinflar, tashkilotlarning hamkorlikdagi faoliyatini, o‘zaro munosabatlarini tashkil etuvchi, yo‘naltiruvchi va nazorat qiluvchi asosiy instituti.",
          "Davlat – hokimiyatning bosh instituti, hokimiyat davlat orqali o‘z siyosatini amalga oshiradi.",
          "Davlat – butun mamlakat miqyosidagi hokimiyatning maxsus boshqaruv apparatiga tayanadigan, barcha uchun qonunlar chiqaradigan va suverenitetga ega bo‘lgan siyosiy tashkiloti."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q161",
        "prompt": "Hozirgi vaqtda davlat boshqaruv shakliga ko‘ra qanday turlarga bo‘linadi?",
        "options": [
          "Monarxiya va respublika.",
          "Mutlaq monarxiya va parlamentar (cheklangan) monarxiya.",
          "Prezidentlik va parlamentar respublika.",
          "Federativ va konfederativ."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q162",
        "prompt": "Siyosat nima?",
        "options": [
          "Siyosat bu sinflar, millatlar, davlatlar o‘rtasidagi munosabatlar majmui.",
          "Siyosat bu dunyoqarashning umumlashgan ifodasidir.",
          "Siyosat – bu davlat tuzilishi.",
          "Siyosat bu jamiyat holati haqidagi baholarning majmuasidir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q163",
        "prompt": "Falsafaning bilish muammolari ko‘rib chiqiladigan bo‘limi nima deb nomlanadi?",
        "options": [
          "Gnoseologiya.",
          "Sotsiologiya.",
          "Germenevtika.",
          "Fenomenologiya."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q164",
        "prompt": "Hissiy bilishning shakllarini aytib bering.",
        "options": [
          "sezgi, idrok, tasavvur.",
          "sezgi va idrok.",
          "sezgi, idrok, tasavvur, tushuncha.",
          "tasavvur va xotira."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q165",
        "prompt": "Sezgi a’zolari orqali olingan bilim qanday bilim hisoblanadi?",
        "options": [
          "Hissiy.",
          "Aqliy.",
          "Transsendental.",
          "Irratsional."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q166",
        "prompt": "Qachonlardir insonning sezgi a’zolariga ta’sir ko‘rsatgan va keyinchalik miyada saqlanib qolgan aloqalar bo‘yicha gavdalanadigan narsalarning obrazlari bu - ...",
        "options": [
          "Tasavvur",
          "Idrok",
          "Xayol.",
          "Xotira."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q167",
        "prompt": "Bilish jarayonini, inson onggini o‘tmish va kelajak bilan bog‘lovchi, egallangan bilimlarni saqlovchi hodisa nima deyiladi?",
        "options": [
          "Xotira.",
          "Idrok",
          "Xayol.",
          "Tasavvur."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q168",
        "prompt": "Agnostiklar kimlar?",
        "options": [
          "Dunyoni bilish mumkinligini rad etuvchilar.",
          "Dunyoni bilish mumkinligini inkor etmay biroq, bilimning haqiqiyligiga shubha bildiruvchilar.",
          "Dunyoni bilish mumkinligini ta’kidlovchilar.",
          "Dunyoni bilishda amaliyotning rolini inkor etuvchilar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q169",
        "prompt": "Bilimlarning inson irodasi va faoliyatiga bog‘liq bo‘lmagan mazmuni haqiqatning qanday turi xususiyatini belgilaydi?",
        "options": [
          "Ob’ektiv haqiqat.",
          "Mutlaq haqiqat.",
          "Sub’ektiv haqiqat.",
          "Nisbiy haqiqat"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q170",
        "prompt": "Predmetni kelajakda to‘ldirilishi yoki unga aniqlik kiritilishi mumkin bo‘lmagan tarzda to‘la, mukammal bilish bu - ...",
        "options": [
          "Mutlaq haqiqat",
          "Sub’ektiv haqiqat.",
          "Nisbiy haqiqat.",
          "Ob’ektiv haqiqat."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q171",
        "prompt": "Borliqni asosan to‘g‘ri aks ettirsa-da, obraz ob’ektga uncha mos emasligi bilan ajralib turadigan haqiqat turini aniqlang.",
        "options": [
          "Nisbiy haqiqat.",
          "Mutlaq haqiqat.",
          "Korrespondent haqiqat.",
          "Kogerent haqiqat."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q172",
        "prompt": "Haqiqat tushunchasiga qaysi javobda to‘g‘ri ta’rif berilgan?",
        "options": [
          "Haqiqat – bu bilimlarning ob’ektiv borliqqa muvofiq bo‘lgan va amaliyotda sinalgan mazmuni, bilish rivojlanishining yakuni va omili.",
          "Haqiqat – bu bilimlarning samaradorligi, foydaliligidir.",
          "Haqiqat – bu bilimlarning ziddiyatsizligi, voqelik in’ikosining natijasi.",
          "Haqiqat – bilish nazariyasining bosh kategoriyasi, olam haqidagi bilimlar majmui."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q173",
        "prompt": "Mantiqning predmeti nima?",
        "options": [
          "Tafakkur qonunlari, shakllari, usullari va vositalari.",
          "Hissiy va aqliy bilish shakllari.",
          "Tushuncha, hukm va xulosa chiqarish.",
          "Tafakkurning qonun-qoidalari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q174",
        "prompt": "San’atning funksiyalari nima?",
        "options": [
          "San’atning ijtimoiy vazifalari.",
          "San’atning ahamiyati.",
          "San’at asarlarining ijtimoiy hayotdagi o‘rni va ahamiyati.",
          "Voqelikni badiiy asarlarda aks ettirish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q175",
        "prompt": "Badiiy obraz nima?",
        "options": [
          "Voqelikning in’ikosi.",
          "Badiiy metod.",
          "San’atkorning hayol qilish qobiliyati.",
          "Hayot hodisalarini tanlash, umumlashtirish, baholash va tasvirlash qobiliyati."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q176",
        "prompt": "Tasviriy san’atlar qaysilar?",
        "options": [
          "Rassomlik, grafika, haykaltaroshlik, arxitektura, badiiy fotografiya.",
          "Adabiyot, teatr, kino, televidenie.",
          "Arxitektura, raqs, musiqa, rassomlik.",
          "Badiiy fotografiya, amaliy san’at, televidenie."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q177",
        "prompt": "Notasviriy san’atlar qaysilar?",
        "options": [
          "Adabiyot, musiqa, raqs, bezakli amaliy san’at.",
          "Arxitektura, televidenie, teatr, sirk.",
          "Raqs san’ati, teatr, adabiyot.",
          "Sirk, rassomlik, badiiy grafika."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q178",
        "prompt": "Tomoshaviy san’atlar qaysilar?",
        "options": [
          "Rassomlik, grafika, haykaltaroshlik, arxitektura, badiiy fotografiya.",
          "Haykaltaroshlik, musiqa, arxitektura, badiiy grafika.",
          "Raqs, adabiyot, kino, teatr, televidenie.",
          "Teatr, badiiy fotografiya, amaliy san’at, badiiy adabiyot."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q179",
        "prompt": "O i l a – b u…",
        "options": [
          "Er-xotin, ota-onalar va bolalar o‘rtasidagi o‘zaro munosabat.",
          "Jamiyatning boshlang‘ich ho‘jayrasi.",
          "Insoniyat naslini davom ettirish maskani.",
          "Erkak va ayol o‘rtasidagi ittifoq."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q180",
        "prompt": "Oilaning funksiyalari qanday?",
        "options": [
          "Barcha javoblar to‘g‘ri.",
          "Iqtisodiy-xo‘jalik funksiyasi.",
          "Axloqiy-ma’naviy funksiyasi.",
          "Aholini to‘ldirib, yosh avlodni tarbiyalash funksiyasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q181",
        "prompt": "Oilaning faqat huquqiy asosi bo‘lib, bir oilaga mansub kishilarning bir-birlari oldidagi huquq va majburiyatlarini, axloqiy va huquqiy ma’suliyatini belgilaydi. Bu - ...",
        "options": [
          "Nikoh.",
          "Sevgi.",
          "Jamiyat.",
          "Davlat."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q182",
        "prompt": "Kishilarning tabiiy-biologik, xo’jalik-iqtisodiy, huquqiy va ma’naviy-axloqiy munosabatlariga asoslangan ijtimoiy birligi nima?",
        "options": [
          "Oila.",
          "Urug’.",
          "Mahalla.",
          "Mehnat jamoasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q183",
        "prompt": "Professional etika nima?",
        "options": [
          "Etikaning turli kasblarning o‘ziga xos xususiyatlari bilan bog‘liq bo‘lgan maxsus axloqiy talablarini o‘rganuvchi sohasi.",
          "Mehnat xulqi talablarini o‘rganuvchi etika sohasi.",
          "Inson faoliyatlarining barcha ko‘rinishlariga taalluqli umumiy talablarni o‘rganuvchi etika sohasi.",
          "Etikaning jamiyatda amalda bo‘lgan axloq normalari va qoidalarini o‘rganuvchi sohasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q184",
        "prompt": "O‘rgatish, nasihat qilish maqsadida kishilar bilan aloqada bo‘lish, fikrlarni aniq ifodalash, bilimiga doimo bilim qo‘shishi va uni boshqalarga berish ehtiyoji, o‘z xulq-atvorini qattiq nazorat qilish, tuyg‘ularda tiniqlik talablari xos axloq – bu...",
        "options": [
          "Pedagogik axloq.",
          "Odil sudlov vakillari axloqi.",
          "Harbiylar axloqi.",
          "Shifokor axloqi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q185",
        "prompt": "Axloqiy madaniyat nima?",
        "options": [
          "Axloqiy madaniyat shaxsning jamiyat axloqiy tajribalarini egallashi va bu tajribalardan boshqa odamlar bilan bo‘lgan munosabatlarida foydalanishi, o‘z-o‘zini muntazam takomillashtirib borishi singari jihatlarni o‘z ichiga oladi.",
          "Axloqiy madaniyat axloq - odobda hammaga namuna bo‘lish tushiniladi.",
          "Axloqiy madaniyat axloqiy qonun- qoidalarga amal qilib yurgan odam.",
          "Axloqiy madaniyat o‘ta tarbiyali, muloxazali inson."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q186",
        "prompt": "Inson axloqiy madaniyatning uzviy qismi, unsuri – bu...",
        "options": [
          "Muomala odobi",
          "Yaxshilik",
          "Rostgo‘ylik",
          "Talabchanlik"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q187",
        "prompt": "«Imidj» so‘zi nimani anglatadi?",
        "options": [
          "Obraz, timsol",
          "Takabburlik",
          "Tashqi ko‘rinish",
          "Kamtarlik"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q188",
        "prompt": "Kompliment nima?",
        "options": [
          "Kompliment - axloqiy madaniyatning ko‘rinishlaridan biri bo‘lib, u muayyan xolatda insonga bildiriladigan takallufdir.",
          "Kompliment bu - boshqa kishilarga qilinadigan laganbarborlik.",
          "Kompliment bu - boshqa kishilarga qilinadigan xushomad.",
          "Kompliment bu - boshqa kishilarga qilinadigan mulozamat."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q189",
        "prompt": "Definitsiya nima?",
        "options": [
          "Tushunchalarni ta’riflash.",
          "Tushunchalar ustida mantiqiy amallar.",
          "Tushunchalarni chegaralash va bo‘lish.",
          "Tushunchalarni umumlashtirish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q190",
        "prompt": "Argument nima?",
        "options": [
          "Chinligi avval isbotlangan va tezisni isbotlash uchun keltirilgan fikr yoki mulohaza.",
          "Chinligi isbot etilishi lozim bo‘lgan fikr yoki mulohaza.",
          "Isbot etish jarayoni va usuli.",
          "Isbot talab qilmaydigan chin fikr yoki mulohaza."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q191",
        "prompt": "Arxeolog olimlarning fikriga ko‘ra odamzotning “homo sapiens” turi taxminan qancha yillar oldin vujudga kelgan?",
        "options": [
          "40-60 ming yil avval",
          "5 mln yil avval",
          "3,5 mln yil avval",
          "1,5 mln yil avval"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q192",
        "prompt": "Falsafaning qaysi sohasida borliq va yo‘qlik, mavjudlik va nomavjudlik muammolariga doir masalalar o‘rganiladi?",
        "options": [
          "Ontologiyada",
          "Aksiologiyada",
          "Gnoseologiyada",
          "Ijtimoiy falsafada"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q193",
        "prompt": "Falsafiy kategoriya sifatida dunyoni uning butun rang-barangligi va turli-tuman namoyon bo‘lish shakllari bilan yaxlit aks ettiruvchi tushuncha nima?",
        "options": [
          "Borliq.",
          "Ob’ektiv voqelik.",
          "Materiya.",
          "Kosmos."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q194",
        "prompt": "Olamdagi narsa va hodisalar holatlarining har qanday o‘zgarishi bu - ...",
        "options": [
          "Harakat",
          "Taraqqiyot",
          "Rivojlanish",
          "O‘zgarish"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q195",
        "prompt": "Borliqni tushunishga nisbatan dialektik yondoshuvni ilk bor kim ilgari surdi?",
        "options": [
          "Geraklit",
          "Fales",
          "Anaksimandr",
          "Ksenofan"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q196",
        "prompt": "«Hamma narsa yer va suvdan vujudga keladi va rivojlanadi, hatto «biz ham yer va suvdan paydo bo‘lganmiz»» kimning fikri?",
        "options": [
          "Fales",
          "Ksenofan",
          "Anaksimandr",
          "Pifagor"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q197",
        "prompt": "Sharq mutafakkirlaridan kim borliq muammosini hal qilishda «Vujudi vojib» va «Vujudi mumkin» ning o‘zaro nisbatiga murojaat qiladi?",
        "options": [
          "Abu Nasr Forobiy.",
          "At – Termiziy.",
          "Al – Xorazmiy.",
          "Abu Rayxon Beruniy."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q198",
        "prompt": "Monizm ta’limotiga to‘g‘ri ta’rif berilgan qatorni ko‘rsating?",
        "options": [
          "Dunyoning narsalar va hodisalar rang–barangligi bir substansiyadan iborat degan ta’limot.",
          "Birinchi asos sifatida ikkita substansiya olingan falsafiy yondashuv.",
          "Dunyoning birligi zamirida yagona asos – moddiylik yotadi deb hisoblovchi ta’limot.",
          "Dunyoning negizida ikkita emas undan ko‘proq mohiyat mavjud deb hisoblovchi ta’limot."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q199",
        "prompt": "Makon va vaqtning turli hisob sistemalarida turlicha namoyon bo‘ladigan, miqdoriy kattaliklar bilan o‘lchanadigan, tashqi aloqadorliklarda ko‘zga tashlanadigan, o‘zgaruvchan va nisbiy xususiyatlari nima deyiladi?",
        "options": [
          "Makon va avqtning metrik xususiyatlari.",
          "Makon va vaqtning topologik xususiyatlari.",
          "Makon va vaqtning umumiy xususiyatlari.",
          "Makon va vaqtning absolyut va nisbiy xususiyatlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-4-q200",
        "prompt": "Makon va vaqtning barcha hisob sistemalarida, materiyaning barcha struktura darajalarida bir xilda saqlanuvchi, ularning tub sifatiy jihatlarini ifodalovchi fundamental xususiyatlari nima deyiladi?",
        "options": [
          "Makon va vaqtning topologik xususiyatlari.",
          "Makon va avqtning metrik xususiyatlari.",
          "Makon va vaqtning umumiy xususiyatlari.",
          "Makon va vaqtning absolyut va nisbiy xususiyatlari."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "fal-5",
    "title": "5-qism: Falsafa maktablari, jamiyat taraqqiyoti, san'at turlari (201-250 savollar)",
    "description": "Falsafa",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "fal-5-q201",
        "prompt": "Ijtimoiy ekologiya ilmiy va falsafiy bilimlar sohasi sifatida nechanchi yillarda vujudga keldi?",
        "options": [
          "XX asr 60-80-yillari.",
          "XX asr boshi.",
          "Ikkinchi jahon urushidan so‘ng.",
          "XX asrning so‘nggi o‘n yilligida."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q202",
        "prompt": "Abu Nasr Forobiyning ontologiya(borliq) ta’limoti mohiyati qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "xudo, aqli kul, faol aql, zuhal(saturn), nohid(yupiter), bahrom (mars), sayyoralar, quyosh, zuhro(venera), olam, oy",
          "stixiya, atom, apeyron, urug‘, son, suv, havo, tuproq, olov",
          "nusxalar, tushunchalar, atributlar, munosabatlar",
          "meta-ontologiya, predmet sohasi ontologiyasi, ma’lum bir vazifa ontologiyasi, tarmoq ontologiyasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q203",
        "prompt": "Borliq tushunchasiga berilgan to‘g‘ri ta’rifni toping.",
        "options": [
          "Borliq – olamdagi barcha moddiy va ideal, ob’ektiv va sub’ektiv tarzdagi mavjud narsa va hodisalarni ifodalovchi kategoriya",
          "Borliqning yagonaligi, birligi, bir butunligidir",
          "Borliq moddiylik va ma’naviylikning birligidir",
          "Ob’ektiv reallik sifatida mavjud bo‘lgan buyumlar, hodisalar, jarayonlardan iborat real moddiy borliq."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q204",
        "prompt": "Borliqning manzarasi qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "mifologik, diniy, tabiiy-ilmiy, falsafiy",
          "Substansiya(lot.substantia-mohiyat) va aksidensiya birligida",
          "Moddiy va ma’naviy borliq.",
          "Fenomenal va noumenal borliq."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q205",
        "prompt": "Yo‘qlikka berilgan ta’riflarning qaysi biri to‘g‘ri ?",
        "options": [
          "yo‘qlik borliqni inkor etadi va narsa va hodisa o‘zligini yo‘qotgan holatda “yo‘qlik”atamasi ishlatiladi.",
          "O‘tgan zamondagi borliq yo‘qlikdir.",
          "Borliq doim hozirgi zamonda mavjud bo‘ladi, yo‘qlik esa eskining yemirilishi.",
          "borliq va yo‘qlik o‘zaro dialektik aloqada mavjud."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q206",
        "prompt": "Paralogizm (grekcha ragalogizma (noto‘g‘ri muhokama) bu...",
        "options": [
          "Mulohazani isbotlash jarayonida bilmasdan turib yo‘l qo‘yilgan mantiqiy xato",
          "bu hal qilib bo‘lmaydigan zid fikrdan tashkil topgan mulohaza bo‘lib, unda ma’lum bir holatning chinligi ham, yolgonligi ham isbotlanishi mumkin",
          "Suhbatdoshni, raqibni, boshqa odamlarni aldash maqsadida ataylab, ongli ravishda amalga oshiriladigan mantiqiy xato",
          "Quyilgan ilmiy tezisni isbotlashning eng muhim vositasidir"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q207",
        "prompt": "Jamiyat tushunchasiga qaysi ta’rif to‘g‘ri deb hisoblaysiz?",
        "options": [
          "Kishilar faoliyati jarayonida ular o‘rtasida amal qiladigan axloqiy, diniy, siyosiy, iqtisodiy, huquqiy, mafkuraviy munosabatlarning, tarixan tarkib topgpn oila, din, davlat, axloq, siyosat, huquq va shu kabi ijtimoiy institutlarning majmuidir.",
          "Jamiyat -uni tashkil etuvchi kishilar faoliyatining majmuidir.",
          "Jamiyat-odamlarni uyushtirishning tarixiy shakllaridir.",
          "Ijtimoiy falsafa - jamiyat hayoti va rivojlanishining eng umumiy qonunlarini to‘g‘risidagi fan sohasidir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q208",
        "prompt": "Tarixiy taraqqiyotga nisbatan qanday metodologik yondoshuv tamoyil konsepsiyalari mavjud?",
        "options": [
          "Monistik va plyuralisik; chiziqli va davriy; formatsion va sivilizatsion.",
          "Iqtisodiy, kommunikatsiya vositalari, ayirboshlash va iste’mol qilish.",
          "Oila, davlat, jamoa, qishloq, shahar.",
          "Polis(Aristotel “Siyosat” asarida), ”Fozil odamlar shahri”(Abu Nasr Forobiy)."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q209",
        "prompt": "Tarixiy taraqqiyotga monistik yondoshuv konsepsiyasiga qaysi tamoyillar kiradi?",
        "options": [
          "Marksistik va postindustrial jamiyat nazariyalari.",
          "Ibtidoiy jamoa tuzumi, quldorlik, feodalizm, kaptializm, kommunizm.",
          "An’anaviy (sanoatlashguncha), sanoatlashgan, postsanoatlashgan (informatsion).",
          "Sivilizatsiyali(lat.(civilize-fuqarolarga yoki davlatga xos) yondoshuv."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q210",
        "prompt": "Plyuralistik yondoshuv mohiyati qaysi bandda to‘g‘ri berilgan?",
        "options": [
          "Insoniyat tarixining birligini inkor etib, sivilizatsiyalar mavjudligini tan oladi, ammo rivojlanishning yagona taraqqiyot jarayoni ekanligini inkor qiladi.",
          "Chiziqli(progressistik yoki tarqqiyotparvarlik)yondoshuv tarixiy taraqqiyot g‘oyasini jahon tarixiy rivoji dinamikasining asosini tashkil etuvchi umumiy qonun sifatida qabul qiladi.",
          "Davriy(siklik) yondoshuv tarix aylanma shaklda harakat qilib oxir oqibat o‘zining boshlang‘ich holatiga qaytadi.",
          "Sivilizatsion yondoshuv (XVIII asr yevropalik ma’rifatparvarlar)yaxlit tizimga tushirilgan ta’limot emas."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q211",
        "prompt": "Sivilizatsiya tushunchasini shotlandiyalik olim A.Fergyusson(1723-1816) jahon tarixiy jarayonining ma’lum bir bosqichini ifodalash uchun muomalaga kiritgan edi. Fransuz ma’rifatparvarlari esa aql-idrok va adolatga asoslangan jamiyat degan ma’noda qo‘lladi. Hozirgi vaqtda sivilizatsiya tushunchasi qaysi ma’nolarda ishlatilmoqda?",
        "options": [
          "Ijtimoiy rivojlanishning yovvoyilik va varvarlikdan keyin keladigan bosqichini, kishilik jamiyati rivojlanishining ma’lum bir bosqichini, ijtimoiy-iqtisodiy formatsiyani, geografik jihatdan farqlanuvchi birliklarni, diniy mansubligiga ko‘ra farqlanuvchi madaniy birliklarni, etnik asosga ko‘ra farqlanuvchi birliklarni, kelib chiqishi va planetar mansubligiga ko‘ra farqlanuvchi birliklarni.",
          "Sharq va G‘arb sivilizatsiyalarini anglash uchun.",
          "Mintaqaviy va hududiy sivilizatsiyalarni taqqoslash uchun.",
          "Madaniyat( arab.madina- shaharga oid)inson faoliyatining o‘ziga xos shakli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q212",
        "prompt": "Inson tushunchasiga bugungi ilmiy adabiyotlarda berilayotgan ta’rifning qaysi biri to‘g‘ri deb bilasiz?",
        "options": [
          "Inson - ijtimoiy-tarixiy jarayonning,moddiy va ma’naviy madaniyat taraqqiyotining sub’ekti bo‘lib,hayotning boshqa sohalari bilan genetik bog‘langan,ammo o‘zining mehnat qurollari yaratish va ishlab chiqarish qobiliyati,til va ongga egaligi tufayli ajralib turadigan bioijtimoiy mavjudotdir.",
          "Inson o‘z harakatlari va hissiyotlarining mas’ul sub’ekti sifatida amal qilish mumkinligini,u o‘zi idrok etayotgan narsalarni anglashi va o‘z tashabbuslarining ahamiyatini tushunishini anglatadi (shaxs).",
          "Praksiologiya (yun.praktikos-faol) falsafaning inson faoliyatini o‘rganadigan sohasidir.",
          "Inson -tana va ruhdan iborat bo‘lgan ijtimoiy mavjudotdir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q213",
        "prompt": "Inson faoliyatini boshqa tirik mavjudotlar faoliyatidan farqlovchi muhim xususiyatlar nima?",
        "options": [
          "Onglilik va maqsadga muvofiqlik",
          "Oqilonalik va irratsionallik",
          "Maqsadga muvofiqlik va hissiylik",
          "Iroda va tassavur qilish imkonining borligi"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q214",
        "prompt": "Strategiyaning qaysi yo‘nalishi ijtimoiy barqarorlikni ta’minlashga qaratilgan?",
        "options": [
          "Ijtimoiy islohotlar",
          "Iqtisodiy islohotlar",
          "Siyosiy islohotlar",
          "Ekologik islohotlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q215",
        "prompt": "Nazariya bu...",
        "options": [
          "bu ob’ektiv jarayonning mohiyati, qonuniyatlari haqida bir butun tasavvur beruvchi ilmiy bilimlarning oliy darajada sistemalashtirilgan va umumlashtirilgan shaklidir",
          "empirik material, turli faktlar, eksperiment, tajriba natijalaridir",
          "Qoidalar, qonunlar, turli aksioma va postulatlardir",
          "Mantiqiy qoida, argumentatsiya usullari, xulosa chiqarish shakllaridir"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q216",
        "prompt": "Dunyo fuqaroligini da’vo qilish, shuningdek, milliy va davlat suverenitetini rad etish, turli milliy an’ana, madaniyat hamda vatanparvarlik tuyg‘usidan voz kechish g‘oyasini ilgari suradigan qarash - bu?",
        "options": [
          "Kosmopolitizm",
          "Universalizm",
          "Millerizm",
          "Adventizm"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q217",
        "prompt": "O‘zining ijtimoiy shart-sharoitiga bog‘liq bo‘lgan va individual tarzda namoyon bo‘ladigan intellektual, emotsional va irodaviy sifatlariga ega bo‘lgan, o‘z hatti-harakati va faoliyatini anglay va boshqara oladigan konkret inson, alohida ijtimoiy individ deganda nima tushuniladi?",
        "options": [
          "Shaxs.",
          "Odam.",
          "Inson.",
          "Sotsial sub’ekt."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q218",
        "prompt": "Definitsiya nima?",
        "options": [
          "Tushunchalarni ta’riflash.",
          "Tushunchalar ustida mantiqiy amallar.",
          "Tushunchalarni chegaralash va bo‘lish.",
          "Tushunchalarni umumlashtirish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q219",
        "prompt": "Mantiqning predmeti nima?",
        "options": [
          "Tafakkur qonunlari, shakllari, usullari va vositalari.",
          "Hissiy va aqliy bilish shakllari.",
          "Tushuncha, hukm va xulosa chiqarish.",
          "Tafakkurning qonun-qoidalari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q220",
        "prompt": "Umumiy termin bilan bog‘langan ikkita qat’iy (sodda) hukmlardan (asoslardan) uchinchi hukm (xulosa) chiqarish nima?",
        "options": [
          "Sillogizm.",
          "Analogiya.",
          "Deduktiv xulosa chiqarish.",
          "Induktiv xulosa chiqarish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q221",
        "prompt": "Korrupsiya — shaxsning o‘z mansab yoki xizmat mavqeidan shaxsiy manfaatlarini yoxud o‘zga shaxslarning manfaatlarini ko‘zlab moddiy yoki nomoddiy naf olish maqsadida qonunga xilof ravishda foydalanishi, xuddi shuningdek bunday nafni qonunga xilof ravishda taqdim etish”,– degan ta’rif qaysi manbada berilgan?",
        "options": [
          "O‘zbekiston Respublikasining “ Korrupsiyaga qarshi kurashish to‘g‘risida”gi qonunda.",
          "O‘zbekiston Respublikasi Prezidenti tomonidan imzolangan “O‘zbekiston Respublikasida korrupsiyaga qarshi kurashish tizimini takomillashtirish bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida”gi Farmonida.",
          "Yuridik ensiklopediyada.",
          "Hadislarda."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q222",
        "prompt": "“Butunjahon korrupsiyaga qarshi kurashish kuni” qaysi xalqaro tashkilot tomonidan qaysi kun deb beligangan?",
        "options": [
          "2003 yil 21 noyabrdagi BMT Bosh Assambleyasining rezolyusiyasiga muvofiq 9 dekabr sanasi.",
          "1787 yilda qabul qilingan AQSh Konstitutsiyasiga muvofiq 9 dekabr sanasi.",
          "2003 yil 31 oktabrdagi BMTning Korrupsiyaga qarshi konvensiyasida 9 dekabr sanasi.",
          "2003 yil 9 dekabrda BMT tomonidan tashkil etilgan konferensiyada imzolangan xalqaro konvensiyaga muvofiq 9 dekabr sanasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q223",
        "prompt": "Falsafaning asosiy masalasining ikki tomoni qanday masalalar hisoblanadi?",
        "options": [
          "Ontologik masala va gnoseologik masala.",
          "Materialistik masala va idealistik masala.",
          "Monistik masala va dualistik masala.",
          "Monistik masala va plyuralistik masala."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q224",
        "prompt": "“Korrupsiya” atamasining lug‘aviy ma’nosi...",
        "options": [
          "«Korrupsiya» atamasi lotincha «corrumpere – corrupsio» degan so‘zdan olingan bo‘lib, o‘zbek tilida buzilish, aynish, tanazzul, sotib olish, sotib yuborish, degan ma’nolarni anglatadi",
          "davlat mulkini yuqori lavozimdagi amaldor shaxslar tomonidan o‘zlashtirish, o‘g‘irlash",
          "o‘zining manfaatlari yo‘lida o‘z lavozimini suiiste’mol qilish",
          "shaxsiy manfaatdorlik va jamiyat oldidagi burchining o‘rtasidagi to‘qnashuv"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q225",
        "prompt": "Yangi O‘zbekiston taraqqiyot strategiyasining asosiy maqsadi nima?",
        "options": [
          "Yuqoridagi barchasi",
          "Iqtisodiyotni barqaror rivojlantirish",
          "Ijtimoiy adolatni ta’minlash",
          "Demokratik islohotlarni amalga oshirish"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q226",
        "prompt": "Jamiyatda inson faoliyatini va ijtimoiy munosabatlarni tartibga solishni ta’minlovchi ijtimoiy me’yorlarga asosan nimalar kiradi?",
        "options": [
          "Huquqiy normalar va axloqiy me’yorlar.",
          "Davlat qonunlari va qarorlari.",
          "Huquq normalari.",
          "Axloq me’yorlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q227",
        "prompt": "Hukm (mulohaza)ning mantiqiy tarkibi necha qismdan iborat?",
        "options": [
          "3 qism, sub’ekt, predikat va bog‘lovchi.",
          "3 qism, tezis, antitezis va sintez.",
          "2 qism, mazmuni va hajmi.",
          "3 qism, asoslar, xulosalash va natija.."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q228",
        "prompt": "Bilish jarayonining ichki mantiqiy tuzilishi qanday bosqichlardan iborat?",
        "options": [
          "Hissiy bilish va mavhum tafakkur.",
          "Empirik va nazariy bilish.",
          "Sezgi, idrok va tasavvur.",
          "Tushuncha, mulohaza va xulosa chiqarish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q229",
        "prompt": "Dialektikani “al-jadal” atamasi bilan ifodalab, “Inson haqiqatga yoki falsafaga faqat dialektik bahs orqali erishishi mumkin”, degan fikr muallifi kim?",
        "options": [
          "Forobiy.",
          "Suqrot",
          "Aflotun.",
          "Geraklit."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q230",
        "prompt": "Ijtimoiy hayotning asosiy sohalariga muvofiq qadriyatlarning turlari qaysilar?",
        "options": [
          "Moddiy-iqtisodiy, ijtimoiy-siyosiy va ma’naviy qadriyatlar.",
          "Moddiy va iqtisodiy qadriyatlar.",
          "Individual (shaxsga doir), gruppaviy va umuminsoniy qadriyatkar.",
          "Ikkinchi darajali, muhim va oliy qadriyatlar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q231",
        "prompt": "Oilaning qadriyatga doir jihatlariga nimalar kiradi?",
        "options": [
          "Nikoh, oilaviy mulk-anjomlar, farzand va uning tarbiyasi.",
          "Sevgi-muhabbat, sog’lom turmush tarsi.",
          "Oilaviy mulk-anjomlar, oilaviy muhit, oilaviy munosabatlar.",
          "Qarindoshlik rishtalari, nikoh, sevgi-muhabbat, oilaviy muhit."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q232",
        "prompt": "O’zining ijtimoiy shart-sharoitiga bog’liq bo’lgan va individual tarzda namoyon bo’ladigan intellectual, emotsional va irodaviy sifatlariga ega bo’gan, o’z hatti-harakati va faoliyatini ahglay va boshqara oladigan konkret inson, alogida ijtimoiy individ deganda kim tushuniladi?",
        "options": [
          "Shaxs.",
          "Inson.",
          "Odam.",
          "Individ."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q233",
        "prompt": "Inson borlig’ining o’ziga xosligi nimada?",
        "options": [
          "Mehnat, til va ong.",
          "Aql-idrok, faoliat va bilim.",
          "Faoliyat, mehnat va ruhiyat.",
          "Mehnat, ruhiyat va ong."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q234",
        "prompt": "Jamiyat siyosiy tizimining bosh elementi nima?",
        "options": [
          "Davlat.",
          "Siyosiy tashkilotlar.",
          "Siyosiy partiyalar.",
          "Nodavlat notijorat tashkilotlar (NNT)."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q235",
        "prompt": "Inson va jamiyatga nisbatan madaniyatning qanday turlari farqlanadi?",
        "options": [
          "Shaxs madaniyati va ijtimoiy madaniyat.",
          "Moddiy va ma’naviy madaniyat.",
          "Axloqiy, siyosiy, huquqiy, diniy madaniyat.",
          "Iqtisodiy, siyosiy, ekologik va turmush madaniyati."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q236",
        "prompt": "Insonning o’z xulqini muayyan jamiyat axloq normalari nuqtai nazaridan turib axloqiy baholashi va nazorat qilishi, o’z hatti-harakatlarini va bu hatti-harakatlari bilan bog’liq bo’lgan his-tuyg’ularini, kechinmalarini o’zi tahlil qilishi nima deyiladi?",
        "options": [
          "Vijdon.",
          "Burch.",
          "Or-nomus, qadr-qimmat.",
          "Hayotning ma’nosi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q237",
        "prompt": "Axloqiy madaniyatning asosiy ko’rinishlariga nimalar kiradi?",
        "options": [
          "Muomala odobi, etiket, kasbiy odob (kasbiy axloq) kabilar.",
          "Halollik, rostguylik, xushmuomalalik, hayolilik, kamtarinlik.",
          "Insonparvarlik, vatanparvarlik, millatparvarlik, tinchliksevarlik.",
          "Sog’lom turmush madaniyati, axloqiy muhit, axloqiy progress."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q238",
        "prompt": "Tarixiylik tamoyiliga ko’ra san’at turlari qaysilar?",
        "options": [
          "Arxaik, an’anaviy, zamonaviy san’atlar.",
          "Epos, lirika, drama.",
          "Makoniy, zamoniy, makoniy-zamoniy san’atlar.",
          "Originallik (ijodiylik), haqqoniylik, xalqchillik."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q239",
        "prompt": "San’atning asosiy funksiyalari (vazifalari)ni belgilang.",
        "options": [
          "Insoniylashtirish, forig’lantirish, ma’naviy-evristik, tarbiyaviylik, kommunikativ, huzurbaxshlik.",
          "Majoziyligi, demokratikligi, ijtimoiyligi, individuallashtirish, tarixiylik, milliylik va umuminsoniylik birligi.",
          "Yangilik (originallik), ijodiylik, haqqoniylik, xalqchillik.",
          "Badiiylik, obrazlilik, forig’lantirish, huzurbaxshlik, ma’naviy-evristik, tarbiyaviy."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q240",
        "prompt": "Falsafaning asosiy masalasi nima?",
        "options": [
          "Odam va olam, ideallik va moddiylik, ong va materiyaning o‘zaro nisbati, munosabati masalasi.",
          "Moddiylik va ideallikning o‘zaro nisbatida nima birlamchi, belgilovchi. Moddiylikmi yoki ideallikmi? Materiyami yoki ongmi?",
          "Dunyoni bilish mumkinmi? Biz haqiqiy dunyo haqidagi o‘z tasavvurlarimiz va tushunchalarimizda borliqni to‘g‘ri aks ettirishga qodirmizmi, ongimiz voqelikning haqqoniy in’ikosi bo‘la oladimi?",
          "Odam va olam, ularning ibtidosi va intihosi, hayoti va o‘zaro munosabatlari masalasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q241",
        "prompt": "Ijtimoiy falsafa nima?",
        "options": [
          "Jamiyat va inson falsafasi bo‘lib, ijtimoiy hayot va uning rivojlanishining umumiy qonunlari to‘g‘risidagi falsafiy bilim soh.",
          "Kishilik jamiyati va uning ichki mexanizmlari, jarayonlari to‘g‘risidagi maxsus falsafiy fan.",
          "Olam, inson va jamiyatning ob’ektiv universal mohiyati to‘g‘risidagi, borliq, insonning olamga munosabati haqidagi falsafiy bilim sohasi.",
          "Insonning predmetli-o‘zgaruvchan, amaliy faoliyati to‘g‘risidagi falsafiy ta’limot."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q242",
        "prompt": "Olam moddiy va uning boshlang‘ich ibtidosi to‘rt unsur – suv, havo, tuproq va olovdan iborat deb ta’kidlanuvchi ta’limot qaysi?",
        "options": [
          "Qadimgi Hindiston chorvak-lokayata falsafiy ta’limoti.",
          "Qadimgi Misr mifologiyasi va falsafiy qarashlari.",
          "Qadimgi Xitoy daosizm falsafiy ta’limoti.",
          "Qadimgi Turon zardushtiylik diniy-falsafiy ta’limoti."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q243",
        "prompt": "O‘rta asrlar davri musulmon Sharqi xalqlarining madaniy-ma’naviy hayotida va falsafasining rivojlanishida qanday yo‘nalishlar mavjud edi?",
        "options": [
          "Rasmiy islom va uning ilohiyot ilmi va falsafasi hamda dunyoviy ilmlarga va inson aqlining qudratiga asoslanuvchi ratsionalistik falsafa.",
          "Islom dini g‘oyalarini asoslovchi diniy-falsafiy va dunyoviy ratsionalistik yo‘nalishlar.",
          "Mutakallimlar va mutaziliylarning diniy-falsafiy ta’limotlari.",
          "Islom ilohiyot falsafasi va tasavvuf diniy-falsafiy ta’limoti."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q244",
        "prompt": "O‘rta asrlar davri Sharq Uyg‘onish davri falsafasining yetakchi g‘oyaviy ta’limotlari qaysilar edi?",
        "options": [
          "Gumanizm, ratsionalizm va panteizm ta’limotlari.",
          "Peripatetizm, panteizm, universalizm, ikki haqiqat nazariyalari.",
          "Ma’rifatparvarlik, hurfikrlilik, ratsionalizm g‘oyalari.",
          "Gumanizm, ensiklopedizm, panteizm ta’limotlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q245",
        "prompt": "Antik yunon falsafasining eng dastlabki falsafiy maktab ta’limotini belgilang.",
        "options": [
          "Milet falsafa maktabi ta’limoti (Fales, Anaksimandr, Anaksimen).",
          "Atomistlar falsafiy ta’limoti (Levkipp, Demokrit, Epikur, Lukresiy Kar).",
          "Suqrot va suqrotchilar falsafasi.",
          "Eley falsafa maktabi (Ksenofan, Parmenid, Zenon)."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q246",
        "prompt": "Materializm qanday ta’limot?",
        "options": [
          "Materializm – materiya, tabiat, moddiylikni birlamchi va ongni ikkilamchi deb ta’kidlovchi falsafiy oqim",
          "Materializm – inson hayoti uchun moddiy ne’matlarni ustun qo‘yuvchi hayotiy prinsip.",
          "Materializm – narsa va hodisalarga sog‘lom to‘g‘ri qarash, hayotdan yiroq, hayoliy fikrlardan voz kechish.",
          "Materializm – butun olam atomlar va bo‘shliqdan iborat deb biluvchi ta’limot."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q247",
        "prompt": "Idealizm qanday falsafiy oqim?",
        "options": [
          "Idealizm – inson ongini birlamchi, moddiy olamni ikkilamchi deb tan oluvchi falsafiy oqim.",
          "Idealizm – hayotda g‘oyalar ahamiyatini asoslashga intilish, insonning mukammallikka intilishi.",
          "Idealizm – mavjudlikni g‘oyalar dunyosidan iborat deb biluvchi ta’limot.",
          "Idealizm – hayotdan yiroq, hayoliy fikr yuritish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q248",
        "prompt": "Biror fikr yoki bilimning chinligini boshqa fikrlar, bilimlar yordamida asoslab berish nima?",
        "options": [
          "Mantiqiy isbot.",
          "Analogiya.",
          "Paradoks.",
          "Sofizm."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q249",
        "prompt": "Mantiqiy isbotning tarkibi.",
        "options": [
          "Isbot tezisi, isbot asosi (argument), isbot usuli (demonstratsiya).",
          "Isbot asosi, isbot qoidasi, isbot usuli.",
          "Isbotlash qoidalari.",
          "Deduktiv, induktiv, traduktiv, to‘g‘ridan-to‘g‘ri, chetdan isbotlar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-5-q250",
        "prompt": "Zend nima?",
        "options": [
          "Sharhlangan matn",
          "Avesto qismi",
          "Avesto kirish qismi",
          "Qasida"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "fal-6",
    "title": "6-qism: Falsafa kategoriyalari, axloq va estetika asoslari (251-300 savollar)",
    "description": "Falsafa",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "fal-6-q251",
        "prompt": "Zend nima?",
        "options": [
          "Sharhlangan matn",
          "Avesto qismi",
          "Avesto kirish qismi",
          "Qasida"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q252",
        "prompt": "“Ezgu fikr, ezgu so‘z, ezgu amal” g‘oyasi kim tomonidan ilgari surilgan?",
        "options": [
          "Zardusht",
          "G‘azzoliy",
          "Nasafiy",
          "Navoiy"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q253",
        "prompt": "Jamiyatning muhim kichik tizimlarini ko‘rsating?",
        "options": [
          "Iqtisodiy, ijtimoiy, siyosiy, ma'naviy",
          "Oilaviy, moddiy, siyosiy",
          "Harbiy, mahalliy, iqtisodiy",
          "Oila, mahalla, davlat, xalqaro hamjamiyat"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q254",
        "prompt": "Falsafa qanday ta’limot?",
        "options": [
          "Tabiat, jamiyat va inson tafakkuri taraqqiyotining eng umumiy qonunlari to‘g‘risidagi fan.",
          "“Fanlarning fani, otasi”.",
          "“Donishmandlikni sevish”.",
          "Dunyoqarash."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q255",
        "prompt": "Falsafaning asosiy masalasi.",
        "options": [
          "Tafakkurning borliqqa munosabati.",
          "Tabiat va inson munosabati.",
          "Inson muammosi.",
          "Baxt va farovonlik masalasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q256",
        "prompt": "Dunyoqarash nima?",
        "options": [
          "Insonning tabiat, jamiyat va boshqa kishilar to‘g‘risidagi qarashlari va tasavvurlari majmui.",
          "Tabiat to‘g‘risidagi qarashlar va tasavvurlar majmui.",
          "Borliq va materiya to‘g‘risidagi qarash va tasavvurlar.",
          "Mexanistik va metafizik materialzm."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q257",
        "prompt": "Dunyoqarashning tarixiy tiplari.",
        "options": [
          "Afsonaviy, diniy, falsafiy.",
          "Afsonaviy, badiiy, diniy, falsafiy",
          "Afsonaviy, diniy, badiiy, axloqiy.",
          "Axloqiy, afsonaviy, ilmiy, falsafiy."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q258",
        "prompt": "Materializmning tarixiy shakllari.",
        "options": [
          "Sodda, stixiyali materializm, mexanistik materializm, vulgar materializm, dialektik materialism.",
          "Sodda materializm, metafizik materializm, tabiiy-ilmiy materializm, dialektik materialism.",
          "Mushohadaviy materializm, mexanistik materializm, metafizik materializm, dialektik materialism.",
          "Mexanistik va metafizik materialzm"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q259",
        "prompt": "Idealizmning asosiy shakllari.",
        "options": [
          "Obyektiv va subyektiv idealizm.",
          "Diniy idealizm, obyektiv idealizm.",
          "Agnostitsizm, obyektiv idealizm.",
          "Solipsizm, subyektiv idealizm."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q260",
        "prompt": "Falsafaning qaysi funksiyasi yetakchi o‘rinni egallaydi?",
        "options": [
          "Dunyoqarash funksiyasi.",
          "Tarbiyaviy funksiya.",
          "Gnoseologik funksiya.",
          "Ontologik funksiya."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q261",
        "prompt": "Borliq.",
        "options": [
          "Real, naqd mavjud bolgan narsa va hodisalardirni ifodalovchi tushuncha.",
          "Moddiy reallik.",
          "Tabiat.",
          "Materiya."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q262",
        "prompt": "Materiya.",
        "options": [
          "Obyektiv reallikni ifodalovchi falsafiy tushunch",
          "Bizni o‘rab turgan narsalar.",
          "Narsa va jismlar.",
          "Sezgilarimiz kombinatsiyasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q263",
        "prompt": "Harakat.",
        "options": [
          "Materiyaning yashash usuli, uning har qanday o‘zgarishi.",
          "Energiya aylanishi.",
          "Narsalarning o’rin almashinuvi.",
          "Sokinlikning buzilishi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q264",
        "prompt": "Makon.",
        "options": [
          "Materiyaning tuzulishi, ko‘lami va joylashuvini ifodalovchi falsafiy tushuncha.",
          "Borliq mavjudligini, davomiyligini ifodalovchi falsafiy tushuncha.",
          "Narsalarning joylashuv usuli.",
          "Borliq shaklini ifodalovchi tushuncha."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q265",
        "prompt": "Mantiqning predmeti.",
        "options": [
          "To‘g‘ri tafakkurning qonunlari, shakllari, usullari va metodlari.",
          "Hissiy va aqliy bilishlar.",
          "Tushuncha, hukm, xulosa.",
          "Tafakkurning qonunlari va qoidalari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q266",
        "prompt": "Tafakkur shakllari.",
        "options": [
          "Tushuncha, hukm, xulosa.",
          "Ong va aql.",
          "G‘oyalar va fikrlar.",
          "Aqliy qobiliyatlar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q267",
        "prompt": "Hukm.",
        "options": [
          "Buyum va hodisalar belgilarini ijobiy yoki salbiy tarzda aks ettiradi.",
          "Buyum va hodisalar belgilarini ijobiy tarzda aks ettiradi.",
          "Buyum va hodisalar belgilarini salbiy tarzda aks ettiradi.",
          "Buyum va hodisalar belgilarini haqqoniy yoki yolg’on tarzda aks ettiradi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q268",
        "prompt": "Etikaning predmeti.",
        "options": [
          "Axloqning vujudga kelishi va taraqqiyoti qonunlari.",
          "Jamiyatning axloqiy hayoti.",
          "Axloqning tuzilishi.",
          "Axloqning xususiyatlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q269",
        "prompt": "Axloq.",
        "options": [
          "Kishilar xulq-atvorlarida amal qiladigan prinsiplar, qoidalar va normalar majmui.",
          "Shaxs axloqiy sifatlari majmui.",
          "Jamiyatning ma’naviy hayoti.",
          "Tarbiya vositasi"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q270",
        "prompt": "Axloqning tuzilishi.",
        "options": [
          "Axloqiy ong, axloqiy munosabatlar, axloqiy amaliyot.",
          "Axloq qoidalari va normalari.",
          "Axloqiy his-tuyg’ular, axloqiy e’tiqod.",
          "Axloqiy qarashlar, axloqiy ideal."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q271",
        "prompt": "Axloq prinsiplari.",
        "options": [
          "Axloqning umumiy talablari.",
          "Axloqiy ong shakli.",
          "Inson faoliyatining bosh yo‘nalishi.",
          "Axloqiy normalar asosi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q272",
        "prompt": "Vatanparvarlik.",
        "options": [
          "Vatanga muhabbat, unga sodiqlik, uning manfaatlari uchun xizmat qilishga intilish.",
          "Vatanga ongli xizmat qilish.",
          "Vatan yutiqlaridan faxrlanish.",
          "O‘z Vatani kelajagiga ishonch."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q273",
        "prompt": "Internatsionalizm.",
        "options": [
          "Xalqlar, millatlar o‘rtasidagi xalqaro hamkorlik, o’zaro yordam.",
          "Millatlar o’rtasidagi o’zaro munosabatlar.",
          "Davlat va siyosiy partiyalar o‘rtasidagi ittifoq.",
          "Axloq prinsipi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q274",
        "prompt": "Hozirgi zamon estetikasining predmeti.",
        "options": [
          "Insonning voqelikka estetik munosabati, estetik faoliyati, estetik ong va san’atning umumiy qonunlari.",
          "Go‘zallik haqidagi fan.",
          "San’at haqidagi fan.",
          "Estetik qadriyatlar haqidagi fan."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q275",
        "prompt": "Insonning voqelikka estetik munosabati.",
        "options": [
          "Estetik obyekt va estetik subyekt o‘rtasidagi o‘zaro ta’sirlar.",
          "Insonning tabiatga munosabati.",
          "Go‘zallikdan zavqlanish.",
          "Barcha javoblar xato."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q276",
        "prompt": "Estetik obyekt.",
        "options": [
          "Estetik xususiyatlarga, sifatlarga ega bo‘lgan va inson hamda jaiyatning estetik ehtiyojlarini qondirish uchun xizmat qiladigan buyum va hodisalsr.",
          "Tabiat buyumlari va ijtimoiy hodisalar.",
          "Inson faoliyati.",
          "Tabiat va jamiyatning go‘zal buyumlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q277",
        "prompt": "Estetik subyekt.",
        "options": [
          "Estetik hodisalar, qadriyatlarni idrok etish, bilish, baholash va yaratishga qobiliyatli normal, sog‘lom inson va jamiyat.",
          "Inson va jamiyat.",
          "Barcha odamlar.",
          "Z amonaviy odamlar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q278",
        "prompt": "Estetik faoliyat.",
        "options": [
          "Inson va jamiyatning estetik hodisalar, qadriyatlarni bilish, baholash va ozgartirishga qaratilgan faoliyati.",
          "Badiiy faoliyat, san’at ijod etish.",
          "Go‘zallikni to‘g‘ri bilish va tushunish qobiliyati.",
          "Chiroyli narsalar va buyumlar yaratish faoliyati."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q279",
        "prompt": "Zamon.",
        "options": [
          "Narsa va hodisalarning ketma-ketligi, izchilligi, davomiyligini ifodalovchi materiyaning yashash usuli",
          "Cheksizlik.",
          "Hodisalarning ketma-ket kelishi.",
          "Narsa va hodisalar o‘zgarishining ifodasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q280",
        "prompt": "Dunyoning birligi nimada?",
        "options": [
          "Dunyoning moddiyligida.",
          "Dunyoda umumiy qonunlarning mavjudligida.",
          "Dunyoning borligida.",
          "Dunyo haqidagi fikrning yagonaligida."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q281",
        "prompt": "Dialektika.",
        "options": [
          "Aloqadorlik va taraqqiyot qonunlari to‘g‘risidagi ta’limot.",
          "Harakat, o‘zgarish, rivojlanish to‘g‘risidagi ta’limot.",
          "Nazariy va amaliy bilimlarning, tadqiqotlarning usuli.",
          "Kategoriya va qonunlar tizimi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q282",
        "prompt": "Metafizika.",
        "options": [
          "Olamdagi aloqa va bog‘lanishlarni, ziddiyatlarni, taraqqiyotni inkor etadi.",
          "Dialektikaga zid metod.",
          "“Fizikadan keyin” degani.",
          "Kategoriya va qonunlar tizimi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q283",
        "prompt": "Metafizikaning muqobillari.",
        "options": [
          "Dogmatika, relyativizm, sofistika, eklektika.",
          "Idealizm va materializm.",
          "Dunyoqarash va mafkura.",
          "Harakat, o‘zgarish,"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q284",
        "prompt": "Dialektikaning tarixiy tiplari.",
        "options": [
          "Antik davr dialektikasi, o‘rta asrlar davri dialektikasi, nemis klassik falsafasi dialektikasi, dialektik va tarixiy materializm.",
          "Obyektiv va subyektiv.",
          "Materialistik va idealistik.",
          "Sinergetika."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q285",
        "prompt": "Taraqqiyotning sababini dialektikaning qaysi qonuni ochib beradi?",
        "options": [
          "Qarama-qarshiliklar birligi va kurashi qonuni.",
          "Dialektikaning qonun va kategoriyalari.",
          "Miqdor o‘zgarishlarining sifat o‘zgarishlariga o‘zaro o‘tish  qonuni.",
          "Inkorni inkor qonuni."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q286",
        "prompt": "Taraqqiyot jarayonining yo‘nalishini, qat’iy natijasini, o‘zgarishlar tendensiyasini dialektikaning qaysi qonuni ifoda etadi?",
        "options": [
          "Miqdor o‘zgarishlaridan sifat o‘zgarishlariga o‘zaro o‘tish qonuni.",
          "Qarama-qarshiliklar birligi va kurashi qonuni.",
          "Inkorni inkor  qonuni.",
          "Dialektikaning qonun va kategoriyalari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q287",
        "prompt": "Umumiylik.",
        "options": [
          "Yakka narsalar va hodisalardagi obyektiv mavjud tomonlar, xossalar, belgilar va ular o‘rtasidagi aloqa va munoabatlar",
          "Yakkalikka bog‘liq real, mavjud narsalar.",
          "Doimiy takrorlanadigan belgilar yig‘indisi.",
          "Yakka narsalarning yig‘indisi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q288",
        "prompt": "Qism.",
        "options": [
          "Narsa va hodisalarning alohida qismi, o‘ziga xosligi, mustaqilligi, barqarorligi, abadiyligi.",
          "Narsalarning alohida bolaklari, elementari.",
          "Eng mayda narsalar, zarrachalar.",
          "Alohida sifat va miqdor aniqligiga ega bo‘lgan narsa, hodisa."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q289",
        "prompt": "Butun.",
        "options": [
          "Narsa va hodisalar bo’laklarining yaxlitligi, o‘zaro ichki bog‘liqligini ifodalovchi tushuncha.",
          "Jismlarning ko‘lami.",
          "Moddiy dunyodagi umumiy aloqalar va xususiyatlar.",
          "Bir necha narsalarning qo‘shilishi va yig‘indisi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q290",
        "prompt": "Xulosa.",
        "options": [
          "bir yoki bir necha hukmlardan yangi hukm hosil qilish.",
          "Buyum va hodisalar to‘g‘risidagi ehtimoliy fikr.",
          "Obyektiv reallikni bevosita bilish.",
          "Inson tafakkurining zaruriy shakli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q291",
        "prompt": "Mantiqiy isbotning tarkibi.",
        "options": [
          "Tеzis, argumentlar, isbot usuli.",
          "Asoslar, qoida, isbot usuli.",
          "Isbot qoidalari.",
          "Induktiv, deduktin, traduktiv isbotlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q292",
        "prompt": "Mantiqiy isbot turlari.",
        "options": [
          "Deduktiv, induktin, traduktiv.",
          "Isbot tеzisi, аrgumenti.",
          "Bevosta (to‘g‘ridan-to’g‘ri) va bavosita (vositali) isbot etishlar.",
          "Induktiv, deduktiv."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q293",
        "prompt": "Коllektivizm.",
        "options": [
          "Kishilarning ozaro yordam, hamkorlik, intizom va mas’uliyatga qaratilgan ongli munosabati.",
          "Shaxsning jamiyat oldidagi mas’uliyati.",
          "Ijtimoiy manfaatdorlik va erkin hamkorlik hissi.",
          "Shaxs va jamoa ortasidagi o‘zaro aloqa."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q294",
        "prompt": "Gumanizm.",
        "options": [
          "Insonga muhabbat va hurmat, u haqda g‘amxo‘rlik.",
          "Erkaklar va ayollar o‘rtasidagi tenglik.",
          "Barcha kishilarning qadri.",
          "Odamlarning jamiyat oldida tengligi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q295",
        "prompt": "Prinsipiallik.",
        "options": [
          "O‘ziga va boshqalarga nisbatan talabchanlik.",
          "Shaxsning o’z talablariga qat’iy amal qilishi.",
          "O‘z xatti-harakatlarida qat’iyatlilik.",
          "Tasodifiy, o‘tkinchi his-tuyg’ular va kayfiyatlarga berilmaslik."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q296",
        "prompt": "Xushmuomalalik.",
        "options": [
          "Odamlarga nisbatan ichki hurmatning tashqi ifodasi.",
          "Inson hayotining kundalik zaruriy sharti.",
          "Jamiyat va shaxs ma’naviy madaniyati belgisi.",
          "Insonning tarbiyalanganlik belgisi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q297",
        "prompt": "Halollik.",
        "options": [
          "O’z kamchiliklarini tan olish va o‘z-o‘zini tanqid.",
          "Insonning ma’naviy e’tiqodi.",
          "Sotqinlik qilmaslik.",
          "Qat’iyatlik, o‘z so‘ziga sodiqlik."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q298",
        "prompt": "Estetik ong.",
        "options": [
          "Ijtimoiy ong shakli.",
          "Iinson ongi.",
          "San’atning in’ikosi.",
          "Go‘zallikning aksi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q299",
        "prompt": "Estetiklik.",
        "options": [
          "Estetikaning eng katta, keng qamrovli kategoriyasi (metakategoriya).",
          "Estetika tushunchasi.",
          "Estetik nazariya.",
          "Estetik ong shakli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-6-q300",
        "prompt": "Go‘zallik.",
        "options": [
          "Estetikaning mukammal, yaxlit, uyg’un, ijobiy, umuminsoniy hodisalarni aniqlash va ijobiy baholash uchun ishlstiladigan tushunchasi.",
          "Estetika kategoriysi.",
          "Chiroylilik.",
          "San’at asari."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "fal-7",
    "title": "7-qism: Estetika kategoriyalari, Dialektika qonunlari va tushunchalari (301-350 savollar)",
    "description": "Falsafa",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "fal-7-q301",
        "prompt": "Xunuklik.",
        "options": [
          "Estetikaning nuqsonli-cheklangan, buzuq, ahmoqona, yaramas, g‘ayri-insoniy hodisalar, munosabatlarni aniqlash va salbiy baholash uchun xizmant qiladigan tushunchasi.",
          "Noxush va chiroyli bo‘lmagan narsalar, hodisalar.",
          "Kulgili hodisalar.",
          "Go‘zallikning ziddi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q302",
        "prompt": "Ulug‘vorlik.",
        "options": [
          "Estetikaning tengi yo‘q, yuda yirik, ajoyib hodisalar, munosabatlarni aniqlash va baholash uchun xizmat qiladigan tushunchasi.",
          "Estetik tushuncha.",
          "Qandaydir baland, katta, yirik narsa va hodisalar.",
          "Borliqning ijobiy, bahaybat buyum va hodisalari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q303",
        "prompt": "Tafakkur shakllari.",
        "options": [
          "Tushuncha, hukm, xulosa.",
          "Ong va aql.",
          "G‘oyalar va fikrlar",
          "Aqliy qobiliyatlar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q304",
        "prompt": "Sabab.",
        "options": [
          "Biror oqibatni keltirib chiqaradigan jarayonlar.",
          "Hodisaning kelib chiqishi uchun bahona.",
          "Inson ongiga xos xususiyat.",
          "Narsalar vujudga kelishining ibtidosi, boshlanishi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q305",
        "prompt": "Оqibat.",
        "options": [
          "Sabab natijasida kelib chiqqan hodisa.",
          "Natija.",
          "Taqdir.",
          "Narsaning tugashi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q306",
        "prompt": "Imkoniyat.",
        "options": [
          "Narsa-hodisalar vujudga kelishi uchun zarur jarayonlar.",
          "Shart-sharoit.",
          "Imtiyoz.",
          "Olam mavjudligi shakli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q307",
        "prompt": "Voqelik.",
        "options": [
          "Imkoniatning ro‘yobga chiqishi.",
          "Mavjudlik.",
          "Hayot.",
          "Bor narsalar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q308",
        "prompt": "Mazmun.",
        "options": [
          "Narsa-hodisani tashkil etuvchi barcha qismlar, tomonlar.",
          "Narsaning ichki qismi.",
          "Narsaning mohiyati.",
          "Narsaning borlig’i."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q309",
        "prompt": "Shakl.",
        "options": [
          "Mazmunning yashash shakli.",
          "Narsaning tashqi tomoni.",
          "Ko‘zga ko‘rinib turgan narsalar.",
          "Mazmunning tashqi ifodasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q310",
        "prompt": "Sifat.",
        "options": [
          "Narsaga muayyanlik bag‘ishlovchi, uni boshqalaridan ajratib turuvchi, barqarorlik kasb etuvchi xossa va xususiyatlarining majmuasi.",
          "Xossa va xususiyatlar birligi.",
          "Narsalarning o‘ziga xos tomonlari, belgilari.",
          "Narsalarni bir-biridan ajratib turuvchi xususiyatlar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q311",
        "prompt": "Zaruriyat.",
        "options": [
          "Muayyan sharoitda albatta yuz berishi lozim bo‘lgan narsa.",
          "Harakat va rivojlanish manbai.",
          "Narsalarning qonuniy o‘zgarishi.",
          "Voqea va hodisalarning yuz berish sharti."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q312",
        "prompt": "Tasodif.",
        "options": [
          "Kutilmaganda sodir bo‘ladigan hodisa.",
          "Muqarrar sodir bo‘ladigan hodisa.",
          "Zaruriyatning namoyon bo‘lishi.",
          "Sababsiz vujudga keladigan voqea."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q313",
        "prompt": "Ong.",
        "options": [
          "Yuksak darajada tashkil topgan materiya – inson miyasining xossasi, in’ikosning oliy ruhiy shakli.",
          "Ma’naviyatning ifodasi.",
          "Inson mohiyatining in’ikosi.",
          "Fikrlash shakli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q314",
        "prompt": "In’ikos nimaga xos xususiyat?",
        "options": [
          "Butun materiyaga.",
          "Tirik mavjudotlarga.",
          "Inson va hayvonlarga.",
          "Faqat insonga."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q315",
        "prompt": "Raddiyа.",
        "options": [
          "Opponent ilgari surgan tezisni inkor etish.",
          "Tezisga qarshi antitezis keltirish.",
          "Tezisning chinligini isbotlash.",
          "Tezisning yolg‘onligini isbotlash."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q316",
        "prompt": "Ayniyat qonuni.",
        "options": [
          "Fikrning o‘z mazmunini yo‘qotmasdan o‘z-o‘zicha aynanligi.",
          "Buyumlarning o‘zaro tengligi.",
          "Fikrning aniqligi.",
          "Mantiqning birinchi qonuni."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q317",
        "prompt": "Nozidlik qonuni.",
        "options": [
          "Ikki zid fikrlarning bir vaqtda chin va yolg‘on b’lishi.",
          "Ikki zid fikrlarning bir vaqtda chin bo‘lishi.",
          "Ikki zid fikrlarning bir vaqtda yolg‘on bo‘lishi.",
          "Mantiqning ikkinchi qonuni."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q318",
        "prompt": "Haqqoniylik.",
        "options": [
          "Haqiqatni aytishga ehtiyoj, muvaffaqiyatlarni to‘g’ri baholash.",
          "Qalbning tog‘riligi.",
          "Har qanday sharoitlarda ham haqiqatni aytish.",
          "Yolg'on va aldashni bilmaslik."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q319",
        "prompt": "Kamtarlik.",
        "options": [
          "O‘z xizmatlari va kamchiliklariga tanqidiy munosaba",
          "O‘z xizmatlari bilan maqtanmaslik.",
          "Insonning o‘ziga va boshqalarga nisbatan qat’iyatliligi.",
          "Matonat, samimiylik, sofko’ngillilik."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q320",
        "prompt": "Etikaning qaysi kategoriyasida yomon, axloqsiz hatti-harakatlar, munosabatlar ifodalanadi?",
        "options": [
          "Yomonlik.",
          "Sha’n va shon-sharaf.",
          "Vijdon.",
          "Baxt."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q321",
        "prompt": "Yaxshilik.",
        "options": [
          "Ijobiy hatti-harakatlar va xulq-atvorlarni ifodalaydi.",
          "Ne’mat.",
          "Umumiy ne’matlar, ijtimoiy manfaatlar.",
          "O‘z-o‘zicha qadrlash."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q322",
        "prompt": "Axloqiy munosabatlarni tartibga soluvchi, taqdirlash va axloqiy talablarning miqdoriy mezoni.",
        "options": [
          "Adolat.",
          "Vijdon.",
          "Baxt.",
          "Burch."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q323",
        "prompt": "Shaxs tomonidan o‘z qadr-qimmatini va jamiyat tomonidan bu qadr-qimmatni tan olish.",
        "options": [
          "Shon-sharaf va or-nomus.",
          "Baxt.",
          "Vijdon.",
          "Muhabbat."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q324",
        "prompt": "Tubanlik.",
        "options": [
          "Estetikaning favqulodda buzuq, xavfli, yaramas hatti-harakatlar, munosabatlarni aniqlash va baholash uchun xiznmat qiladigan tushunchasi.",
          "Kulgili hodisalar.",
          "Xunuk va yaramas hodisalar.",
          "Ulug‘vorlining teskarisi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q325",
        "prompt": "Dramatiklik.",
        "options": [
          "Estetikaning juda keskin, murakkab, qizg‘in sodir bo‘ladigan ijtimoiy ziddiyatlari, konfliktli vaziyatlari va munosabatlarni ifodalovchi tushunchasi.",
          "Estetika kategoriyasi.",
          "Borliqning go‘zal va ulug‘vor hodisalari.",
          "Dramatik asarlar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q326",
        "prompt": "Tragiklik.",
        "options": [
          "Estetikaning ilg‘or, progressiv kuchlarning reaksion, konservativ kuchlarga qarshi ayovsiz, tarixan zaruriy kurashi natijasida yuz beradigan o‘lim, falokat, azob-uqubat, baxtsizlikni ifodalaydigan tushunchasi.",
          "O‘lim, halokatni aks ettiruvchi san’at asarlari.",
          "Tрragediya.",
          "Qo‘rqinchli va dahshatli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q327",
        "prompt": "Komiklik.",
        "options": [
          "Estetikaning eskirib, umrini o‘tab bo‘lgan qoloq ijtimoiy hodisalar, hatti-harakatlar, munosabatlarni aks ettiruvchi tushunchasi.",
          "Kulgililik va kulgi.",
          "San’atning komik asarlari.",
          "Satira va yumor."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q328",
        "prompt": "Тragikomiklik.",
        "options": [
          "Estetikaninig tragiklik va komiklikning bir vaqtda uyg‘unlashinb ketishini ifodalovchi tushunchasi.",
          "Tragediya va komediyaning omuxta bolib qorishib ketishi.",
          "O‘lim, halokat va kulgining qorishib ketishi.",
          "Dramatiklikning ko’rinishi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q329",
        "prompt": "Hissiy bilishning shakllari.",
        "options": [
          "Sezgi, idrok, tasavvur.",
          "Sezgi va idrok.",
          "Tasavvur va xotira.",
          "Diqqat, idrok, tasavvur, tushuncha."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q330",
        "prompt": "Aqliy bilish.",
        "options": [
          "Narsa-hodisalarning mohiyati-mazmunini tafakkur yordamida bilib olish.",
          "Bilishning yuqori bosqichi.",
          "Tushuncha, hukm, xulosa.",
          "Fikr yuritish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q331",
        "prompt": "Haqiqat.",
        "options": [
          "Bilimlarning obyektiv borliqqa muvofiq bo‘lgan va amaliyotda sinalgan mazmuni, bilish rivojlanishining yakuni va omili.",
          "Bilish nazariyasining bosh kategoriyasi, olam haqidagi bilimlar majmui.",
          "Dilimlarning ziddiyatsizligi, voqelik in’ikosining natijasi.",
          "Bilimlarning samaradorligi, foydaliligi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q332",
        "prompt": "Jamiyat.",
        "options": [
          "Obyektiv mavjud bo‘lib, o‘zining rivojlanish qonunlariga ega bo‘lgan ijtimoiy munosabatlar majmuidir.",
          "Kishilarning jamoaviy bo‘lib yashashlari.",
          "Tabiatning bir qismi.",
          "Aql va amaliyot orqali vujudga keluvchi ma’naviy hodisa."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q333",
        "prompt": "Jamiyatning asosiy sohalari.",
        "options": [
          "Iqtisodiy, ijtimoiy, siyosiy, ma’naviy.",
          "Iqtisod, ma’naviyat, siyosat.",
          "Madaniyat va maorif.",
          "Davlat tashkilotlari va muassasalari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q334",
        "prompt": "Inson.",
        "options": [
          "Biosotsial mavjudot.",
          "Tabiatning bir bo‘lagi.",
          "Tirik, aqlli mavjudot.",
          "Ijtimoiy mavjudot."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q335",
        "prompt": "Shaxs shakllanishi jarayoni.",
        "options": [
          "Ijtimoiylashuv.",
          "Mehnat.",
          "Ta’lim-tarbiya.",
          "Madaniyat."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q336",
        "prompt": "Madaniyat.",
        "options": [
          "Inson mehnati va aql-idroki yordamida yaratilgan barcha moddiy va ma’naviy boyliklarning majmui.",
          "Inson mehnati va aqli bilan yaratilgan barcha narsalar.",
          "Butun insoniyat yaratgan barcha narsalar.",
          "Insoniyat yaratgan barcha ma’naviy boyliklar majmui."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q337",
        "prompt": "Sivilizatsiya.",
        "options": [
          "Muayyan tarixiy taraqqiyotda jamiyat moddiy va ma’naviy hayoti rivojlanishining yetuklik darajasi.",
          "Urbanizatsiyalashgan (shaharlashgan) jamiyat.",
          "To‘la erkinlik, ozodlik jamiyati.",
          "Insonning o‘zgartiruvchilik faoliyati natijasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q338",
        "prompt": "Qadriyat.",
        "options": [
          "Inson va jamiyat uchun qimmatdor, ahamiyatdor bolgan narsa va hodisalar.",
          "Ma’naviy boyliklar yig‘indisi.",
          "Millat, elat, ijtimoiy guruhlarning manfaatlari.",
          "Tenglik, haqiqat, yaxshilik, halollik fazilatlari yig‘indisi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q339",
        "prompt": "Global so‘zining ma’nosi.",
        "options": [
          "Frans. globus – Yer shari.",
          "Butun Yer shari, barcha mamlakatlar, xalqlarga xos masalalar;",
          "Lotincha global – eng umumiy, umumbashariy.",
          "Barcha javoblar to‘g‘ri."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q340",
        "prompt": "Uchinchisini istisno qonuni.",
        "options": [
          "Ikki qarama-qarshi hukmlardan biri yolg‘on bo‘lib, boshqasi chin bo‘ladi, uchinchisi esa berimagan.",
          "Ikki qarama-qarshi hukmlardan biri yolg‘on bo‘lib, ikkinchisi chin bo‘lishi mumkin, uchinchisi esa berilmagan.",
          "Ikki qarama-qarshi hukmlardan biri chindir.",
          "Ikki qarama-qarshi hukmlardan biri yolg’ondir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q341",
        "prompt": "Yetarli asos qonuni.",
        "options": [
          "Har qanday fikr isbotlangan bo‘lishi uchun yetarli asoslar va dalillarga ega bo‘lishi kerak.",
          "Mantiqning to’rtinchi qonuni.",
          "Har qanday mulohaza chin bo‘lishi kerak.",
          "Har qanday fikrning chinligi isbotlanishi lozim."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q342",
        "prompt": "Bilimlar rivojlanishining mantiqiy shakllari.",
        "options": [
          "Muammo, faraz, nazariya.",
          "Tushuncha, hukm, xulosa.",
          "Ong va bilish.",
          "Ilmiy nazariyalar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q343",
        "prompt": "Burch.",
        "options": [
          "Jamiyat, davlat, jamoa oldidagi mas’uliyat.",
          "Axloq normalarini ongli va ixtiyoriy bajarish.",
          "Mas’uliyatni anglash.",
          "Shaxsiy manfaatlarni ijtimoiy manfaatlarga bo’ysundirish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q344",
        "prompt": "Baxt.",
        "options": [
          "Insonning jismoniy va ma’naviy kuchlarining to’laqonligi.",
          "Omad.",
          "Saodatlilik, xotirjamlik, qanoatlanganlik.",
          "Odamning normal hayoti."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q345",
        "prompt": "Muhabbat.",
        "options": [
          "O‘z obyektiga nisbatan samimiy, sodiq munosabat.",
          "Erkak va ayol o‘rtasidagi o’zaro munosabat.",
          "Jinslarning o‘zaro manfaatdorlik hissi.",
          "Do’stlikning oliy darajadagi ko‘rinishi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q346",
        "prompt": "Vijdon.",
        "options": [
          "Shaxsning o‘z hatti-harakatlarini o‘zi baholashi va nazorat qilisyi.",
          "Shaxs madaniyati.",
          "Odam va hayvonga xos bo‘lgan uyat hissi.",
          "Etika kategoriyasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q347",
        "prompt": "Hayot ma’nosi (mazmuni).",
        "options": [
          "Inson hayot-faoliyatiining umumiy yo‘nalishi.",
          "Ijtimoiy taraqqiyot vazifalarini hal qilishga yo‘naltirilgan faoliyat.",
          "Baxtga erishish.",
          "Hayotdagi omadlilik."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q348",
        "prompt": "Axloqiy tarbiyaning maqsadi.",
        "options": [
          "Axloqiy barkamol insonni shakllantirish.",
          "Axloqiy bilimlar berish.",
          "Axloqiy targ‘ibot.",
          ") Hayotdagi omadlilik."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q349",
        "prompt": "Qahramonlik.",
        "options": [
          "Estetikaning eng muhim, ajralib turuvchi hatti-harakatlar, munosabatlarni ifodalovchi tushunchasi.",
          "Go'zallik va ulug'vorlikning uygunlashuvi.",
          "Qahramon va qahramonlik.",
          "Afsonaviylik, gayri tabiiylikning aksi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-7-q350",
        "prompt": "Badiiylik.",
        "options": [
          "San’atdagi estetik hodisalarni ifodalovchi estetik tushuncha.",
          "San’atning aks etishi.",
          "Estetiklikning ko‘rinishi.",
          "San’tning xususuyatlari."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "fal-8",
    "title": "8-qism: Falsafaning asosiy masalasi, G'arb va Sharq falsafa tarixi (351-400 savollar)",
    "description": "Falsafa",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "fal-8-q351",
        "prompt": "San’at.",
        "options": [
          "Borliqni badiiy obrazlarda aks ettirish.",
          "Badiiy asarlar.",
          "Badiiy ijod.",
          "Estetik ong shakli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q352",
        "prompt": "San’tning funksiyalari.",
        "options": [
          "San’at asarlarining ijtimoiy hayotdagi o‘rni va ahamiyati.",
          "San’atning ijtimoiy vazifalari.",
          "San’atning ahamiyati.",
          "San’atkor mahorati."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q353",
        "prompt": "San'at turlari.",
        "options": [
          "San’atning tarixan tarkib topgan barqaror shakllari.",
          "San’atning konkret asarlari.",
          "San'atning ko'rinishlari.",
          "Kоmpozitsiya va syujet."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q354",
        "prompt": "Komiklik.",
        "options": [
          "Estetikaning eskirib, umrini o‘tab bo‘lgan qoloq ijtimoiy hodisalar, xatti-harakatlar, munosabatlarni aks ettiruvchi tushunchasi.",
          "Kulgililik va kulgi.",
          "San’atning komik asarlari.",
          "Satira va yumor."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q355",
        "prompt": "Тragikomiklik.",
        "options": [
          "Estetikaninig tragiklik va komiklikning bir vaqtda uyg‘unlashinb ketishini ifodalovchi tushunchasi.",
          "Tragediya va komediyaning omuxta bolib qorishib ketishi.",
          "O‘lim, halokat va kulgining qorishib ketishi.",
          "Dramatiklikning ko‘rinishi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q356",
        "prompt": "Imkoniyat.",
        "options": [
          "Narsa-hodisalar bujudga kelishi uchun zarur jarayonlar.",
          "Shart-sharoit.",
          "Imtiyoz;",
          "Olam mavjudligi shakli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q357",
        "prompt": "Voqelik.",
        "options": [
          "Imkoniatning ro‘yobga chiqishi.",
          "Mavjudlik.",
          "Hayot.",
          "Bor narsalar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q358",
        "prompt": "Mazmun.",
        "options": [
          "Narsa-hodisani tashkil etuvchi barcha qismlar, tomonlar.",
          "Narsaning ichki qismi.",
          "Narsaning mohiyati.",
          "Narsaning borlig‘i."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q359",
        "prompt": "Shakl.",
        "options": [
          "Mazmunning yashash shakli.",
          "Narsaning tashqi tomoni.",
          "Ko‘zga ko‘rinib turgan narsalar.",
          "Mazmunning tashqi ifodasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q360",
        "prompt": "Sifat.",
        "options": [
          "Narsaga muayyanlik bag‘ishlovchi, uni boshqalaridan ajratib turuvchi, barqarorlik kasb etuvchi xossa va xususiyatlarining majmuasi.",
          "Xossa va xususiyatlar birligi.",
          "Narsalarning o‘ziga xos tomonlari, belgilari.",
          "Narsalarni bir-biridan ajratib turuvchi xususiyatlar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q361",
        "prompt": "Zaruriyat.",
        "options": [
          "Muayyan sharoitda albatta yuz berishi lozim bo‘lgan narsa.",
          "Harakat va rivojlanish manbai.",
          "Narsalarning qonuniy o‘zgarishi.",
          "Voqea va hodisalarning yuz berish sharti."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q362",
        "prompt": "Tasodif.",
        "options": [
          "Kutilmaganda sodir bo‘ladigan hodisa.",
          "Muqarrar sodir bo‘ladigan hodisa.",
          "Zaruriyatning namoyon bo‘lishi.",
          "Sababsiz vujudga keladigan voqea."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q363",
        "prompt": "Ong.",
        "options": [
          "Yuksak darajada tashkil topgan materiya – inson miyasining xossasi, in’ikosning oliy ruhiy shakli.",
          "Ma’naviyatning ifodasi.",
          "Inson mohiyatining in’ikosi.",
          "Fikrlash shakli."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q364",
        "prompt": "In’ikos nimaga xos xususiyat?",
        "options": [
          "Butun materiyaga xos.",
          "Tirik mavjudotlarga xos.",
          "Inson va hayvonlarga xos.",
          "Faqat insonga xos."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q365",
        "prompt": "Falsafaning asosiy masalasining ikki tomonini toping:",
        "options": [
          "Ontologik va gnoseologik.",
          "Bilish va borliq.",
          "1 va 2-tomonlar.",
          "Materiya va ong."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q366",
        "prompt": "Materializm qanday ta’limot?",
        "options": [
          "Materiyani birlamchi, ongni ikkilamchi deb hisoblaydi.",
          "Moddiy degani.",
          "Tabiatni birlamchi deb hisoblaydi.",
          "Dinga qarshi ta’limot."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q367",
        "prompt": "Idealizm qanday ta’limot?",
        "options": [
          "Ongni birlamchi, mteriyani ikkilamchi deb hisoblaydi.",
          "Dinga asoslanadi.",
          "Olamni bilishni inkor etadi.",
          "Hukmron mafkurani mustahkamlaydi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q368",
        "prompt": "Olamni bilish mumkinligini kimlar tan olishadi?",
        "options": [
          "Barcha materialistlar va ba’zi idealistlar.",
          "Barcha materialistlar va barcha idealistlar.",
          "Ayrim idealistlar.",
          "Faqat materialistlar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q369",
        "prompt": "Olamni bilish mumkinligini kimlar inkor etishadi?",
        "options": [
          "Agnostitsizm tarafdorlari.",
          "Barcha idealistlar.",
          "Faqat idealistlar va ayrim materialistlar.",
          "Ba’zi materialistlar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q370",
        "prompt": "Monizm qanday go‘yani ilgari suradi?",
        "options": [
          "Olamning asosida bitta yagona ibtido yotadi.",
          "Olamning asosida moddiy ibtido yotadi.",
          "Olamning asosida ma’naviy ibtido yotadi.",
          "Olamning asosida moddiy va ma’naviy ibtidolar yotadi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q371",
        "prompt": "Dualizm qanday go‘yani ilgari suradi?",
        "options": [
          "Olamning asosida ikkita – moddiy va ma’naviy ibtidolar yotadi. ibtido yotadi.",
          "Olamning asosida faqat moddiy ibtido yotadi.",
          "Olamning asosida faqat ma’naviy ibtido yotadi.",
          "Olamning asosida ilohiy kuch – Xudo yotadi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q372",
        "prompt": "Plyuralizm qanday go‘yani ilgari suradi?",
        "options": [
          "Olamning asosida ko‘p ibtidolar yotadi.",
          "Olamni ilohiy kuchlar boshqaradi.",
          "Olamni bilish mumkin emas.",
          "Olamda hech qanday tartib yo‘q."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q373",
        "prompt": "Falsafaning obyekti.",
        "options": [
          "Butun borliq.",
          "Tabiat.",
          "Jamiyat.",
          "Moddiy va ma’naviy narsalar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q374",
        "prompt": "Borliqning ko‘rinishlari.",
        "options": [
          "Tabiat, jamiyat, inson borlig‘lig‘i, ma’naviy borliq.",
          "Aktual va potensial borliqlar.",
          "Real va virtual borliqlar.",
          "Moddiy va ma’naviy borliqlar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q375",
        "prompt": "Qadimgi yunonlar donishmand deb kimni nazarda tutganlar?",
        "options": [
          "Xudo, kohinlar va bashoratchilarni.",
          "Bilimdonlarni.",
          "Daholarni.",
          "Olimlarni."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q376",
        "prompt": "Pifagor o‘zini kim deb bilgan?",
        "options": [
          "Faylasuf.",
          "Donishmand.",
          "Matematik .",
          "Oddiy odam."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q377",
        "prompt": "Falsafa atamasini fanning nomi sifatida kim birinchi ishlatgan?",
        "options": [
          "Platon.",
          "Pifagor.",
          "Sokrat.",
          "Aristotel."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q378",
        "prompt": "Platon qanday ta’limotni ilgari surgan?",
        "options": [
          "“G‘oalar” va “soyalar” dunyosi.",
          "Materializm.",
          "Idealizm.",
          "Diniy."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q379",
        "prompt": "Antik davrda kim falsafani fan sifatida atroflicha ishlab chiqqan?",
        "options": [
          "Aristotel.",
          "Platon.",
          "Demokrit.",
          "Pifagor."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q380",
        "prompt": "O‘rta asrlar falsafasidagi asosiy oqimlar:",
        "options": [
          "Nominalizm va realizm.",
          "Sxolastika.",
          "Xristianlik va dogmatizm.",
          "Materializm."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q381",
        "prompt": "Uyg‘onish davri falsafasining asosiy belgilari:",
        "options": [
          "Barcha javoblar to‘g‘ri.",
          "Antiklerikal, dunyoviy, gumanistik xarakter.",
          "Uyg‘un rivojlangan inson ideali.",
          "Antik madaniy merosga qaytish.",
          "Tabiiy-ilmiy bilimlar, realistik san’atga katta e’tibor."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q382",
        "prompt": "Uyg‘onish davrining buyuk siymolari:",
        "options": [
          "N.Kuzanskiy, Leonardo da Vinchi, N.Kopernik, Dj.Bruno, G.Galiley, N.Makiavelli, T.Kampanella.",
          "T.Kampanella, Leonardo da Vinchi, N.Kuzanskiy, Dj.Bruno, N.Makiavelli.",
          "Leonardo da Vinchi, N.Kuzanskiy, Dj.Bruno, T.Kampanella."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q383",
        "prompt": "Feodalizm davri O‘rta Osiyo mutafakkirlari va buyuk olimlari:",
        "options": [
          "Al-Xorazmiy, al-Forobiy, al-Beruniy, ibn Sino, Ulug‘bek A.Navoiy, Z.M.Bobur.",
          "Ibn Sino, al-Forobiy, Al-Xorazmiy, Ulug‘bek, Z.M.Bobur, al-Beruniy, A.Navoiy.",
          "Al-Forobiy, al-Xorazmiy, ibn Sino, A.Navoiy, Z.M.Bobur, Ulug‘bek."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q384",
        "prompt": "Alisher Navoiyning qanday yirik falsafiy asari bor?",
        "options": [
          "“Mahbub-ul-qulub.",
          "“Xamsa”.",
          "“Lison-ut-tayr.",
          "“Muhokamat-ul-lug‘atayn”."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q385",
        "prompt": "Alisher Navoiy falsafiy qarashlari asosida qanday ta’limot yotadi?",
        "options": [
          "“Vahdat-ul-vujud”.",
          "Gumanizm.",
          "Materializm.",
          "Panteizm."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q386",
        "prompt": "Yangi davr falsafasining yirik vakillari:",
        "options": [
          "F.Bekon, T.Gobbs, R,Dekart, B.Spinoza, Dj.Lokk.",
          "Dj.Lokk, T.Gobbs, R,Dekart, F.Bekon, B.Spinoza.",
          "R,Dekart, B.Spinoza, F.Bekon, T.Gobbs, Dj.Lokk.",
          "Al-Forobiy, al-Xorazmiy, ibn Sino, A.Navoiy, Z.M.Bobur,"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q387",
        "prompt": "Ma’rifatchilik falsafasining asosiy xususiyatlari:",
        "options": [
          "O‘rta asrchilik feodal mafkurasi va diniy sxolastikasiga qarshi kurash, inson erkinligi, ma’rifat, aql-zakovat uchun kurash.",
          "Maktab-maorifni rivojlantirish.",
          "Yangi burjuacha tartiblarni o‘rnatish.",
          "Milliy-ozodlik harakatlariga xayrixohlik."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q388",
        "prompt": "Markaziy Osiyodagi ma’rifatchilarning buyuk vakillari:",
        "options": [
          "A.Donish,Ch.Valixanov,A.Qo‘nonboyev,Sattorxon Abdulg‘afurov, Muqimiy, Furqat, Zavqiy, Avaz O‘tar.",
          "Ch.Valixanov,A.Qo‘nonboyev, A.Donish, Sattorxon Abdulg‘afurov, Furqat, Muqimiy, Zavqiy.",
          "A.Donish,A.Qo‘nonboyev,Ch.Valixanov, Sattorxon Abdulg‘afurov, Muqimiy, Furqat, Avaz O‘tar, Zavqiy."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q389",
        "prompt": "O‘rta Osiyoda jadidizm qanday ijtimoiy-g‘oyaviy yo‘nalish edi?",
        "options": [
          "Ijtimoiy-siyosiy va ma’rifiy.",
          "Milliy-ozodlik.",
          "Millatchilik.",
          "Antifeodal, antiklerikal."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q390",
        "prompt": "Klassik nemis falsafasining yirik vakillari:",
        "options": [
          "I.Kant, I.G.Fixte, G.V.F.Gegel, L.Feyerbax.",
          "I.G.Fixte, I.Kant, G.V.F.Gegel, L.Feyerbax.",
          "G.V.F.Gegel, L.Feyerbax, I.G.Fixte, I.Kant."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q391",
        "prompt": "I.Kant qanday falsafiy ta’limotni ilgari surgan?",
        "options": [
          "“Narsa o‘zida”.",
          "Agnostitsizm.",
          "Sof aqlni tanqid.",
          "Tanqidiy falsafa."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q392",
        "prompt": "G.V.F.Gegel falsafasi asosiga qanday ta’limot yotadi?",
        "options": [
          "“Mutloq g‘oya”.",
          "Dialektika.",
          "Idealizm.",
          "Ruh fenomenologiyasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q393",
        "prompt": "Falsafiy fikr tarixida Gegelning buyuk xizmati nimada?",
        "options": [
          "Dialektikani ta’limot sifatida har tomonlama ishlab chiqish.",
          "Obyektiv idealizmni rivojlantirish.",
          "“Mutloq ruh” goyasini asoslab berish.",
          "Falsafiy fanlar qomusini yaratish."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q394",
        "prompt": "Gegel dialektikasi asosida yotadigan g‘oya:",
        "options": [
          "Triada.",
          "Taraqqiyot.",
          "Falsafiy fanlar tizimi.",
          "Obyektiv idealizm."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q395",
        "prompt": "L.Feyerbax qanday materialistik ta’limotni ilgari surgan?",
        "options": [
          "Antropologik materializm.",
          "Metafizik materializm",
          "Ateizm.",
          "Dialektik materializm.."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q396",
        "prompt": "K.Marks va F.Engels qanday materializmni ishlab chiqishdi?",
        "options": [
          "Dialektik va tarixiy materializm.",
          "Rommunizm qurish to‘g‘risidagi ta’limot.",
          "Proletar mafkurasi.",
          "Qo‘shimcha qiymat nazariyasi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q397",
        "prompt": "Hozirgi zamon G‘arb falsafasidagi asosiy oqimlar:",
        "options": [
          "Neotomizm, neopozitivizm, ekzistensializm, pragmatizm, irratsionalizm.",
          "Neopozitivizm, pragmatizm, neotomizm, neopozitivizm, ekzistensializm, pragmatizm, irratsionalizm, irratsionalizm.",
          "Irratsionalizm. pragmatizm, neotomizm, Neopozitivizm, ekzistensializm."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q398",
        "prompt": "O‘zbekistonda XiX–XX asrlarda falsafiy fikr tarixi taraqqiyotining bosqichlari:",
        "options": [
          "Barcha javoblar to‘g‘ri.",
          "Chor Rossiyasi tarkibida falsafiy fikr rivoji.",
          "SSSR tarkibida falsafiy fikr rivoji.",
          "Mustaqil O‘zbekistonda falsafiy fikr rivoji."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q399",
        "prompt": "O‘zbekistonda falsafa maktabining asoschisi:",
        "options": [
          "I.M.Mo‘minov.",
          "E.Yusupov.",
          "M.Xayrullayev.",
          "S.Shermuhamedov."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-8-q400",
        "prompt": "Borliqni falsafaning qaysi sohasi o‘rganadi?",
        "options": [
          "Ontologiya.",
          "Gnoseologiya.",
          "Aksiologiya.",
          "Tabiat falsafasi."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "fal-9",
    "title": "9-qism: Korrupsiyaga qarshi kurash, Davlat turlari, Fan va metod (401-439 savollar)",
    "description": "Falsafa",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "fal-9-q401",
        "prompt": "Harakatning asosiy turlari:",
        "options": [
          "Mexanik, fizik, ximik, biologik, ijtimoiy.",
          "Fizik, mexanik, biologik, ximik, ijtimoi",
          "Ijtimoiy, ximik, biologik, fizik, mexanik.",
          "Biologik, fizik, mexanik, ximik, ijtimoiy."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q402",
        "prompt": "Makonning uch o‘lchovga egaligini nima asoslaydi?",
        "options": [
          "Koordinata sistemasi.",
          "Lineyka va boshqa o‘lchov asboblari.",
          "Geodeziya asboblari.",
          "Inson aql-zakovati."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q403",
        "prompt": "Zamonning bir o‘lchovga egaligini nima asoslaydi?",
        "options": [
          "Sonlar qatori (o‘qi).",
          "Soat.",
          "Inson umri",
          "Vaqtning qaytmasligi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q404",
        "prompt": "A.Eynshteyn to‘rt o‘lchovli kontinuum deganda nimani nazarda tutgan?",
        "options": [
          "Uch o‘lchovli makon va bir o‘lchovli zamon o‘rtasidagi uzviy aloqani.",
          "To‘rt burchakli jismlarni.",
          "Uch o‘lchovli makonning bir o‘lchovli zamonda yashashini.",
          "Makonning to‘rt o‘lchovini."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q405",
        "prompt": "Sinergetika qanday ta’limot?",
        "options": [
          "Jonsiz va jonli materiyaning ichki qonuniyatlar asosida rivojlanishini tushuntirib beradi.",
          "Jonli organizmlarning ichki rivojini tushuntirib beradi.",
          "Dialektikaning qo‘shimchasi.",
          "Yangi biologik nazariya."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q406",
        "prompt": "Ijtimoiy makon va ijtimoiy zamonning o‘ziga xos xususiyati.",
        "options": [
          "Inson va jamiyat hayot-faoliyati bilan uviy bog‘liq.",
          "“Insoniylashgan” makon va zamon.",
          "Ijtimoiy jarayonlar",
          "Ijtimoiy-tarixiy hodisalar."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q407",
        "prompt": "O‘zbekiston Respublikasida korrupsiyaga qarshi kurash Qonuni qachon qabul qilingan va necha bob hamda moddalardan iborat?",
        "options": [
          "2017-y. 3-yanvar. 6 bob, 34 modda.",
          "2000-y. 16-fevral. 10 bob, 40 modda.",
          "2003-y. 8-may. 15 bob, 30 modda.",
          "20018-y. 9-iyun. 25 bob, 45 modda."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q408",
        "prompt": "BMT qaroriga ko‘ra qaysi sana korrupsiyaga qarshi Xalqaro kurash kuni deb e’lon qilingan?",
        "options": [
          "9-dekabr.",
          "6-iyul.",
          "10-sentyabr.",
          "25-aprel."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q409",
        "prompt": "Korrupsiyaning qaysi ko‘rinishi eng ko‘p uchraydi?",
        "options": [
          "Poraxo‘rlik.",
          "Sansalorlik.",
          "Mansabni suiiste’mol qilish.",
          "Lobbizm."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q410",
        "prompt": "O‘zbekiston Respublikasida korrupsiyaga qarshi kurash prinsiplari 2017-y. 3.01 da qabul qilingan Qonunning qaysi moddasida ko‘rsatilgan?",
        "options": [
          "4-modda.",
          "15-modda.",
          "30-modda.",
          "22-modda."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q411",
        "prompt": "O‘zbekiston Respublikasida korrupsiyaga qarshi kurash yo‘nalishlari 2017-y. 3.01 da qabul qilingan Qonunning qaysi moddasida ko‘rsatilgan?",
        "options": [
          "5-modd",
          "23-modda.",
          "30-modda.",
          "17-modda."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q412",
        "prompt": "O‘zbekiston Respublikasida korrupsiyaga qarshi kurash olib boruvchi davlat organlari 2017-y. 3.01 da qabul qilingan Qonunning qaysi moddasida ko‘rsatilgan?",
        "options": [
          "7-modda.",
          "10-modda.",
          "9-modda",
          "12-modda."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q413",
        "prompt": "O‘zbekiston Respublikasida korrupsiyaga qarshi kurash mexanizmlari 2017-y. 3.01 da qabul qilingan Qonunning qaysi bandida ko‘rsatilgan?",
        "options": [
          "23-band.",
          "14-band.",
          "10-band.",
          "18-band."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q414",
        "prompt": "Global muammolar deganda qanday muammolar tushiniladi?",
        "options": [
          "Butun Er shariga, barcha mamlakatlarga taalluqli.",
          "Barcha xalqlarga taalluqli.",
          "Umumbashariy.",
          "Chegara bilmaydigan."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q415",
        "prompt": "Global muammolar qaysi davrda paydo bo‘ldi?",
        "options": [
          "XX asrda.",
          "XIX asrda.",
          "XV asrda.",
          "Kapitalizm davrida."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q416",
        "prompt": "Global muammolar bilan qaysi nodavlat tashkiloti ko‘proq shug‘ul-langan?",
        "options": [
          "Rim klubi.",
          "BMT.",
          "Evroittifoq.",
          "YUNESKO."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q417",
        "prompt": "O‘rtaosiyolik mutafakkirlardan kimni “ikkinchi muallim” (muallim as-soni) deb ataganlar?",
        "options": [
          "Al-Forobiy.",
          "Ibn Sino.",
          "Beruniy.",
          "A.Navoiy."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q418",
        "prompt": "Mantiqning tarixiy shakllari:",
        "options": [
          "Formal, matematik, dialektik.",
          "Matematik, dialektik, formal.",
          "Aristotel va Gegel mantiqlari.",
          "Ibn Sino va Forobiy mantiqlari."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q419",
        "prompt": "Ibn Sinoning eng yirik falsafiy asari qaysi:",
        "options": [
          "“Kitob ash-shifo” (“Donishnoma”).",
          "“Kitob al-qonun fit-tib”.",
          "“Kitob un-hayot”",
          "“Kitob ul-insof”."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q420",
        "prompt": "“Platon menga do‘st, haqiqat esa undan qimmatliroqdir” deb kim aytgan?",
        "options": [
          "Aristotel.",
          "Sokrat.",
          "Demokrit.",
          "Epikur."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q421",
        "prompt": "AQSHda davlat xizmatchilari orasida korrupsiya profilaktikasini ta’minlash maqsadida, qanday qoidalari ishlab chiqilgan.",
        "options": [
          "“Ma’muriy axloq”",
          "“Ma’muriy xuquq”",
          "“Ma’muriy kodekis”",
          "“Davlat xizmati kodeksi”"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q422",
        "prompt": "Buyuk Britaniyada xodimlar va ish beruvchilar o‘rtasida korrupsiyaviy omillar urchishiga yo‘l qo‘ymaslik maqsadida nima ishlab chiqilgan.",
        "options": [
          "“Davlat xizmati kodeksi”",
          "“Ma’muriy axloq”",
          "“Ma’muriy xuquq”",
          "“Ma’muriy kodekis”"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q423",
        "prompt": "Xalqaro valyuta jamg‘armasi tomonidan aniqlangann ma’lumotlarga tayanadigan bo‘lsak, ushbu illat yiliga jahon iqtisodiyotiga o‘rtacha qancha trillion dollar miqdorida zarar yetkazadi",
        "options": [
          "2,6",
          "2,9",
          "3,6",
          "2,1"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q424",
        "prompt": "Xalqaro Transparency International tashkilotining 2024-yil bo‘yicha bergan ma’lumotlariga tayanadigan bo‘lsak, korrupsiya darajasi eng past davlatlar reytingida birinchilardan bo‘lib…….?",
        "options": [
          "Barcha javoblar to’gri",
          "Daniya, Finlandiya",
          "Yangi Zellandiya, Norvegiya",
          "Singapur va Shvitsiya"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q425",
        "prompt": "O‘zbekiston Transparency International tashkilotining korrupsiyani qabul qilish indeksida 180 mamlakat Ichida 2023-yil nechanchi o’rini egalladi.",
        "options": [
          "121-o‘rinni",
          "127-o‘rinni",
          "141-o‘rinni",
          "128-o‘rinni"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q426",
        "prompt": "Oilaviy munosabatlarda hukumronlik kimni qo’lida bo’lishiga va oilaviy mulk anjomlarga egalik munosabatlariga ko’ra oilani tarixiy shaklari qaysilar",
        "options": [
          "Matriarxat,Patriarxat,Demokratik",
          "Poligam va Monogam oila",
          "Kambagal,O’rtaxol va Badavlat oila",
          "Farzadsiz,Farzandli,Serfarzand"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q427",
        "prompt": "Falsafa tarixida kategoriyalar masalasi qaysi faylasuf tomonidan batafsil ishlab chiqilib, “Metafizika”, “Kategoriyalar” nomli asarlarida ko‘plab kategoriyalarning falsafiy ahamiyatini ta’riflab va tavsiflab bergan.",
        "options": [
          "Arastu",
          "Platon",
          "Demokrit",
          "Suqrot"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q428",
        "prompt": "Dialektika kategoriyalarini ikki turga ajratish mumkin.......",
        "options": [
          "substansional kategoriyalar va munosabatdosh kategoriyalar",
          "substansional kategoriyalar va metafizik kategoriyalar",
          "munosabatdosh kategoriyalar va metafizik kategoriyalar",
          "Barcha javoblar to’gri"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q429",
        "prompt": "Nazariy tadqiqot va uning metodlari asosida shakllanadigan nazariy bilimning asosiy shakllari:",
        "options": [
          "Barcha javob to’gri",
          "ilmiy muammo, gipoteza",
          "nazariya, tamoyillar, qonunlar",
          "kategoriyalar, paradigmalardir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q430",
        "prompt": "Gipoteza bu……",
        "options": [
          "yangi dalillarning mohiyatini tushuntiruvchi qonun mavjudligi haqidagi asosli taxmindir",
          "hodisalarning muayyan turkumi, bu turkumdagi hodisalarning mohiyati va ularga nisbatan amal qiladigan borliq qonunlari haqidagi bilimlarning mantiqiy asoslangan va amaliyot sinovidan o‘tgan tizimidir",
          "Asosiy nazariy bilim, ilmiy dalillarni tushuntirishda dasturilamal bo‘lib xizmat qiluvchi rahbar g‘oyalar tushuniladi",
          "borliqning eng muhim tomonlari, xossalari va munosabatlarini aks ettiruvchi umumiy tushunchalardir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q431",
        "prompt": "Paradigma –",
        "options": [
          "fan tarixining muayyan davrida uning rivojlanishini belgilovchi barqaror tamoyillar, umumiy me’yorlar, qonunlar, nazariyalar va metodlar majmui.",
          "hodisalarning muayyan turkumi, bu turkumdagi hodisalarning mohiyati va ularga nisbatan amal qiladigan borliq qonunlari haqidagi bilimlarning mantiqiy asoslangan va amaliyot sinovidan o‘tgan tizimidir",
          "Asosiy nazariy bilim, ilmiy dalillarni tushuntirishda dasturilamal bo‘lib xizmat qiluvchi rahbar g‘oyalar tushuniladi",
          "borliqning eng muhim tomonlari, xossalari va munosabatlarini aks ettiruvchi umumiy tushunchalardir."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q432",
        "prompt": "Paradigma tushunchasi bilish nazariyasiga amerikalik faylasuf ….. tomonidan kiritilgan.",
        "options": [
          "T.Kun",
          "Platon",
          "Demokrit",
          "Suqrot"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q433",
        "prompt": "Haqiqatning qanday konsepsiyalari mavjud.",
        "options": [
          "korrespondent, kogerent va pragmatic",
          "kogerent va pragmatic,statistik",
          "kogerent va pragmatic,dinamik",
          "Barcha javoblar to’gri"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q434",
        "prompt": "Metod bu…..",
        "options": [
          "Barcha javoblar to’gri",
          "U yoki bu shaklda ma’lum qoida, tartib, usul, harakat va bilim mezonlarining yig‘indisi hamdir.",
          "U tamoyillar, talablar tizimi bo‘lib, sub’ektni aniq vazifani bajarishga, faoliyatning shu sohasida ma’lum natijalarga erishish sari yo‘naltiradi.",
          "U haqiqatni izlashda vaqt, kuchni tejaydi, maqsadga eng yaqin va oson yo‘l bilan yetishishga yordam beradi."
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q435",
        "prompt": "Davlat qurilishi shakliga ko‘ra…….",
        "options": [
          "unitar, federativ va konfederativ",
          "unitar, konfederativ",
          "monarxiya va respublika",
          "Barcha javoblar to’gri"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q436",
        "prompt": "Gegel umumjahon tarixini to‘rt bosqichga bo‘ladi bular……",
        "options": [
          "Barcha javoblar to’gri",
          "Sharq dunyosi",
          "Yunon dunyosi",
          "Rumo dunyosi va German dunyosi"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q437",
        "prompt": "O‘zbekiston Respublikasi Konstitutsiyasining yangi tahriri qachondan e’tiboran kuchga kirdi.",
        "options": [
          "2023 yil 1 maydan",
          "2023 yil 10 maydan",
          "2023 yil 30 apreldan",
          "2024 yil 1 maydan"
        ],
        "correctIndex": 0
      },
      {
        "id": "fal-9-q438",
        "prompt": "Yangilanish natijasida, bosh qomusdagi moddalar soni 128 tadan …… taga o’zgartirildi",
        "options": [
          "155 taga",
          "131 taga",
          "128 taga",
          "156 taga"
        ],
        "correctIndex": 0
      }
    ]
  }


    ],
  },
  {
    id: 'dasturlash',
    title: 'Dasturlash',
    tagline: 'Asosiy tushunchalar va amaliy bilimlar bo‘yicha testlar',
    topics: [
      {
    "id": "das-1",
    "title": "1-qism: C++ dasturlash tili asoslari (1-50 savollar)",
    "description": "Dasturlash",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "das-1-q1",
        "prompt": "C++ dasturining asosiy tarkibiy qismlari nimalardan iborat?",
        "options": [
          "main() funksiyasi, o'zgaruvchilar, kutubxonalar va operatorlar",
          "Faoliyatlar va kutubxonalar",
          "main() funksiyasi va o'zgaruvchilar",
          "Faqat o'zgaruvchilar"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q2",
        "prompt": "C++ tilida o'zgaruvchi qanday e'lon qilinadi?",
        "options": [
          "int a;",
          "a int;",
          "integer a;",
          "declare int a;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q3",
        "prompt": "C++ tilida qanday qilib ekranga matn chiqarish mumkin?",
        "options": [
          "cout << \"Hello World!\";",
          "console.print(\"Hello World!\");",
          "output.write(\"Hello World!\");",
          "echo \"Hello World!\";"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q4",
        "prompt": "C++ tilida qaysi belgi o'zgaruvchi e'lon qilishda foydalaniladi?",
        "options": [
          ";",
          "=",
          "<<<",
          ":"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q5",
        "prompt": "C++ dasturining bajarilishiga asosiy kirish nuqtasi qaysi funksiyadir?",
        "options": [
          "main()",
          "begin()",
          "start()",
          "program()"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q6",
        "prompt": "C++ tilida int tipidagi o'zgaruvchiga qiymat berishning to'g'ri sintaksisi qanday?",
        "options": [
          "int a=10;",
          "a= int 10;",
          "int = 10 a;",
          "10= int a;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q7",
        "prompt": "C++ tilida #include direktivasi nimani anglatadi?",
        "options": [
          "Kutubxonani dasturga kiritish",
          "Funktsiyani chaqirish",
          "O'zgaruvchi e'lon qilish",
          "Doimiy qiymat berish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q8",
        "prompt": "C++ tilida qaysi operator o'zgaruvchining qiymatini 1 ga oshiradi?",
        "options": [
          "++",
          "-",
          "+=",
          "--"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q9",
        "prompt": "C++ tilida nimani anglatadi: cout << \"Hello\";?",
        "options": [
          "Ekranga \"Hello\" matnini chiqarish",
          "Ekspresiya yaratish",
          "Dastur oxiriga chiqish",
          "Xatolikni aniqlash"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q10",
        "prompt": "C++ tilida if operatori nima uchun ishlatiladi?",
        "options": [
          "Shartli tarmoqlanishni bajarish",
          "Ekranga matn chiqarish",
          "Arifmetik amallarni bajarish",
          "Dasturdan chiqish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q11",
        "prompt": "C++ tilida to'g'ri sintaksisga ega bo'lgan for sikli qanday ko'rinishga ega?",
        "options": [
          "for (int i=0; i < 10; i++) {}",
          "for (int i; i = 10; i++) {}",
          "for (int i < 10; i++) {}",
          "for (int i=0; i=10) {}"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q12",
        "prompt": "C++ tilida o'zgaruvchining qiymatini ekranga chiqarish uchun qanday kutubxona kerak?",
        "options": [
          "iostream",
          "stdlib",
          "math",
          "stdio"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q13",
        "prompt": "C++ tilida nimani anglatadi: cin >> a;?",
        "options": [
          "O'zgaruvchi a ga qiymat kiritish",
          "O'zgaruvchi a ning qiymatini ekranga chiqarish",
          "a o'zgaruvchisining tipini aniqlash",
          "a ni ekranga chiqarish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q14",
        "prompt": "C++ tilida xatoliklarni aniqlashda qanday operator ishlatiladi?",
        "options": [
          "try-catch",
          "if-else",
          "switch-case",
          "do-while"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q15",
        "prompt": "C++ dasturida return 0; nima ma'noni anglatadi?",
        "options": [
          "Dastur muvaffaqiyatli tugadi",
          "Dasturda xato mavjud",
          "Boshqa funksiya chaqiriladi",
          "Dasturdan chiqadi, lekin davom etadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q16",
        "prompt": "C++ tilida int turi qaysi ma'lumot turini ifodalaydi?",
        "options": [
          "Butun son",
          "Yuzlik son",
          "Haqiqiy son",
          "Belgilar to'plami"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q17",
        "prompt": "C++ tilida o'zgarmas (constant) qiymatlarni aniqlashda qanday kalit so'z ishlatiladi?",
        "options": [
          "const",
          "immutable",
          "final",
          "static"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q18",
        "prompt": "C++ tilida float turi qanday qiymatlarni ifodalaydi?",
        "options": [
          "Haqiqiy sonlar",
          "Butun sonlar",
          "Belgilar",
          "Matnlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q19",
        "prompt": "C++ tilida quyidagi e'lonlardan qaysi biri to'g'ri?",
        "options": [
          "float a=5.5;",
          "int a = 5.5;",
          "double a=\"5.5\";",
          "char a=5.5;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q20",
        "prompt": "C++ tilida o'zgarmas qiymat qanday belgilanadi?",
        "options": [
          "const int a=10;",
          "const =10 a;",
          "int const a=10;",
          "final int a=10;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q21",
        "prompt": "C++ tilida double turi qanday ma'lumot turini ifodalaydi?",
        "options": [
          "Yirik haqiqiy son",
          "Butun son",
          "Belgilar to'plami",
          "Mantiqiy qiymatlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q22",
        "prompt": "C++ tilida quyidagi o'zgaruvchilardan qaysi biri to'g'ri e'lon qilingan?",
        "options": [
          "int a10;",
          "int 10a;",
          "10a int;",
          "a10 int;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q23",
        "prompt": "C++ tilida quyidagi kodni ko'rsating, agar \"pi\" o'zgaruvchisi o'zgarmas qiymatga ega bo'lsa (3.14) va uni o'zgartirish mumkin bo'lmasa.",
        "options": [
          "const double pi=3.14;",
          "double pi=3.14;",
          "final double pi=3.14;",
          "double pi const =3.14;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q24",
        "prompt": "C++ tilida char turi nimani anglatadi?",
        "options": [
          "Yagona belgilar",
          "Butun sonlar",
          "Haqiqiy sonlar",
          "Xatoliklar"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q25",
        "prompt": "C++ tilida quyidagi ifodadan qaysi biri noto'g'ri?",
        "options": [
          "float a=\"10\";",
          "int a=10;",
          "char a = 'A';",
          "double a=3.1415;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q26",
        "prompt": "C++ tilida bool turi nima uchun ishlatiladi?",
        "options": [
          "Mantiqiy qiymatlarni saqlash",
          "Yig'indilarni saqlash",
          "Belgilarni saqlash",
          "Sonlarni saqlash"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q27",
        "prompt": "C++ tilida long turi qanday qiymatlarni saqlaydi?",
        "options": [
          "Katta butun sonlar",
          "Haqiqiy sonlar",
          "Butun sonlar",
          "Belgilar to'plami"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q28",
        "prompt": "C++ tilida o'zgarmas qiymatni qanday qilib o'zgartirishga urinish mumkin?",
        "options": [
          "O'zgartirish mumkin emas, xatolik yuz beradi",
          "O'zgartirish mumkin, lekin faqat constdan so'ng",
          "final kalit so'zi yordamida",
          "Har doim o'zgartirish mumkin"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q29",
        "prompt": "C++ tilida unsigned int turi nimani anglatadi?",
        "options": [
          "Musbat butun sonlarni",
          "Musbat haqiqiy sonlarni",
          "Musbat belgilarni",
          "Musbat mantiqiy qiymatlarni"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q30",
        "prompt": "C++ tilida o'zgarmas qiymatni qanday qilib e'lon qilish mumkin?",
        "options": [
          "const int a=10;",
          "fixed int a=10;",
          "static int a = 10;",
          "final int a=10;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q31",
        "prompt": "C++ tilida char turi nima uchun ishlatiladi?",
        "options": [
          "Yagona belgilarni saqlash",
          "Butun sonlarni saqlash",
          "Haqiqiy sonlarni saqlash",
          "Mantiqiy qiymatlarni saqlash"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q32",
        "prompt": "C++ tilida int turi qanday qiymatlarni ifodalaydi?",
        "options": [
          "Butun sonlar",
          "Yagona belgilar",
          "Haqiqiy sonlar",
          "Mantiqiy qiymatlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q33",
        "prompt": "C++ tilida float turi qanday qiymatlarni ifodalaydi?",
        "options": [
          "Haqiqiy sonlar (kasrli qiymatlar)",
          "Butun sonlar",
          "Belgilar",
          "Matnlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q34",
        "prompt": "C++ tilida o'zgarmas qiymatni qanday e'lon qilish mumkin?",
        "options": [
          "const int a=10;",
          "fixed int a=10;",
          "static int a=10;",
          "final int a=10;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q35",
        "prompt": "C++ tilida qanday ifoda a o'zgaruvchisini 1 ga oshiradi?",
        "options": [
          "a++;",
          "a = a + 1;",
          "a += 1;",
          "Barcha javoblar to'g'ri"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q36",
        "prompt": "C++ tilida quyidagi kodni to'g'ri yozing: int turidagi x o'zgaruvchisi uchun qiymat 100 berilsin.",
        "options": [
          "int x=100;",
          "x = int 100;",
          "int = 100 x;",
          "x int = 100;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q37",
        "prompt": "C++ tilida double turi qanday qiymatlarni saqlaydi?",
        "options": [
          "Yirik haqiqiy sonlar",
          "Butun sonlar",
          "Belgilar",
          "Mantiqiy qiymatlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q38",
        "prompt": "C++ tilida long turi qanday qiymatlarni saqlaydi?",
        "options": [
          "Katta butun sonlarni",
          "Haqiqiy sonlarni",
          "Belgilar to'plami",
          "Xatoliklar"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q39",
        "prompt": "C++ tilida bool turi nima uchun ishlatiladi?",
        "options": [
          "Mantiqiy qiymatlarni saqlash",
          "Haqiqiy sonlarni saqlash",
          "Butun sonlarni saqlash",
          "Belgilarni saqlash"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q40",
        "prompt": "C++ tilida ifodalar orqali o'zgarmas qiymatni qanday aniqlash mumkin?",
        "options": [
          "const yoki #define yordamida",
          "const kalit so'zi yordamida",
          "#define direktivasi yordamida",
          "final kalit so'zi yordamida"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q41",
        "prompt": "C++ tilida unsigned int o'zgaruvchilar qanday qiymatlarni oladi?",
        "options": [
          "Faqat musbat butun sonlarni",
          "Musbat va manfiy butun sonlarni",
          "Yirik haqiqiy sonlarni",
          "Belgilarni"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q42",
        "prompt": "C++ tilida cin va cout nima uchun ishlatiladi?",
        "options": [
          "Ekranga chiqarish va kiritish",
          "Shartli tarmoqlanishni bajarish",
          "Arifmetik amallarni bajarish",
          "O'zgaruvchi e'lon qilish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q43",
        "prompt": "C++ tilida = operatori nima uchun ishlatiladi?",
        "options": [
          "O'zgaruvchiga qiymat berish",
          "Qo'shish amali uchun",
          "Taqqoslash amali uchun",
          "Mantiqiy operator uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q44",
        "prompt": "C++ tilida ++ operatori nima uchun ishlatiladi?",
        "options": [
          "O'zgaruvchini 1 ga oshirish",
          "O'zgaruvchining qiymatini chiqarish",
          "O'zgaruvchining qiymatini 1 ga kamaytirish",
          "O'zgaruvchini o'zgartirish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q45",
        "prompt": "C++ tilida char turi qanday ma'lumotlarni saqlaydi?",
        "options": [
          "Yagona belgilar",
          "Butun sonlar",
          "Haqiqiy sonlar",
          "Mantiqiy qiymatlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q46",
        "prompt": "C++ tilida ++ operatori nima qiladi?",
        "options": [
          "O'zgaruvchini 1 ga oshiradi",
          "O'zgaruvchining qiymatini chiqaradi",
          "O'zgaruvchining qiymatini 1 ga kamaytiradi",
          "O'zgaruvchining qiymatini saqlaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q47",
        "prompt": "C++ tilida -- operatori qanday amallarni bajaradi?",
        "options": [
          "O'zgaruvchining qiymatini 1 ga kamaytiradi",
          "O'zgaruvchining qiymatini 1 ga oshiradi",
          "O'zgaruvchini chiqaradi",
          "O'zgaruvchining qiymatini saqlaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q48",
        "prompt": "C++ tilida sizeof operatori nima maqsadda ishlatiladi?",
        "options": [
          "O'zgaruvchining xotirada egallagan joyini aniqlash",
          "O'zgaruvchining qiymatini hisoblash",
          "O'zgaruvchining qiymatini chiqarish",
          "O'zgaruvchini o'zgartirish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q49",
        "prompt": "C++ tilida sizeof(int) nima qiymatni qaytaradi?",
        "options": [
          "Butun sonning xotiradagi hajmini (odatda 4 bayt)",
          "Belgining xotiradagi hajmini",
          "Haqiqiy sonning xotiradagi hajmini",
          "Butun sonning qiymatini"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-1-q50",
        "prompt": "C++ tilida && operatori nimani anglatadi?",
        "options": [
          "Mantiqiy AND operatori",
          "Taqqoslash operatori",
          "Mantiqiy OR operatori",
          "Inkrement operatori"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "das-2",
    "title": "2-qism: Shart va sikl operatorlari (51-100 savollar)",
    "description": "Dasturlash",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "das-2-q51",
        "prompt": "C++ tilida || operatori nimani anglatadi?",
        "options": [
          "Mantiqiy OR operatori",
          "Taqqoslash operatori",
          "Mantiqiy AND operatori",
          "Razryadli o'zgaruvchilarni taqqoslash"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q52",
        "prompt": "C++ tilida == operatori qanday amaliyotni bajaradi?",
        "options": [
          "Taqqoslash (xuddi shu qiymatlarni tekshiradi)",
          "O'zgaruvchiga qiymat tayinlash",
          "Mantiqiy AND operatorini bajaradi",
          "Arifmetik qo'shish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q53",
        "prompt": "C++ tilida << operatori nima uchun ishlatiladi?",
        "options": [
          "Razryadli o'zgaruvchilarni chapga siljitish (bit-wise shift left)",
          "Arifmetik amallarni bajarish",
          "Mantiqiy OR operatori",
          "Taqqoslash amali"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q54",
        "prompt": "C++ tilida >> operatori nima uchun ishlatiladi?",
        "options": [
          "Razryadli o'zgaruvchilarni o'ngga siljitish (bit-wise shift right)",
          "Mantiqiy OR operatori",
          "Mantiqiy AND operatori",
          "Taqqoslash amali"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q55",
        "prompt": "C++ tilida inkrement operatorining bajarilish yo'nalishi qanday?",
        "options": [
          "Prefiks yoki postfiks bo'lishi mumkin (pre-inkrement yoki post-inkrement)",
          "Faqat prefiks ishlatiladi",
          "Faqat postfiks ishlatiladi",
          "Boshqa operatorlar bilan ishlatilmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q56",
        "prompt": "C++ tilida a+b*c ifodasi qanday tartibda bajariladi?",
        "options": [
          "Birinchi b*c (ko'paytirish), keyin a+(b*c) (qo'shish)",
          "Har bir amal bir xil tartibda bajariladi",
          "Birinchi a + b (qo'shish), keyin a+b*c (ko'paytirish)",
          "Har bir amal alohida bajariladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q57",
        "prompt": "C++ tilida mantiqiy operatorlarning ustunligi qanday tartibda amalga oshiriladi?",
        "options": [
          "AND (&&) keyin OR (||)",
          "OR (||) keyin AND (&&)",
          "AND (&&) va OR (||) bir xil darajada",
          "O'zgaruvchilarning qiymatini taqqoslashda ustunlik beriladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q58",
        "prompt": "C++ tilida razryadli o'zgaruvchilarni siljitish operatorlari qanday ishlaydi?",
        "options": [
          "<< operatori bitlarni chapga, >> operatori bitlarni o'ngga siljitadi",
          "<< operatori bitlarni o'ngga, >> operatori bitlarni chapga siljitadi",
          "Faqat << operatori ishlatiladi",
          "Faqat >> operatori ishlatiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q59",
        "prompt": "C++ tilida mantiqiy taqqoslash operatorlari qanday ishlaydi?",
        "options": [
          "==, !=, >, <, >=, <= operatorlari taqqoslash uchun ishlatiladi",
          "&& va || operatorlari taqqoslash uchun ishlatiladi",
          "Faqat operatori ishlatiladi",
          "= operatori taqqoslash uchun ishlatiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q60",
        "prompt": "C++ tilida sizeof operatorining ustunligi qanday?",
        "options": [
          "Xotiradagi o'zgaruvchining hajmini aniqlashda ishlatiladi",
          "Arifmetik amallarni bajarishda ishlatiladi",
          "Mantiqiy qiymatlarni saqlashda ishlatiladi",
          "Bit-wise amallarni bajarishda ishlatiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q61",
        "prompt": "Quyidagi operatorlardan qaysi biri C++ tilida shart operatori hisoblanadi?",
        "options": [
          "if",
          "while",
          "for",
          "switch"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q62",
        "prompt": "Quyidagi qaysi operatorlar boshqaruvni uzatish operatorlari guruhiga kiradi?",
        "options": [
          "break",
          "if",
          "else",
          "case"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q63",
        "prompt": "Quyidagi operatorlar qaysi holatda ishlatiladi: if-else?",
        "options": [
          "Shart tekshirish uchun",
          "Takrorlash uchun",
          "Boshqaruvni uzatish uchun",
          "Ma'lumot kiritish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q64",
        "prompt": "C++ tilida switch operatorida qaysi kalit so'z ishlatiladi?",
        "options": [
          "case",
          "else",
          "continue",
          "return"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q65",
        "prompt": "Quyidagilardan qaysi biri boshqaruvni dastur oxiriga uzatadi?",
        "options": [
          "return",
          "if",
          "for",
          "else"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q66",
        "prompt": "if operatorining umumiy sintaksisi qaysi?",
        "options": [
          "if (shart) { /* kod */ }",
          "if { /* kod */}",
          "if (shart)",
          "if (shart) /* kod */"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q67",
        "prompt": "while sikli qanday ishlaydi?",
        "options": [
          "Shart bajarilganda davom etadi",
          "Shart bajarilmasa ham kamida bir marta bajariladi",
          "Hech qachon tugamaydi",
          "Shartsiz bajariladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q68",
        "prompt": "do-while sikli qanday farq qiladi?",
        "options": [
          "Kamida bir marta bajariladi",
          "Shartsiz ishlaydi",
          "Faqat bir marta bajariladi",
          "Shart bajarilganda tugaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q69",
        "prompt": "switch operatorida default bloki qanday maqsadda ishlatiladi?",
        "options": [
          "Hech qaysi case bloklari bajarilmasa ishlaydi",
          "Takrorlashni ta'minlaydi",
          "break operatorini o'z ichiga oladi",
          "Shart bajarilganda ishlaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q70",
        "prompt": "Quyidagilardan qaysi biri boshqaruvni keyingi iteratsiyaga uzatadi?",
        "options": [
          "continue",
          "return",
          "goto",
          "break"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q71",
        "prompt": "Quyidagi shart operatoridan qanday foydalaniladi: \"?:\"?",
        "options": [
          "Shart bajarilganda qiymat tanlash uchun",
          "Dastur boshqaruvini tugatish uchun",
          "Shartni siklga aylantirish uchun",
          "Dastur kodini kompilyatsiya qilish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q72",
        "prompt": "Quyidagi kod qaysi holatda xato beradi? switch (x) { case 1: case 2: cout << \"Ikkinchi\"; }",
        "options": [
          "break operatori ishlatilmaganda",
          "default bloki yo'qligida",
          "case qiymatlari bir xil bo'lganda",
          "Hech qanday xato bermaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q73",
        "prompt": "goto operatorining vazifasi nimada?",
        "options": [
          "Belgilangan joyga boshqaruvni uzatish uchun",
          "Kodni qisqartirish uchun",
          "Har doim ishlatiladi",
          "Shartni bajarish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q74",
        "prompt": "Quyidagi shart to'g'rimi: if (x=5)?",
        "options": [
          "Noto'g'ri, chunki shartda taqsimlash (=) ishlatilgan",
          "To'g'ri, bu kodni ishlaydi",
          "To'g'ri, chunki bu taqqoslash operatori",
          "Noto'g'ri, bu mantiqiy xato emas"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q75",
        "prompt": "for operatorining to'g'ri sintaksisini ko'rsating:",
        "options": [
          "for (init; condition; update)",
          "for (init; update; condition)",
          "for { init; condition; update }",
          "for [init; condition; update]"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q76",
        "prompt": "switch operatori qanday maqsadda ishlatiladi?",
        "options": [
          "Ko'p holatlarni bir joyda tekshirish uchun",
          "Siklni bajarish uchun",
          "Ma'lumotlarni kiritish uchun",
          "Faqat bir shartni tekshirish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q77",
        "prompt": "switch operatorida har bir holat qanday belgilanadi?",
        "options": [
          "case bilan",
          "if bilan",
          "while bilan",
          "default bilan"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q78",
        "prompt": "Quyidagi qaysi so'z switch operatorida barcha boshqa holatlar bajarilishini to'xtatadi?",
        "options": [
          "break",
          "default",
          "return",
          "continue"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q79",
        "prompt": "Quyidagi kodning natijasi qanday bo'ladi? int x=2; switch (x) { case 1: cout << \"Birinchi\"; case 2: cout << \"Ikkinchi\"; default: cout << \"Default\"; }",
        "options": [
          "IkkinchiDefault",
          "Birinchi",
          "Hech narsa chop etilmaydi",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q80",
        "prompt": "default bloki nima uchun ishlatiladi?",
        "options": [
          "Hech bir case shartlari bajarilmasa, bajariladigan kodni ko'rsatish uchun",
          "Dastur boshqaruvini to'xtatish uchun",
          "Har doim birinchi ishlaydi",
          "Kodni qayta ishlash uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q81",
        "prompt": "Quyidagi koddagi xatoni toping: int y=3; switch (y) { case 1: cout << \"Birinchi\"; default: cout << \"Default\"; case 3: cout << \"Uchinchi\"; }",
        "options": [
          "break operatori yo'q",
          "default bloki oxirida bo'lishi kerak",
          "case qiymatlari bir xil",
          "Xato yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q82",
        "prompt": "?: shart amali qanday nomlanadi?",
        "options": [
          "Uchlik operatori",
          "Dastur to'xtatuvchisi",
          "Sikl operatori",
          "Mantiqiy amal"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q83",
        "prompt": "?: shart amali sintaksisini tanlang:",
        "options": [
          "(shart)? qiymat1: qiymat2;",
          "if (shart) ? true : false;",
          "(shart)? qiymat1: qiymat2",
          "(shart) qiymat1? qiymat2;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q84",
        "prompt": "Quyidagi ?: shart amali qanday ishlaydi? int a=5, b=10; int max =(a>b)? a: b;",
        "options": [
          "max = 10 bo'ladi",
          "max = 5 bo'ladi",
          "Xato beradi",
          "max=15 bo'ladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q85",
        "prompt": "Quyidagidan?: operatori qanday foydalangan? int x=-1; cout << ( x>0? \"Musbat\": \"Manfiy\");",
        "options": [
          "Musbat yoki Manfiy ni chop etadi",
          "Faqat Musbat ni chop etadi",
          "Xato beradi",
          "Hech qanday natija bermaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q86",
        "prompt": "switch operatori ichida qaysi shart qabul qilinmaydi?",
        "options": [
          "Float yoki Double qiymatlar",
          "Butun son qiymati",
          "Belgilar (char)",
          "Konstanta qiymatlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q87",
        "prompt": "?: shart amali qanday maqsadda ishlatiladi?",
        "options": [
          "Qisqa shartli tekshirish uchun",
          "Takrorlashni tashkil etish uchun",
          "Kodni to'xtatish uchun",
          "Ma'lumotlarni kiritish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q88",
        "prompt": "Quyidagi switch operatori qanday ishlaydi? int x=1; switch (x+1) { case 2: cout << \"Ikki\"; break; case 3: cout << \"Uch\"; break; }",
        "options": [
          "Ikki",
          "Uch",
          "Hech narsa chop etilmaydi",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q89",
        "prompt": "Quyidagi qaysi biri?: shart amali uchun to'g'ri natija beradi? int x=0; int y=x?5:10;",
        "options": [
          "y=10",
          "y=5",
          "Xato beradi",
          "y=0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q90",
        "prompt": "switch va if-else o'rtasidagi asosiy farq nimada?",
        "options": [
          "switch faqat aniq qiymatlarni tekshiradi, if-else shartlarni tekshiradi",
          "if-else faqat bir martalik tekshirish uchun ishlatiladi",
          "switch operatori sikl yaratadi",
          "if-else faqat bir nechta holatlarni tekshiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q91",
        "prompt": "for operatori qanday maqsadda ishlatiladi?",
        "options": [
          "Takrorlash jarayonlarini boshqarish uchun",
          "Faqat shartlarni tekshirish uchun",
          "Dastur boshqaruvini tugatish uchun",
          "Ma'lumotlarni kiritish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q92",
        "prompt": "for operatorining umumiy sintaksisi qanday?",
        "options": [
          "for (boshlang'ich; shart; yangilash) { /* kod */ }",
          "for (shart; boshlang'ich; yangilash) { /* kod */ }",
          "for { boshlang'ich; shart; yangilash }",
          "for (boshlang'ich; yangilash; shart)"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q93",
        "prompt": "Quyidagi for siklining natijasi qanday bo'ladi? for (int i=0; i<3; i++) { cout << i; }",
        "options": [
          "012",
          "123",
          "0123",
          "345"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q94",
        "prompt": "for siklida iteratsiya qadamini qanday boshqariladi?",
        "options": [
          "Yangilash bloki orqali",
          "Shart bloki orqali",
          "Boshlang'ich qiymat orqali",
          "Default qiymat orqali"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q95",
        "prompt": "for operatorida shart bajarilmasa nima bo'ladi?",
        "options": [
          "Sikl tugaydi",
          "Kod bajariladi",
          "Xato beradi",
          "Takrorlash davom etadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q96",
        "prompt": "Quyidagi kodning natijasi qanday bo'ladi? for (int i=5; i > 0; i--) { cout <<i<<\" \"; }",
        "options": [
          "54321",
          "543210",
          "5 4 3 2",
          "Hech narsa chop etilmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q97",
        "prompt": "for siklida bir nechta o'zgaruvchilarni qanday boshqarish mumkin?",
        "options": [
          "for (int i=0, j = 10; i<j; i++, j--)",
          "for ( i=0, j=10; ;i<; i++, j--)",
          "for (i=0 j = 10; i < j; i++, j--)",
          "for (int i=0; int j=10 i<i; i++, j--)"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q98",
        "prompt": "for sikli ichida break operatori nima qiladi?",
        "options": [
          "Siklni to'xtatadi",
          "Keyingi iteratsiyaga o'tadi",
          "Siklni qayta boshlaydi",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q99",
        "prompt": "for siklida iteratsiya qadamini oshirmasdan ishlatish mumkinmi?",
        "options": [
          "Ha, shart blokida yangilashni qo'shib",
          "Yo'q",
          "Ha, lekin continue ishlatish kerak",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-2-q100",
        "prompt": "Quyidagi for siklining natijasi qanday bo'ladi? for (int i=0; i<5;) {cout << i++;}",
        "options": [
          "01234",
          "012345",
          "12345",
          "Xato beradi"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "das-3",
    "title": "3-qism: Sikl operatorlari va massivlar (101-150 savollar)",
    "description": "Dasturlash",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "das-3-q101",
        "prompt": "for siklida boshlang'ich qiymatni tashlab ketish mumkinmi?",
        "options": [
          "Ha, ammo shart va yangilashni yozish kerak",
          "Yo'q, barcha bloklar bo'lishi kerak",
          "Faqat yangilashni tashlab ketish mumkin",
          "Faqat shartni tashlab ketish mumkin"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q102",
        "prompt": "Quyidagi kodda i ning qiymati qanday bo'ladi? int i; for (i = 0; i < 3; i++) { } cout << i;",
        "options": [
          "3",
          "2",
          "0",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q103",
        "prompt": "for sikli ichida continue operatori nima qiladi?",
        "options": [
          "Keyingi iteratsiyaga o'tadi",
          "Siklni to'xtatadi",
          "Kodni tugatadi",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q104",
        "prompt": "for siklining ichida boshqa siklni joylashtirish mumkinmi?",
        "options": [
          "Ha, bu ichma-ich sikl deb ataladi",
          "Yo'q, faqat bitta sikl bo'lishi kerak",
          "Faqat while sikli joylashtiriladi",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q105",
        "prompt": "while operatori qanday maqsadda ishlatiladi?",
        "options": [
          "Takrorlash jarayonlarini shart bajarilgunga qadar davom ettirish uchun",
          "Dastur boshqaruvini tugatish uchun",
          "Faqat bitta shartni tekshirish uchun",
          "Dastlabki qiymatni belgilash uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q106",
        "prompt": "while siklining umumiy sintaksisini tanlang:",
        "options": [
          "while (shart) { /* kod */ }",
          "while { shart; /* kod */ }",
          "while (/* kod */) shart",
          "while (shart) /* kod */"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q107",
        "prompt": "do-while sikli qanday farq qiladi?",
        "options": [
          "Kod kamida bir marta bajariladi",
          "Shart bajarilmasa ham sikl tugamaydi",
          "Shartsiz ishlaydi",
          "Shart bajarilmasa kod ishlamaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q108",
        "prompt": "Quyidagi while siklining natijasi qanday bo'ladi? int i=0; while (i<3) {cout <<i; i++; }",
        "options": [
          "012",
          "123",
          "0123",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q109",
        "prompt": "do-while siklining umumiy sintaksisini tanlang:",
        "options": [
          "do { /* kod */ } while (shart);",
          "while { /* kod */ } do (shart);",
          "do while { /* kod */ } (shart);",
          "do { /* kod */ (shart); }"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q110",
        "prompt": "Quyidagi kodning natijasi qanday bo'ladi? int i=5; do {cout << i << \" \"; i--; } while (i > 0);",
        "options": [
          "54321",
          "543210",
          "5 4 3 2",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q111",
        "prompt": "while sikli ichida break operatori nima qiladi?",
        "options": [
          "Siklni to'xtatadi",
          "Keyingi iteratsiyaga o'tadi",
          "Kodni qayta boshlaydi",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q112",
        "prompt": "while siklida shart bajarilmasa nima bo'ladi?",
        "options": [
          "Sikl tugaydi",
          "Kod kamida bir marta bajariladi",
          "Xato beradi",
          "Kod davom etadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q113",
        "prompt": "Quyidagi kodda do-while qanday ishlaydi? int x=0; do { cout << x << \" \"; } while (x > 0);",
        "options": [
          "0",
          "Xato beradi",
          "Hech narsa chop etilmaydi",
          "00"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q114",
        "prompt": "Quyidagi while siklida qanday xato bor? int i=0; while (i<3) cout << i;",
        "options": [
          "i++ ishlatilmagan",
          "Shart noto'g'ri yozilgan",
          "i o'zgaruvchisi noto'g'ri e'lon qilingan",
          "Siklning oxiri yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q115",
        "prompt": "while va do-while o'rtasidagi asosiy farq nimada?",
        "options": [
          "while shartni boshida tekshiradi, do-while oxirida tekshiradi",
          "do-while faqat bir marta ishlaydi",
          "while faqat shartsiz ishlaydi",
          "do-while faqat musbat qiymatlar bilan ishlaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q116",
        "prompt": "Quyidagi kodning natijasi qanday bo'ladi? int i=0 while (i<3) { cout << i; i+=2 }",
        "options": [
          "02",
          "012",
          "024",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q117",
        "prompt": "break operatori qanday maqsadda ishlatiladi?",
        "options": [
          "Siklni to'xtatish uchun",
          "Keyingi iteratsiyaga o'tish uchun",
          "Shartni tekshirish uchun",
          "Nishonga o'tish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q118",
        "prompt": "continue operatori qanday maqsadda ishlatiladi?",
        "options": [
          "Keyingi iteratsiyaga o'tish uchun",
          "Siklni to'xtatish uchun",
          "Dastur boshqaruvini tugatish uchun",
          "Nishonga o'tish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q119",
        "prompt": "goto operatori qanday ishlaydi?",
        "options": [
          "Dastur boshqaruvini belgilangan nishonga o'tkazish uchun",
          "Siklni qayta boshlash uchun",
          "Shartni bajarish uchun",
          "Kodni yakunlash uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q120",
        "prompt": "Quyidagi kodning natijasi qanday bo'ladi? for (int i=0; i<5; i++) { if (i==3) break; cout << i << \" \";}",
        "options": [
          "012",
          "0123",
          "1234",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q121",
        "prompt": "continue operatorining natijasini tanlang: for (int i=0; i<5; i++) { if (i==2) continue; cout << i << \" \"; }",
        "options": [
          "0134",
          "01234",
          "012",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q122",
        "prompt": "goto operatori va nishon qanday ishlatiladi?",
        "options": [
          "goto label; va label: deb belgilangan joyga o'tadi",
          "goto: va label ishlatiladi",
          "Faqat goto label; yoziladi",
          "goto label; sikl ichida ishlatiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q123",
        "prompt": "break operatorini qaysi joyda ishlatish mumkin?",
        "options": [
          "Sikllar va switch operatorida",
          "Faqat for siklida",
          "Faqat while siklida",
          "Faqat funksiyalar ichida"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q124",
        "prompt": "continue operatori qaysi sharoitda ishlaydi?",
        "options": [
          "Keyingi iteratsiyaga o'tishni tashkil qilishda",
          "Siklni tugatishda",
          "Nishonga o'tishda",
          "Xato tekshirishda"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q125",
        "prompt": "break operatori ishlatilmasa nima bo'ladi? switch (2) { case 1: cout << \"Bir\"; case 2: cout << \"Ikki\"; case 3: cout << \"Uch\"; }",
        "options": [
          "IkkiUch",
          "Ikki",
          "Xato beradi",
          "Hech narsa chop etilmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q126",
        "prompt": "Quyidagi kod natijasi qanday? int i =0; while (i<5) {i++; if (i==3) continue; cout << i <<\" \"; }",
        "options": [
          "1245",
          "12345",
          "01245",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q127",
        "prompt": "goto operatoridan foydalanish qanday tavsiya qilinadi?",
        "options": [
          "Faqat zarurat bo'lsa foydalanish kerak",
          "Har qanday joyda ishlatish kerak",
          "Faqat sikllar ichida ishlatiladi",
          "goto operatori tavsiya etilmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q128",
        "prompt": "break, continue va goto operatorlari o'rtasidagi asosiy farq nima?",
        "options": [
          "break sikl yoki switch tugatadi, continue iteratsiyani o'tkazadi, goto nishonga o'tadi",
          "Ular bir xil ishlaydi",
          "Faqat goto siklni boshqaradi",
          "continue va break faqat shartli operatorlar bilan ishlatiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q129",
        "prompt": "Bir o'lchovli statik massiv qanday aniqlanadi?",
        "options": [
          "int arr[5];",
          "int arr;",
          "int arr[];",
          "arr[5];"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q130",
        "prompt": "Quyidagi kodda massivning nechinchi elementi o'qilmoqda? int arr[5]={1,2,3,4,5}; cout << arr[2];",
        "options": [
          "Uchinchi element",
          "Birinchi element",
          "To'rtinchi element",
          "Ikkinchi element"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q131",
        "prompt": "Massivning indekslari qaysi qiymatdan boshlanadi?",
        "options": [
          "0",
          "1",
          "2",
          "Massiv o'lchamiga bog'liq"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q132",
        "prompt": "Quyidagi kodda qanday xatolik bor? int arr[3]; arr[3]=10;",
        "options": [
          "Indeks massiv chegarasidan tashqarida",
          "arr[3] noto'g'ri aniqlangan",
          "Massiv qiymati noto'g'ri",
          "Xatolik yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q133",
        "prompt": "Quyidagi kodning natijasi qanday bo'ladi? int arr[4 ]={1,2,3,4}; cout << arr[0] + arr[3];",
        "options": [
          "5",
          "4",
          "7",
          "6"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q134",
        "prompt": "Massiv elementlariga qanday murojaat qilinadi?",
        "options": [
          "arr[indeks]",
          "arr.index",
          "arr(index)",
          "arr->index"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q135",
        "prompt": "Quyidagi kodda massivning uzunligi qanday aniqlanadi? int arr[10];",
        "options": [
          "sizeof(arr) / sizeof(arr[0])",
          "sizeof(arr)",
          "length(arr)",
          "sizeof(arr[0])"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q136",
        "prompt": "Statik massiv qanday qiymat bilan to'ldiriladi, agar qiymatlar belgilanmasa?",
        "options": [
          "0",
          "nullptr",
          "1",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q137",
        "prompt": "Quyidagi kodning natijasi qanday bo'ladi? int arr[5] = {10, 20, 30}; cout << arr[4];",
        "options": [
          "0",
          "10",
          "Xato beradi",
          "Tasodifiy qiymat"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q138",
        "prompt": "Massivning elementlarini qanday chop etish mumkin? int arr[3] = {1, 2, 3}; for (int i=0; i < 3; i++) { cout << arr[i] << \" \"; }",
        "options": [
          "1 2 3",
          "123",
          "12",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q139",
        "prompt": "Quyidagi kodning natijasi qanday bo'ladi? int arr[4] = {5}; cout << arr[1];",
        "options": [
          "0",
          "5",
          "Xato beradi",
          "Tasodifiy qiymat"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q140",
        "prompt": "Bir o'lchovli massivni boshqa massivga nusxalash uchun nima ishlatiladi?",
        "options": [
          "Sikl yordamida har bir elementni nusxalash",
          "copy(arr1, arr2) funksiyasi",
          "Massivni tenglashtirish (arr1=arr2)",
          "To'g'ridan-to'g'ri o'tkazish (arr2=arr1)"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q141",
        "prompt": "Ko'p o'lchovli massiv qanday aniqlanadi?",
        "options": [
          "int arr[3][4];",
          "int arr[3, 4];",
          "int arr[3][4][5];",
          "int arr[3];"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q142",
        "prompt": "Quyidagi massivning necha qatori va ustuni bor? int arr[2][3];",
        "options": [
          "2 qator, 3 ustun",
          "3 qator, 2 ustun",
          "2 qator, 2 ustun",
          "3 qator, 3 ustun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q143",
        "prompt": "Quyidagi kodda massivning qaysi elementi chiqarilmoqda? int arr[3][3] = { {1, 2, 3}, {4, 5, 6}, {7,8,9} }; cout << arr[1][2];",
        "options": [
          "6",
          "4",
          "9",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q144",
        "prompt": "Ko'p o'lchovli massiv elementlariga qanday murojaat qilinadi?",
        "options": [
          "arr[qator][ustun]",
          "arr[qator, ustun]",
          "arr.qator.ustun",
          "arr[ustun][qator]"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q145",
        "prompt": "Quyidagi kodning natijasi qanday? int arr[2][2] = { {1, 2}, {3,4} }; cout << arr[0][1]+ arr[1][0];",
        "options": [
          "5",
          "6",
          "3",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q146",
        "prompt": "Ko'p o'lchovli massivni qanday e'lon qilsa bo'ladi?",
        "options": [
          "int arr[2][3] = { {1, 2, 3}, {4, 5, 6} };",
          "int arr[2][3] = {1, 2, 3, 4, 5, 6};",
          "int arr[2, 3] = {{1, 2, 3}, {4, 5, 6}};",
          "int arr[2][3]={1,2,3};"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q147",
        "prompt": "Quyidagi massivdagi 3-element qanday topiladi? int arr[3][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };",
        "options": [
          "arr[0][2]",
          "arr[1][0]",
          "arr[2][2]",
          "arr[1][2]"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q148",
        "prompt": "Ko'p o'lchovli massivning barcha elementlarini chop etish uchun qanday sikldan foydalaniladi?",
        "options": [
          "Ichma-ich for sikllaridan",
          "Bitta for siklidan",
          "while siklidan",
          "goto operatoridan"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q149",
        "prompt": "Quyidagi kodning natijasi qanday bo'ladi? int arr[2][3] = { {1, 2, 3}, {4, 5, 6} }; cout << arr[1][1];",
        "options": [
          "5",
          "4",
          "6",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-3-q150",
        "prompt": "Ko'p o'lchovli massivni e'lon qilganda barcha qiymatlarni o'rnata olmasa, nima bo'ladi?",
        "options": [
          "Qolgan elementlar avtomatik ravishda 0 bilan to'ldiriladi",
          "Xato beradi",
          "Qolgan elementlar tasodifiy qiymatlar bilan to'ldiriladi",
          "Massiv noto'g'ri e'lon qilinadi"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "das-4",
    "title": "4-qism: Funksiyalar va nomlar fazosi (namespace) (151-200 savollar)",
    "description": "Dasturlash",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "das-4-q151",
        "prompt": "Quyidagi kodda qaysi qiymat chop etiladi? int arr[3][2] = { {10, 20}, {30, 40}, {50, 60} }; cout << arr[2][0];",
        "options": [
          "50",
          "60",
          "30",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q152",
        "prompt": "Quyidagi massivning nechta elementi bor? int arr[4][5];",
        "options": [
          "20",
          "9",
          "10",
          "25"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q153",
        "prompt": "Funksiya qanday e'lon qilinadi?",
        "options": [
          "int funksiyaNomi(int a, int b);",
          "void funksiyaNomi(int a, b);",
          "funksiyaNomi(int a, int b)",
          "funksiya(int a, int b);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q154",
        "prompt": "Funksiya aniqlanishi qayerda bo'lishi mumkin?",
        "options": [
          "main() dan oldin yoki keyin",
          "Faqat main() funksiyasining ichida",
          "Faqat main() funksiyasidan oldin",
          "Faqat global maydonda"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q155",
        "prompt": "Quyidagi funksiyaning qanday natijasi bor? int sum(int a, int b) {return a+b;} int main() { cout << sum(2, 3); }",
        "options": [
          "5",
          "23",
          "Xato beradi",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q156",
        "prompt": "Funksiya prototipi nima uchun kerak?",
        "options": [
          "Funksiyaning xotirada mavjud ekanligini bildiradi",
          "Funksiyaga oʻzgarmas qiymat berish uchun",
          "Parametrlarni qayta ishlash uchun",
          "Funksiya ichidagi qiymatlarni chop etish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q157",
        "prompt": "Lokal oʻzgaruvchilar qayerda amal qiladi?",
        "options": [
          "O'zlari aniqlangan funksiya ichida",
          "Dasturning barcha joyida",
          "Faqat global maydonda",
          "Hech qaerda ishlatilmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q158",
        "prompt": "Global oʻzgaruvchi qayerda amal qiladi?",
        "options": [
          "Dasturda hamma joyda",
          "Faqat main() funksiyasida",
          "Faqat o'zgaruvchi aniqlangan funksiyada",
          "Faqat lokal funksiyalar ichida"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q159",
        "prompt": "Quyidagi kodda qanday xatolik bor? int x=10 int main() { int x=20; cout << x; }",
        "options": [
          "Hech qanday xato yo'q",
          "Global va lokal oʻzgaruvchilar bir xil bo'lishi mumkin emas",
          "Xato: x qayta e'lon qilingan",
          "Global o'zgaruvchi ishlatilmayapti"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q160",
        "prompt": "Funksiya ichida global oʻzgaruvchidan foydalanish uchun nima ishlatiladi?",
        "options": [
          "Global o'zgaruvchiga to'g'ridan-to'g'ri murojaat",
          "local kalit so'zi",
          "O'zgaruvchi qayta aniqlanadi",
          "extern kalit so'zi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q161",
        "prompt": "Funksiyaga qiymat qanday uzatiladi?",
        "options": [
          "Parametrlar yordamida",
          "Faqat global o'zgaruvchilar orqali",
          "Massivlar orqali",
          "Lokal o'zgaruvchilar yordamida"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q162",
        "prompt": "Lokal va global oʻzgaruvchi bir xil nomga ega boʻlsa, qaysi biri ustunlik qiladi?",
        "options": [
          "Lokal o'zgaruvchi",
          "Global o'zgaruvchi",
          "Hech biri ishlamaydi",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q163",
        "prompt": "Quyidagi kodda nechta funksiya e'lon qilingan? int add(int a, int b); int subtract(int a, int b);",
        "options": [
          "2",
          "1",
          "0",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q164",
        "prompt": "Quyidagi kodda oʻzgaruvchi qanday xotira sinfiga kiradi? static int x=10;",
        "options": [
          "Statik",
          "Avtomatik",
          "Tashqi",
          "Registr"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q165",
        "prompt": "Xotira sinfi qaysi kalit so'z bilan aniqlanadi?",
        "options": [
          "static, extern, auto, register",
          "class",
          "this",
          "inline"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q166",
        "prompt": "static oʻzgaruvchilar qayerda amal qiladi?",
        "options": [
          "Funksiya davomida o'z qiymatini saqlaydi",
          "Faqat funksiya ichida",
          "Faqat global maydonda ishlatiladi",
          "Faqat massivlar uchun ishlatiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q167",
        "prompt": "register oʻzgaruvchi xotiraning qaysi qismida saqlanadi?",
        "options": [
          "Registrlarda",
          "Stackda",
          "Heapda",
          "Global segmentda"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q168",
        "prompt": "extern kalit so'zi nima uchun ishlatiladi?",
        "options": [
          "Boshqa fayldagi oʻzgaruvchini ishlatish uchun",
          "Lokal o'zgaruvchini e'lon qilish uchun",
          "Xotirani boshqarish uchun",
          "Inline funksiyalarni chaqirish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q169",
        "prompt": "Inline funksiyalarni qanday aniqlash mumkin?",
        "options": [
          "inline kalit so'zi bilan",
          "static kalit so'zi bilan",
          "auto kalit so'zi bilan",
          "register kalit so'zi bilan"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q170",
        "prompt": "Inline funksiyalarni ishlatishning afzalligi nimada?",
        "options": [
          "Funksiya chaqiruvi uchun vaqtni kamaytiradi",
          "Xotiradan tejamli foydalanadi",
          "Kodni murakkablashtiradi",
          "Funksiya kodini optimallashtiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q171",
        "prompt": "Inline funksiyalar qayerda joylashadi?",
        "options": [
          "Funksiya chaqirilgan joyga qo'yiladi",
          "Stack xotirasida joylashadi",
          "Registr xotirasida saqlanadi",
          "Global maydonda saqlanadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q172",
        "prompt": "Inline funksiyalarni ishlatishning cheklovi qanday?",
        "options": [
          "Juda katta va murakkab funksiyalarni inline qilib bo'lmaydi",
          "Har qanday funksiyani inline qilish mumkin",
          "Faqat static funksiyalar inline bo'lishi mumkin",
          "Faqat qaytarmaydigan funksiyalar inline bo'ladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q173",
        "prompt": "Statik o'zgaruvchining qiymati dasturda qachon yo'qoladi?",
        "options": [
          "Dastur tugaganda",
          "Funksiya tugagandan so'ng",
          "Dasturda boshqa qiymat berilganda",
          "Inline funksiyada ishlatilganda"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q174",
        "prompt": "auto kalit so'zining maqsadi nima?",
        "options": [
          "O'zgaruvchining turini avtomatik aniqlash",
          "Avtomatik ravishda inline qilish",
          "Registrda saqlash",
          "Global oʻzgaruvchilarni aniqlash"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q175",
        "prompt": "Quyidagi kodning natijasi qanday? int x=5; extern int y; int main() { y=10; cout << x + y; }",
        "options": [
          "Xato beradi (y aniqlanmagan)",
          "15",
          "10",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q176",
        "prompt": "namespace nima uchun ishlatiladi?",
        "options": [
          "Bir xil nomli funksiyalar yoki o'zgaruvchilarni turli fazalarda aniqlash uchun",
          "Funksiyalarni global maydonga olib chiqish uchun",
          "O'zgaruvchilarni dinamik xotirada saqlash uchun",
          "Ma'lumotlarni registr xotirasida saqlash uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q177",
        "prompt": "Qanday qilib namespace e'lon qilinadi?",
        "options": [
          "namespace nom { ... }",
          "name space { ... }",
          "using namespace { ... }",
          "class namespace { ... }"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q178",
        "prompt": "Global nomlar fazosi qanday aniqlanadi?",
        "options": [
          ":: operatori yordamida",
          "namespace global { ... }",
          "using namespace std; orqali",
          "Xususiy belgi yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q179",
        "prompt": "Bir nechta namespacelardan qanday foydalaniladi?",
        "options": [
          "Foydalanilayotgan namespaceni aniqlash orqali",
          "Har bir o'zgaruvchini qayta aniqlash orqali",
          "namespacelar oʻzaro birlashtiriladi",
          "Har doim global maydon ishlatiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q180",
        "prompt": "Quyidagi kodning natijasi qanday bo'ladi? namespace A { int x=10; } namespace B { int x=20; } int main() {cout << A::x << \" \" << B::x; }",
        "options": [
          "10 20",
          "20 10",
          "Xato beradi",
          "Hech narsa chiqmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q181",
        "prompt": "using namespace std; nima uchun ishlatiladi?",
        "options": [
          "std nomlar fazosidagi elementlarni to'g'ridan-to'g'ri ishlatish uchun",
          "Barcha namespacelarni birlashtirish uchun",
          "Faqat cout va cin uchun ishlatiladi",
          "Inline funksiyalarni chaqirish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q182",
        "prompt": "Quyidagi kod xato beradi, chunki: namespace A { int x=10;} namespace B { int x=10; } using namespace A; using namespace B; int main() { cout << x; }",
        "options": [
          "Nomlar fazolari to'qnashuvi mavjud",
          "using operatori noto'g'ri ishlatilgan",
          "Global maydondagi x aniqlanmagan",
          "Kod kompilyatorda noto'g'ri ishlaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q183",
        "prompt": "Qanday qilib namespace ichida ichki namespace yaratiladi?",
        "options": [
          "namespace tashqi { namespace ichki { ... } }",
          "namespace ichki {...} namespace tashqi {...}",
          "using namespace ichki;",
          "namespace global { namespace ichki {...}}"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q184",
        "prompt": "Quyidagi kodning natijasi qanday bo'ladi? namespace A { namespace B {int x=15; } } int main() { cout << A::B::x; }",
        "options": [
          "15",
          "Xato beradi",
          "Hech narsa chiqmaydi",
          "A yoki B aniqlanmagan"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q185",
        "prompt": "Nomlar fazosini biror qismini import qilish uchun nima ishlatiladi?",
        "options": [
          "using operatori",
          "include direktivasi",
          "namespace ichida class aniqlash",
          "extern operatori"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q186",
        "prompt": "Quyidagi kodda qaysi x ishlatiladi? namespace A { int x=5; } int x=10 int main() { cout << x; }",
        "options": [
          "Global x",
          "A::x",
          "Hech biri",
          "Xato beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q187",
        "prompt": "Nomlar fazosining afzalligi nimada?",
        "options": [
          "Kodni tartibga soladi va nomlarning to'qnashuvini oldini oladi",
          "Har bir o'zgaruvchining qiymatini saqlashni osonlashtiradi",
          "Global o'zgaruvchilarni avtomatik aniqlaydi",
          "Xotiradan samarali foydalanadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q188",
        "prompt": "Rekursiv funksiya nima?",
        "options": [
          "O'zini o'zi chaqiradigan funksiya",
          "Boshqa funksiyalarni chaqiradigan funksiya",
          "Dasturda faqat bir marta ishlatiladigan funksiya",
          "Xotira uzatish uchun ishlatiladigan funksiya"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q189",
        "prompt": "Quyidagi kodda qanday xato bor? int factorial(int n) { return n * factorial(n - 1); } int main() { cout << factorial(5); }",
        "options": [
          "Rekursiya tugash shartini aniqlash kerak",
          "Rekursiya toʻgʻri ishlamaydi",
          "n oʻzgaruvchisi noto'g'ri ishlatilgan",
          "Hech qanday xato yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q190",
        "prompt": "Rekursiv funksiyalarni qanday tugatish mumkin?",
        "options": [
          "Bazaviy holatni aniqlash orqali",
          "Faqat global o'zgaruvchilar bilan",
          "Har doim funksiya chiqishdan avval return so'zini ishlatish orqali",
          "Hech qanday to'xtash usuli yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q191",
        "prompt": "Quyidagi kodda qanday natija olinadi? int factorial(int n) { if (n<=1) return 1; return n * factorial(n-1); } int main() { cout << factorial(4); }",
        "options": [
          "24",
          "4",
          "10",
          "1"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q192",
        "prompt": "Rekursiv funksiyada bazaviy holat nima?",
        "options": [
          "Rekursiv chaqiruvni to'xtatish sharti",
          "Rekursiyaning yangi boshlanishi",
          "Funksiyaning har doim bir xil qiymat qaytarishi",
          "Xatolikni tuzatish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q193",
        "prompt": "Quyidagi kodni qanday optimallashtirish mumkin? int factorial(int n) { if (n==0) return 1; return n* factorial(n-1); } int main() { cout << factorial(6); }",
        "options": [
          "Rekursiya oʻrniga sikl ishlatish",
          "Funksiyaga parametrlar qo'shish",
          "Bazaviy holatni aniqlash",
          "Hech narsa optimallashtirilmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q194",
        "prompt": "Quyidagi kodda qayta yuklanish (overloading) qanday ishlatilgan? int sum(int a, int b) { return a+b; } double sum(double a, double b) { return a+b; } int main() { cout << sum(3, 4); cout << sum(2.5, 3.5); }",
        "options": [
          "sum funksiyasi turli parametrlar bilan qayta yuklanadi",
          "sum faqat int qiymatlari uchun ishlaydi",
          "sum faqat double qiymatlar bilan ishlaydi",
          "Qayta yuklanish ishlatilmagan"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q195",
        "prompt": "Quyidagi kodda qayta yuklanish (overloading) nima sababdan ishlaydi? int sum(int a, int b) { return a+b; } double sum(double a, double b) { return a+b; }",
        "options": [
          "Funksiya parametrlarining turiga qarab qayta yuklanadi",
          "Faqat ikkita funksiya mavjud",
          "Funksiya nomlari bir xil bo'lishi kerak",
          "Parametrlarning soni emas, turi muhim"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q196",
        "prompt": "Rekursiv funksiyaning yomon tomoni nima?",
        "options": [
          "Rekursiya chuqurlashgani sayin xotira iste'moli ortadi",
          "Xotira unumdorligi yuqori boʻladi",
          "Funksiya faqat bir marta ishlatiladi",
          "Faqat oddiy vazifalar uchun ishlatiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q197",
        "prompt": "Quyidagi kodda qayta yuklanish (overloading) bo'lishi mumkinmi? int add(int a, int b) { return a+b; } int add(int a, int b, int c) { return a+b+c; }",
        "options": [
          "Ha",
          "Yo'q, nomlar bir xil bo'lgan funksiyalar qayta yuklanmaydi",
          "Ha, lekin parametrlar turli xil bo'lishi kerak",
          "Xatolik beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q198",
        "prompt": "Rekursiv funksiya necha marta chaqiriladi?",
        "options": [
          "Bazaviy holatga yetguncha chaqiriladi",
          "Har doim bitta marta",
          "Yig'ishning qiymati belgilanmaguncha",
          "Har doim cheksiz martalab chaqiriladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q199",
        "prompt": "Quyidagi kodni qayta yuklash (overloading) yordamida qanday o'zgartirish mumkin? int multiply(int a, int b) { return a* b; }",
        "options": [
          "Parametrlarni turini o'zgartirish kerak",
          "Faqat bitta funksiya e'lon qilish kerak",
          "Parametrlarning sonini o'zgartirish kerak",
          "Kodni o'zgartirish shart emas"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-4-q200",
        "prompt": "Quyidagi kodda qayta yuklanish (overloading) nima sababdan ishlaydi? int sum(int a, int b) { return a+b; } double sum(double a, double b) { return a+b; }",
        "options": [
          "Funksiya parametrlarining turiga qarab qayta yuklanadi",
          "Faqat ikkita funksiya mavjud",
          "Funksiya nomlari bir xil bo'lishi kerak",
          "Parametrlarning soni emas, turi muhim"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "das-5",
    "title": "5-qism: Ko'rsatkichlar (Pointers) va dinamik xotira (201-250 savollar)",
    "description": "Dasturlash",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "das-5-q201",
        "prompt": "C++ dasturlash tilida ko'rsatkich nima?",
        "options": [
          "O'zgaruvchining manzilini saqlovchi o'zgaruvchi",
          "Har qanday o'zgaruvchi turi",
          "Faqat sonlar bilan ishlovchi o'zgaruvchi",
          "Xotirani avtomatik boshqaruvchi obyekt"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q202",
        "prompt": "Quyidagi kodda ptr qanday turdagi o'zgaruvchi? int a=5; int* ptr=&a;",
        "options": [
          "Ko'rsatkich (pointer)",
          "Massiv",
          "Obyekt",
          "Referens"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q203",
        "prompt": "* operatorining vazifasi nima?",
        "options": [
          "Ko'rsatkich orqali qiymatga murojaat qilish",
          "Qo'shish amali",
          "Boʻlish amali",
          "Izoh yozish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q204",
        "prompt": "& belgisi nima uchun ishlatiladi?",
        "options": [
          "O'zgaruvchining manzilini olish uchun",
          "Ko'paytirish uchun",
          "Matn biriktirish uchun",
          "Foydalanuvchi kiritmasini olish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q205",
        "prompt": "Quyidagi kodda natija nima bo'ladi? int a=10; int* p=&a; cout <<*p;",
        "options": [
          "10",
          "Manzil chiqariladi",
          "Xatolik",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q206",
        "prompt": "Ko'rsatkichni null qiymat bilan qanday boshlash mumkin?",
        "options": [
          "int* ptr = nullptr;",
          "int* ptr=0;",
          "int* ptr = NULL;",
          "Hammasi toʻgʻri"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q207",
        "prompt": "Quyidagi kodda natija nima bo'ladi? int a=10; int* p=&a; cout << *p;",
        "options": [
          "10",
          "Manzil chiqariladi",
          "Xatolik",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q208",
        "prompt": "delete operatori nima uchun ishlatiladi?",
        "options": [
          "Dinamik xotirani tozalash uchun",
          "Faylni o'chirish uchun",
          "Ob'ektni o'chirish uchun",
          "Ko'rsatkichni null qilish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q209",
        "prompt": "Quyidagi qator nimani bildiradi? int** p;",
        "options": [
          "Ikki martalik ko'rsatkich",
          "Massiv ko'rsatkichi",
          "Obyektga ko'rsatkich",
          "Funktsiyaga ko'rsatkich"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q210",
        "prompt": "Dinamik massivni qanday e'lon qilamiz?",
        "options": [
          "int* arr = new int[10];",
          "int arr = new int[10];",
          "int arr[10];",
          "new int arr[10];"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q211",
        "prompt": "ptr++ operatsiyasi ko'rsatkichga qanday ta'sir qiladi?",
        "options": [
          "Keyingi element manziliga oʻtadi",
          "Qiymatni oshiradi",
          "O'zgaruvchini o'chiradi",
          "Hech narsa bo'lmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q212",
        "prompt": "nullptr ning vazifasi nima?",
        "options": [
          "Ko'rsatkichning hech narsaga ishora qilmasligini bildiradi",
          "Qiymatni nolga oʻrnatadi",
          "Massiv uzunligini bildiradi",
          "Ob'ekt yaratadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q213",
        "prompt": "Quyidagi kodda qanday xatolik mavjud? int* p; *p=10;",
        "options": [
          "Ko'rsatkichga qiymat biriktirilmagan",
          "Qiymat noto'g'ri tayinlangan",
          "int e'lon qilinmagan",
          "Sintaksis xatosi yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q214",
        "prompt": "Ko'rsatkichni qanday qilib boshqa ko'rsatkichga tayinlash mumkin?",
        "options": [
          "ptr1 = ptr2;",
          "*ptr1 = *ptr2;",
          "&ptr1 = ptr2;",
          "ptr1 = *ptr2;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q215",
        "prompt": "int a=5 int* p=&a; *p+=2; ifodasi natijasi nima bo'ladi?",
        "options": [
          "a=7",
          "a=2",
          "p=7",
          "Xatolik yuz beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q216",
        "prompt": "Funktsiyaga koʻrsatkich uzatishning asosiy afzalligi nima?",
        "options": [
          "Xotira tejash va bevosita qiymatni oʻzgartirish",
          "Katta hajmdagi obyektlar bilan ishlash",
          "Kodni tez bajarish",
          "Sintaksis soddaligi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q217",
        "prompt": "Quyidagi kodda qanday natija chiqariladi? int a=3; int* p=&a *p=5; cout << a;",
        "options": [
          "5",
          "3",
          "Xatolik",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q218",
        "prompt": "int arr[5] ={1,2,3,4,5}; int* p=arr bo'lsa, *(p+2) nima beradi?",
        "options": [
          "3",
          "2",
          "1",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q219",
        "prompt": "new operatori qanday vazifani bajaradi?",
        "options": [
          "Dinamik xotira ajratadi",
          "Qiymatni o'zgartiradi",
          "Ko'rsatkichni o'chiradi",
          "Qiymatni chiqaradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q220",
        "prompt": "delete[] va delete oʻrtasidagi farq nima?",
        "options": [
          "delete[] massivlar uchun, delete bitta obyekt uchun",
          "delete[] obyekt uchun, delete massiv uchun",
          "Farqi yo'q",
          "Har ikkalasi ham massivlar uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q221",
        "prompt": "& operatori C++ dasturlash tilida nima uchun ishlatiladi?",
        "options": [
          "O'zgaruvchining manzilini olish uchun",
          "Qiymatni inkrement qilish uchun",
          "Xotira ajratish uchun",
          "Qiymatni chiqarish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q222",
        "prompt": "Quyidagi koddan so'ng p nimani anglatadi? int a=7; int* p=&a",
        "options": [
          "a oʻzgaruvchisining manzilini saqlovchi ko'rsatkich",
          "Qiymat 7 boʻlgan oʻzgaruvchi",
          "Xatolik yuz beradi",
          "0 qiymat"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q223",
        "prompt": "Manzilga murojaat qilishda qaysi operator qo'llaniladi?",
        "options": [
          "*",
          "->",
          "&",
          "%"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q224",
        "prompt": "Quyidagi kodda *ptr nima beradi? int x=9; int* ptr=&x",
        "options": [
          "9",
          "Xatolik",
          "Manzil",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q225",
        "prompt": "Quyidagi int& ref = a; yozuvda ref qanday turdagi o'zgaruvchi?",
        "options": [
          "Havola (reference)",
          "Ko'rsatkich",
          "Massiv",
          "Ob'ekt"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q226",
        "prompt": "Quyidagi koddan keyin *ptr=15; bajarilsa, x qiymati qanday bo'ladi? int x=10; int* ptr= &x;",
        "options": [
          "15",
          "10",
          "0",
          "Xatolik"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q227",
        "prompt": "&x ifodasi nimani bildiradi?",
        "options": [
          "X o'zgaruvchisining manzilini",
          "X o'zgaruvchisining qiymatini",
          "X oʻzgaruvchisini o'chiradi",
          "Qiymatini 0 ga tenglashtiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q228",
        "prompt": "Quyidagilardan qaysi biri adres olish operatori hisoblanadi?",
        "options": [
          "&",
          "*",
          "->",
          "++"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q229",
        "prompt": "int* ptr = &num; kodida ptr qanday qiymatni saqlaydi?",
        "options": [
          "num oʻzgaruvchisining manzilini",
          "num qiymatini",
          "num nomini",
          "Hech nimani"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q230",
        "prompt": "Havolali o'zgaruvchiga qiymat berilsa, nima bo'ladi?",
        "options": [
          "Asl oʻzgaruvchining qiymati oʻzgaradi",
          "Xatolik yuz beradi",
          "Faqat havola oʻzgaradi",
          "Yangi manzil yaratiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q231",
        "prompt": "Quyidagilardan qaysi biri int& r=x yozuviga teng?",
        "options": [
          "Hech biri teng emas",
          "int r=&x;",
          "int*r=x;",
          "int* r=&x"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q232",
        "prompt": "Ko'rsatkich orqali qiymatni o'zgartirishda qaysi operator ishlatiladi?",
        "options": [
          "*",
          "&",
          "->",
          "~"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q233",
        "prompt": "Quyidagi kodda ref va a qanday bog'langan? int a=5; int& ref =a;",
        "options": [
          "Ikkalasi ham bir xil xotira manziliga ega",
          "Hech qanday aloqasi yoʻq",
          "ref - ko'rsatkich",
          "a - ko'rsatkich"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q234",
        "prompt": "C++ da referencelar qanday afzallik beradi?",
        "options": [
          "Bevosita oʻzgaruvchini boshqarish imkonini beradi",
          "Xavfsiz bo'lmagan operatsiyalarni bajaradi",
          "Koʻp xotira talab qiladi",
          "Ikkilamchi nusxa yaratadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q235",
        "prompt": "Quyidagilardan qaysi biri ko'rsatkich emas, lekin adres bilan ishlaydi?",
        "options": [
          "int& r=a;",
          "int* p=&a;",
          "int a=10",
          "int arr[10];"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q236",
        "prompt": "C++ da ko'rsatkichlar va havolalar oʻrtasidagi asosiy farq nima?",
        "options": [
          "Havolalar bir marta bog'lanadi, ko'rsatkichlar esa o'zgarishi mumkin",
          "Ko'rsatkichlar xavfsizroq",
          "Havola massivlar uchun ishlatiladi",
          "Farq yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q237",
        "prompt": "int a=8; int* p=&a bo'lsa, cout << p; qanday natija beradi?",
        "options": [
          "Manzil (masalan: 0x6ffe34)",
          "8",
          "Xatolik",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q238",
        "prompt": "*(&a) ifodasi nima beradi?",
        "options": [
          "a ning qiymatini",
          "a ning manzilini",
          "Xatolik",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q239",
        "prompt": "Quyidagilardan qaysi biri havola (reference) e'lon qilishga misol?",
        "options": [
          "int& r=a;",
          "int *X=a;",
          "int x=*a;",
          "int r=&a;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q240",
        "prompt": "Quyidagi holatda nechta adres bir xil xotirani ko'rsatmoqda? int a=10; int* p=&a; int& r = a;",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q241",
        "prompt": "Dinamik massiv nima?",
        "options": [
          "Xotirada dastur ishlash vaqtida ajratiladigan massiv",
          "Belgilangan oʻlchamdagi oddiy massiv",
          "Faqat const qiymatlar saqlanadigan massiv",
          "Faqat string elementlardan iborat massiv"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q242",
        "prompt": "C++ da dinamik massiv yaratish uchun qaysi operator ishlatiladi?",
        "options": [
          "new",
          "malloc",
          "create",
          "gen"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q243",
        "prompt": "int* arr = new int[5]; kodida arr nimani anglatadi?",
        "options": [
          "5 ta elementli dinamik massivning birinchi elementiga ko'rsatkich",
          "5 ta int qiymatni",
          "Xatolik",
          "Int qiymat"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q244",
        "prompt": "Dinamik massiv uchun ajratilgan xotirani qanday tozalash kerak?",
        "options": [
          "delete[] arr;",
          "delete arr;",
          "delete(arr);",
          "free(arr);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q245",
        "prompt": "Dinamik massivni yaratishda xatolik bo'lishi mumkinmi?",
        "options": [
          "Ha, xotira ajratilmasa",
          "Yo'q, har doim ishlaydi",
          "Faqat massiv string bo'lsa",
          "Faqat int turlarida"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q246",
        "prompt": "int* arr = new int[n]; kodida n nimani bildiradi?",
        "options": [
          "Massivning oʻlchamini",
          "Int turini",
          "Ko'rsatkich",
          "Qiymat emas"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q247",
        "prompt": "Dinamik massivga qiymat berish qanday amalga oshiriladi?",
        "options": [
          "arr[0]=10;",
          "arr=10;",
          "*arr[0] = 10;",
          "*arr = {10, 20, 30};"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q248",
        "prompt": "Dinamik massivdan keyin delete[] arr; bajarilmasa nima yuz beradi?",
        "options": [
          "Xotira oqimi (memory leak) yuz beradi",
          "Hech nima bo'lmaydi",
          "Qiymatlar o'chiriladi",
          "Kompilyator xatolik beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q249",
        "prompt": "Quyidagi kod to'g'rimi? int* a = new int[10]; delete[] a;",
        "options": [
          "Ha",
          "Yo'q",
          "Faqat stackda ishlaydi",
          "Faqat float uchun to'g'ri"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-5-q250",
        "prompt": "Dinamik massivda elementlarga qanday murojaat qilinadi?",
        "options": [
          "arr[i]",
          "*arr(i)",
          "arr->i",
          "&arr[i]"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "das-6",
    "title": "6-qism: Dinamik massivlar va Funksiyaga massiv uzatish (251-300 savollar)",
    "description": "Dasturlash",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "das-6-q251",
        "prompt": "new operatori qanday turdagi xotirada joy ajratadi?",
        "options": [
          "Heap",
          "Stack",
          "ROM",
          "Register"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q252",
        "prompt": "C++ da new orqali ajratilgan xotirani boshqarish nima deyiladi?",
        "options": [
          "Dinamik xotira boshqaruvi",
          "Statik xotira",
          "Obyekt inkapsulyatsiyasi",
          "Xotira ruxsati"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q253",
        "prompt": "C++ dasturida dinamik massivning oʻlchami nima bilan belgilanadi?",
        "options": [
          "Ajratilgan elementlar soni bilan",
          "sizeof(arr)",
          "length(arr)",
          "O'z-o'zidan aniqlanadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q254",
        "prompt": "int* a = new int[5]; va delete[] a; kodlarining vazifasi nima?",
        "options": [
          "5 ta elementli massiv yaratadi va xotirani tozalaydi",
          "Int oʻzgaruvchi yaratadi",
          "Faqat 1 element uchun ishlaydi",
          "Massivni faqat o'chirish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q255",
        "prompt": "int* a = new int; yozuvi nimani bildiradi?",
        "options": [
          "Yagona int qiymat uchun xotira ajratish",
          "Massiv",
          "Funksiya",
          "Ko'p element"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q256",
        "prompt": "Quyidagi koddan keyin arr dan foydalanish xatolikmi? int* arr = new int[5]; delete[] arr; arr[0] = 5;",
        "options": [
          "Ha, chunki xotira o'chirilgan",
          "Yo'q",
          "Massiv toʻlib ketgan",
          "Massiv hali yaratilmagan"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q257",
        "prompt": "C++ da std::vector qanday farq qiladi oddiy dinamik massivdan?",
        "options": [
          "O'z-o'zini boshqaradi va o'lchamni o'zgartiradi",
          "Hech qanday",
          "Faqat float qiymatlar uchun",
          "Uning o'rniga new ishlatiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q258",
        "prompt": "Dinamik massivni qaysi holatda ishlatish maqsadga muvofiq?",
        "options": [
          "Foydalanuvchi soni kiritgan elementlar bilan ishlashda",
          "Massiv uzunligi oldindan ma'lum bo'lsa",
          "Har doim",
          "Faqat stringlarda"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q259",
        "prompt": "delete[] operatori nima uchun kerak?",
        "options": [
          "Dinamik massivdan ajratilgan xotirani tozalash uchun",
          "Qiymat oʻzgartirish uchun",
          "Yangilash uchun",
          "Massivni ko'paytirish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q260",
        "prompt": "int* arr = new int[10]; soʻng arr[2] = 5; yozuvi qanday ishlaydi?",
        "options": [
          "2-chi indeksdagi elementga 5 qiymat beradi",
          "10-elementli massiv yaratib, 2-chi indeksga 5 yozadi",
          "Xatolik",
          "Har doim 0 qaytaradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q261",
        "prompt": "Funksiyaga massiv uzatishda qanday qilib birinchi elementning manzili olinadi?",
        "options": [
          "massiv",
          "&massiv[1]",
          "massiv + 1",
          "massiv[]"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q262",
        "prompt": "C++ da massiv funksiyaga qanday uzatiladi?",
        "options": [
          "Ko'rsatkich orqali",
          "Qiymat bo'yicha",
          "Havola orqali",
          "Nusxa sifatida"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q263",
        "prompt": "void f(int a[]) funksiyasi chaqirilsa, a qanday bo'ladi?",
        "options": [
          "Ko'rsatkich",
          "Int o'zgaruvchi",
          "Toʻliq massiv",
          "Statik qiymat"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q264",
        "prompt": "Funksiya parametrida massiv uzunligini ko'rsatish uchun nimalar kerak?",
        "options": [
          "Massiv va alohida o'lcham parametri",
          "Faqat massiv nomi",
          "Ko'rsatkich",
          "Faqat o'lcham"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q265",
        "prompt": "Quyidagi funksiya nimani bajaradi? void print(int a[], int n) { for(int i=0;i<n;i++) cout << a[i]; }",
        "options": [
          "Massivni chiqaradi",
          "Massivning eng katta elementini topadi",
          "Massivga qiymat beradi",
          "Massivni o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q266",
        "prompt": "Massivni funksiya orqali o'zgartirish mumkinmi?",
        "options": [
          "Ha, massivga bevosita ta'sir qiladi",
          "Yo'q, faqat o'qish mumkin",
          "Faqat const bo'lsa",
          "Faqat return orqali"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q267",
        "prompt": "int sum(int arr[], int size) funksiyasida arr nima?",
        "options": [
          "Ko'rsatkich",
          "Qiymat",
          "Statik o'zgaruvchi",
          "Klass"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q268",
        "prompt": "Massiv funksiyaga uzatilganda qanday qilib uning elementlari o'zgartiriladi?",
        "options": [
          "Indeks orqali qiymatlar tayinlanadi",
          "For orqali faqat chiqariladi",
          "Faqat yangi massiv qaytariladi",
          "Faqat const holatida"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q269",
        "prompt": "void update(int a[], int n) funksiyasida a[0]=10; bajarilsa nima bo'ladi?",
        "options": [
          "Asl massivning birinchi elementi 10 boʻladi",
          "Faqat lokal massivda saqlanadi",
          "Xatolik beradi",
          "Massiv uzatilmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q270",
        "prompt": "void fun(int a[10]) va void fun(int* a) funksiyalarida farq bormi?",
        "options": [
          "Farqi yo'q, ikkalasi ham ko'rsatkich sifatida ishlaydi",
          "Juda katta farq bor",
          "Ikkalasi ham massivni nusxalaydi",
          "Faqat 10 elementlik massiv uzatiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q271",
        "prompt": "C++ da sizeof(massiv) funksiyaga uzatilganda nima qaytaradi?",
        "options": [
          "Ko'rsatkich hajmi",
          "Massiv uzunligi",
          "Massiv qiymatlari yig'indisi",
          "Element qiymati"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q272",
        "prompt": "Funksiya massivni qaytarishi uchun nima qilinadi?",
        "options": [
          "Massivga ko'rsatkich qaytariladi",
          "return massiv",
          "return &massiv",
          "return massiv[]"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q273",
        "prompt": "Massiv funksiyadan qaytgan bo'lsa, nima ehtiyot choralari kerak?",
        "options": [
          "Massiv lokal bo'lmasligi kerak",
          "Hech qanday",
          "Har doim new ishlatish kerak",
          "delete bilan qaytarish kerak"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q274",
        "prompt": "Quyidagi kodda qanday ta'sir bo'ladi? void f(int a[]){a[1]=5; }",
        "options": [
          "Asl massivning ikkinchi elementi 5 boʻladi",
          "Lokal massiv yaratiladi",
          "Compile-time xatolik",
          "Birinchi element oʻzgaradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q275",
        "prompt": "Massivning uzunligini funksiyaga uzatmasdan topish mumkinmi?",
        "options": [
          "Odatda yo'q, alohida parametr kerak",
          "Ha, doim mumkin",
          "sizeof orqali",
          "length() yordamida"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q276",
        "prompt": "Massiv funksiyada oʻzgarib, lekin dasturda saqlanishi uchun qanday uzatiladi?",
        "options": [
          "Ko'rsatkich orqali",
          "Qiymat sifatida",
          "Konstant uzatish",
          "Xavfsiz nusxa orqali"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q277",
        "prompt": "void change(int a[]) funksiyasi orqali massiv oʻzgarsa, bu o'zgarish qayerda saqlanadi?",
        "options": [
          "Asl massiv",
          "Lokal",
          "Stack",
          "ROM"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q278",
        "prompt": "int arr[] ={1,2,3}; funksiyaga uzatilganda qanday chaqiriladi?",
        "options": [
          "func(arr)",
          "func(arr[])",
          "func(&arr)",
          "func(*arr)"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q279",
        "prompt": "Massiv funksiyaga ko'rsatkich orqali uzatilganda, elementlarga qanday kiriladi?",
        "options": [
          "a[i]",
          "*a",
          "a->i",
          "&a[i]"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q280",
        "prompt": "Quyidagilardan qaysi biri massivni qiymat bilan uzatishga misoldir?",
        "options": [
          "Bunday uzatish C++ da ruxsat etilmaydi",
          "void f(int a[])",
          "void f(int* a)",
          "void f(int a)"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q281",
        "prompt": "ASCIIZ satr nima?",
        "options": [
          "Nul ('\\0') belgisi bilan tugovchi char massiv",
          "Harflardan iborat massiv",
          "Unicode matn",
          "Raqamlardan iborat string"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q282",
        "prompt": "char str[] = \"Hello\"; satr qanday turga mansub?",
        "options": [
          "ASCIIZ",
          "wchar t",
          "string",
          "vector<char>"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q283",
        "prompt": "ASCIIZ satrning oxirgi belgisi nima?",
        "options": [
          "'\\0'",
          "\"",
          "'n'",
          "'#'"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q284",
        "prompt": "ASCIIZ satr uzunligini aniqlash uchun qaysi funksiyadan foydalaniladi?",
        "options": [
          "strlen()",
          "length()",
          "size()",
          "count()"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q285",
        "prompt": "char s[10] = \"Hi\"; bu holatda s ning uzunligi nechta?",
        "options": [
          "10",
          "2",
          "3",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q286",
        "prompt": "strcpy() funksiyasi nima uchun ishlatiladi?",
        "options": [
          "Satr nusxalash uchun",
          "Raqamlarni qo'shish",
          "Belgilarni solishtirish",
          "Satr uzunligini topish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q287",
        "prompt": "strcmp(s1, s2) funksiyasi nima qaytaradi?",
        "options": [
          "0 agar s1 va s2 bir xil boʻlsa",
          "Satrning uzunligini",
          "Harflarni almashtiradi",
          "Null belgini o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q288",
        "prompt": "strcat(s1, s2) funksiyasining vazifasi nima?",
        "options": [
          "Ikki satrni birlashtiradi",
          "Satr uzunligini topadi",
          "Satrni teskari aylantiradi",
          "Belgini o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q289",
        "prompt": "char s[] = \"abc\"; s[1]='x'; natija qanday bo'ladi?",
        "options": [
          "axc\\0",
          "axc",
          "abc",
          "xbc"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q290",
        "prompt": "ASCIIZ satrni cout orqali chiqarish uchun qanday yoziladi?",
        "options": [
          "cout << s;",
          "cout(s);",
          "printf(s);",
          "show(s);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q291",
        "prompt": "Quyidagilardan qaysi biri to'g'ri satr nusxalashdir?",
        "options": [
          "strcpy(s1, s2);",
          "s1=s2",
          "s1 + s2;",
          "copy(s1, s2);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q292",
        "prompt": "strlen(\"Hi\") natijasi nechiga teng?",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q293",
        "prompt": "Quyidagi kodda qanday xatolik mavjud? char s[3] = \"abc\";",
        "options": [
          "Joy yetarli emas, '\\0' sig'maydi",
          "Sintaksis xatosi",
          "Bu to'g'ri",
          "abc noto'g'ri qiymat"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q294",
        "prompt": "ASCIIZ satr bilan ishlashda xavfsiz variant nima?",
        "options": [
          "strncpy",
          "strcpy",
          "copystr",
          "strconcat"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q295",
        "prompt": "ASCIIZ satrning har bir elementi qanday turga ega?",
        "options": [
          "char",
          "int",
          "string",
          "bool"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q296",
        "prompt": "char *p = \"Hello\"; bu holatda p nima?",
        "options": [
          "Belgilar ketma-ketligiga ko'rsatkich",
          "To'g'ridan-to'g'ri satr",
          "Xatolik",
          "Null pointer"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q297",
        "prompt": "strchr(str, 'a') funksiyasi nima qiladi?",
        "options": [
          "Belgining birinchi uchrashgan joyini topadi",
          "Belgilarni almashtiradi",
          "Belgini o'chiradi",
          "Satrni nusxalaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q298",
        "prompt": "ASCIIZ satrlar bilan ishlashda strncpy() funksiyasi nima qiladi?",
        "options": [
          "Belgilangan miqdordagi belgilarni nusxalaydi",
          "Uzunlikni hisoblaydi",
          "Belgilarni o'chiradi",
          "Raqamga aylantiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q299",
        "prompt": "strrev() funksiyasi nima uchun kerak?",
        "options": [
          "Satrni teskari aylantiradi",
          "Satr uzunligini topadi",
          "Satrni kesadi",
          "Belgini o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-6-q300",
        "prompt": "ASCIIZ satrlar uchun xotira ajratishdagi muhim jihat nima?",
        "options": [
          "Null ('\\0') belgisi uchun joy ajratish",
          "RAM hajmi",
          "CPU tezligi",
          "Disk joyi"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "das-7",
    "title": "7-qism: String kutubxonasi va satrlar bilan ishlash (301-350 savollar)",
    "description": "Dasturlash",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "das-7-q301",
        "prompt": "C++ da string turini ishlatish uchun qaysi kutubxona kerak?",
        "options": [
          "<string>",
          "<cstring>",
          "<iostream>",
          "<stdlib.h>"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q302",
        "prompt": "string s = \"Hello\"; satrga qo'shimcha satr qo'shish uchun qaysi operator ishlatiladi?",
        "options": [
          "+",
          "-",
          "*",
          "/"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q303",
        "prompt": "string s = \"abc\"; s += \"def\"; natijasi qanday bo'ladi?",
        "options": [
          "\"abcdef\"",
          "\"abcdefghi\"",
          "\"abc def\"",
          "\"defabc\""
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q304",
        "prompt": "string s = \"OpenAI\"; s.length(); funksiyasi nima qaytaradi?",
        "options": [
          "Belgilar soni",
          "Satrni teskari aylantiradi",
          "Satrni bo'sh qiladi",
          "Xatolik qaytaradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q305",
        "prompt": "string s = \"Test\"; cout << s[2]; natijasi nima bo'ladi?",
        "options": [
          "s",
          "T",
          "e",
          "t"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q306",
        "prompt": "string s = \"Hello\"; s.empty(); funksiyasi nimani bildiradi?",
        "options": [
          "Satr bo'shligini tekshiradi",
          "Null satrni",
          "Satr uzunligini",
          "Belgilarni olib tashlaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q307",
        "prompt": "Quyidagi funksiyalardan qaysi biri stringning bo'sh yoki yo'qligini tekshiradi?",
        "options": [
          "empty()",
          "isNull()",
          "length()",
          "size()"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q308",
        "prompt": "s.substr(1, 3) funksiyasi nima qiladi?",
        "options": [
          "1-indeksdan boshlab 3 ta belgi ajratadi",
          "Satrni teskari aylantiradi",
          "3-belgidan oxirigacha oladi",
          "Belgilarni o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q309",
        "prompt": "s.find(\"lo\") funksiyasi nima qaytaradi?",
        "options": [
          "Topilgan substringning boshlanish indeksini",
          "false",
          "Satrdan nusxa",
          "Teskari natija"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q310",
        "prompt": "s.insert(2, \"abc\") amali nimani bildiradi?",
        "options": [
          "2-pozitsiyadan boshlab \"abc\" qo'shadi",
          "2-pozitsiyadan boshlab \"abc\" o'chiradi",
          "2 ta element qoldiradi",
          "Satrni bo'sh qiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q311",
        "prompt": "C++ string obyektida == operatori qanday ishlaydi?",
        "options": [
          "Satrlar bir xil bo'lsa true qaytaradi",
          "Har bir belgi sonini solishtiradi",
          "Harf turlarini almashtiradi",
          "To'g'ri emas"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q312",
        "prompt": "s.erase(1,2) funksiyasi nima qiladi?",
        "options": [
          "1-pozitsiyadan boshlab 2 ta belgini o'chiradi",
          "1-indeksdan keyin 2 ta belgi qo'shadi",
          "2 ta satrni birlashtiradi",
          "Hech narsa qilmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q313",
        "prompt": "string s = \"apple\"; reverse(s.begin(), s.end()); natija qanday bo'ladi?",
        "options": [
          "\"elppa\"",
          "\"apple\"",
          "\"aelpp\"",
          "\"ppale\""
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q314",
        "prompt": "getline(cin, s); funksiyasi nima uchun ishlatiladi?",
        "options": [
          "Bo'shliqlarni inobatga olgan holda satr o'qish",
          "Faqat raqam o'qish",
          "Int qiymatini o'qish",
          "Belgini o'zgartirish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q315",
        "prompt": "C++ da string satr uzunligini aniqlash uchun nima ishlatiladi?",
        "options": [
          "size()",
          "count()",
          "getlen()",
          "value()"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q316",
        "prompt": "s.replace(0, 3, \"Hi\"); nimani anglatadi?",
        "options": [
          "0-dan 3 tagacha belgini \"Hi\" bilan almashtiradi",
          "Belgilarni ajratadi",
          "Belgilarni ustiga yozmaydi",
          "Xatolik beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q317",
        "prompt": "s.back() funksiyasi nima beradi?",
        "options": [
          "Oxirgi belgini",
          "Satr uzunligi",
          "Belgilar soni",
          "Bo'sh satr"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q318",
        "prompt": "s.clear(); amali nima qiladi?",
        "options": [
          "Satrni butunlay bo'sh qiladi",
          "Satrni qayta boshlaydi",
          "Belgilarni almashtiradi",
          "Yangi satr qo'shadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q319",
        "prompt": "s1.compare(s2) funksiyasi nima uchun ishlatiladi?",
        "options": [
          "Ikki satrni solishtirish",
          "Satrni kesish",
          "Satrga qiymat berish",
          "Belgini oʻzgartirish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q320",
        "prompt": "s.c_str() funksiyasi nima beradi?",
        "options": [
          "ASCIIZ ko'rinishdagi ko'rsatkich",
          "Integer qiymat",
          "float ko'rinish",
          "Uzunlik qiymati"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q321",
        "prompt": "strlen(str) funksiyasi nima uchun ishlatiladi?",
        "options": [
          "Satr uzunligini aniqlash uchun",
          "Satrni teskari aylantirish uchun",
          "Belgilarni almashtirish uchun",
          "Satrga qiymat berish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q322",
        "prompt": "strcpy(dest, src) funksiyasining vazifasi nima?",
        "options": [
          "src satrini dest ga nusxalash",
          "Satr uzunligini topish",
          "Satrlarni solishtirish",
          "Satrga raqam qo'shish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q323",
        "prompt": "strcmp(str1, str2) funksiyasi nima qiladi?",
        "options": [
          "Ikkita satrni solishtiradi",
          "Satrni nusxalaydi",
          "Satrga qiymat beradi",
          "Belgilarni o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q324",
        "prompt": "strcat(str1, str2) funksiyasi nima qiladi?",
        "options": [
          "Ikki satrni birlashtiradi",
          "Satrni kesadi",
          "Harflarni o'zgartiradi",
          "Satr uzunligini oʻlchaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q325",
        "prompt": "strchr(str, 'a') funksiyasi nimani qaytaradi?",
        "options": [
          "a belgisi birinchi uchragan pozitsiyani",
          "a ni str dan o'chiradi",
          "Barcha belgilar sonini",
          "a ni oxiriga qo'shadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q326",
        "prompt": "strstr(str1, str2) funksiyasi nima uchun ishlatiladi?",
        "options": [
          "str2 substringni str1 ichidan qidirish uchun",
          "Satrni nusxalash uchun",
          "Harflarni o'zgartirish uchun",
          "Satrni null qilish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q327",
        "prompt": "strncpy(dest, src, n) funksiyasi qanday ishlaydi?",
        "options": [
          "src dan n ta belgini dest ga nusxalaydi",
          "n ta raqamni qo'shadi",
          "Belgilarni teskari aylantiradi",
          "dest ni src bilan taqqoslaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q328",
        "prompt": "strncat(dest, src, n) funksiyasi nima qiladi?",
        "options": [
          "src dan n ta belgini dest ga birlashtiradi",
          "src ni dest dan ajratadi",
          "Harflarni almashtiradi",
          "dest uzunligini beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q329",
        "prompt": "toupper(ch) funksiyasi nima qiladi?",
        "options": [
          "Belgini katta harfga aylantiradi",
          "Belgini o'chiradi",
          "Belgilar sonini ko'rsatadi",
          "Belgini kichik qiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q330",
        "prompt": "tolower('G') funksiyasi natijasi nima?",
        "options": [
          "'g'",
          "'G'",
          "71",
          "'T'"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q331",
        "prompt": "strrev(str) funksiyasi nima qiladi?",
        "options": [
          "Satrni teskari aylantiradi",
          "Belgilarni nusxalaydi",
          "Belgilarni o'chiradi",
          "Satrga bo'sh joy qo'shadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q332",
        "prompt": "strdup(str) funksiyasi nima qaytaradi?",
        "options": [
          "str satrining dinamik nusxasini",
          "Satr uzunligini",
          "Belgilar sonini",
          "Satrni teskari ko'rinishda"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q333",
        "prompt": "strtok(str, \" \") funksiyasi nima uchun ishlatiladi?",
        "options": [
          "Satrni bo'shliq bo'yicha kesish uchun",
          "Satrni uzunligini oʻlchash uchun",
          "Satrga yangi belgilar qo'shish uchun",
          "Belgilarni o'chirib tashlash uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q334",
        "prompt": "memcpy(dest, src, n) funksiyasi nima qiladi?",
        "options": [
          "n bayt ma'lumotni src dan dest ga ko'chiradi",
          "Harflarni almashtiradi",
          "Satrni teskari aylantiradi",
          "Belgilarni ketma-ket chiqaradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q335",
        "prompt": "memset(str, 0, sizeof(str)) nima qiladi?",
        "options": [
          "Satrni nol (0) bilan to'ldiradi",
          "Satrga yangi qiymat beradi",
          "Har bir belgini bo'sh joy bilan almashtiradi",
          "Satrni teskari oʻzgartiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q336",
        "prompt": "isalnum(ch) funksiyasi nima tekshiradi?",
        "options": [
          "Belgining raqam yoki harf ekanligini",
          "Belgining faqat raqam ekanligini",
          "Belgining faqat harf ekanligini",
          "Belgining katta harf ekanligini"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q337",
        "prompt": "isalpha('9') funksiyasi natijasi nima?",
        "options": [
          "false",
          "true",
          "'9'",
          "1"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q338",
        "prompt": "isdigit(ch) funksiyasi nimani bildiradi?",
        "options": [
          "Belgining raqam ekanligini tekshiradi",
          "Belgining harf ekanligini",
          "Satrdan raqamlarni o'chiradi",
          "Satrdan bo'sh joylarni topadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q339",
        "prompt": "isupper('H') funksiyasi qanday natija beradi?",
        "options": [
          "true",
          "false",
          "'h'",
          "0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q340",
        "prompt": "islower('a') funksiyasi nimani bildiradi?",
        "options": [
          "Belgining kichik harf ekanligini aniqlash",
          "Belgini katta harfga aylantirish",
          "Belgini stringga aylantirish",
          "Belgini o'chirish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q341",
        "prompt": "C++ dasturlash tilida struct kalit so'zi nima uchun ishlatiladi?",
        "options": [
          "Bir nechta turdagi a'lumotlarni bitta birlikda saqlash uchun",
          "Funksiya yaratish uchun",
          "Massiv e'lon qilish uchun",
          "Obyekt yaratish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q342",
        "prompt": "Quyidagi qaysi ifoda struktura e'lon qilishga misol bo'ladi?",
        "options": [
          "struct Talaba { string ism; int yosh; };",
          "class Talaba { int yosh; };",
          "struct Talaba();",
          "Talaba = struct { int yosh; };"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q343",
        "prompt": "Strukturadan obyekt yaratishning to'g'ri usuli qaysi?",
        "options": [
          "Talaba t1;",
          "Talaba()",
          "Talaba->ism;",
          "new Talaba;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q344",
        "prompt": "Strukturadagi a'zolarga qanday murojaat qilinadi?",
        "options": [
          "tl.ism;",
          "tl->ism;",
          "tl->ism();",
          "tl:ism;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q345",
        "prompt": "Strukturani dastlabki qiymatlar bilan to'ldirishning to'g'ri usuli?",
        "options": [
          "Talaba t = {\"Ali\", 20};",
          "Talaba t(\"Ali\", 20);",
          "t.Talaba(\"Ali\", 20);",
          "Talaba(\"Ali\", 20);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q346",
        "prompt": "Struktura ichida boshqa strukturani ishlatish mumkinmi?",
        "options": [
          "Ha",
          "Yo'q",
          "Faqat class orqali",
          "Faqat pointer orqali"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q347",
        "prompt": "Strukturani funksiyaga parametr sifatida uzatish usuli?",
        "options": [
          "func(Talaba t);",
          "func(struct);",
          "func(int Talaba);",
          "func(t -> Talaba);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q348",
        "prompt": "Strukturani manzil orqali funksiyaga uzatish usuli?",
        "options": [
          "func(&t);",
          "func(*t);",
          "func(Talaba);",
          "func(t.ism);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q349",
        "prompt": "Strukturani typedef orqali soddalashtirish mumkinmi?",
        "options": [
          "Ha, typedef struct Talaba T;",
          "Faqat sinflar uchun",
          "Yo'q",
          "Faqat massivlarda"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-7-q350",
        "prompt": "Strukturani dinamik ajratish qanday amalga oshiriladi?",
        "options": [
          "Talaba* t = new Talaba;",
          "Talaba t = malloc(sizeof(Talaba));",
          "new struct Talaba;",
          "struct t= new Talaba();"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "das-8",
    "title": "8-qism: Strukturalar (struct) va Birlashmalar (union) (351-400 savollar)",
    "description": "Dasturlash",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "das-8-q351",
        "prompt": "Quyidagilardan qaysi biri xatolik?",
        "options": [
          "A a; a->x=5;",
          "struct A { int x; };",
          "A a; a.x=5;",
          "A a; cin >> a.x;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q352",
        "prompt": "Strukturadagi ma'lumotlarga . operatori orqali murojaat qilinadi, lekin pointerda-chi?",
        "options": [
          "->",
          ".",
          "*",
          "::"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q353",
        "prompt": "sizeof(struct) nimani bildiradi?",
        "options": [
          "Strukturadagi umumiy hajmni",
          "Satr uzunligini",
          "Maydonlar sonini",
          "Strukturani nusxalaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q354",
        "prompt": "Strukturadagi qiymatlarni chiqarish uchun qaysi sintaksis ishlatiladi?",
        "options": [
          "cout << t.ism;",
          "cin >> t->ism;",
          "print(t);",
          "display(t);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q355",
        "prompt": "Quyidagilardan qaysi biri nested (ichki) struct misoli?",
        "options": [
          "struct B { A a; int y; };",
          "struct A { int x; };",
          "struct { int x; } A;",
          "class A { B b; };"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q356",
        "prompt": "Strukturani qaytaruvchi funksiya qanday yoziladi?",
        "options": [
          "Talaba getTalaba();",
          "Talaba.get();",
          "get(Talaba);",
          "return Talaba();"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q357",
        "prompt": "Strukturani nusxalashda qaysi ifoda ishlatiladi?",
        "options": [
          "t1=t2;",
          "t1.copy(t2);",
          "memcpy(t1, t2);",
          "t1==t2;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q358",
        "prompt": "Strukturani faylga yozish uchun nima kerak?",
        "options": [
          "ofstream.write((char*)&t, sizeof(t));",
          "ofstream << struct;",
          "writefile(struct);",
          "cout << struct;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q359",
        "prompt": "Struktura obyektlarini massivga joylashtirish mumkinmi?",
        "options": [
          "Ha, Talaba arr[10];",
          "Faqat class uchun",
          "Yo'q",
          "Faqat pointer boʻlsa"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q360",
        "prompt": "Struktura nomi va maydon nomi bir xil bo'lishi mumkinmi?",
        "options": [
          "Yo'q, xatolik yuz beradi",
          "Ha, bu tavsiya etiladi",
          "Har doim kerak",
          "Kompilyator aniqlaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q361",
        "prompt": "Dinamik struktura yaratish uchun C++ tilida qanday operator ishlatiladi?",
        "options": [
          "new",
          "malloc",
          "calloc",
          "create"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q362",
        "prompt": "Quyidagi ifodaning vazifasi nima: Talaba* t = new Talaba;",
        "options": [
          "Dinamik ravishda yangi Talaba obyektini ajratadi",
          "Strukturani faylga yozadi",
          "Xotirani bo'shatadi",
          "Satr nusxasini yaratadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q363",
        "prompt": "Dinamik strukturani o'chirish uchun qaysi operator ishlatiladi?",
        "options": [
          "delete",
          "delete[]",
          "remove",
          "free"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q364",
        "prompt": "Strukturani dinamik massiv sifatida yaratish uchun qaysi ifoda to'g'ri?",
        "options": [
          "Talaba* t = new Talaba[10];",
          "Talaba t = new Talaba;",
          "Talaba[10] = new Talaba;",
          "new Talaba t[10];"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q365",
        "prompt": "Dinamik struktura massivini o'chirish uchun to'g'ri ifoda qaysi?",
        "options": [
          "delete[] t;",
          "delete t;",
          "free(t);",
          "remove(t);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q366",
        "prompt": "Dinamik struktura elementiga qanday murojaat qilinadi?",
        "options": [
          "Har ikkalasi toʻgʻri",
          "(*t).ism",
          "t->ism",
          "t.ism"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q367",
        "prompt": "Quyidagi kodda qanday xatolik mavjud? Talaba* t = new Talaba; delete[] t;",
        "options": [
          "delete[] o'rniga delete ishlatilishi kerak",
          "new ishlatilgan bo'lsa, free kerak",
          "t strukturamas",
          "Hech qanday xatolik yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q368",
        "prompt": "Strukturani dinamik tarzda to'ldirish uchun qaysi yondashuv toʻgʻri?",
        "options": [
          "Ikkalasi ham to'g'ri",
          "cin>>(*t) .ism;",
          "cin >> t->ism;",
          "cin << t.ism;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q369",
        "prompt": "Dinamik struktura massiviga for sikli orqali murojaat qilish qanday bo'ladi?",
        "options": [
          "(t+i)->ism",
          "t[i].ism",
          "t[i]->ism",
          "(*t).ism[i]"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q370",
        "prompt": "Dinamik xotirani noto'g'ri boshqarish nima bilan tugashi mumkin?",
        "options": [
          "Xotira sizib chiqishi (memory leak)",
          "Ishlash tezligining oshishi",
          "Dastur kompilyatsiyasi tezlashadi",
          "To'g'ri natija olinadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q371",
        "prompt": "new operatori orqali ajratilgan xotira qachon bo'shatiladi?",
        "options": [
          "delete operatori chaqirilganda",
          "Avtomatik tarzda",
          "Dastur yakunida",
          "Ob'yekt tashqarisida"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q372",
        "prompt": "Dinamik strukturani funksiya orqali yaratish va qaytarish mumkinmi?",
        "options": [
          "Ha, new orqali ajratilib, ko'rsatkich qaytariladi",
          "Yo'q, faqat statik bo'lishi kerak",
          "Faqat malloc bilan mumkin",
          "Faqat vector orqali"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q373",
        "prompt": "Quyidagi kod nimani anglatadi? Talaba* t = nullptr;",
        "options": [
          "t ko'rsatkichi hech qanday xotirani ko'rsatmayapti",
          "Strukturani to'ldiradi",
          "t obyekt yaratilgan",
          "t avtomatik tozalanadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q374",
        "prompt": "Dinamik strukturalardan foydalanishda qaysi holat eng xavfli hisoblanadi?",
        "options": [
          "Xotirani ajratib, uni o'chirmaslik",
          "Ko'rsatkichni 0 ga tenglashtirish",
          "Strukturani e'lon qilish",
          "Ma'lumot kiritish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q375",
        "prompt": "Quyidagi kod nima qiladi? delete t; t= nullptr;",
        "options": [
          "Xotirani bo'shatib, ko'rsatkichni nolga tenglashtiradi",
          "t ni ikki marta bo'shatadi",
          "t ni nusxalaydi",
          "t ni ekranga chiqaradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q376",
        "prompt": "Dinamik strukturani faylga yozish uchun qaysi usul ishlatiladi?",
        "options": [
          "fout.write((char*)t, sizeof(Talaba));",
          "fout << t->ism;",
          "save(t);",
          "fopen(t);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q377",
        "prompt": "Dinamik strukturani obyekt sifatida uzatishda qanday usul qo'llaniladi?",
        "options": [
          "Ko'rsatkich orqali uzatiladi",
          "Nusxa uzatiladi",
          "Global oʻzgaruvchi ishlatiladi",
          "typedef orqali uzatiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q378",
        "prompt": "Dinamik strukturani nullptr bilan tekshirishning maqsadi nima?",
        "options": [
          "Xotira ajratilgan yoki yo'qligini tekshirish",
          "Oʻzgartirish",
          "Uni chiqarish",
          "Funksiya chaqirish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q379",
        "prompt": "Strukturani dinamik ravishda ajratib, undan massiv sifatida foydalanish uchun nima kerak?",
        "options": [
          "new operatoridan keyin qavs ichida element soni yoziladi",
          "malloc ishlatiladi",
          "#include <array> kerak",
          "Faqat class bo'lishi mumkin"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q380",
        "prompt": "Quyidagi kodda xatolik mavjudmi? Talaba* t = new Talaba[5]; delete t;",
        "options": [
          "Ha, delete[] ishlatilishi kerak edi",
          "Yo'q, hammasi to'g'ri",
          "delete[] kerak emas",
          "new noto'g'ri ishlatilgan"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q381",
        "prompt": "C++ tilida union nima?",
        "options": [
          "Har xil o'zgaruvchilarni bir xil xotira maydonida saqlovchi tuzilma",
          "Har xil o'zgaruvchilarni alohida xotirada saqlovchi tuzilma",
          "Faqat float va int uchun mo'ljallangan tuzilma",
          "Faqat ko'rsatkichlar bilan ishlaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q382",
        "prompt": "union va struct oʻrtasidagi asosiy farq nimada?",
        "options": [
          "unionda barcha a'zolar bitta xotira maydonidan foydalanadi",
          "Ikkalasi bir xil",
          "union ko'proq joy egallaydi",
          "union faqat int saqlaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q383",
        "prompt": "Quyidagi qaysi sintaksis unionni e'lon qilishga to'g'ri misol?",
        "options": [
          "union Ma'lumot { int x; float y; };",
          "struct Ma'lumot = { int x; float y; };",
          "Ma'lumot: union { int x; };",
          "class union Ma'lumot { int x; };"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q384",
        "prompt": "union da barcha a'zolar qanday joylashadi?",
        "options": [
          "Barchasi bir xil xotira maydonini bo'lishadi",
          "Har biri alohida xotirada",
          "Pointer orqali ulanadi",
          "Boshqa struktura orqali chaqiriladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q385",
        "prompt": "Agar union ichida bir nechta o'zgaruvchi bo'lsa, qaysi biri yodda saqlanadi?",
        "options": [
          "Oxirgi yozilgan qiymat",
          "Barchasi birgalikda",
          "Katta oʻlchamli maydon",
          "Eng kichik tipdagi qiymat"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q386",
        "prompt": "uniondan obyekt yaratish to'g'ri ko'rsatilgan variantni toping:",
        "options": [
          "Ma'lumot m;",
          "Ma'lumot m();",
          "union m= new Ma'lumot;",
          "Ma'lumot->m;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q387",
        "prompt": "union ichidagi a'zoga qanday murojaat qilinadi?",
        "options": [
          "m.x",
          "m->x",
          "m:x",
          "m[x]"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q388",
        "prompt": "union ichidagi float qiymatga qanday qiymat beriladi?",
        "options": [
          "m.y = 2.5;",
          "m->y=2.5",
          "m[y] = 2.5;",
          "m::y = 2.5;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q389",
        "prompt": "Quyidagilardan qaysi biri unionda noto'g'ri ishlov?",
        "options": [
          "A a; a.x=5; a.y=2.5; // ikkala qiymatni bir vaqtda o'qish",
          "union A { int x; float y; };",
          "A a; a.x=10;",
          "A a; a.y=3.14;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q390",
        "prompt": "sizeof(union) nima beradi?",
        "options": [
          "Eng katta a'zo hajmi",
          "Barcha a'zolar hajmlarining yig'indisi",
          "1 bayt",
          "A'zolar soni"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q391",
        "prompt": "Quyidagilardan qaysi biri union ichida ruxsat etilmaydi?",
        "options": [
          "Konstruktor yoki destruktor",
          "int a'zosi",
          "char a'zosi",
          "float a'zosi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q392",
        "prompt": "uniondan foydalanganda nimaga e'tibor berish kerak?",
        "options": [
          "Faqat bitta a'zoning qiymatini ishlatish mumkinligiga",
          "Satr uzunligiga",
          "Pointer turi",
          "Operator overloading mavjudligiga"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q393",
        "prompt": "Quyidagilardan qaysi biri union obyektini xotirada to'g'ri ko'rsatadi?",
        "options": [
          "Barcha a'zolar bir xil manzilda joylashadi",
          "Har biri yangi manzilda bo'ladi",
          "Ketma-ket ajratiladi",
          "Faqat oxirgisi ajratiladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q394",
        "prompt": "unionda bir nechta qiymatni bir vaqtda saqlashga harakat qilish nima natija beradi?",
        "options": [
          "Oxirgi yozilgan qiymat birinchi ustiga yoziladi",
          "Har ikkisi saqlanadi",
          "Kompilyator xatolikka olib keladi",
          "Oldingi qiymat himoyalanadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q395",
        "prompt": "Quyidagi kod natijasini aniqlang: union A { int x; float y; }; A a; a.x=5; cout << a.y;",
        "options": [
          "Noma'lum float qiymat",
          "Kompilyator xatoligi",
          "Ekranga 5 chiqaradi",
          "Ekranga 0 chiqaradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q396",
        "prompt": "union obyektini funksiyaga qanday uzatish mumkin?",
        "options": [
          "Parametr sifatida (qiymat yoki pointer orqali)",
          "Faqat global qilib",
          "return orqali",
          "Yo'q, uzatib bo'lmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q397",
        "prompt": "union C++ da qayerda ko'p ishlatiladi?",
        "options": [
          "Xotira tejalishi kerak bo'lganda",
          "Fayl ochishda",
          "Class yaratishda",
          "Massiv ajratishda"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q398",
        "prompt": "Quyidagi kodda qanday xatolik bor? union B { string s; int x; };",
        "options": [
          "string kabi konstruktorli obyektlar union ichida bo'la olmaydi",
          "Hech qanday xatolik yo'q",
          "int ruxsat etilmaydi",
          "unionda ikkita maydon bo'lishi mumkin emas"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q399",
        "prompt": "unionni typedef bilan qisqartirish mumkinmi?",
        "options": [
          "Ha",
          "Yo'q",
          "Faqat classlarda",
          "Faqat struct bilan"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-8-q400",
        "prompt": "union ichidagi a'zoni chiqarish uchun qaysi kod toʻgʻri?",
        "options": [
          "cout << u.x;",
          "cout << u->x;",
          "cout(u.x);",
          "print(u.x);"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "das-9",
    "title": "9-qism: Makroslar, Fayllar bilan ishlash va Oqimlar (401-450 savollar)",
    "description": "Dasturlash",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "das-9-q401",
        "prompt": "C++ dasturlash tilida makros nima?",
        "options": [
          "Preprocessor orqali bajariladigan buyruq",
          "Oʻzgaruvchi tipi",
          "Foydalanuvchi funksiyasi",
          "Kutubxona fayli"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q402",
        "prompt": "Makroslar qaysi belgidan boshlanadi?",
        "options": [
          "#",
          "$",
          "%",
          "@"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q403",
        "prompt": "#define direktivasi nima uchun ishlatiladi?",
        "options": [
          "Makros yaratish uchun",
          "Kutubxona chaqirish uchun",
          "Faylga yozish uchun",
          "Kompilyatsiyani to'xtatish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q404",
        "prompt": "Quyidagi qaysi ifoda makrosni to'g'ri belgilaydi?",
        "options": [
          "#define SQUARE(x) ((x)*(x))",
          "define SQUARE(x) x*x",
          "#define: SQUARE(x) = x^2;",
          "#macro SQUARE(x) x^2"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q405",
        "prompt": "Makroslar qayerda bajariladi?",
        "options": [
          "Preprocessor bosqichida",
          "Kompilyatsiya vaqtida",
          "Linker bosqichida",
          "Run-timeda"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q406",
        "prompt": "Quyidagi kodni tahlil qiling: #define PI 3.14",
        "options": [
          "PI degan makros 3.14 qiymatiga ega bo'lmoqda",
          "O'zgaruvchi e'lon qilinmoqda",
          "Funktsiya yaratilmoqda",
          "Bu noto'g'ri"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q407",
        "prompt": "Makros funksiyaga o'xshagan ko'rinishda e'lon qilinsa, bu nima deyiladi?",
        "options": [
          "Funktsional makros",
          "Inline funksiyasi",
          "Dinamik makros",
          "Shartli makros"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q408",
        "prompt": "Makroslarda qavs ishlatmaslik qanday muammoga olib keladi?",
        "options": [
          "Amalning noto'g'ri bajarilishiga",
          "Tezlikni oshiradi",
          "Hech qanday muammo bo'lmaydi",
          "Kompilyator xatoligiga"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q409",
        "prompt": "Quyidagi makrosdan qaysi biri xatoga olib kelishi mumkin?",
        "options": [
          "#define MUL a*b",
          "#define ADD(a,b) ((a)+(b))",
          "#define SQR(x) ((x)*(x))",
          "#define MAX(a,b) ((a) > (b) ? (a) : (b))"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q410",
        "prompt": "Quyidagilardan qaysi biri #ifdef direktivasining vazifasi?",
        "options": [
          "Belgilangan makros mavjudligini tekshirish",
          "Kodni o'chirish",
          "Kodni kompilyatsiyadan chiqarish",
          "Kutubxonani chaqirish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q411",
        "prompt": "#ifndef direktivasi qanday ishlatiladi?",
        "options": [
          "Agar makros aniqlanmagan boʻlsa, kodni oʻtkazish",
          "Makrosni aniqlash",
          "Faqat fayllarda ishlatiladi",
          "Yagona holatda ishlaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q412",
        "prompt": "Quyidagilardan qaysi biri faylni bir marta chaqirishni ta'minlaydi?",
        "options": [
          "#ifndef, #define, #endif kombinatsiyasi",
          "#define once",
          "#once",
          "#unique"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q413",
        "prompt": "Makrosda o'zgaruvchi aniqlanadimi?",
        "options": [
          "Yo'q",
          "Ha",
          "Ba'zida",
          "Faqat const bo'lsa"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q414",
        "prompt": "Makroslarni o'rniga funksiyalardan foydalanish afzalligini belgilang:",
        "options": [
          "Tip tekshiruvi mavjud",
          "Tezroq ishlaydi",
          "Kompilyator e'tibor bermaydi",
          "Hech qanday afzallik yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q415",
        "prompt": "Quyidagi kodni natijasini aniqlang:#define ADD(a,b) ((a)+(b)) int x=ADD(2,3);",
        "options": [
          "x=5",
          "x=6",
          "x=23",
          "x=0"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q416",
        "prompt": "Makros nomlari odatda qanday yoziladi?",
        "options": [
          "Barcha harflari katta qilib",
          "kichik harflar bilan",
          "oddiy oʻzgaruvchiga o'xshab",
          "CamelCase uslubida"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q417",
        "prompt": "Makrosni olib tashlash uchun qaysi direktiva ishlatiladi?",
        "options": [
          "#undef",
          "#undefine",
          "#del",
          "#remove"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q418",
        "prompt": "Quyidagilardan qaysi biri kompilyator tomonidan emas, balki preprocessor tomonidan ishlanadi?",
        "options": [
          "#define",
          "int x;",
          "for sikli",
          "cout operatori"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q419",
        "prompt": "Quyidagi kod nimani anglatadi? #define DEBUG #ifdef DEBUG cout << \"Debug rejimi\" << endl; #endif",
        "options": [
          "\"Debug rejimi\" ekranga chiqariladi",
          "Hech narsa chiqmaydi",
          "Sintaksis xatosi",
          "Fayl o'qilmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q420",
        "prompt": "Makrosda turli o'lchamdagi ma'lumotlar bilan ishlash qanday xavf tug'diradi?",
        "options": [
          "Tip tekshiruvi yo'qligi sababli noto'g'ri natijalar chiqishi mumkin",
          "Tezlik pasayadi",
          "Sinflar boʻziladi",
          "Kompilyator ishlamaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q421",
        "prompt": "C++ dasturlash tilida fayllar bilan ishlash uchun qaysi kutubxona kerak?",
        "options": [
          "#include <fstream>",
          "#include <stdlib.h>",
          "#include <stdio.h>",
          "#include <file.h>"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q422",
        "prompt": "Matnli faylga yozish uchun qaysi sinf ishlatiladi?",
        "options": [
          "ofstream",
          "ifstream",
          "fstream",
          "filewrite"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q423",
        "prompt": "Fayldan ma'lumot o'qish uchun qaysi sinf ishlatiladi?",
        "options": [
          "ifstream",
          "ofstream",
          "filereader",
          "fstreamout"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q424",
        "prompt": "fstream sinfi nima uchun ishlatiladi?",
        "options": [
          "O'qish va yozish uchun",
          "Faqat yozish uchun",
          "Faqat o'chirish uchun",
          "Fayl nomini o'zgartirish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q425",
        "prompt": "Quyidagi kodda qanday operatsiya bajariladi? ofstream fout(\"data.txt\");",
        "options": [
          "Faylni yozishga ochadi",
          "Faylni o'qishga ochadi",
          "Faylni o'chiradi",
          "Faylni binar rejimda ochadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q426",
        "prompt": "ifstream yordamida fayl ochilganda, qanday shartni tekshirish kerak?",
        "options": [
          "if (!file.is_open())",
          "if (!file)",
          "if (file.bad())",
          "if (file.empty())"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q427",
        "prompt": "Matn faylga satr yozish uchun qaysi operator ishlatiladi?",
        "options": [
          "<<",
          ">>",
          "=",
          "+="
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q428",
        "prompt": "Fayldan bir satr o'qish uchun to'g'ri funksiya qaysi?",
        "options": [
          "getline(file, s);",
          "getline(cin, s);",
          "input(file, s);",
          "file.read(s);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q429",
        "prompt": "Binar fayllar bilan ishlashda qaysi funksiyadan foydalaniladi?",
        "options": [
          "read()",
          "<<",
          ">>",
          "writeln()"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q430",
        "prompt": "Quyidagi kod nima qiladi? file.write((char*)&x, sizeof(x));",
        "options": [
          "x oʻzgaruvchisini binar shaklda yozadi",
          "Matn yozadi",
          "Faylni o'chiradi",
          "Xatolik beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q431",
        "prompt": "Faylni binar rejimda ochish uchun qanday bayroq ishlatiladi?",
        "options": [
          "ios::binary",
          "ios::in",
          "ios::app",
          "ios::text"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q432",
        "prompt": "Fayl oxirigacha o'qilganini tekshirish uchun nima ishlatiladi?",
        "options": [
          "file.eof()",
          "file.end()",
          "file.stop()",
          "file.finished()"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q433",
        "prompt": "Quyidagi kodda qanday xatolik mavjud? ifstream f; f.open(\"test.txt\"); f<< \"Salom\";",
        "options": [
          "ifstream yozish uchun mo'ljallanmagan",
          "Hech qanday xato yo'q",
          "Fayl nomi noto'g'ri",
          "Sintaksis xatoligi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q434",
        "prompt": "Faylga yozishni davomiy qilish uchun qanday ochiladi?",
        "options": [
          "ios::app",
          "ios::binary",
          "ios:: trunc",
          "ios::in"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q435",
        "prompt": "Faylni yopish uchun qaysi metod ishlatiladi?",
        "options": [
          "file.close();",
          "file.stop();",
          "file.exit();",
          "file.finish();"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q436",
        "prompt": "Quyidagi kod nima qiladi? fstream f(\"data.bin\", ios::in | ios::binary);",
        "options": [
          "Binar faylni o'qish uchun ochadi",
          "Matnli faylni o'qish uchun ochadi",
          "Yozish uchun ochadi",
          "Faylni o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q437",
        "prompt": "Fayldan ob'yekt o'qish uchun to'g'ri kodni tanlang:",
        "options": [
          "f.read((char*)&obj, sizeof(obj));",
          "f >> obj;",
          "f.read(obj);",
          "f.get(obj);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q438",
        "prompt": "ios::trunc rejimi nima qiladi?",
        "options": [
          "Faylni tozalaydi va qayta yozadi",
          "Faylni faqat o'qiydi",
          "Faylni oʻzgartirmaydi",
          "Faylga qo'shadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q439",
        "prompt": "Quyidagi bayroqlardan qaysi biri yozish rejimini bildiradi?",
        "options": [
          "ios::out",
          "ios::in",
          "ios::binary",
          "ios::app"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q440",
        "prompt": "Binar fayllar bilan ishlaganda nega char* turiga o'tkaziladi?",
        "options": [
          "Chunki read() va write() faqat char* ko'rsatkichni qabul qiladi",
          "Matnli yozuvlar kerak",
          "Ular int qiymatni qabul qiladi",
          "Xatoliklarni yashirish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q441",
        "prompt": "C++ dasturida cin oqimi nima uchun ishlatiladi?",
        "options": [
          "Foydalanuvchidan ma'lumot olish uchun",
          "Natijani chiqarish uchun",
          "Faylni o'qish uchun",
          "Oqimni yopish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q442",
        "prompt": "Quyidagi oqimlar guruhiga nima deyiladi: cin, cout, cerr, clog?",
        "options": [
          "Standart oqimlar",
          "Fayl oqimlari",
          "Xususiy oqimlar",
          "Virtual oqimlar"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q443",
        "prompt": "cout oqimi orqali nima amalga oshiriladi?",
        "options": [
          "Ma'lumot ekranga chiqariladi",
          "Ma'lumot faylga yoziladi",
          "Ma'lumot RAMga yoziladi",
          "Ma'lumot o'chiriladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q444",
        "prompt": "C++ dasturida cerr oqimi qanday maqsadda ishlatiladi?",
        "options": [
          "Xatolik xabarlarini chiqarish uchun",
          "Oʻzgaruvchini aniqlash uchun",
          "Oddiy matn chiqarish uchun",
          "Fayldan o'qish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q445",
        "prompt": "clog oqimi qanday xabarlarga mo'ljallangan?",
        "options": [
          "Ogohlantirish va log yozuvlari uchun",
          "Faqat foydalanuvchi kiritmasi uchun",
          "Faylga yozish uchun",
          "Standart kirish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q446",
        "prompt": "Quyidagilardan qaysi biri chiqarish oqimidir?",
        "options": [
          "cout",
          "cin",
          "fstream",
          "ifstream"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q447",
        "prompt": "cin bilan matn kiritishda qaysi operator ishlatiladi?",
        "options": [
          ">>",
          "<<<",
          "+=",
          "--"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q448",
        "prompt": "cerr va clog oqimlarining farqi nimada?",
        "options": [
          "cerr buferlanmaydi, clog buferlanadi",
          "cerr matn kiritadi, clog o'chiradi",
          "cerr faylga yozadi",
          "Farqi yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q449",
        "prompt": "Quyidagi kodda qanday oqim ishlatilgan? cout << \"Hello\";",
        "options": [
          "Chiqarish oqimi",
          "Kiritish oqimi",
          "Fayl oqimi",
          "Binar oqim"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-9-q450",
        "prompt": "cin.getline(str, 100); funksiyasi nima qiladi?",
        "options": [
          "100 ta belgigacha satrni o'qiydi",
          "Faylga yozadi",
          "Satrlarni taqqoslaydi",
          "Massiv yaratadi"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "das-10",
    "title": "10-qism: Oqim xatoliklari, Fayl funksiyalari va Dinamik massivlar amaliyoti (451-500 savollar)",
    "description": "Dasturlash",
    "timePerQuestionSec": 25,
    "questions": [
      {
        "id": "das-10-q451",
        "prompt": "std::cerr << \"Xato\"; kodining xususiyati nimada?",
        "options": [
          "Ma'lumotni darhol chiqaradi",
          "Faylga yozadi",
          "Ekranga chiqmaydi",
          "Kompilyatsiya vaqtida bajariladi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q452",
        "prompt": "cin.ignore() funksiyasi nima uchun ishlatiladi?",
        "options": [
          "Kirish oqimidan belgilarni o'tkazib yuborish uchun",
          "Belgilarni tahrirlash uchun",
          "Faylni yopish uchun",
          "Buferni tozalash uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q453",
        "prompt": "flush operatori qanday vazifani bajaradi?",
        "options": [
          "Buferdagi ma'lumotni darhol chiqaradi",
          "Ma'lumotni saqlaydi",
          "Belgilarni o'chiradi",
          "Kiritishni to'xtatadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q454",
        "prompt": "Quyidagi kod nima qiladi? cout << flush;",
        "options": [
          "Buferdagi ma'lumotni chiqaradi",
          "Chiqarishni bekor qiladi",
          "Hech narsa qilmaydi",
          "Faylni yopadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q455",
        "prompt": "cin >> x; operatoridan keyin getline(cin, s); ishlatilganda nima uchun s bo'sh boʻlishi mumkin?",
        "options": [
          "cin buferida \\n qoladi",
          "x noto'g'ri turga ega bo'lsa",
          "getline noto'g'ri ishlatilgan",
          "s e'lon qilinmagan"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q456",
        "prompt": "C++ oqimlarida fail() funksiyasi nima uchun ishlatiladi?",
        "options": [
          "Oqim muvaffaqiyatsizligini tekshiradi",
          "Xotirani bo'shatadi",
          "Ekranni yangilaydi",
          "Satr uzunligini topadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q457",
        "prompt": "cin.clear(); funksiyasi nimani bajaradi?",
        "options": [
          "Xato holatini tiklaydi",
          "Ekranni tozalaydi",
          "Matnni chiqaradi",
          "Massivni belgilaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q458",
        "prompt": "std::endl va '\\n' o'rtasidagi farq nimada?",
        "options": [
          "endl buferni tozalab yuboradi, \\n faqat yangi qator",
          "Farqi yo'q",
          "'\\n' chiqarish uchun ishlatilmaydi",
          "endl kiritish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q459",
        "prompt": "Quyidagi kodda qanday xatolik mavjud? cin <<x;",
        "options": [
          "Operator noto'g'ri ishlatilgan, >> bo'lishi kerak",
          "Ma'lumot o'chiriladi",
          "Sintaksis toʻgʻri",
          "x faqat char bo'lishi kerak"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q460",
        "prompt": "Oqimda xatolik aniqlanganda dastur qanday yo'l tutadi?",
        "options": [
          "fail() yoki bad() funksiyasi orqali tekshiriladi",
          "Avtomatik tuzatadi",
          "Ekranni o'chiradi",
          "O'zgaruvchi o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q461",
        "prompt": "C++ tilida fayldan satr o'qish uchun qaysi funksiya ishlatiladi?",
        "options": [
          "getline()",
          "scanf()",
          "puts()",
          "cin.getline()"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q462",
        "prompt": "Faylga oddiy satr yozish uchun qaysi operator ishlatiladi?",
        "options": [
          "<<",
          ">>",
          "=",
          "++"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q463",
        "prompt": "Faylga binar ma'lumot yozish uchun qaysi funksiya ishlatiladi?",
        "options": [
          "write()",
          "put()",
          "getline()",
          "insert()"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q464",
        "prompt": "Quyidagi kodda fayl qanday ochilgan? ofstream f(\"test.txt\", ios::app);",
        "options": [
          "Yozishni davom ettirish uchun",
          "O'qish uchun",
          "Binar yozish uchun",
          "O'chirish uchun"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q465",
        "prompt": "Fayldan ma'lumotni belgilangan o'lchamda o'qish uchun qaysi funksiya ishlatiladi?",
        "options": [
          "read()",
          "getline()",
          "gets()",
          "write()"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q466",
        "prompt": "ifstream sinfi yordamida fayl ochilganda, undan qanday foydalaniladi?",
        "options": [
          "file >> x;",
          "file << x;",
          "cin >> x;",
          "cout >> x;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q467",
        "prompt": "file.read((char*)&obj, sizeof(obj)); kodi qanday turdagi fayl uchun ishlatiladi?",
        "options": [
          "Binar fayl",
          "Matnli fayl",
          "HTML fayl",
          "XML fayl"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q468",
        "prompt": "Faylga string turidagi ma'lumot yozish uchun qaysi sinf ishlatiladi?",
        "options": [
          "ofstream",
          "ifstream",
          "fstream",
          "stringstream"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q469",
        "prompt": "file.write() funksiyasi nima qiladi?",
        "options": [
          "Faylga yozadi",
          "Fayldan o'qiydi",
          "Faylni o'chiradi",
          "Faylni yopadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q470",
        "prompt": "Faylni o'qishga va yozishga bir vaqtning o'zida ochish uchun nima ishlatiladi?",
        "options": [
          "fstream",
          "ifstream",
          "ofstream",
          "stdio"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q471",
        "prompt": "fstream f(\"data.txt\", ios::in | ios::out); kodi qanday imkoniyat beradi?",
        "options": [
          "O'qish va yozish",
          "Faqat o'qish",
          "Faqat yozish",
          "Faylni o'chirish"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q472",
        "prompt": "eof() funksiyasi nimani bildiradi?",
        "options": [
          "Fayl oxiriga yetganini",
          "Faylga yozish holatini",
          "Faylni ochilganini",
          "Xatolik holatini"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q473",
        "prompt": "Quyidagi funksiya qaysi vazifani bajaradi? file.getline(str, 100);",
        "options": [
          "Fayldan 100 tagacha belgi o'qiydi",
          "100 ta fayl ochadi",
          "Faylga 100 ta belgi yozadi",
          "100 satrni o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q474",
        "prompt": "file.seekg(0); kodi nima qiladi?",
        "options": [
          "O'qish ko'rsatkichini boshiga qaytaradi",
          "Faylni yopadi",
          "Faylni tozalaydi",
          "Satrni o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q475",
        "prompt": "Faylga yozishda ios:: trunc bayrog'i qanday ishlaydi?",
        "options": [
          "Faylni tozalab, yangi ma'lumot yozadi",
          "Yozishni davom ettiradi",
          "O'qish uchun ochadi",
          "Faqat buferni ishlatadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q476",
        "prompt": "file.is_open() funksiyasi qanday qiymat qaytaradi?",
        "options": [
          "Fayl ochilgan-ochilmaganini tekshiradi",
          "Fayl ichidagi qiymatni qaytaradi",
          "O'chirish holatini bildiradi",
          "Yangi fayl yaratadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q477",
        "prompt": "Quyidagi kodda qanday funksiya ishlatilmoqda?file >> x;",
        "options": [
          "O'qish",
          "Yozish",
          "O'chirish",
          "Tozalash"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q478",
        "prompt": "file.put('A'); funksiyasi nima qiladi?",
        "options": [
          "Faylga bitta belgi yozadi",
          "Fayldan belgini o'chiradi",
          "Belgini o'zgartiradi",
          "Belgilarni chiqaradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q479",
        "prompt": "file.get(ch); funksiyasi qanday vazifani bajaradi?",
        "options": [
          "Fayldan bitta belgi o'qiydi",
          "Faylga bitta belgi yozadi",
          "Fayl nomini chiqaradi",
          "Satrni o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q480",
        "prompt": "Quyidagi kod qanday fayl ochadi? fstream f(\"binary.dat\", ios::binary | ios::out);",
        "options": [
          "Yozish uchun binar fayl",
          "Matnli fayl",
          "Konsolga chiqarish",
          "XML faylga o'xshash"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q481",
        "prompt": "Dinamik massiv yaratishda qaysi operator ishlatiladi?",
        "options": [
          "new",
          "malloc",
          "create",
          "alloc"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q482",
        "prompt": "int turidagi 5 ta elementdan iborat dinamik massiv yaratish uchun to'g'ri kod qaysi?",
        "options": [
          "int arr = new int[5];",
          "int arr = new int(5);",
          "int arr[5] = new int;",
          "int* arr = malloc(5);"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q483",
        "prompt": "Dinamik massivni xotiradan tozalash uchun qaysi operator ishlatiladi?",
        "options": [
          "delete[]",
          "delete",
          "free",
          "remove"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q484",
        "prompt": "Quyidagi kodda qanday xatolik mavjud? int* arr = new int[5]; delete arr;",
        "options": [
          "delete[] ishlatilishi kerak edi",
          "new noto'g'ri ishlatilgan",
          "delete oʻrniga free ishlatilishi kerak",
          "xatolik yo'q"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q485",
        "prompt": "new operatori ishlatilganda xotira qanday ajratiladi?",
        "options": [
          "Heap (halqa) xotiradan",
          "Stack (stek) xotiradan",
          "ROM dan",
          "Cache dan"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q486",
        "prompt": "delete[] arr; ifodasi nimani anglatadi?",
        "options": [
          "Dinamik massivni o'chiradi",
          "Faqat birinchi elementni o'chiradi",
          "Butun dasturni to'xtatadi",
          "Faqat oxirgi elementni o'chiradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q487",
        "prompt": "Dinamik massivning elementlariga qanday murojaat qilinadi?",
        "options": [
          "indeks orqali: arr[i]",
          "arr(i)",
          "*arr + i",
          "&arr[i]"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q488",
        "prompt": "Dinamik massiv uzunligini qanday aniqlaymiz?",
        "options": [
          "O'zimiz alohida saqlab boramiz",
          "arr.length",
          "arr.size()",
          "sizeof(arr)"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q489",
        "prompt": "int* arr = new int[n]; bu yerda n oʻzgaruvchisi qanday bo'lishi kerak?",
        "options": [
          "Butun son va oldindan qiymatga ega",
          "Massiv turi",
          "Belgilar to'plami",
          "Belgisiz o'zgaruvchi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q490",
        "prompt": "Dinamik massivni yaratgach, quyidagilardan qaysi biri xatolik hisoblanadi?",
        "options": [
          "arr[n] = 10;",
          "arr[0] = 1;",
          "arr[n-1] = 5;",
          "arr[2]=3"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q491",
        "prompt": "C++ dasturida nechta turdagi massiv mavjud?",
        "options": [
          "Statik va dinamik",
          "Faqat bitta",
          "Faqat dinamik",
          "Massiv mavjud emas"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q492",
        "prompt": "Dinamik massivdan foydalanishda qanday xavf mavjud?",
        "options": [
          "Xotira oqish xavfi",
          "Tezlik pastligi",
          "Kompilyatsiya xatolari",
          "Kodni tushunib bo'lmasligi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q493",
        "prompt": "delete[] operatoridan foydalanmaslik nima oqibatga olib keladi?",
        "options": [
          "Xotira oqishi (memory leak)",
          "Kod ishlamaydi",
          "Xatoliklar avtomatik tozalanadi",
          "Obyektlar tozalanadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q494",
        "prompt": "Dinamik massivdan foydalanishda optimal usul qaysi?",
        "options": [
          "Zaruratga qarab ajratish va tozalash",
          "Har doim yangidan ajratish",
          "Har doim stackdan foydalanish",
          "Massiv ishlatilmaydi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q495",
        "prompt": "Agar massiv elementi bo'lmagan manzilga murojaat qilinsa nima bo'ladi?",
        "options": [
          "Undefined behavior",
          "Element 0 ga teng bo'ladi",
          "Dastur avtomatik tuzatadi",
          "Compiler xatolik beradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q496",
        "prompt": "Dinamik massivdan nusxa olishda qanday yondashuv to'g'ri?",
        "options": [
          "Yangi massiv ajratib, elementlarni ko'chirish",
          "arr2 = arr",
          "arr2 = &arr",
          "arr2.copy(arr)"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q497",
        "prompt": "Massivni dinamik yaratish va uni o'chirish to'g'ri ketma-ketlikda berilgan variantni tanlang:",
        "options": [
          "int arr = new int[n]; ... delete[] arr;",
          "int arr[n]; ... delete arr;",
          "new int[n]; ... free(arr);",
          "create int[n]; ... destroy arr;"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q498",
        "prompt": "C++ da vector konteyneri qaysi vazifani bajaradi?",
        "options": [
          "Dinamik massiv o'rnini bosadi",
          "Faqat statik massivni",
          "Xotirani kamaytiradi",
          "Matematika amallarini bajaradi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q499",
        "prompt": "Dinamik massivdan foydalangandan keyin xotirani bo'shatmaslik natijasida nima yuz beradi?",
        "options": [
          "Xotira toʻlishi",
          "Massiv o'z-o'zidan o'chadi",
          "Kompilyator xato beradi",
          "Massiv avtomatik tozalanadi"
        ],
        "correctIndex": 0
      },
      {
        "id": "das-10-q500",
        "prompt": "int* arr = new int[100]; delete[] arr; ifodasi qaysi holatda to'g'ri?",
        "options": [
          "100 ta int element uchun xotira ajratilib, keyin tozalansa",
          "delete o'rniga delete arr boʻlsa",
          "arr global boʻlsa",
          "arr dynamic emas, static boʻlsa"
        ],
        "correctIndex": 0
      }
    ]
  }



    ],
  },
]
