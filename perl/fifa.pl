use LWP::Simple;
use Mojo::DOM;
use Mojo::Collection;
use utf8;
binmode(STDOUT, ":utf8");

my $id = $ARGV[0];
my $url = "https://www.fifa.com/fifa-world-ranking/ranking-table/men/";
$url .= "/rank=$id/index.html" if $id ne '';
	
my $html = get($url);
my $dom = Mojo::DOM->new($html);

my $json = "{";

if ($id eq '') {
	$id = $dom->find('select[class*="fi-ranking-schedule__nav"] option')->first->attr('value');
	$id =~ s/id//;
}

$json .= "\"id\": $id";

my $date = $dom->find('select[class*="fi-ranking-schedule__nav"] option[selected]')->first->text;
$json .= ",\n\"date\": \"$date\"";

$json .= ",\n\"ranks\": [";
my $index = 0;

for my $tr ($dom->find('table[id="rank-table"] tr')->each) {
	my $td_col = $tr->find('td');

	next if $td_col->size == 0;

	my $rank = $td_col->[0]->all_text;
	my $team_img = $td_col->[1]->find('img')->first;

	my $team_id = $team_img->attr('title');

	$json .= ",\n" if $index++;
	$json .= "{\"rank\": $rank";
	$json .= ",\"id\": \"$team_id\"";
	$json .= "}";
}

$json .= "]}\n";
print $json;
