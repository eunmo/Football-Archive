use LWP::Simple;
use Encode;
use Mojo::DOM;
use Mojo::Collection;
use utf8;
binmode(STDOUT, ":utf8");

my $league = $ARGV[0];
my $year = $ARGV[1];
my $month = $ARGV[2];

#my $url = "https://sports.news.naver.com/kfootball/schedule/index.nhn?year=$year&month=$month&category=$league";
my $url = "https://sports.news.naver.com/kfootball/schedule/monthly.nhn?year=$year&month=$month&category=$league";
my $html = get($url);
$html = decode('utf-8', $html) unless utf8::is_utf8($html);
print $html;
