#!/bin/bash

for i in {1..400}
do
  for i in {1..40}
  do
    curl -s -X POST -H "Content-Type: application/json" --data '{ "length":"5"}' https://ticket-line-dev.herokuapp.com/event/queuePosition/ | python -m json.tool &
  done
  echo ''
done
