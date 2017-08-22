﻿function when(when) {
	var json_data = {
		"0102": "Hynek",
		"0103": "Bedřich",
		"0104": "Hugo",
		"0106": "Laura",
		"0107": "Jaroslava",
		"0108": "Oskar",
		"0109": ["Linda", "Samuel"],
		"0110": "Igor",
		"0111": "Felix",
		"0112": "Iva",
		"0201": "Karina",
		"0202": "Nela",
		"0203": "Anežka",
		"0204": "Erika",
		"0205": "Zikmund",
		"0206": "Jarmil",
		"0207": "Patricie",
		"0208": "Gustav",
		"0209": "Adéla",
		"0210": ["Olívie", "Oliver"],
		"0212": "Blanka",
		"0301": "Radmila",
		"0302": "Blažej",
		"0303": "Kamil",
		"0304": "Richard",
		"0305": "Alexej",
		"0306": "Tamara",
		"0307": "Radomír",
		"0308": "Miluše",
		"0309": "Bronislav",
		"0310": "Bohumil",
		"0311": "Hubert",
		"0312": "Svatoslav",
		"0401": "Diana",
		"0402": "Jarmila",
		"0403": "Stela",
		"0404": "Ivana",
		"0405": "Květoslav",
		"0406": "Dalibor",
		"0407": "Prokop",
		"0408": "Dominik",
		"0409": "Jindřiška",
		"0410": "František",
		"0411": "Karel",
		"0412": "Barbora",
		"0501": "Dalimil",
		"0502": "Dobromila",
		"0503": "Kazimír",
		"0504": "Miroslava",
		"0505": "Klaudie",
		"0506": "Dobroslav",
		"0508": "Kristián",
		"0509": "Boris",
		"0510": "Eliška",
		"0511": "Miriam",
		"0512": "Jitka",
		"0602": "Vanda",
		"0603": "Miroslav",
		"0604": "Vendula",
		"0605": "Radoslav",
		"0606": "Norbert",
		"0608": "Oldřiška",
		"0609": "Boleslav",
		"0610": "Hanuš",
		"0611": "Liběna",
		"0612": "Mikuláš",
		"0701": "Vilma",
		"0702": "Veronika",
		"0703": "Tomáš",
		"0704": ["Hermína", "Heřman"],
		"0705": "Stanislav",
		"0706": ["Slavoj", "Iveta"],
		"0707": "Bohuslava",
		"0708": "Lada",
		"0709": "Regína",
		"0710": "Justýna",
		"0711": "Saskie",
		"0712": "Benjamín",
		"0801": "Čestmír",
		"0802": "Milada",
		"0803": "Gabriela",
		"0804": "Ema",
		"0806": "Medard",
		"0807": "Nora",
		"0808": "Soběslav",
		"0809": "Mariana",
		"0810": "Věra",
		"0811": "Bohumír",
		"0812": "Květoslava",
		"0901": "Vladan",
		"0902": "Apolena",
		"0903": "Františka",
		"0904": "Dušan",
		"0905": "Ctibor",
		"0906": "Stanislava",
		"0907": "Drahoslava",
		"0908": "Roman",
		"0909": "Daniela",
		"0910": ["Štefan", "Sára"],
		"0911": "Bohdan",
		"0912": "Vratislav",
		"1001": "Břetislav",
		"1002": "Mojmír",
		"1003": "Viktorie",
		"1004": "Darja",
		"1005": "Blažena",
		"1006": "Gita",
		"1007": ["Libuše", "Amálie"],
		"1008": "Vavřinec",
		"1009": "Irma",
		"1010": "Marina",
		"1011": "Evžen",
		"1012": "Julie",
		"1101": "Bohdana",
		"1102": "Božena",
		"1103": "Anděla",
		"1104": "Izabela",
		"1105": "Svatava",
		"1106": "Bruno",
		"1107": "Olga",
		"1108": "Zuzana",
		"1109": "Denisa",
		"1110": "Andrej",
		"1111": "Martin",
		"1112": "Dana",
		"1201": "Pravoslav",
		"1202": "Slavěna",
		"1203": "Řehoř",
		"1204": "Julius",
		"1205": "Pankrác",
		"1206": "Antonie",
		"1207": "Bořek",
		"1208": "Klára",
		"1209": "Marie",
		"1210": "Marcel",
		"1211": "Benedikt",
		"1212": "Simona",
		"1301": "Edita",
		"1302": "Věnceslav",
		"1303": "Růžena",
		"1304": "Aleš",
		"1305": "Servác",
		"1306": "Antonín",
		"1307": "Markéta",
		"1308": "Alena",
		"1309": "Lubor",
		"1310": "Renáta",
		"1311": "Tibor",
		"1312": "Lucie",
		"1401": "Radovan",
		"1402": "Valentýn",
		"1403": ["Rút", "Matylda"],
		"1404": "Vincenc",
		"1405": "Bonifác",
		"1406": "Roland",
		"1407": "Karolína",
		"1408": "Alan",
		"1409": "Radka",
		"1410": "Agáta",
		"1411": "Sáva",
		"1412": "Lýdie",
		"1501": "Alice",
		"1502": "Jiřina",
		"1503": "Ida",
		"1504": "Anastázie",
		"1505": "Žofie",
		"1506": "Vít",
		"1507": "Jindřich",
		"1508": "Hana",
		"1509": "Jolana",
		"1510": "Tereza",
		"1511": "Leopold",
		"1512": "Radana",
		"1601": "Ctirad",
		"1602": "Ljuba",
		"1603": ["Herbert", "Elena"],
		"1604": "Irena",
		"1605": "Přemysl",
		"1606": "Zbyněk",
		"1607": "Luboš",
		"1608": "Jáchym",
		"1609": "Ludmila",
		"1610": "Havel",
		"1611": ["Otmar", "Mahulena"],
		"1612": "Albína",
		"1701": "Drahoslav",
		"1702": "Miloslava",
		"1703": "Vlastimil",
		"1704": "Rudolf",
		"1705": "Aneta",
		"1706": "Adolf",
		"1707": "Martina",
		"1708": "Petra",
		"1709": "Naděžda",
		"1710": "Hedvika",
		"1712": "Daniel",
		"1801": "Vladislav",
		"1802": "Gizela",
		"1803": "Eduard",
		"1804": "Valérie",
		"1805": "Nataša",
		"1806": "Milan",
		"1807": "Drahomíra",
		"1808": "Helena",
		"1809": "Kryštof",
		"1810": "Lukáš",
		"1811": "Romana",
		"1812": "Miloslav",
		"1901": "Doubravka",
		"1902": "Patrik",
		"1903": "Josef",
		"1904": "Rostislav",
		"1905": "Ivo",
		"1906": "Leoš",
		"1907": "Čeněk",
		"1908": "Ludvík",
		"1909": "Zita",
		"1910": "Michaela",
		"1911": "Alžběta",
		"1912": "Ester",
		"2001": "Ilona",
		"2002": "Oldřich",
		"2003": "Světlana",
		"2004": "Marcela",
		"2005": "Zbyšek",
		"2006": "Květa",
		"2007": "Ilja",
		"2008": "Bernard",
		"2009": "Oleg",
		"2010": "Vendelín",
		"2011": "Nikola",
		"2012": "Dagmar",
		"2101": "Běla",
		"2102": "Lenka",
		"2103": "Radek",
		"2104": "Alexandra",
		"2105": "Monika",
		"2106": "Alois",
		"2107": "Vítězslav",
		"2108": "Johana",
		"2109": "Matouš",
		"2110": "Brigita",
		"2111": "Albert",
		"2112": "Natálie",
		"2201": "Slavomír",
		"2202": "Petr",
		"2203": "Leona",
		"2204": "Evženie",
		"2205": "Emil",
		"2206": "Pavla",
		"2207": "Magdaléna",
		"2208": "Bohuslav",
		"2209": "Darina",
		"2210": "Sabina",
		"2211": "Cecílie",
		"2212": "Šimon",
		"2301": "Zdeněk",
		"2302": "Svatopluk",
		"2303": "Ivona",
		"2304": "Vojtěch",
		"2305": "Vladimír",
		"2306": "Zdeňka",
		"2307": "Libor",
		"2308": "Sandra",
		"2309": "Berta",
		"2310": "Teodor",
		"2311": "Klement",
		"2312": "Vlasta",
		"2401": "Milena",
		"2402": "Matěj",
		"2403": "Gabriel",
		"2404": "Jiří",
		"2405": "Jana",
		"2406": "Jan",
		"2407": "Kristýna",
		"2408": "Bartoloměj",
		"2409": "Jaromír",
		"2410": "Nina",
		"2411": "Emílie",
		"2412": ["Eva", "Adam"],
		"2501": "Miloš",
		"2502": "Liliana",
		"2503": "Marián",
		"2504": "Marek",
		"2505": "Viola",
		"2506": "Ivan",
		"2507": "Jakub",
		"2508": "Radim",
		"2509": "Zlata",
		"2510": "Beáta",
		"2511": "Kateřina",
		"2601": "Zora",
		"2602": "Dorota",
		"2603": "Emanuel",
		"2604": "Oto",
		"2605": "Filip",
		"2606": "Adriana",
		"2607": "Anna",
		"2608": "Luděk",
		"2609": "Andrea",
		"2610": "Erik",
		"2611": "Artur",
		"2612": "Štěpán",
		"2701": "Ingrid",
		"2702": "Alexandr",
		"2703": "Dita",
		"2704": "Jaroslav",
		"2705": "Valdemar",
		"2706": "Ladislav",
		"2707": "Věroslav",
		"2708": "Otakar",
		"2709": "Jonáš",
		"2710": ["Zoe", "Šarlota"],
		"2711": "Xenie",
		"2712": "Žaneta",
		"2801": "Otýlie",
		"2802": "Lumír",
		"2803": "Soňa",
		"2804": "Vlastislav",
		"2805": "Vilém",
		"2806": "Lubomír",
		"2807": "Viktor",
		"2808": "Augustýn",
		"2809": "Václav",
		"2811": "René",
		"2812": "Bohumila",
		"2901": "Zdislava",
		"2902": "Horymír",
		"2903": "Taťána",
		"2904": "Robert",
		"2905": "Maxmilián",
		"2906": ["Petr", "Pavel"],
		"2907": "Marta",
		"2908": "Evelína",
		"2909": "Michal",
		"2910": "Silvie",
		"2911": "Zina",
		"2912": "Judita",
		"3001": "Robin",
		"3003": "Arnošt",
		"3004": "Blahoslav",
		"3005": "Ferdinand",
		"3006": "Šárka",
		"3007": "Bořivoj",
		"3008": "Vladěna",
		"3009": "Jeroným",
		"3010": "Tadeáš",
		"3011": "Ondřej",
		"3012": "David",
		"3101": "Marika",
		"3103": "Kvido",
		"3105": "Kamila",
		"3107": "Ignác",
		"3108": "Pavlína",
		"3110": "Štěpánka",
		"3112": "Silvestr"
	}

	var result = json_data[when];

	var svatky = new Array();
	if (typeof result === "object") {
		for (var svatek in result) {
			svatky.push({ "date": when, "name": result[svatek] });
		}
	}
	if (typeof result === "string") {
		svatky.push({ "date": when, "name": result });
	}

	return svatky;
}

