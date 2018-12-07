#! /usr/bin/env bash
aws dynamodb query --table-name Music --key-conditions file://key-conditions.json
