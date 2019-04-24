use utf8;
use LWP::Simple;
use Mojo::DOM;
use Mojo::Collection;
binmode(STDOUT, ":utf8");

my $match = $ARGV[0];
$match =~ /(.*)_(.*)_(.*)/;
my $year = $2;
my $match_code = $3;

if ($year <= '2014') {
	print "{}\n";
	exit;
}

my $url = "http://www.jfa.jp/match/emperorscup_$year/match_page/m$match_code.html";
my $html = get($url);
my $dom = Mojo::DOM->new($html);

my $json = "{";

get_header();
get_goals();
get_players($dom->find('table[class="match-result"]')->[0]);

$json .= "}";
print $json;

sub get_header($)
{
	my $l, $r;
	my $scoreboard = $dom->find('div[id="score-board-header"]')->[0];
	if ($year > '2014') {
		my $flags = $scoreboard->find('div[class="flag"]');
		$l = trim($flags->[0]->all_text);
		$r = trim($flags->[1]->all_text);
	} else {
		my $teams = $scoreboard->find('div[class="team_name"]');
		$l = trim($teams->[0]->all_text);
		$r = trim($teams->[1]->all_text);
	}
	$json .= "\"l\": \"$l\", \"r\": \"$r\"";
	my $uls = $scoreboard->find('div[class="score-detail"] ul');
	$json .= ", \"aet\": true" if ($uls->size() >= 2);
	if ($uls->size() == 3) {
		my $pso_l = trim($uls->[2]->find('span')->[0]->all_text);
		my $pso_r = trim($uls->[2]->find('span')->[2]->all_text);
		$json .= ", \"pso\": \"$pso_l:$pso_r\"";
	}
}

sub get_goals($)
{
	my $scoreboard = $dom->find('div[id="game-content-wrap"]')->[0];
	return unless defined $scoreboard;
	my $l = get_scorers($scoreboard->find('div[class="scorerLeft"]')->[0]);
	my $r = get_scorers($scoreboard->find('div[class="scorerRight"]')->[0]);

	$json .= ",\n\"goals\": {";
	$json .= "\"l\": $l,";
	$json .= "\n\"r\": $r}";
}

sub get_scorers($)
{
	my $div = shift;
	my $scorers = "[";
	my $count = 0;
		
	my @lines = split("<.*?>", $div->to_string);
	foreach my $line (@lines) {
		next if $line eq '';

		# timevals could have \d+\d, so + sign needs to be handled
		$line =~ /(\d+)(\+\d+|)分(.*)/;
		my $minute = $1;
		my $scorer = trim($3);
		$scorers .= ",\n" if $count++ > 0;
		$scorers .= "{\"minute\": $minute, \"scorer\": \"$scorer\"}";
	}

	$scorers .= "]";
	return $scorers;
}

