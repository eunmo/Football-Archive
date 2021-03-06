import clubs from './clubs';
import afc from './afc';

const competitions = {
  'World Cup': {
    order: 1,
    name: 'World Cup',
    sh: 'WC',
    type: 'H',
    group: 0,
    year: 'single',
    times: [2002, 2006, 2010, 2014, 2018]
  },
  'Confederations Cup': {
    order: 3,
    name: 'Confed Cup',
    sh: 'CC',
    type: 'H',
    group: 0,
    year: 'single',
    times: [2001, 2003, 2005, 2009, 2013, 2017]
  },
  'CONCACAF Confed Cup Playoff': {
    order: 5,
    name: 'Confed Cup Qualifiers',
    sh: 'CCQ',
    type: 'H',
    group: 1,
    year: 'single'
  },
  EURO: {
    order: 2,
    name: 'EURO',
    sh: 'EU',
    type: 'H',
    group: 1,
    times: [2000, 2004, 2008, 2012, 2016, 2020],
    year: 'single'
  },
  'Copa América': {
    order: 2,
    name: 'Copa América',
    sh: 'SA',
    type: 'H',
    group: 1,
    times: [2001, 2004, 2007, 2011, 2015, 2016, 2019, 2020],
    year: 'single'
  },
  'Gold Cup': {
    order: 2,
    name: 'Gold Cup',
    sh: 'NA',
    type: 'H',
    group: 1,
    times: [2000, 2002, 2003, 2005, 2007, 2009, 2011, 2013, 2015, 2017, 2019],
    year: 'single'
  },
  'Africa Cup': {
    order: 2,
    name: 'Africa Cup',
    sh: 'AF',
    type: 'H',
    group: 1,
    times: [2000, 2002, 2004, 2006, 2008, 2010, 2012, 2013, 2015, 2017, 2019],
    year: 'single'
  },
  'Asian Cup': {
    order: 2,
    name: 'Asian Cup',
    sh: 'AS',
    type: 'H',
    group: 1,
    times: [2000, 2004, 2007, 2011, 2015, 2019],
    year: 'single'
  },
  'WC Qualifiers Play-offs': {
    order: 4,
    name: 'World Cup Qualifiers PO',
    sh: 'WCQ',
    type: '2',
    group: 0,
    times: [2017],
    year: 'single'
  },
  'World Cup Qualifiers PO': { times: [2017], url: 'WC-Qualifiers-Play-offs' },
  'WC Qualifiers Europe': {
    order: 4,
    name: 'WC Qualifiers Europe',
    sh: 'WCQ',
    type: 'Q',
    group: 0,
    times: [2016, 2017],
    spans: [2017]
  },
  'WC Qualifiers South America': {
    order: 4,
    name: 'WC Qualifiers South America',
    sh: 'WCQ',
    type: 'Q',
    group: 0,
    times: [2015, 2016, 2017],
    spans: [2017]
  },
  'WC Qualifiers CONCACAF': {
    order: 4,
    name: 'WC Qualifiers CONCACAF',
    sh: 'WCQ',
    type: 'Q',
    group: 0,
    times: [2015, 2016, 2017],
    spans: [2017]
  },
  'WC Qualifiers Africa': {
    order: 4,
    name: 'WC Qualifiers Africa',
    sh: 'WCQ',
    type: 'Q',
    group: 0,
    times: [2015, 2016, 2017],
    spans: [2017]
  },
  'WC Qualifiers Asia': {
    order: 4,
    name: 'WC Qualifiers Asia',
    sh: 'WCQ',
    type: 'Q',
    group: 0,
    times: [2015, 2016, 2017, 2019, 2020],
    spans: [2017, 2020]
  },
  'EURO Qualifiers': {
    order: 5,
    name: 'EURO Qualifiers',
    sh: 'EUQ',
    type: 'Q',
    group: 1,
    times: [2014, 2015, 2019, 2020],
    spans: [2015, 2020]
  },
  'Gold Cup Quali.': {
    order: 5,
    name: 'Gold Cup Qualifiers',
    sh: 'NAQ',
    type: '2',
    group: 1
  },
  'Copa America Qualifiers': {
    order: 5,
    name: 'Copa América Qualifiers',
    sh: 'SAQ',
    type: '2',
    group: 1
  },
  'Africa Cup Qual.': {
    order: 2,
    name: 'Africa Cup Qualifiers',
    sh: 'AFQ',
    type: 'Q',
    group: 1,
    times: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
    url: 'Africa-Cup-Qual',
    spans: [2014, 2016, 2019, 2020]
  },
  'Africa Cup Qualifiers': {
    times: [2014, 2015, 2016, 2017, 2018, 2019],
    url: 'Africa-Cup-Qual'
  },
  'Asian Cup Qual.': {
    order: 2,
    name: 'Asian Cup Qualifiers',
    sh: 'ASQ',
    type: 'Q',
    group: 1,
    times: [2013, 2014],
    url: 'Asian-Cup-Qual',
    spans: [2014]
  },
  'Asian Cup Qualifiers': { times: [2013, 2014], url: 'Asian-Cup-Qual' },
  'Nations League A': {
    order: 6,
    name: 'Nations League A',
    sh: 'NL',
    type: 'Q',
    group: 1,
    times: [2018, 2019],
    spans: [2019]
  },
  'Nations League B': {
    order: 6,
    name: 'Nations League B',
    sh: 'NL',
    type: 'Q',
    group: 1,
    times: [2018, 2019],
    spans: [2018]
  },
  'Nations League C': {
    order: 6,
    name: 'Nations League C',
    sh: 'NL',
    type: 'Q',
    group: 1,
    times: [2018, 2019],
    spans: [2018]
  },
  'Nations League': {
    name: 'Nations League',
    sh: 'NL',
    times: [2018, 2019],
    spans: [2019]
  },
  'CONCACAF Nations League A': {
    order: 6,
    name: 'CONCACAF Nations League A',
    sh: 'NL',
    type: 'Q',
    group: 1,
    times: [2019, 2020],
    spans: [2019]
  },
  Friendlies: { order: 7, name: 'Friendlies', sh: 'Fr', type: '2', group: 2 },

  'Champions League': {
    order: 2,
    name: 'Champions League',
    sh: 'UCL',
    type: '2',
    group: 0,
    years: clubs.years
  },
  'Champions League Qual.': {
    order: 2,
    name: 'Champions League Qualifiers',
    sh: 'UCL',
    type: '2',
    group: 0
  },
  'Europa League': {
    order: 3,
    name: 'Europa League',
    sh: 'UEL',
    type: '2',
    group: 0,
    years: clubs.years
  },
  'Europa League Qual.': {
    order: 3,
    name: 'Europa League Qualifiers',
    sh: 'UEL',
    type: '2',
    group: 0
  },
  'UI-Cup': { order: 3, name: 'Intertoto Cup', sh: 'UIC', type: '2', group: 0 },
  'Club World Cup': {
    order: 5,
    name: 'Club World Cup',
    sh: 'CWC',
    type: 'H',
    group: 0
  },
  'UEFA-Supercup': {
    order: 4,
    name: 'UEFA Supercup',
    sh: 'USC',
    type: 'H',
    group: 0
  },
  'UEFA Super Cup': {
    order: 4,
    name: 'UEFA Supercup',
    sh: 'USC',
    type: 'H',
    group: 0
  },
  'Premier League': {
    order: 1,
    name: 'Premier League',
    sh: 'L',
    type: 'L',
    group: 1,
    years: clubs.years,
    country: 'England'
  },
  'Primera División': {
    order: 1,
    name: 'Primera División',
    sh: 'L',
    type: 'L',
    group: 1,
    url: 'Primera-Division',
    years: clubs.years,
    country: 'Spain'
  },
  Bundesliga: {
    order: 1,
    name: 'Bundesliga',
    sh: 'L',
    type: 'L',
    group: 1,
    years: clubs.years,
    country: 'Germany'
  },
  'Serie A': {
    order: 1,
    name: 'Serie A',
    sh: 'L',
    type: 'L',
    group: 1,
    years: clubs.years,
    country: 'Italy'
  },
  'Ligue 1': {
    order: 1,
    name: 'Ligue 1',
    sh: 'L',
    type: 'L',
    group: 1,
    years: clubs.years,
    country: 'France'
  },
  'FA Cup': {
    order: 6,
    name: 'FA Cup',
    sh: 'Cup',
    type: '2',
    group: 2,
    years: clubs.years,
    country: 'England'
  },
  'Copa del Rey': {
    order: 6,
    name: 'Copa del Rey',
    sh: 'Cup',
    type: '2',
    group: 2,
    years: clubs.years,
    country: 'Spain'
  },
  'DFB-Pokal': {
    order: 6,
    name: 'DFB-Pokal',
    sh: 'Cup',
    type: '2',
    group: 2,
    years: clubs.years,
    country: 'Germany'
  },
  'Coppa Italia': {
    order: 6,
    name: 'Coppa Italia',
    sh: 'Cup',
    type: '2',
    group: 2,
    years: clubs.years,
    country: 'Italy'
  },
  'Coupe de France': {
    order: 6,
    name: 'Coupe de France',
    sh: 'Cup',
    type: '2',
    group: 2,
    years: clubs.years,
    country: 'France'
  },
  'League Cup': {
    order: 7,
    name: 'League Cup',
    sh: 'LC',
    type: '2',
    group: 2,
    years: clubs.years,
    country: 'England'
  },
  'Coupe de la Ligue': {
    order: 7,
    name: 'Coupe de la Ligue',
    sh: 'LC',
    type: '2',
    group: 2,
    years: clubs.years,
    country: 'France'
  },
  'FA Community Shield': {
    order: 8,
    name: 'Community Shield',
    sh: 'CS',
    type: 'H',
    group: 2,
    country: 'England'
  },
  Supercopa: {
    order: 8,
    name: 'Supercopa',
    sh: 'CS',
    type: '2',
    group: 2,
    country: 'Spain'
  },
  Supercup: {
    order: 8,
    name: 'Supercup',
    sh: 'CS',
    type: 'H',
    group: 2,
    country: 'Germany'
  },
  Supercoppa: {
    order: 8,
    name: 'Supercoppa',
    sh: 'CS',
    type: 'H',
    group: 2,
    country: 'Italy'
  },
  'Trophée des Champions': {
    order: 8,
    name: 'Trophée des Champions',
    sh: 'CS',
    type: 'H',
    group: 2,
    country: 'France'
  },
  'Relegation Bundesliga': {
    order: 9,
    name: 'Bundesliga Relegation',
    sh: 'R',
    type: '2',
    group: 1,
    country: 'Germany'
  },
  'Relegation Ligue 1': {
    order: 9,
    name: 'Ligue 1 Relegation',
    sh: 'R',
    type: '2',
    group: 1,
    country: 'France'
  },

  'AFC Champions League': {
    order: 2,
    name: 'AFC Champions League',
    sh: 'ACL',
    type: '2',
    group: 0,
    years: afc.years,
    year: 'single'
  },
  'AFC Champions League Quali.': {
    order: 2,
    name: 'AFC Champions League Qualifiers',
    sh: 'ACL',
    type: '2',
    group: 0
  },
  'K League 1': {
    order: 1,
    name: 'K League 1',
    sh: 'K1',
    type: '4',
    group: 1,
    years: afc.years,
    country: 'South Korea',
    year: 'single'
  },
  'K League 2': {
    order: 3,
    name: 'K League 2',
    sh: 'K2',
    type: '4',
    group: 1,
    years: afc.years,
    country: 'South Korea',
    year: 'single'
  },
  'J1 League 2015 Playoff': {
    order: 8,
    name: 'J League PO',
    sh: 'PO',
    type: '2',
    group: 1,
    country: 'Japan'
  },
  'J1 League 2016 Meisterschaft': {
    order: 8,
    name: 'J League PO',
    sh: 'PO',
    type: '2',
    group: 1,
    country: 'Japan'
  },
  'J1 League': {
    order: 1,
    name: 'J1 League',
    sh: 'L',
    type: 'L',
    group: 1,
    years: afc.years,
    country: 'Japan',
    year: 'single'
  },
  'Super League': {
    order: 1,
    name: 'Super League',
    sh: 'L',
    type: 'L',
    group: 1,
    years: afc.years,
    country: 'China',
    year: 'single'
  },
  'KFA Cup': {
    order: 6,
    name: 'KFA Cup',
    sh: 'Cup',
    type: '2',
    group: 2,
    years: afc.years,
    times: [],
    country: 'South Korea',
    year: 'single'
  },
  "Emperor's Cup": {
    order: 6,
    name: "Emperor's Cup",
    sh: 'Cup',
    type: '2',
    group: 2,
    years: { min: 2015, max: afc.years.max },
    country: 'Japan',
    year: 'single'
  },
  'CFA Cup': {
    order: 6,
    name: 'CFA Cup',
    sh: 'Cup',
    type: '2',
    group: 2,
    years: { min: 2014, max: afc.years.max },
    country: 'China',
    year: 'single'
  },
  'J League Cup': {
    order: 7,
    name: 'J League Cup',
    sh: 'LC',
    type: '2',
    group: 2,
    years: afc.years,
    country: 'Japan',
    year: 'single'
  },
  'Japanese Super Cup': {
    order: 9,
    name: 'Japanese Super Cup',
    sh: 'CS',
    type: 'H',
    group: 2,
    country: 'Japan'
  },
  'CFA Super Cup': {
    order: 9,
    name: 'CFA Super Cup',
    sh: 'CS',
    type: 'H',
    group: 2,
    country: 'China'
  },
  'K League Relegation': {
    order: 10,
    name: 'K League Relegation',
    sh: 'R',
    type: '2',
    group: 1,
    country: 'South Korea'
  },
  'J1 League Relegation Playoffs': {
    order: 10,
    name: 'J League Relegation',
    sh: 'R',
    type: '2',
    group: 1,
    country: 'Japan'
  }
};

export default competitions;
