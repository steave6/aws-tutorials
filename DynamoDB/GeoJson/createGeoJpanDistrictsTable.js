#!/usr/bin/env node
var AWS = require("aws-sdk");

var config = require('./config.json')

AWS.config.update(config);

var dynamodb = new AWS.DynamoDB();

var params = require('./schema-GeoJapanDistricts.json');

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