function who(who) {
	var json_data = {
		"Adam": "2412",
		"Adéla": "0209",
		"Adolf": "1706",
		"Adriana": "2606",
		"Agáta": "1410",
		"Alan": "1408",
		"Albert": "2111",
		"Albína": "1612",
		"Alena": "1308",
		"Aleš": "1304",
		"Alexandr": "2702",
		"Alexandra": "2104",
		"Alexej": "0305",
		"Alice": "1501",
		"Alois": "2106",
		"Alžběta": "1911",
		"Amálie": "1007",
		"Anastázie": "1504",
		"Anděla": "1103",
		"Andrea": "2609",
		"Andrej": "1110",
		"Aneta": "1705",
		"Anežka": "0203",
		"Anna": "2607",
		"Antonie": "1206",
		"Antonín": "1306",
		"Apolena": "0902",
		"Arnošt": "3003",
		"Artur": "2611",
		"Augustýn": "2808",
		"Barbora": "0412",
		"Bartoloměj": "2408",
		"Beáta": "2510",
		"Bedřich": "0103",
		"Běla": "2101",
		"Benedikt": "1211",
		"Benjamín": "0712",
		"Bernard": "2008",
		"Berta": "2309",
		"Blahoslav": "3004",
		"Blanka": "0212",
		"Blažej": "0302",
		"Blažena": "1005",
		"Bohdan": "0911",
		"Bohdana": "1101",
		"Bohumil": "0310",
		"Bohumila": "2812",
		"Bohumír": "0811",
		"Bohuslav": "2208",
		"Bohuslava": "0707",
		"Boleslav": "0609",
		"Bonifác": "1405",
		"Boris": "0509",
		"Bořek": "1207",
		"Bořivoj": "3007",
		"Božena": "1102",
		"Brigita": "2110",
		"Bronislav": "0309",
		"Bruno": "1106",
		"Břetislav": "1001",
		"Cecílie": "2211",
		"Ctibor": "0905",
		"Ctirad": "1601",
		"Čeněk": "1907",
		"Čestmír": "0801",
		"Dagmar": "2012",
		"Dalibor": "0406",
		"Dalimil": "0501",
		"Dana": "1112",
		"Daniel": "1712",
		"Daniela": "0909",
		"Darina": "2209",
		"Darja": "1004",
		"David": "3012",
		"Denisa": "1109",
		"Diana": "0401",
		"Dita": "2703",
		"Dobromila": "0502",
		"Dobroslav": "0506",
		"Dominik": "0408",
		"Dorota": "2602",
		"Doubravka": "1901",
		"Drahomíra": "1807",
		"Drahoslav": "1701",
		"Drahoslava": "0907",
		"Dušan": "0904",
		"Edita": "1301",
		"Eduard": "1803",
		"Elena": "1603",
		"Eliška": "0510",
		"Ema": "0804",
		"Emanuel": "2603",
		"Emil": "2205",
		"Emílie": "2411",
		"Erik": "2610",
		"Erika": "0204",
		"Ester": "1912",
		"Eva": "2412",
		"Evelína": "2908",
		"Evžen": "1011",
		"Evženie": "2204",
		"Felix": "0111",
		"Ferdinand": "3005",
		"Filip": "2605",
		"František": "0410",
		"Františka": "0903",
		"Gabriel": "2403",
		"Gabriela": "0803",
		"Gita": "1006",
		"Gizela": "1802",
		"Gustav": "0208",
		"Hana": "1508",
		"Hanuš": "0610",
		"Havel": "1610",
		"Hedvika": "1710",
		"Helena": "1808",
		"Herbert": "1603",
		"Hermína": "0704",
		"Heřman": "0704",
		"Horymír": "2902",
		"Hubert": "0311",
		"Hugo": "0104",
		"Hynek": "0102",
		"Ida": "1503",
		"Ignác": "3107",
		"Igor": "0110",
		"Ilja": "2007",
		"Ilona": "2001",
		"Ingrid": "2701",
		"Irena": "1604",
		"Irma": "1009",
		"Iva": "0112",
		"Ivan": "2506",
		"Ivana": "0404",
		"Iveta": "0706",
		"Ivo": "1905",
		"Ivona": "2303",
		"Izabela": "1104",
		"Jáchym": "1608",
		"Jakub": "2507",
		"Jan": "2406",
		"Jana": "2405",
		"Jarmil": "0206",
		"Jarmila": "0402",
		"Jaromír": "2409",
		"Jaroslav": "2704",
		"Jaroslava": "0107",
		"Jeroným": "3009",
		"Jindřich": "1507",
		"Jindřiška": "0409",
		"Jiří": "2404",
		"Jiřina": "1502",
		"Jitka": "0512",
		"Johana": "2108",
		"Jolana": "1509",
		"Jonáš": "2709",
		"Josef": "1903",
		"Judita": "2912",
		"Julie": "1012",
		"Julius": "1204",
		"Justýna": "0710",
		"Kamil": "0303",
		"Kamila": "3105",
		"Karel": "0411",
		"Karina": "0201",
		"Karolína": "1407",
		"Kateřina": "2511",
		"Kazimír": "0503",
		"Klára": "1208",
		"Klaudie": "0505",
		"Klement": "2311",
		"Kristián": "0508",
		"Kristýna": "2407",
		"Kryštof": "1809",
		"Květa": "2006",
		"Květoslav": "0405",
		"Květoslava": "0812",
		"Kvido": "3103",
		"Lada": "0708",
		"Ladislav": "2706",
		"Laura": "0106",
		"Lenka": "2102",
		"Leona": "2203",
		"Leopold": "1511",
		"Leoš": "1906",
		"Liběna": "0611",
		"Libor": "2307",
		"Libuše": "1007",
		"Liliana": "2502",
		"Linda": "0109",
		"Ljuba": "1602",
		"Lubomír": "2806",
		"Lubor": "1309",
		"Luboš": "1607",
		"Lucie": "1312",
		"Luděk": "2608",
		"Ludmila": "1609",
		"Ludvík": "1908",
		"Lukáš": "1810",
		"Lumír": "2802",
		"Lýdie": "1412",
		"Magdaléna": "2207",
		"Mahulena": "1611",
		"Marcel": "1210",
		"Marcela": "2004",
		"Marek": "2504",
		"Marián": "2503",
		"Mariana": "0809",
		"Marie": "1209",
		"Marika": "3101",
		"Marina": "1010",
		"Markéta": "1307",
		"Marta": "2907",
		"Martin": "1111",
		"Martina": "1707",
		"Matěj": "2402",
		"Matouš": "2109",
		"Matylda": "1403",
		"Maxmilián": "2905",
		"Medard": "0806",
		"Michaela": "1910",
		"Michal": "2909",
		"Mikuláš": "0612",
		"Milada": "0802",
		"Milan": "1806",
		"Milena": "2401",
		"Miloslav": "1812",
		"Miloslava": "1702",
		"Miloš": "2501",
		"Miluše": "0308",
		"Miriam": "0511",
		"Miroslav": "0603",
		"Miroslava": "0504",
		"Mojmír": "1002",
		"Monika": "2105",
		"Naděžda": "1709",
		"Natálie": "2112",
		"Nataša": "1805",
		"Nela": "0202",
		"Nikola": "2011",
		"Nina": "2410",
		"Nora": "0807",
		"Norbert": "0606",
		"Oldřich": "2002",
		"Oldřiška": "0608",
		"Oleg": "2009",
		"Olga": "1107",
		"Oliver": "0210",
		"Olívie": "0210",
		"Ondřej": "3011",
		"Oskar": "0108",
		"Otakar": "2708",
		"Otmar": "1611",
		"Oto": "2604",
		"Otýlie": "2801",
		"Pankrác": "1205",
		"Patricie": "0207",
		"Patrik": "1902",
		"Pavel": "2906",
		"Pavla": "2206",
		"Pavlína": "3108",
		"Petr": ["2202", "2906"],
		"Petra": "1708",
		"Pravoslav": "1201",
		"Prokop": "0407",
		"Přemysl": "1605",
		"Radana": "1512",
		"Radek": "2103",
		"Radim": "2508",
		"Radka": "1409",
		"Radmila": "0301",
		"Radomír": "0307",
		"Radoslav": "0605",
		"Radovan": "1401",
		"Regína": "0709",
		"Renáta": "1310",
		"René": "2811",
		"Richard": "0304",
		"Robert": "2904",
		"Robin": "3001",
		"Roland": "1406",
		"Roman": "0908",
		"Romana": "1811",
		"Rostislav": "1904",
		"Rudolf": "1704",
		"Rút": "1403",
		"Růžena": "1303",
		"Řehoř": "1203",
		"Sabina": "2210",
		"Samuel": "0109",
		"Sandra": "2308",
		"Sára": "0910",
		"Saskie": "0711",
		"Sáva": "1411",
		"Servác": "1305",
		"Silvestr": "3112",
		"Silvie": "2910",
		"Simona": "1212",
		"Slavěna": "1202",
		"Slavoj": "0706",
		"Slavomír": "2201",
		"Soběslav": "0808",
		"Soňa": "2803",
		"Stanislav": "0705",
		"Stanislava": "0906",
		"Stela": "0403",
		"Svatava": "1105",
		"Svatopluk": "2302",
		"Svatoslav": "0312",
		"Světlana": "2003",
		"Šárka": "3006",
		"Šarlota": "2710",
		"Šimon": "2212",
		"Štefan": "0910",
		"Štěpán": "2612",
		"Štěpánka": "3110",
		"Tadeáš": "3010",
		"Tamara": "0306",
		"Taťána": "2903",
		"Teodor": "2310",
		"Tereza": "1510",
		"Tibor": "1311",
		"Tomáš": "0703",
		"Václav": "2809",
		"Valdemar": "2705",
		"Valentýn": "1402",
		"Valérie": "1804",
		"Vanda": "0602",
		"Vavřinec": "1008",
		"Věnceslav": "1302",
		"Vendelín": "2010",
		"Vendula": "0604",
		"Věra": "0810",
		"Veronika": "0702",
		"Věroslav": "2707",
		"Viktor": "2807",
		"Viktorie": "1003",
		"Vilém": "2805",
		"Vilma": "0701",
		"Vincenc": "1404",
		"Viola": "2505",
		"Vít": "1506",
		"Vítězslav": "2107",
		"Vladan": "0901",
		"Vladěna": "3008",
		"Vladimír": "2305",
		"Vladislav": "1801",
		"Vlasta": "2312",
		"Vlastimil": "1703",
		"Vlastislav": "2804",
		"Vojtěch": "2304",
		"Vratislav": "0912",
		"Xenie": "2711",
		"Zbyněk": "1606",
		"Zbyšek": "2005",
		"Zdeněk": "2301",
		"Zdeňka": "2306",
		"Zdislava": "2901",
		"Zikmund": "0205",
		"Zina": "2911",
		"Zita": "1909",
		"Zlata": "2509",
		"Zoe": "2710",
		"Zora": "2601",
		"Zuzana": "1108",
		"Žaneta": "2712",
		"Žofie": "1505"
	}

	var result = json_data[who];

	var svatky = new Array();
	if (typeof result === "object") {
		for (var svatek in result) {
			svatky.push({ "date": result[svatek], "name": who });
		}
	}
	if (typeof result === "string") {
		svatky.push({ "date": result, "name": who });
	}

	return svatky;
}

exports.when = when;
exports.who = who;
