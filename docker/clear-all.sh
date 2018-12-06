#! /bin/bash

docker-compose -f postgres-compose.yaml down

rm -rf user-db-data