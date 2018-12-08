#! /usr/bin/env bash

docker run --rm -d -p 8000:8000 \
  --name amazon-dynamodb \
  --mount source=dynamodb-vol,target=/home/dynamodblocal \
  amazon/dynamodb-local \
  -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb


