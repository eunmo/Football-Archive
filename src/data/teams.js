const teams = {
  // English
  'AFC Bournemouth': { id: 2601124, name: 'Bournemouth' },
  'Arsenal FC': { id: 52280, name: 'Arsenal' },
  'Aston Villa': { id: 52683, name: 'Aston Villa' },
  'Birmingham City': { id: 53342, name: 'Birmingham' },
  'Blackburn Rovers': { id: 53344, name: 'Blackburn' },
  'Blackpool FC': { id: 2601125, name: 'Blackpool' },
  'Bolton Wanderers': { id: 53346, name: 'Bolton' },
  'Brighton & Hove Albion': { id: 2601105, name: 'Brighton' },
  'Burnley FC': { id: 53354, name: 'Burnley' },
  'Burton Albion': { id: 2601140, name: 'Burton Albion' },
  'Cardiff City': { id: 50095, name: 'Cardiff' },
  'Charlton Athletic': { id: 69598, name: 'Charlton' },
  'Chelsea FC': { id: 52914, name: 'Chelsea' },
  'Crystal Palace': { id: 52916, name: 'Crystal Palace' },
  'Derby County': { id: 52917, name: 'Derby' },
  'Everton FC': { id: 52281, name: 'Everton' },
  'Fulham FC': { id: 75386, name: 'Fulham' },
  'Hull City': { id: 2600537, name: 'Hull' },
  'Huddersfield Town': { id: 2601106, name: 'Huddersfield' },
  'Leicester City': { id: 53577, name: 'Leicester' },
  'Liverpool FC': { id: 7889, name: 'Liverpool' },
  'Newcastle United': { id: 59324, name: 'Newcastle' },
  'Manchester City': { id: 52919, name: 'Man City' },
  'Manchester United': { id: 52682, name: 'Man Utd' },
  'Middlesbrough FC': { id: 69600, name: 'Middlesbrough' },
  'Norwich City': { id: 52921, name: 'Norwich' },
  'Portsmouth FC': { id: 84297, name: 'Portsmouth' },
  'Queens Park Rangers': { id: 52282, name: 'QPR' },
  'Reading FC': { id: 93338, name: 'Reading' },
  'Southampton FC': { id: 52923, name: 'Southampton' },
  'Stoke City': { id: 53356, name: 'Stoke' },
  'Sunderland AFC': { id: 53360, name: 'Sunderland' },
  'Swansea City': { id: 52659, name: 'Swansea' },
  'Tottenham Hotspur': { id: 1652, name: 'Tottenham' },
  'Watford FC': { id: 52744, name: 'Watford' },
  'West Bromwich Albion': { id: 53359, name: 'West Brom' },
  'West Ham United': { id: 53358, name: 'West Ham' },
  'Wigan Athletic': { id: 89696, name: 'Wigan' },
  'Wolverhampton Wanderers': { id: 53357, name: 'Wolverhampton' },

  // English Lower Division
  'Barnsley FC': { id: 53339, name: 'Barnsley' },
  'Bristol City': { id: 2601134, name: 'Bristol City' },
  'Cambridge United': { id: 2601368, name: 'Cambridge' },
  'Crawley Town': { id: 2601398, name: 'Crawley' },
  'Ipswich Town': { id: 62301, name: 'Ipswich' },
  'Leeds United': { id: 53361, name: 'Leeds' },
  'Milton Keynes Dons': { id: 52924, name: 'MK Dons' },
  'Northampton Town': { id: 2601117, name: 'Northampton' },
  'Preston North End': { id: 77893, name: 'PNE' },
  'Rochdale AFC': { id: 2601120, name: 'Rochdale' },
  'Scunthorpe United': { id: 2601126, name: 'Scunthorpe' },
  'Sheffield United': { id: 68215, name: 'Sheffield' },
  'Shrewsbury Town': { id: 2601116, name: 'Shrewsbury' },
  'Yeovil Town': { id: 2601135, name: 'Yeovil' },

  // Spain
  'Athletic Bilbao': { id: 50125, name: 'Bilbao' },
  'Atlético Madrid': { id: 50124, name: 'Atlético' },
  'Cádiz CF': { id: 89726, name: 'Cádiz', url: 'cadiz-cf' },
  'CA Osasuna': { id: 53042, name: 'Osasuna' },
  'CD Alavés': { id: 69619, name: 'Alavés' },
  'CD Leganés': { id: 2602783, name: 'Leganés' },
  'CD Numancia': { id: 74068, name: 'Leganés' },
  'CD Tenerife': { id: 53041, name: 'Tenerife' },
  'Celta Vigo': { id: 53043, name: 'Celta' },
  'Córdoba CF': { id: 2602782, name: 'Córdoba' },
  'Deportivo La Coruña': { id: 59044, name: 'Deportivo' },
  'Elche CF': { id: 89561, name: 'Elche' },
  'Espanyol Barcelona': { id: 54189, name: 'Espanol' },
  'FC Barcelona': { id: 50080, name: 'Barcelona' },
  Gimnàstic: { id: 93180, name: 'Tarragona', url: 'gimnastic' },
  'Girona FC': { id: 2602798, name: 'Girona' },
  'Getafe CF': { id: 87960, name: 'Getafe' },
  'Granada CF': { id: 2602893, name: 'Granada' },
  'Hércules CF': { id: 74912, name: 'Hércules' },
  'Levante UD': { id: 87959, name: 'Levante' },
  'Málaga CF': { id: 74069, name: 'Málaga' },
  'Racing Santander': { id: 64253, name: 'Racing' },
  'Rayo Vallecano': { id: 74070, name: 'Rayo Vallecano' },
  'RCD Mallorca': { id: 53044, name: 'Mallorca' },
  'Real Betis': { id: 52265, name: 'Betis' },
  'Real Madrid': { id: 50051, name: 'Real Madrid' },
  'Real Murcia': { id: 85003, name: 'Murcia' },
  'Real Sociedad': { id: 50123, name: 'Real Sociedad' },
  'Real Valladolid': { id: 52801, name: 'Valladolid' },
  'Real Zaragoza': { id: 52822, name: 'Zaragoza' },
  'Recreativo Huelva': { id: 77917, name: 'Recreativo' },
  'SD Eibar': { id: 89727, name: 'Eibar' },
  'SD Huesca': { id: 2602869, name: 'Huesca' },
  'Sevilla FC': { id: 52714, name: 'Sevilla' },
  'Sporting Gijón': { id: 53046, name: 'Sporting Gijón' },
  'UD Almería': { id: 2600292, name: 'Almería' },
  'UD Las Palmas': { id: 64251, name: 'Las Palmas' },
  'Valencia CF': { id: 52268, name: 'Valencia' },
  'Villarreal CF': { id: 70691, name: 'Villarreal' },
  'Xerez CD': { id: 2600720, name: 'Xerez' },

  // Germany
  '1. FC Kaiserslautern': {
    id: 3695,
    name: 'Kaiserslautern',
    url: '1-fc-kaiserslautern'
  },
  '1. FC Köln': { id: 50018, name: 'Köln' },
  '1. FC Nürnberg': { id: 50108, name: 'Nürnberg', url: '1-fc-nuernberg' },
  '1. FC Union Berlin': {
    id: 77977,
    name: 'Union Berlin',
    url: '1-fc-union-berlin'
  },
  '1. FSV Mainz 05': { id: 70853, name: 'Mainz' },
  '1899 Hoffenheim': { id: 2600431, name: 'Hoffenheim' },
  'Alemannia Aachen': { id: 86797, name: 'Aachen' },
  'Arminia Bielefeld': { id: 64486, name: 'Arminia' },
  'Bayer Leverkusen': { id: 50109, name: 'Leverkusen' },
  'Bayern München': { id: 50037, name: 'München' },
  'Bor. Mönchengladbach': { id: 52757, name: 'Gladbach' },
  'Borussia Dortmund': { id: 52758, name: 'Dortmund' },
  'Eintracht Frankfurt': { id: 50072, name: 'Frankfurt' },
  'Eintracht Braunschweig': { id: 65172, name: 'Braunschweig' },
  'Energie Cottbus': { id: 75799, name: 'Energie' },
  'FC Augsburg': { id: 2600978, name: 'Augsburg' },
  'FC Ingolstadt 04': { id: 2600981, name: 'Ingolstadt' },
  'FC Schalke 04': { id: 57388, name: 'Schalke 04' },
  'FC St. Pauli': { id: 77894, name: 'St Pauli', url: 'fc-st-pauli' },
  'Fortuna Düsseldorf': {
    id: 5926,
    name: 'Düsseldorf',
    url: 'fortuna-duesseldorf'
  },
  'Hamburger SV': { id: 52167, name: 'Hamburger' },
  'Hannover 96': { id: 57488, name: 'Hannover' },
  'Hansa Rostock': { id: 52793, name: 'Hansa' },
  'Hertha BSC': { id: 5451, name: 'Hertha' },
  'Karlsruher SC': { id: 52936, name: 'Karlsruher' },
  'MSV Duisburg': { id: 61565, name: 'Duisburg' },
  'RB Leipzig': { id: 2603790, name: 'Leipzig' },
  'SC Paderborn 07': { id: 2600971, name: 'Paderborn' },
  'SC Freiburg': { id: 59880, name: 'Freiburg' },
  'SpVgg Greuther Fürth': {
    id: 77895,
    name: 'Fürth',
    url: 'spvgg-greuther-fuerth'
  },
  'SV Darmstadt 98': { id: 2605680, name: 'Darmstadt' },
  'VfB Stuttgart': { id: 50107, name: 'Stuttgart' },
  'VfL Bochum': { id: 52939, name: 'Bochum' },
  'VfL Wolfsburg': { id: 64332, name: 'Wolfsburg' },
  'Werder Bremen': { id: 50040, name: 'Bremen' },

  // Italy
  'AC Milan': { id: 50058, name: 'Milan' },
  'AC Cesena': { id: 52970, name: 'Cesena' },
  'AC Siena': { id: 84575, name: 'Siena' },
  'ACF Fiorentina': { id: 52817, name: 'Fiorentina' },
  'AS Bari': { id: 52968, name: 'Bari' },
  'AS Livorno': { id: 88183, name: 'Livorno' },
  'AS Roma': { id: 50137, name: 'Roma' },
  'Ascoli Calcio': { id: 91464, name: 'Ascoli' },
  Atalanta: { id: 52816, name: 'Atalanta' },
  'Benevento Calcio': { id: 2601006, name: 'Benevento' },
  'Bologna FC': { id: 52969, name: 'Bologna' },
  'Brescia Calcio': { id: 2601829, name: 'Brescia' },
  'Cagliari Calcio': { id: 59013, name: 'Cagliari' },
  'Calcio Catania': { id: 93736, name: 'Catania' },
  'Carpi FC': { id: 2602696, name: 'Carpi' },
  'Chievo Verona': { id: 77904, name: 'Chievo' },
  'Empoli FC': { id: 64107, name: 'Empoli' },
  'FC Crotone': { id: 2600997, name: 'Crotone' },
  'FC Messina': { name: 'Messina', url: 'acr-messina' },
  'Frosinone Calcio': { id: 2601010, name: 'Frosinone' },
  'Genoa CFC': { id: 52972, name: 'Genoa' },
  'Hellas Verona': { id: 52301, name: 'Verona' },
  'Lazio Roma': { id: 52973, name: 'Lazio' },
  Inter: { id: 50138, name: 'Inter' },
  Juventus: { id: 50139, name: 'Juventus' },
  'Novara Calcio': { id: 2601015, name: 'Novara' },
  'Parma FC': { id: 54262, name: 'Parma' },
  'Parma Calcio 1913': { id: 54262, name: 'Parma' },
  'Pescara Calcio': { id: 2604874, name: 'Pescara' },
  'Reggina Calcio': { id: 73562, name: 'Reggina', url: 'reggina-1914' },
  Sampdoria: { id: 50089, name: 'Sampdoria' },
  'Sassuolo Calcio': { id: 2600632, name: 'Sassuolo' },
  'SPAL 2013 Ferrara': { id: 2601000, name: 'SPAL' },
  'SSC Napoli': { id: 50136, name: 'Napoli' },
  'Torino FC': { id: 50029, name: 'Torino' },
  'Treviso FBC': { id: 89705, name: 'Treviso', url: 'a-c-d-treviso' },
  'Udinese Calcio': { id: 51310, name: 'Udinese' },
  'US Lecce': { id: 52974, name: 'Lecce' },
  'US Palermo': { id: 88182, name: 'Palermo' },

  // France
  'Amiens SC': { id: 2601650, name: 'Amiens' },
  'Angers SCO': { id: 64162, name: 'Angers' },
  'AC Ajaccio': { id: 79942, name: 'Ajaccio' },
  'AC Arles-Avignon': { id: 2601311, name: 'Arles', url: 'ac-arles-avignon' },
  'AJ Auxerre': { id: 52269, name: 'Auxerre' },
  'AS Monaco': { id: 50023, name: 'Monaco' },
  'AS Nancy': { id: 52273, name: 'Nancy' },
  'AS Saint-Étienne': { id: 50022, name: 'Saint-Étienne' },
  'CS Sedan': { id: 64166, name: 'Sedan' },
  'Dijon FCO': { id: 2601308, name: 'Dijon' },
  'EA Guingamp': { id: 60442, name: 'Guingamp' },
  'ESTAC Troyes': { id: 73556, name: 'Troyes' },
  'Évian Thonon Gaillard': {
    id: 2601670,
    name: 'Évian',
    url: 'evian-thonon-gaillard'
  },
  'FC Lorient': { id: 68499, name: 'Lorient' },
  'FC Metz': { id: 50083, name: 'Metz' },
  'FC Nantes': { id: 52693, name: 'Nantes' },
  'FC Sochaux': { id: 52813, name: 'Sochaux' },
  'Girondins Bordeaux': { id: 50127, name: 'Bordeaux' },
  'Grenoble Foot 38': { id: 2600464, name: 'Grenoble' },
  'GFC Ajaccio': { id: 2604456, name: 'Ajaccio' },
  'Le Havre AC': { id: 52664, name: 'Le Havre' },
  'Le Mans UC 72': { id: 84710, name: 'Le Mans', url: 'le-mans-fc' },
  'Lille OSC': { id: 75797, name: 'Lille' },
  'Montpellier HSC': { id: 50128, name: 'Montpellier' },
  'Nîmes Olympique': { id: 60612, name: 'Nîmes', url: 'nimes-olympique' },
  'Olympique Marseille': { id: 52748, name: 'Marseille' },
  'Olympique Lyon': { id: 5312, name: 'Lyon' },
  'OGC Nice': { id: 52355, name: 'Nice' },
  'Paris Saint-Germain': { id: 52747, name: 'Paris' },
  'RC Lens': { id: 52277, name: 'Lens' },
  'RC Strasbourg': { id: 59857, name: 'Strasbourg' },
  'SC Bastia': { id: 61567, name: 'Bastia' },
  'SM Caen': { id: 52933, name: 'Caen' },
  'Stade Brest': { id: 2601306, name: 'Brest' },
  'Stade Reims': { id: 64165, name: 'Reims' },
  'Stade Rennes': { id: 55031, name: 'Rennes' },
  'Toulouse FC': { id: 52934, name: 'Toulouse' },
  'Valenciennes FC': { id: 92381, name: 'Valenciennes' },
  'US Boulogne': { id: 2600671, name: 'US Boulogne' },

  // Intl
  'Aalborg BK': { id: 54186, name: 'Aalborg' },
  'AEK Larnaca': { id: 54191, name: 'AEK Larnaca' },
  'AEK Athen': { id: 50129, name: 'AEK' },
  'AFC Ajax': { id: 50143, name: 'Ajax' },
  'Akhisar Belediyespor': { id: 2604479, name: 'Akhisar' },
  'Anorthosis Famagusta FC': { id: 52897, name: 'Anorthosis' },
  'APOEL Nikosia': { id: 50118, name: 'APOEL' },
  'Apollon Limassol': { id: 52741, name: 'Apollon' },
  'Astra Giurgiu': { id: 69611, name: 'Astra' },
  'Artmedia Petržalka': { id: 64519, name: 'Petržalka' },
  'Austria Wien': { id: 50110, name: 'Austria Wien' },
  'AZ Alkmaar': { id: 52327, name: 'AZ' },
  'BATE Borisov': { id: 66168, name: 'BATE' },
  Beşiktaş: { id: 50157, name: 'Beşiktaş' },
  'BSC Young Boys': { id: 50031, name: 'Young Boys' },
  Bursaspor: { id: 52695, name: 'Bursaspor' },
  'Celtic FC': { id: 50050, name: 'Celtic' },
  'CFR Cluj': { id: 88131, name: 'Cluj' },
  'Club Brugge KV': { id: 50043, name: 'Brugge' },
  'Crvena Zvezda': { id: 50069, name: 'Crvena Zvezda' },
  'CSKA Moskva': { id: 54266, name: 'CSKA Moskva' },
  'Debreceni VSC': { id: 52958, name: 'Debrecen' },
  'Dinamo Kiev': { id: 52723, name: 'Dinamo Kiev' },
  'Dinamo Moskva': { id: 52704, name: 'Dinamo Moskva' },
  'Dinamo Zagreb': { id: 50164, name: 'Dinamo Zagreb' },
  'Dnipro Dnipropetrovsk': { id: 50158, name: 'Dnipro' },
  'FC Basel': { id: 59856, name: 'Basel' },
  'FC Lugano': { id: 8538, name: 'Lugano' },
  'FC København': { id: 52709, name: 'København' },
  'FC Midtjylland': { id: 75795, name: 'Midtjylland' },
  'FC Nordsjælland': { id: 79940, name: 'Nordsjælland' },
  'FC Oleksandriya': { id: 77928, name: 'Oleksandriya' },
  'FC Porto': { id: 50064, name: 'Porto' },
  'FC Sion': { id: 52824, name: 'Sion' },
  'FC Thun': { id: 80409, name: 'Thun' },
  'FC Twente': { id: 52818, name: 'Twente' },
  'FC Unirea': { id: 92507, name: 'Unirea Urziceni' },
  'FC Zürich': { id: 51150, name: 'Zürich' },
  Fenerbahçe: { id: 52692, name: 'Fenerbahçe' },
  'Ferencvárosi TC': { id: 52298, name: 'Ferencváros' },
  Feyenoord: { id: 52749, name: 'Feyenoord' },
  'FK Astana': { id: 2600605, name: 'Astana' },
  'FK Jablonec': { id: 62169, name: 'Jablonec' },
  'FK Krasnodar': { id: 2601038, name: 'Krasnodar' },
  'FK Rostov': { id: 64500, name: 'Rostov' },
  'F91 Dudelange': { id: 59028, name: 'Dudelange' },
  Galatasaray: { id: 50067, name: 'Galatasaray' },
  "Hapoel Be'er Sheva": { id: 59340, name: 'H. Beer-Sheva' },
  'Hapoel Tel Aviv': { id: 59869, name: 'H. Tel Aviv' },
  'İstanbul Başakşehir F.K.': { id: 2600288, name: 'İstanbul Başakşehir' },
  'KAA Gent': { id: 4608, name: 'Gent' },
  'KRC Genk': { id: 61582, name: 'Genk' },
  LASK: { id: 63405, name: 'LASK' },
  'Legia Warszawa': { id: 50146, name: 'Legia' },
  'Levski Sofia': { id: 50044, name: 'Levski' },
  'Lokomotiv Moskva': { id: 53065, name: 'Lokomotiv Moskva' },
  'Maccabi Tel Aviv': { id: 57477, name: 'M. Tel Aviv' },
  'Maccabi Haifa': { id: 59045, name: 'M. Haifa' },
  'Malmö FF': { id: 50152, name: 'Malmö' },
  'Molde FK': { id: 50142, name: 'Molde' },
  'MOL Vidi FC': { id: 52288, name: 'Vidi' },
  'MŠK Žilina': { id: 61601, name: 'Žilina' },
  'NK Maribor': { id: 57490, name: 'Maribor' },
  'Olympiakos Piräus': { id: 2610, name: 'Olympiacos' },
  'Oţelul Galaţi': { id: 50151, name: 'Oţelul' },
  'Osmanlıspor FK': { id: 88360, name: 'Osmanlıspor' },
  'Östersunds FK': { id: 2602507, name: 'Östersunds' },
  Panathinaikos: { id: 50084, name: 'Panathinaikos' },
  'PAOK Saloniki': { id: 81221, name: 'PAOK' },
  Partizan: { id: 50162, name: 'Partizan' },
  'PFC Ludogorets Razgrad': { id: 2603104, name: 'Ludogorets' },
  'PSV Eindhoven': { id: 50062, name: 'PSV' },
  'Qarabağ FK': { id: 60609, name: 'Qarabağ' },
  'Rangers FC': { id: 50121, name: 'Rangers' },
  'Rapid Wien': { id: 50042, name: 'Rapid Wien' },
  'RB Salzburg': { id: 50030, name: 'Salzburg' },
  'Rosenborg BK': { id: 52806, name: 'Rosenborg' },
  'RSC Anderlecht': { id: 50074, name: 'Anderlecht' },
  'Rubin Kazan': { id: 82818, name: 'Rubin' },
  'Sarpsborg 08': { id: 2604486, name: 'Sarpsborg' },
  'Shakhtar Donetsk': { id: 52707, name: 'Shakhtar' },
  'SL Benfica': { id: 50147, name: 'Benfica' },
  'Slavia Praha': { id: 52498, name: 'Slavia Praha' },
  'Slovan Bratislava': { id: 52797, name: 'Slovan Bratislava' },
  'Sparta Praha': { id: 50033, name: 'Sparta Praha' },
  'Spartak Moskva': { id: 50068, name: 'Spartak Moskva' },
  'Spartak Trnava': { id: 52904, name: 'Spartak Trnava' },
  'Sporting CP': { id: 50149, name: 'Sporting CP' },
  'Sporting Braga': { id: 52336, name: 'Braga' },
  'Standard Liège': { id: 52165, name: 'Standard' },
  'Steaua Bucureşti': { id: 50065, name: 'FCSB' },
  Trabzonspor: { id: 52731, name: 'Trabzonspor' },
  'Vitória Guimarães': { id: 50097, name: 'Vitória' },
  'Viktoria Plzeň': { id: 64388, name: 'Plzeň' },
  'Vorskla Poltava': { id: 62174, name: 'Vorskla' },
  'Wolfsberger AC': { id: 2603990, name: 'Wolfsberg' },
  'Zenit St. Petersburg': { id: 52826, name: 'Zenit' },
  'Zorya Lugansk': { id: 65130, name: 'Lugansk' },

  // UEFA
  Albania: { id: 'ALB', name: 'Albania' },
  Andorra: { id: 'AND', name: 'Andorra' },
  Austria: { id: 'AUT', name: 'Austria' },
  Armenia: { id: 'ARM', name: 'Armenia' },
  Azerbaijan: { id: 'AZE', name: 'Azerbaijan' },
  Belarus: { id: 'BLR', name: 'Belarus' },
  Belgium: { id: 'BEL', name: 'Belgium', url: 'belgien-team' },
  'Bosnia-Herzegovina': { id: 'BIH', name: 'Bosnia' },
  Bulgaria: { id: 'BUL', name: 'Bulgaria' },
  Croatia: { id: 'CRO', name: 'Croatia', url: 'kroatien-team' },
  Cyprus: { id: 'CYP', name: 'Cyprus' },
  'Czech Republic': { id: 'CZE', name: 'Czech' },
  Denmark: { id: 'DEN', name: 'Denmark', url: 'daenemark-team' },
  England: { id: 'ENG', name: 'England', url: 'england-team' },
  Estonia: { id: 'EST', name: 'Estonia' },
  'Faroe Islands': { id: 'FRO', name: 'Faroe Islands' },
  Finland: { id: 'FIN', name: 'Finland' },
  France: { id: 'FRA', name: 'France', url: 'frankreich-team' },
  Georgia: { id: 'GEO', name: 'Georgia' },
  Germany: { id: 'GER', name: 'Germany', url: 'deutschland-team' },
  Gibraltar: { id: 'GIB', name: 'Gibraltar' },
  Greece: { id: 'GRE', name: 'Greece' },
  Hungary: { id: 'HUN', name: 'Hungary' },
  Iceland: { id: 'ISL', name: 'Iceland', url: 'island-team' },
  Ireland: { id: 'IRL', name: 'Ireland' },
  Israel: { id: 'ISR', name: 'Israel' },
  Italy: { id: 'ITA', name: 'Italy' },
  Kazakhstan: { id: 'KAZ', name: 'Kazakhstan' },
  Kosovo: { id: 'KOS', fifa: 'KVX', name: 'Kosovo' },
  Latvia: { id: 'LVA', name: 'Latvia' },
  Liechtenstein: { id: 'LIE', name: 'Liechtenstein' },
  Lithuania: { id: 'LTU', name: 'Lithuania' },
  Luxembourg: { id: 'LUX', name: 'Luxembourg' },
  Macedonia: { id: 'MKD', name: 'Macedonia' },
  Malta: { id: 'MLT', name: 'Malta' },
  Moldova: { id: 'MDA', name: 'Moldova' },
  Montenegro: { id: 'MNE', name: 'Montenegro' },
  Netherlands: { id: 'NED', name: 'Netherlands' },
  'North Macedonia': { id: 'MKD', name: 'Macedonia' },
  'Northern Ireland': { id: 'NIR', name: 'Northern Ireland' },
  Norway: { id: 'NOR', name: 'Norway' },
  Poland: { id: 'POL', name: 'Poland', url: 'polen-team' },
  Portugal: { id: 'POR', name: 'Portugal', url: 'portugal-team' },
  Romania: { id: 'ROU', name: 'Romania' },
  Russia: { id: 'RUS', name: 'Russia', url: 'russland-team' },
  'San Marino': { id: 'SMR', name: 'San Marino' },
  Scotland: { id: 'SCO', name: 'Scotland' },
  Serbia: { id: 'SRB', name: 'Serbia', url: 'serbien-team' },
  Slovakia: { id: 'SVK', name: 'Slovakia' },
  Slovenia: { id: 'SVN', name: 'Slovenia' },
  Spain: { id: 'ESP', name: 'Spain', url: 'spanien-team' },
  Sweden: { id: 'SWE', name: 'Sweden', url: 'schweden-team' },
  Switzerland: { id: 'SUI', name: 'Switzerland', url: 'schweiz-team' },
  Turkey: { id: 'TUR', name: 'Turkey' },
  Ukraine: { id: 'UKR', name: 'Ukraine' },
  Wales: { id: 'WAL', name: 'Wales' },
  Yugoslavia: { id: 'YUG', name: 'Yugoslavia' },

  // CONMEBOL
  Argentina: { id: 'ARG', name: 'Argentina', url: 'argentinien-team' },
  Bolivia: { id: 'BOL', name: 'Bolivia' },
  Brazil: { id: 'BRA', name: 'Brazil', url: 'brasilien-team' },
  Chile: { id: 'CHI', name: 'Chile' },
  Colombia: { id: 'COL', name: 'Colombia', url: 'kolumbien-team' },
  Ecuador: { id: 'ECU', name: 'Ecuador' },
  Paraguay: { id: 'PAR', name: 'Paraguay' },
  Peru: { id: 'PER', name: 'Peru', url: 'peru-team' },
  Uruguay: { id: 'URU', name: 'Uruguay', url: 'uruguay-team' },
  Venezuela: { id: 'VEN', name: 'Venezuela' },

  // CONCACAF
  Anguilla: { id: 'AIA', name: 'Anguilla' },
  Aruba: { id: 'ARU', name: 'Aruba' },
  'Antigua & Barbuda': { id: 'ATG', name: 'Antigua & Barbuda' },
  Bahamas: { id: 'BAH', name: 'Bahamas' },
  Barbados: { id: 'BRB', name: 'Barbados' },
  Bermuda: { id: 'BER', name: 'Bermuda' },
  Belize: { id: 'BLZ', name: 'Belize' },
  'Br. Virgin Islands': { id: 'VGB', name: 'Virgin Islands' },
  Canada: { id: 'CAN', name: 'Canada' },
  'Cayman Islands': { id: 'CAY', name: 'Cayman Islands' },
  'Costa Rica': { id: 'CRC', name: 'Costa Rica', url: 'costa-rica-team' },
  Cuba: { id: 'CUB', name: 'Cuba' },
  Curaçao: { id: 'CUW', name: 'Curaçao' },
  Dominica: { id: 'DMA', name: 'Dominica' },
  'Dom. Republic': { id: 'DOM', name: 'Dominican Republic' },
  'El Salvador': { id: 'SLV', name: 'El Salvador' },
  // French Guyana (not on UEFA/FIFA)
  Grenada: { id: 'GRN', name: 'Grenada' },
  Guatemala: { id: 'GUA', name: 'Guatemala' },
  Guyana: { id: 'GUY', name: 'Guyana' },
  // Guadeloupe (not on UEFA/FIFA)
  Haiti: { id: 'HAI', name: 'Haiti' },
  Honduras: { id: 'HON', name: 'Honduras' },
  Jamaica: { id: 'JAM', name: 'Jamaica' },
  // Martinique (not on UEFA/FIFA)
  Mexico: { id: 'MEX', name: 'Mexico', url: 'mexiko-team' },
  Montserrat: { id: 'MSR', name: 'Montserrat' },
  Nicaragua: { id: 'NCA', name: 'Nicaragua' },
  Panama: { id: 'PAN', name: 'Panama', url: 'panama-team' },
  'Puerto Rico': { id: 'PUR', name: 'Puerto Rico' },
  'St. Kitts & Nevis': { id: 'SKN', name: 'St. Kitts & Nevis' },
  'St. Lucia': { id: 'LCA', name: 'St. Lucia' },
  'St. Vincent/Grenadines': { id: 'VIN', name: 'St. Vincent/Grenadines' },
  Suriname: { id: 'SUR', name: 'Suriname' },
  'Trinidad & Tobago': { id: 'TRI', name: 'Trinidad & Tobago' },
  'Turks & Caicos': { id: 'TCA', name: 'Turks & Caicos' },
  USA: { id: 'USA', name: 'USA' },
  'Virgin Islands': { id: 'VIR', name: 'Virgin Islands' },

  // CAF
  Algeria: { id: 'ALG', name: 'Algeria', url: 'algerien-team' },
  Angola: { id: 'ANG', name: 'Angola' },
  Benin: { id: 'BEN', name: 'Benin' },
  Botswana: { id: 'BOT', name: 'Botswana' },
  Burundi: { id: 'BDI', name: 'Burundi' },
  'Burkina Faso': { id: 'BFA', name: 'Burkina Faso' },
  'Cape Verde': { id: 'CPV', name: 'Cape Verde' },
  Cameroon: { id: 'CMR', name: 'Cameroon' },
  'Central Afr. Republic': { id: 'CTA', name: 'Central Africa' },
  Chad: { id: 'CHA', name: 'Chad' },
  Comoros: { id: 'COM', name: 'Comoros' },
  Congo: { id: 'CGO', name: 'Congo' },
  'Congo DR': { id: 'COD', name: 'Congo DR' },
  Djibouti: { id: 'DJI', name: 'Djibouti' },
  Egypt: { id: 'EGY', name: 'Egypt', url: 'aegypten-team' },
  Eritrea: { id: 'ERI', name: 'Eritrea' },
  Ethiopia: { id: 'ETH', name: 'Ethiopia' },
  'Equatorial Guinea': { id: 'EQG', name: 'Equatorial Guinea' },
  Gabon: { id: 'GAB', name: 'Gabon' },
  Gambia: { id: 'GAM', name: 'Gambia' },
  Ghana: { id: 'GHA', name: 'Ghana' },
  Guinea: { id: 'GUI', name: 'Guinea' },
  'Guinea-Bissau': { id: 'GNB', name: 'Guinea-Bissau' },
  'Ivory Coast': { id: 'CIV', name: "Côte d'Ivoire" },
  Kenya: { id: 'KEN', name: 'Kenya' },
  Lesotho: { id: 'LES', name: 'Lesotho' },
  Liberia: { id: 'LBR', name: 'Liberia' },
  Libya: { id: 'LBY', name: 'Libya' },
  Madagascar: { id: 'MAD', name: 'Madagascar' },
  Malawi: { id: 'MWI', name: 'Malawi' },
  Mali: { id: 'MLI', name: 'Mali' },
  Mauritania: { id: 'MTN', name: 'Mauritania' },
  Mauritius: { id: 'MRI', name: 'Mauritius' },
  Morocco: { id: 'MAR', name: 'Morocco', url: 'marokko-team' },
  Mozambique: { id: 'MOZ', name: 'Mozambique' },
  Namibia: { id: 'NAM', name: 'Namibia' },
  Niger: { id: 'NIG', name: 'Niger' },
  Nigeria: { id: 'NGA', name: 'Nigeria', url: 'nigeria-team' },
  Rwanda: { id: 'RWA', name: 'Rwanda' },
  'São Tomé and Príncipe': { id: 'STP', name: 'São Tomé and Príncipe' },
  'S�o Tom� and Pr�ncipe': { id: 'STP', name: 'São Tomé and Príncipe' },
  Senegal: { id: 'SEN', name: 'Senegal', url: 'senegal-team' },
  Seychelles: { id: 'SEY', name: 'Seychelles' },
  'Sierra Leone': { id: 'SLE', name: 'Sierra Leone' },
  Somalia: { id: 'SOM', name: 'Somalia' },
  'South Africa': { id: 'RSA', name: 'South Africa' },
  'South Sudan': { id: 'SSD', name: 'South Sudan' },
  Sudan: { id: 'SUD', fifa: 'SDN', name: 'Sudan' },
  Swaziland: { id: 'SWZ', name: 'Swaziland' },
  Tanzania: { id: 'TAN', name: 'Tanzania' },
  Togo: { id: 'TOG', name: 'Togo' },
  Tunisia: { id: 'TUN', name: 'Tunisia', url: 'tunesien-team' },
  Uganda: { id: 'UGA', name: 'Uganda' },
  Zambia: { id: 'ZAM', name: 'Zambia' },
  Zimbabwe: { id: 'ZIM', name: 'Zimbabwe' },

  // AFC
  Afghanistan: { id: 'AFG', name: 'Afghanistan' },
  Australia: { id: 'AUS', name: 'Australia', url: 'australien-team' },
  Bahrain: { id: 'BHR', name: 'Bahrain' },
  Bangladesh: { id: 'BAN', name: 'Bangladesh' },
  Bhutan: { id: 'BHU', name: 'Bhutan' },
  Brunei: { id: 'BRU', name: 'Brunei' },
  Cambodia: { id: 'CAM', name: 'Cambodia' },
  China: { id: 'CHN', name: 'China' },
  Guam: { id: 'GUM', name: 'Guam' },
  'Hong Kong': { id: 'HKG', name: 'Hong Kong' },
  India: { id: 'IND', name: 'India' },
  Indonesia: { id: 'IDN', name: 'Indonesia' },
  Iran: { id: 'IRN', name: 'Iran', url: 'iran-team' },
  Iraq: { id: 'IRQ', name: 'Iraq' },
  Japan: { id: 'JPN', name: 'Japan', url: 'japan-team' },
  Jordan: { id: 'JOR', name: 'Jordan' },
  Kuwait: { id: 'KUW', name: 'Kuwait' },
  Kyrgyzstan: { id: 'KGZ', name: 'Kyrgyzstan' },
  Laos: { id: 'LAO', name: 'Laos' },
  Lebanon: { id: 'LBN', name: 'Lebanon' },
  Macao: { id: 'MAC', name: 'Macau' },
  Malaysia: { id: 'MAS', name: 'Malyasia' },
  Maledives: { id: 'MDV', name: 'Maldives' },
  Mongolia: { id: 'MGL', fifa: 'MNG', name: 'Mongolia' },
  Myanmar: { id: 'MYA', name: 'Myanmar' },
  Nepal: { id: 'NEP', name: 'Nepal' },
  'North Korea': { id: 'PRK', name: 'North Korea' },
  Oman: { id: 'OMA', name: 'Oman' },
  Pakistan: { id: 'PAK', name: 'Pakistan' },
  Palestine: { id: 'PLE', name: 'Palestine' },
  Philippines: { id: 'PHI', name: 'Philippines' },
  Qatar: { id: 'QAT', name: 'QATAR', url: 'katar-team' },
  'Saudi Arabia': {
    id: 'KSA',
    name: 'Saudi Arabia',
    url: 'saudi-arabien-team'
  },
  Singapore: { id: 'SIN', name: 'Singapore' },
  'Sri Lanka': { id: 'SRI', name: 'Sri Lanka' },
  'South Korea': { id: 'KOR', name: 'South Korea', url: 'suedkorea-team' },
  Syria: { id: 'SYR', name: 'Syria' },
  Taiwan: { id: 'TPE', name: 'Taiwan' },
  Tajikistan: { id: 'TJK', name: 'Tajikistan' },
  Thailand: { id: 'THA', name: 'Thailand' },
  'Timor-Leste': { id: 'TLS', name: 'Timor-Leste' },
  Turkmenistan: { id: 'TKM', name: 'Turkmenistan' },
  'UA Emirates': { id: 'UAE', name: 'UAE' },
  Uzbekistan: { id: 'UZB', name: 'Uzbekistan' },
  Vietnam: { id: 'VIE', name: 'Vietnam' },
  Yemen: { id: 'YEM', name: 'Yemen' },

  // OFC
  'American Samoa': { id: 'ASA', name: 'American Samoa' },
  'Cook Islands': { id: 'COK', name: 'Cook Islands' },
  Fiji: { id: 'FIJ', name: 'Fiji' },
  'New Caledonia': { id: 'NCL', name: 'New Caledonia' },
  'New Zealand': { id: 'NZL', name: 'New Zealand' },
  'Papua New Guinea': { id: 'PNG', name: 'Papua New Guinea' },
  Samoa: { id: 'SAM', name: 'Samoa' },
  'Solomon Islands': { id: 'SOL', name: 'Solomon Islands' },
  Tahiti: { id: 'TAH', name: 'Tahiti' },
  Tonga: { id: 'TGA', name: 'Tonga' },
  Vanuatu: { id: 'VAN', name: 'Vanuatu' },

  // K League
  울산: { id: 101, name: '울산', url: '울산-team' },
  수원: { id: 102, name: '수원', url: '수원-team' },
  포항: { id: 103, name: '포항', url: '포항-team' },
  제주: { id: 104, name: '제주', url: '제주-team' },
  전북: { id: 105, name: '전북', url: '전북-team' },
  부산: { id: 106, name: '부산', url: '부산-team' },
  전남: { id: 107, name: '전남', url: '전남-team' },
  성남: { id: 108, name: '성남', url: '성남-team' },
  서울: { id: 109, name: '서울', url: '서울-team' },
  대전: { id: 110, name: '대전', url: '대전-team' },
  대구: { id: 117, name: '대구', url: '대구-team' },
  인천: { id: 118, name: '인천', url: '인천-team' },
  경남: { id: 120, name: '경남', url: '경남-team' },
  강원: { id: 121, name: '강원', url: '강원-team' },
  광주: { id: 122, name: '광주', url: '광주-team' },
  상주: { id: 123, name: '상주', url: '상주-team' },
  고양: { id: 125, name: '고양', url: '고양-team' },
  부천: { id: 126, name: '부천', url: '부천-team' },
  안양: { id: 127, name: '안양', url: '안양-team' },
  충주: { id: 128, name: '충주', url: '충주-team' },
  수원FC: { id: 129, name: '수원FC', url: '수원FC-team' },
  서울E: { id: 131, name: '서울E', url: '서울E-team' },
  안산: { id: 132, name: '안산', url: '안산-team' },
  아산: { id: 133, name: '아산', url: '아산-team' },

  // J League
  'Consadole Sapporo': { id: 200, name: '札幌' },
  'Vegalta Sendai': { id: 203, name: '仙台' },
  'Montedio Yamagata': { id: 204, name: '山形' },
  'Kashima Antlers': { id: 206, name: '鹿島' },
  'Urawa Red Diamonds': { id: 210, name: '浦和' },
  'Omiya Ardija': { id: 211, name: '大宮' },
  'Kashiwa Reysol': { id: 213, name: '柏' },
  'FC Tokyo': { id: 214, name: 'FC東京' },
  'Tokyo Verdy': { id: 215, name: '東京V' },
  'Kawasaki Frontale': { id: 217, name: '川崎F' },
  'Yokohama F. Marinos': { id: 218, name: '横浜FM', url: 'yokohama-f-marinos' },
  'Shonan Bellmare': { id: 222, name: '湘南' },
  'Ventforet Kofu': { id: 223, name: '甲府' },
  'Matsumoto Yamaga': { id: 225, name: '松本' },
  'Albirex Niigata': { id: 226, name: '新潟' },
  'Shimizu S-Pulse': { id: 229, name: '清水', url: 'shimizu-s-pulse' },
  'Júbilo Iwata': { id: 230, name: '磐田', url: 'jubilo-iwata' },
  'Nagoya Grampus': { id: 232, name: '名古屋' },
  'Gamba Osaka': { id: 235, name: 'G大阪' },
  'Cerezo Osaka': { id: 236, name: 'C大阪' },
  'Vissel Kobe': { id: 237, name: '神戸' },
  'Sanfrecce Hiroshima': { id: 240, name: '広島' },
  'Tokushima Vortis': { id: 242, name: '徳島' },
  'Avispa Fukuoka': { id: 244, name: '福岡' },
  'Sagan Tosu': { id: 246, name: '鳥栖' },
  'V-Varen Nagasaki': { id: 247, name: '長崎', url: 'v-varen-nagasaki' },
  'Oita Trinita': { id: 249, name: '大分' },

  // Super League
  'Guangzhou Evergrande': { id: 301, name: 'Guangzhou Evergrande' },
  'Jiāngsū Sūníng': { id: 302, name: 'Jiāngsū Sūníng', url: 'jiangsu-suning' },
  'Beijing Guoan': { id: 303, name: 'Beijing Guoan' },
  'Guizhou Renhe': { id: 304, name: 'Guizhou Renhe' },
  'Dalian Aerbin': { id: 305, name: 'Dalian Aerbin' },
  'Changchun Yatai': { id: 306, name: 'Changchun Yatai' },
  'Guangzhou R&F': { id: 307, name: 'Guangzhou R&F', url: 'guangzhou-r-f' },
  'Tianjin Teda': { id: 308, name: 'Tianjin Teda' },
  'Shanghai Shenhua': { id: 309, name: 'Shanghai Shenhua' },
  'Liáoníng Hóngyùn': {
    id: 310,
    name: 'Liáoníng Hóngyùn',
    url: 'liaoning-hongyn'
  },
  'Hangzhou Greentown': { id: 311, name: 'Hangzhou Greentown' },
  'Shandong Luneng': { id: 312, name: 'Shandong Luneng' },
  'Qingdao Jonoon': { id: 313, name: 'Qingdao Jonoon' },
  'Shanghai Shenxin': { id: 314, name: 'Shanghai Shenxin' },
  'Shanghai SIPG': { id: 315, name: 'Shanghai SIPG' },
  'Wuhan Zall FC': { id: 316, name: 'Wuhan Zall FC' },
  'Henan Jianye': { id: 317, name: 'Henan Jianye' },
  'Harbin Yiteng': { id: 318, name: 'Harbin Yiteng', url: 'zhejiang-yiteng' },
  'Chongqing Lifan': { id: 319, name: 'Chongqing Lifan' },
  'Shijiazhuang Ever Bright': { id: 320, name: 'Shijiazhuang Ever Bright' },
  'Yanbian FC': { id: 321, name: 'Yanbian FC' },
  'Hebei China Fortune FC': { id: 322, name: 'Hebei China Fortune FC' },
  'Tianjin Quanjian FC': { id: 323, name: 'Tianjin Quanjian FC' },
  'Guizhou Hengfeng': { id: 324, name: 'Guizhou Hengfeng' },
  'Dalian Yifang FC': { id: 325, name: 'Dalian Yifang FC' },
  'Beijing Renhe FC': { id: 326, name: 'Beijing Renhe FC' },
  'Shenzhen FC': { id: 327, name: 'Shenzhen FC' },
  'Tianjin Tianhai': { id: 328, name: 'Tianjin Tianhai' },

  // Australia
  'Central Coast Mariners': { id: 'f8164', name: 'Central Coast' },
  'Melbourne Victory': { id: 'f6230', name: 'Melbourne' },
  'Sydney FC': { id: 'f10164', name: 'Sydney FC' },
  'Western Sydney Wanderers': { id: 'f323834', name: 'Western Sydney' },

  // Vietnam
  'Buriram United': { id: 'f165243', name: 'Buriram' },

  // Thailand
  'Muangthong United': { id: 'f165251', name: 'Muangthong' },

  // Hong Kong
  'Kitchee SC': { id: 'f165165', name: 'Kitchee' },

  // Malaysia
  'Johor Darul Ta’zim': { id: 'f165228', name: 'Johor' },

  // Saudi Arabia
  'Al Ahli SFC': { id: 'f2530', name: 'Al-Ahli' },
  'Al Hilal': { id: 'f2529', name: 'Al-Hilal' },
  'Al Ittihad': { id: 'f8577', name: 'Al-Ittihad' },
  'Al Nassr': { id: 'f101918', name: 'Al-Nassr' },
  'Al Shabab': { id: 'f101916', name: 'Al-Shabab' },

  // Qatar
  'Al Duhail SC': { id: 'f203826', name: 'Al-Duhail' },
  'Al Gharafa': { id: 'f101897', name: 'Al-Gharafa' },
  'Al Rayyan': { id: 'f101898', name: 'Al-Rayyan' },
  'Al Sadd': { id: 'f101895', name: 'Al-Sadd' },
  'Lekhwiya SC': { id: 'f203826', name: 'Al-Duhail' },

  // UAE
  'Al Ahli Dubai': { id: 'f102119', name: 'Al-Ahli Dubai' },
  'Al Ain FC': { id: 'f102117', name: 'Al-Ain' },
  'Al Jazira Club': { id: 'f102101', name: 'Al-Jazira' },
  'Al Nasr SC': { id: 'f102123', name: 'Al-Nasr' },
  'Al Wahda': { id: 'f102122', name: 'Al-Wahda' },
  'Al Wasl': { id: 'f102111', name: 'Al-Wasl' },

  // Iran
  Esteghlal: { id: 'f101614', name: 'Esteghlal' },
  'Esteghlal Khuzestan': { id: 'f394619', name: 'Esteghlal Khuzestan' },
  'FC Zob Ahan': { id: 'f101618', name: 'Zob Ahan' },
  'Foolad FC': { id: 'f139914', name: 'Foolad' },
  'Naft Tehran FC': { id: 'f207882', name: 'Naft Tehran' },
  'Tractor Sazi': { id: 'f176352', name: 'Tractor Sazi' },
  Persepolis: { id: 'f101610', name: 'Persepolis' },

  // Uzbekistan
  'Lokomotiv Tashkent': { id: 'f102167', name: 'L. Tashkent' },
  'Nasaf Qarshi': { id: 'f102153', name: 'Nasaf' },
  'Pakhtakor Tashkent': { id: 'f102141', name: 'P. Tashkent' },

  // Iraq
  'Al Zawraa': { id: 'f101659', name: 'Al-Zawraa' }
};

export default teams;
