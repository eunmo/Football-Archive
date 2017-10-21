const seasons = {
	countries: ['ENG', 'ESP', 'GER'], //, 'ITA', 'FRA'],
	seasons: {
		ENG: {
			league: 'Premier-League',
			years: [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009],
			teams: {
				2018: [
					'Chelsea FC',
					'Tottenham Hotspur',
					'Manchester City',
					'Liverpool FC',
					'Arsenal FC',
					'Manchester United',
					'Everton FC',
					'Southampton FC',
					'AFC Bournemouth',
					'West Bromwich Albion',
					'West Ham United',
					'Leicester City',
					'Stoke City',
					'Crystal Palace',
					'Swansea City',
					'Burnley FC',
					'Watford FC',
					'Newcastle United',
					'Brighton & Hove Albion',
					'Huddersfield Town',
					],
				2017: [
					'Leicester City',
					'Arsenal FC',
					'Tottenham Hotspur',
					'Manchester City',
					'Manchester United',
					'Southampton FC',
					'West Ham United',
					'Liverpool FC',
					'Stoke City',
					'Chelsea FC',
					'Everton FC',
					'Swansea City',
					'Watford FC',
					'West Bromwich Albion',
					'Crystal Palace',
					'AFC Bournemouth',
					'Sunderland AFC',
					'Burnley FC',
					'Middlesbrough FC',
					'Hull City',
					],
				2016: [
					'Chelsea FC',
					'Manchester City',
					'Arsenal FC',
					'Manchester United',
					'Tottenham Hotspur',
					'Liverpool FC',
					'Southampton FC',
					'Swansea City',
					'Stoke City',
					'Crystal Palace',
					'Everton FC',
					'West Ham United',
					'West Bromwich Albion',
					'Leicester City',
					'Newcastle United',
					'Sunderland AFC',
					'Aston Villa',
					'AFC Bournemouth',
					'Watford FC',
					'Norwich City',
					],
				2015: [
					'Manchester City',
					'Liverpool FC',
					'Chelsea FC',
					'Arsenal FC',
					'Everton FC',
					'Tottenham Hotspur',
					'Manchester United',
					'Southampton FC',
					'Stoke City',
					'Newcastle United',
					'Crystal Palace',
					'Swansea City',
					'West Ham United',
					'Sunderland AFC',
					'Aston Villa',
					'Hull City',
					'West Bromwich Albion',
					'Leicester City',
					'Burnley FC',
					'Queens Park Rangers',
					],
				2014: [
					'Manchester United',
					'Manchester City',
					'Chelsea FC',
					'Arsenal FC',
					'Tottenham Hotspur',
					'Everton FC',
					'Liverpool FC',
					'West Bromwich Albion',
					'Swansea City',
					'West Ham United',
					'Norwich City',
					'Fulham FC',
					'Stoke City',
					'Southampton FC',
					'Aston Villa',
					'Newcastle United',
					'Sunderland AFC',
					'Cardiff City',
					'Hull City',
					'Crystal Palace',
					],
				2013: [
					'Manchester City',
					'Manchester United',
					'Arsenal FC',
					'Tottenham Hotspur',
					'Newcastle United',
					'Chelsea FC',
					'Everton FC',
					'Liverpool FC',
					'Fulham FC',
					'West Bromwich Albion',
					'Swansea City',
					'Norwich City',
					'Sunderland AFC',
					'Stoke City',
					'Wigan Athletic',
					'Aston Villa',
					'Queens Park Rangers',
					'Reading FC',
					'Southampton FC',
					'West Ham United',
					],
				2012: [
					'Manchester United',
					'Chelsea FC',
					'Manchester City',
					'Arsenal FC',
					'Tottenham Hotspur',
					'Liverpool FC',
					'Everton FC',
					'Fulham FC',
					'Aston Villa',
					'Sunderland AFC',
					'West Bromwich Albion',
					'Newcastle United',
					'Stoke City',
					'Bolton Wanderers',
					'Blackburn Rovers',
					'Wigan Athletic',
					'Wolverhampton Wanderers',
					'Queens Park Rangers',
					'Norwich City',
					'Swansea City',
					],
				2011: [
					'Chelsea FC',
					'Manchester United',
					'Arsenal FC',
					'Tottenham Hotspur',
					'Manchester City',
					'Aston Villa',
					'Liverpool FC',
					'Everton FC',
					'Birmingham City',
					'Blackburn Rovers',
					'Stoke City',
					'Fulham FC',
					'Sunderland AFC',
					'Bolton Wanderers',
					'Wolverhampton Wanderers',
					'Wigan Athletic',
					'West Ham United',
					'Newcastle United',
					'West Bromwich Albion',
					'Blackpool FC',
					],
				2010: [
					'Manchester United',
					'Liverpool FC',
					'Chelsea FC',
					'Arsenal FC',
					'Everton FC',
					'Aston Villa',
					'Fulham FC',
					'Tottenham Hotspur',
					'West Ham United',
					'Manchester City',
					'Wigan Athletic',
					'Stoke City',
					'Bolton Wanderers',
					'Portsmouth FC',
					'Blackburn Rovers',
					'Sunderland AFC',
					'Hull City',
					'Wolverhampton Wanderers',
					'Birmingham City',
					'Burnley FC',
					],
				2009: [
					'Manchester United',
					'Chelsea FC',
					'Arsenal FC',
					'Liverpool FC',
					'Everton FC',
					'Aston Villa',
					'Blackburn Rovers',
					'Portsmouth FC',
					'Manchester City',
					'West Ham United',
					'Tottenham Hotspur',
					'Newcastle United',
					'Middlesbrough FC',
					'Wigan Athletic',
					'Sunderland AFC',
					'Bolton Wanderers',
					'Fulham FC',
					'West Bromwich Albion',
					'Stoke City',
					'Hull City',
					]
			}
		},
		ESP: {
			league: 'Primera-División',
			years: [2018],
			teams: {
				2018: [
					'Real Madrid',
					'FC Barcelona',
					'Atlético Madrid',
					'Sevilla FC',
					'Villarreal CF',
					'Real Sociedad',
					'Athletic Bilbao',
					'Espanyol Barcelona',
					'CD Alavés',
					'SD Eibar',
					'Málaga CF',
					'Valencia CF',
					'Celta Vigo',
					'UD Las Palmas',
					'Real Betis',
					'Deportivo La Coruña',
					'CD Leganés',
					'Levante UD',
					'Girona FC',
					'Getafe CF',
				]
			}
		},
		GER: {
			league: 'Bundesliga',
			years: [2018],
			teams: {
				2018: [
					'Bayern München',
					'RB Leipzig',
					'Borussia Dortmund',
					'1899 Hoffenheim',
					'1. FC Köln',
					'Hertha BSC',
					'SC Freiburg',
					'Werder Bremen',
					'Bor. Mönchengladbach',
					'FC Schalke 04',
					'Eintracht Frankfurt',
					'Bayer Leverkusen',
					'FC Augsburg',
					'Hamburger SV',
					'1. FSV Mainz 05',
					'VfL Wolfsburg',
					'VfB Stuttgart',
					'Hannover 96',
				]
			}
		},
		ITA: {
			years: [2018],
			teams: {
				2018: [
					'AC Milan',
				]
			}
		},
		FRA: {
			years: [2018],
			teams: {
				2018: [
					'Olympique Marseille',
				]
			}
		}
	}
};

export default seasons;
