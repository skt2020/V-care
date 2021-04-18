const express = require('express');
const app = express();
const PORT = process.env.PORT || 1338;
const bodyParser = require('body-parser')
const PredictionConfig = require("./config.json");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw({ limit: '10MB' }));
app.use(express.static('public'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post('/predict', (request, response) => {
    const imageData = request.body;
        
    const customVisionPostOptions = {
        hostname: PredictionConfig.ServerHost,
        port: 443,
        path: PredictionConfig.ModelPath,
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream',
            'Prediction-key': PredictionConfig.Key
        }             
    };
    // Set up the request
    const https = require('https');
    const customVisionPostRequest = https.request(customVisionPostOptions, (predictionResponse) => {
        predictionResponse.on('data', function (data) {
            const customVisionResponse = JSON.parse(data);
            const predictions = customVisionResponse.predictions;
            console.log(predictions);
            console.log("#############Hello###############");
           
            //const mostLikelyPrediction = predictions.sort((a, b) => {
                //return (a.probability > b.probability) ? -1 :
                  //  (a.probability === b.probability ? 0 : 1)
                //;
                var objpred=[predictions[0].probability,predictions[1].probability,predictions[2].probability];
                var objid=[predictions[0].tagId,predictions[1].tagId,predictions[2].tagId];
                var objname=[predictions[0].tagName,predictions[1].tagName,predictions[2].tagName];
                var objtot=[objpred,objid,objname];
                var firstobj=[predictions[0].probability,predictions[0].tagName,]
                const mostLikelyPrediction = firstobj;
            //})[0].tagName;
            response.setHeader('Content-Type', 'text/json');
            response.end(`{ "prediction": "${mostLikelyPrediction}" }`);
            console.log("#############XXXXXXXXXXX###############");
            console.log(mostLikelyPrediction);
            console.log("#############XXXXXXXXXXXXXXXX###############");
            //document.getElementById("disp").innerHTML=`<h1>HEllo World</h1>`;
        });
    });
    // post the data
    customVisionPostRequest.write(imageData);
    customVisionPostRequest.end();
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));