export default class UrlUtil {
	static getTeamUrl(team) {
		return team.replace(/ & | /g, '-');
	}

	static getSeasonSelectUrl(season, team) {
		var url = '/api/season/select/' + season + '/' + this.getTeamUrl(team);
		return url;
	}

	static getSeasonFetchUrl(season, team) {
		var url = '/api/season/fetch/' + season + '/' + this.getTeamUrl(team);
		return url;
	}

	static getSeasonClearUrl(season, team) {
		var url = '/api/season/clear/' + season + '/' + this.getTeamUrl(team);
		return url;
	}

	static getMatchFetchUrl(season, team) {
		var url = '/api/match/fetch/' + season + '/' + this.getTeamUrl(team);
		return url;
	}

	static getMatchClearUrl(season, team) {
		var url = '/api/match/clear/' + season + '/' + this.getTeamUrl(team);
		return url;
	}
}	