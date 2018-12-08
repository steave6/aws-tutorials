#! /usr/bin/env bash
aws dynamodb query \
  --table-name GeoJapanDistricts \
  --key-conditions "ForumName = year" \
  --expression-attribute-values '{"year": "2018"}'
