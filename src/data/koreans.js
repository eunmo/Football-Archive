const koreans = {
	2019: [
		{team: 'Tottenham Hotspur', name: '손흥민', country: 'ENG'},
		{team: 'Newcastle United', name: '기성용', country: 'ENG'},
		{team: 'Valencia CF', name: '이강인', country: 'ESP'},
		{team: 'Girona FC', name: '백승호', country: 'ESP'},
		{team: 'Bayern München', name: '정우영', country: 'GER'},
		{team: 'FC Augsburg', name: '구자철', country: 'GER', more: ['지동원']},
		{team: 'Dijon FCO', name: '권창훈', country: 'FRA'},
		{team: 'Stade Reims', name: '석현준', country: 'FRA'},
	],
	2018: [
		{team: 'Tottenham Hotspur', name: '손흥민', country: 'ENG'},
		{team: 'Swansea City', name: '기성용', country: 'ENG'},
		{team: 'Crystal Palace', name: '이청용', country: 'ENG'},
		{team: 'FC Augsburg', name: '구자철', country: 'GER', more: ['지동원']},
		{team: 'Hellas Verona', name: '이승우', country: 'ITA'},
		{team: 'Dijon FCO', name: '권창훈', country: 'FRA'},
		{team: 'ESTAC Troyes', name: '석현준', country: 'FRA'},
	],
	2017: [
		{team: 'Tottenham Hotspur', name: '손흥민', country: 'ENG'},
		{team: 'Swansea City', name: '기성용', country: 'ENG'},
		{team: 'Crystal Palace', name: '이청용', country: 'ENG'},
		{team: 'Borussia Dortmund', name: '박주호', country: 'GER'},
		{team: 'FC Augsburg', name: '구자철', country: 'GER', more: ['지동원']},
	],
	2016: [
		{team: 'Tottenham Hotspur', name: '손흥민', country: 'ENG'},
		{team: 'Swansea City', name: '기성용', country: 'ENG'},
		{team: 'Crystal Palace', name: '이청용', country: 'ENG'},
		{team: 'FC Augsburg', name: '구자철', country: 'GER', more: ['지동원', '홍정호']},
		{team: 'Borussia Dortmund', name: '박주호', country: 'GER'},
		{team: '1899 Hoffenheim', name: '김진수', country: 'GER'},
	],
	2015: [
		{team: 'Swansea City', name: '기성용', country: 'ENG'},
		{team: 'Queens Park Rangers', name: '윤석영', country: 'ENG'},
		{team: 'Bayer Leverkusen', name: '손흥민', country: 'GER'},
		{team: '1. FSV Mainz 05', name: '구자철', country: 'GER', more: ['박주호']},
		{team: 'FC Augsburg', name: '지동원', country: 'GER', more: ['홍정호']},
		{team: '1899 Hoffenheim', name: '김진수', country: 'GER'},
	],
	2014: [
		{team: 'Arsenal FC', name: '박주영', country: 'ENG'},
		{team: 'Sunderland AFC', name: '기성용', country: 'ENG'},
		{team: 'Cardiff City', name: '김보경', country: 'ENG'},
		{team: 'UD Almería', name: '김영규', country: 'ESP'},
		{team: 'Bayer Leverkusen', name: '손흥민', country: 'GER', more: ['류승우']},
		{team: 'VfL Wolfsburg', name: '구자철', country: 'GER'},
		{team: '1. FSV Mainz 05', name: '박주호', country: 'GER'},
		{team: 'FC Augsburg', name: '지동원', country: 'GER', more: ['홍정호']},
	],
	2013: [
		{team: 'Swansea City', name: '기성용', country: 'ENG'},
		{team: 'Queens Park Rangers', name: '박지성', country: 'ENG'},
		{team: 'Celta Vigo', name: '박주영', country: 'ESP'},
		{team: 'FC Augsburg', name: '구자철', country: 'GER', more: ['지동원']},
		{team: 'Hamburger SV', name: '손흥민', country: 'GER'},
		{team: 'SpVgg Greuther Fürth', name: '박정빈', country: 'GER'},
		{team: 'Fortuna Düsseldorf', name: '차두리', country: 'GER'},
	],
	2012: [
		{team: 'Manchester United', name: '박지성', country: 'ENG'},
		{team: 'Arsenal FC', name: '박주영', country: 'ENG'},
		{team: 'Sunderland AFC', name: '지동원', country: 'ENG'},
		{team: 'Bolton Wanderers', name: '이청용', country: 'ENG'},
		{team: 'Hamburger SV', name: '손흥민', country: 'GER'},
		{team: 'VfL Wolfsburg', name: '구자철', country: 'GER'},
		{team: 'FC Augsburg', name: '구자철', country: 'GER'},
		{team: 'AS Nancy', name: '정조국', country: 'FRA'},
	],
	2011: [
		{team: 'Manchester United', name: '박지성', country: 'ENG'},
		{team: 'Bolton Wanderers', name: '이청용', country: 'ENG'},
		{team: 'Hamburger SV', name: '손흥민', country: 'GER'},
		{team: 'VfL Wolfsburg', name: '구자철', country: 'GER'},
		{team: 'AJ Auxerre', name: '정조국', country: 'FRA'},
		{team: 'AS Monaco', name: '박주영', country: 'FRA'},
		{team: 'Valenciennes FC', name: '남태희', country: 'FRA'},
	],
	2010: [
		{team: 'Manchester United', name: '박지성', country: 'ENG'},
		{team: 'Fulham FC', name: '설기현', country: 'ENG'},
		{team: 'Bolton Wanderers', name: '이청용', country: 'ENG'},
		{team: 'SC Freiburg', name: '차두리', country: 'GER'},
		{team: 'AS Monaco', name: '박주영', country: 'FRA'},
		{team: 'Valenciennes FC', name: '남태희', country: 'FRA'},
	],
	2009: [
		{team: 'Manchester United', name: '박지성', country: 'ENG'},
		{team: 'Wigan Athletic', name: '조원희', country: 'ENG'},
		{team: 'Fulham FC', name: '설기현', country: 'ENG'},
		{team: 'West Bromwich Albion', name: '김두현', country: 'ENG'},
		{team: 'Borussia Dortmund', name: '이영표', country: 'ENG'},
		{team: 'AS Monaco', name: '박주영', country: 'FRA'},
	],
	2008: [
		{team: 'Manchester United', name: '박지성', country: 'ENG'},
		{team: 'Tottenham Hotspur', name: '이영표', country: 'ENG'},
		{team: 'Middlesbrough FC', name: '이동국', country: 'ENG'},
		{team: 'Fulham FC', name: '설기현', country: 'ENG'},
		{team: 'FC Metz', name: '어경준', country: 'FRA'},
	],
	2007: [
		{team: 'Manchester United', name: '박지성', country: 'ENG'},
		{team: 'Tottenham Hotspur', name: '이영표', country: 'ENG'},
		{team: 'Middlesbrough FC', name: '이동국', country: 'ENG'},
		{team: 'Reading FC', name: '설기현', country: 'ENG'},
		{team: 'Racing Santander', name: '이호진', country: 'ESP'},
		{team: '1. FSV Mainz 05', name: '차두리', country: 'GER'},
	],
	2006: [
		{team: 'Manchester United', name: '박지성', country: 'ENG'},
		{team: 'Tottenham Hotspur', name: '이영표', country: 'ENG'},
		{team: 'MSV Duisburg', name: '안정환', country: 'GER'},
		{team: 'Eintracht Frankfurt', name: '차두리', country: 'GER'},
		{team: 'FC Metz', name: '안정환', country: 'FRA', more: ['강진욱']},
	],
	map: {
		'Bit-garam Yoon': '윤빛가람',
		'Bo-kyung Kim': '김보경',
		'Bum-young Lee': '이범영',
		'Chae-min Lim': '이채민',
		'Chan-dong Lee': '이찬동',
		'Chang-hoon Kwon': '권창훈',
		'Chang-soo Kim': '김창수',
		'Chu-young Park': '박주영',
		'Chul Hong': '홍철',
		'Chung-yong Lee': '이청용',
		'Dae-ho Kim': '김대호',
		'Dae-sung Ha': '하대성',
		'Dong-gook Lee': '이동국',
		'Dong-won Ji': '지동원',
		'Du-ri Cha': '차두리',
		'Heung-min Son': '손흥민',
		'Ho Lee': '이호',
		'Hyun-soo Jang': '장현수',
		'Ja-cheol Koo': '구자철',
		'Jeong-ho Hong': '홍정호',
		'Jin-hyeon Kim': '김진현',
		'Jin-hyung Song': '송진현',
		'Jin-po Park': '박진포',
		'Jin-su Kim': '김진수',
		'Jong-woo Park': '박종우',
		'Joo-ho Park': '박주호',
		'Ju-young Kim': '김주영',
		'Kee-hee Kim': '김기희',
		'Keun-ho Lee': '이근호',
		'Ki-hun Yeom': '염기훈',
		'Kook-young Han': '한국영',
		'Kyo-won Han': '한교원',
		'Min-soo Kang': '강민수',
		'Min-woo Kim': '김민우',
		'Myung-joo Lee': '이명주',
		'Seok-ho Hwang': '황석호',
		'Seung-gyu Kim': '김승규',
		'Seung-ki Lee': '김승기',
		'Shin-wook Kim': '김신욱',
		'Suk-Young Yun': '윤석영',
		'Suk-young Yun': '윤석영',
		'Sung-ryong Jung': '정성룡',
		'Sung-yueng Ki': '기성용',
		'Tae-hee Nam': '남태희',
		'Tae-hwan Kim': '김태환',
		'Tae-hwi Kwak': '곽태휘',
		'Yo-han Go': '고요한',
		'Yong Lee': '이용',
		'Young-cheol Cho': '조영철',
		'Young-gwon Kim': '김영권',
		'Chang-woo Rim': '임창우',
		'Dong-ho Jeong': '정동호',
		'Hyun-jun Suk': '석현준',
		'Jae-sung Lee II': '이재성',
		'Jae-sung Lee': '이재성',
		'Jeong-hyeop Lee': '이정협',
		'Jong-ho Lee': '이정호',
		'Joo-yong Lee': '이주영',
		'Ju-yong Lee': '이주용',
		'See-jong Ju': '주세종',
		'Se-jong Ju': '주세종',
		'Seung-dae Kim': '김승대',
		'Soon-tae Kwoun': '권순태',
		'Ui-jo Hwang': '황의조',
		'Woo-young Jung': '정우영',
		'Yeong-jae Lee': '이영재',
		'Yong-jae Lee': '이용재',
		'Young-sun Yun': '윤영선',
		'Chul-soon Choi': '최철순',
		'Hee-chan Hwang': '황희찬',
		'Jae-suk Oh': '오재석',
		'Myong-jin Koh': '고명진',
		'Chang-min Lee': '이창민',
		'Hyeon-woo Joo': '주현우',
		'Hyun-woo Cho': '조현우',
		'Hyun-woo Jo': '조현우',
		'Il-su Hwang': '황일수',
		'Ju-Hun Song': '송주훈',
		'Kyung-won Kwon': '권경원',
		'Min-jae Kim': '김민재',
		'Seong-uk Jin': '진성욱',
		'Seung-hyun Jeong': '정승현',
		'Seung-hyun Jung': '정승현',
		'Yong-joon Heo': '허용준',
		'Jun-ho Son': '손준호',
		'Seong-jun Kim': '김성준',
		'Ban-suk Oh': '오반석',
		'Seon-min Moon': '문선민',
		'Seung-woo Lee': '이승우',
		'In-Beaom Hwang': '황인범',
		'In-beom Hwang': '황인범',
		'Moon-Hwan Kim': '김문환',
		'Moon-hwan Kim': '김문환',
		'Jung-min Kim': '김정민',
		'Jin-hyun Lee': '이진현',
		'Sang-ho Na': '나상호',
		'Seung-ho Paik': '백승호',
	}
};

export default koreans;
