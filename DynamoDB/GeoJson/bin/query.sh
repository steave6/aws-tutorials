#! /usr/bin/env bash
aws dynamodb query \
  --table-name GeoJapanDistricts \
  --key-conditions '{"year": {"AttributeValueList": [{"S" : "2018"}], "ComparisonOperator": "EQ"}}'
