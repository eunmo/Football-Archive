for s in 2019 2020
do
  curl "localhost:3050/api/season/update/$s"
done

for s in 2019
do
  curl "localhost:3050/api/korea/league/update/$s"
  curl "localhost:3050/api/korea/cup/update/$s"
  curl "localhost:3050/api/korea/assemble/$s"
  curl "localhost:3050/api/japan/cup/update/$s"
  curl "localhost:3050/api/japan/assemble/$s"
done

for s in 2019 2020
do
  curl "localhost:3050/api/match/clear/recent/$s"
  curl "localhost:3050/api/fifa/fetch"
done
