for s in 2020
do
  curl "localhost:3050/api/match/fetch-season/$s"
  curl "localhost:3050/api/match/cleanup"
  curl "localhost:3050/api/league/update-all/$s"
  curl "localhost:3050/api/cup/fetch/ongoing/$s"
  curl "localhost:3050/api/qual/fetch/$s"
  curl "localhost:3050/api/goal/update-all/$s"
done
