#!/usr/bin/env node
var AWS = require("aws-sdk");
var fs = require('fs');

var config = require('./config.json')

AWS.config.update(config);

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing movies into DynamoDB. Please wait.");


var geoJson = JSON.parse(fs.readFileSync('N03-18_180101.geojson', 'utf8'));
geoJson.features.forEach(function(geo) {
    var params = {
        TableName: "GeoJapanDistricts",
        Item: {
          year: "2018", 
          code: geo.N03_007,
          type: "Feature",
          properties: {
            coordinateCode: "",
            prefecture: geo.N03_001,
            branch: geo.N03_002,
            city: geo.N03_003,
            town: geo.N03_004,
          },
          geometry: geo.geometry,
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add geo", geo.N03_004, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", geo.N03_004);
       }
    });
});
