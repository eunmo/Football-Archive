my $filename = '../src/data/teams.js';
open(my $fh, '<:encoding(UTF-8)', $filename) or die;

my ($d,$m,$y) = (localtime time)[3, 4, 5];
$y += 1900; $m += 1;
$m = "0$m" if $m < 10;
$d = "0$d" if $d < 10;
my $bk = "../img/bk$y$m$d";
mkdir $bk;

while (my $row = <$fh>) {
  if ($row =~ /id: (\d+),/) {
    my $id = $1;
    
    next if $id < 1000;

    rename "../img/$id.png","$bk/$id.png"
  }
}