sub get_players($)
{
	my $table = shift;

	my $l_start = "[";
	my $r_start = "[";
	my $l_sub = "[";
	my $r_sub = "[";
	my $l_change = "[";
	my $r_change = "[";
	my $l_card = "[";
	my $r_card = "[";

	my $state = "start";
	my $index = 0;
	for my $tr ($table->find('tr')->each) {
		next if $index++ == 0;
		next if $tr->find('td[class="separate"]')->size() > 0;

		if ($tr->find('td[class="header"]')->size() > 0) {
			my $header = trim($tr->all_text);
			$state = "sub" if $header eq "控え選手";
			$state = "change" if $header eq "選手交代";
			$state = "card" if $header eq "警告・退場";
			next;
		}

		my $tds = $tr->find('td');

		if ($state eq "start") {
			my $l_num = trim($tds->[1]->all_text);
			my $l_name = trim($tds->[2]->all_text);
			my $r_num = trim($tds->[4]->all_text);
			my $r_name = trim($tds->[5]->all_text);

			$l_start .= ",\n{\"number\": $l_num, \"name\": \"$l_name\"}";
			$r_start .= ",\n{\"number\": $r_num, \"name\": \"$r_name\"}";
		} elsif ($state eq "sub") {
			next if $tds->size() != 6;
			my $l_num = trim($tds->[1]->all_text);
			my $l_name = trim($tds->[2]->all_text);
			my $r_num = trim($tds->[4]->all_text);
			my $r_name = trim($tds->[5]->all_text);

			$l_sub .= ",\n{\"number\": $l_num, \"name\": \"$l_name\"}" if $l_name ne '';
			$r_sub .= ",\n{\"number\": $r_num, \"name\": \"$r_name\"}" if $r_name ne '';
		} elsif ($state eq "change") {
			my $l = get_sub(trim($tds->[0]->all_text), trim($tds->[1]->all_text));
			my $r = get_sub(trim($tds->[2]->all_text), trim($tds->[3]->all_text));

			$l_change .= ",\n$l" unless $l eq "";
			$r_change .= ",\n$r" unless $r eq "";
		} elsif ($state eq "card") {
			my $l = get_card(trim($tds->[0]->all_text), $tds->[1]);
			my $r = get_card(trim($tds->[2]->all_text), $tds->[3]);

			$l_card .= ",\n$l" unless $l eq "";
			$r_card .= ",\n$r" unless $r eq "";
		}
	}

	$l_start =~ s/\[,\n/\[/;
	$r_start =~ s/\[,\n/\[/;
	$l_sub =~ s/\[,\n/\[/;
	$r_sub =~ s/\[,\n/\[/;
	$l_change =~ s/\[,\n/\[/;
	$r_change =~ s/\[,\n/\[/;
	$l_card =~ s/\[,\n/\[/;
	$r_card =~ s/\[,\n/\[/;

	$json .= ",\n\"players\": {";
	$json .= "\n\"l\": {\"start\": $l_start],\n\"sub\": $l_sub]}";
	$json .= ",\n\"r\": {\"start\": $r_start],\n\"sub\": $r_sub]}";
	$json .= "},\n\"subs\": {";
	$json .= "\n\"l\": $l_change]";
	$json .= ",\n\"r\": $r_change]";
	$json .= "},\n\"cards\": {";
	$json .= "\n\"l\": $l_card]";
	$json .= ",\n\"r\": $r_card]";
	$json .= "}";
}

# for half time subs, see 2018 4
# for et start subs, see 2018 13
# for et half time subs, see 2018 28
# for PK subs, see 2018 44
sub get_sub($)
{
	my $number = shift;
	my $text = shift;

	if ($text =~ /.*[▼▲](\d+)(\+\d+|)分 (IN|OUT)/) {
		return "{\"state\": \"$3\", \"number\": $number, \"minute\": $1}";
	} elsif ($text =~ /.*[▼▲](ＨＴ|延前開始|延後開始|PK戦) (IN|OUT)/) {
		my $minute = $1;
		my $state = $2;
		$minute =~ s/ＨＴ/46/;
		$minute =~ s/延前開始/91/;
		$minute =~ s/延後開始/106/;
		$minute =~ s/PK戦/120/;
		return "{\"state\": \"$state\", \"number\": $number, \"minute\": $minute}";
	}

	return "";
}

# for double yellow cards, see 2018 4
# for direct red cards, see 2018 37
# for card in PK, see 2018 36
sub get_card($)
{
	my $number = shift;
	my $td = shift;

	return "" if $td->find('img')->size() == 0;

	my $card_alt = $td->find('img')->[0]->attr('alt');
	my $card = $card_alt eq 'tim_mem_ico_01' ? 'red' : 'yellow';
	my $text = trim($td->all_text);

	if ($text =~ /.*?(\d+)(\+\d+|)分/) {
		return "{\"state\": \"$card\", \"number\": $number, \"minute\": $1}";
	} elsif ($text =~ /PK戦/) {
		return "{\"state\": \"$card\", \"number\": $number, \"minute\": 120}";
	}
}

sub trim($)
{
	my $text = shift;
	$text =~ s/^\s+|\s+$//g;
	$text =~ s/ \(Cap\.\)//g;
	return $text;
}

