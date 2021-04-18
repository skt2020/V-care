function init() {
    // Global variables
    let webcamStream;
    const appResults = document.getElementById('appResults');
    const appContainer = document.getElementById('appContainer');
    const videoElement = document.querySelector('video');
    const appRestartButton = document.getElementById('appRestartButton');
    
    const picks = ["rock", "paper", "scissors"];
    const getEnginePick = () => {
        return picks[Math.floor(Math.random() * picks.length)];
    };
    const resultClasses = {
        WIN: "userWin",
        LOST: "userLose",
        DRAW: "draw"
    };
   // document.write("<h1>############<h1><br>");
     //   document.write(userPick[0].tagName);
       // document.write("<h1>############<h1><br>");
    const getWinner = (userPick, enginePick) => {
        var winnerScheme = {
            "rock": "scissors",
            "scissors": "paper",
            "paper": "rock",
        },
        userPickValue = userPick.toLowerCase(),
        enginePickValue = enginePick.toLowerCase();
        /////////////////write user value on page/////////
       // document.write("<h1>############<h1><br>");
       // document.write(userPickValue[0].tagName);
       // document.write("<h1>############<h1><br>");

        if (winnerScheme[userPickValue] === enginePickValue) {
            return "WIN";
        }
    
        if (winnerScheme[enginePickValue] === userPickValue) {
            return "LOST";
        }
    
        return "DRAW";
    };

    let counter = 0;
    const counterStart = 0;
    const counterStop = 10;
    const counterStep = 1;
    const timerTick = 1000;
    const startCounter = () => {
        let counterTimer;
        const videoElement = document.querySelector("video");
        const canvasElement = document.querySelector("canvas");
        const counterElement = appContainer.querySelector(".appCounter");
        // Reset elements
        canvasElement.classList.add('hide');
        appRestartButton.classList.add('hide');
        counterElement.classList.remove('hide');
        appContainer.querySelector(".resultText").classList.add("hide");
        appResults.querySelector(".appUserAnswer").innerHTML = "-";
        appResults.querySelector(".appEngineAnswer").innerHTML = "-";
        const enginePickElement = document.querySelector('.appEnginePick');
        picks.forEach(pickLabel => {
            enginePickElement.classList.remove(pickLabel);
        });
        Object.keys(resultClasses).forEach(function (key) {
            appContainer.classList.remove(resultClasses[key]);
        });

        const counterTimerTick = function counterTimerTick() {
            if (counterTimer) {
                clearTimeout(counterTimer);
            }
            counter += counterStep;
            counterElement.innerHTML = counter;
            if (counter >= counterStop) {
                counterElement.classList.add('hide');
                takePhoto(videoElement, canvasElement);
                return;
            }
            counterTimer = setTimeout(counterTimerTick, timerTick);
        };
    
        counter = counterStart;
        counterTimerTick();
    };

     const processPrediction = (prediciton, enginePick) => {
        //appResults.querySelector(".appUserAnswer").innerHTML = prediciton;
      //  appResults.querySelector(".appEngineAnswer").innerHTML = enginePick;
        document.querySelector('.appEnginePick').classList.add(enginePick);
        // Update results
        var result = getWinner(prediciton, enginePick);
        appContainer.classList.add(resultClasses[result]);
        appContainer.querySelector(".resultText").classList.remove("hide");
        appContainer.querySelector(".resultText").innerHTML = name;
        appRestartButton.classList.remove('hide');
    }; 

    const submitImageFromCanvas = (canvasElement) => {
        const request = new XMLHttpRequest();
        request.open('POST', "/predict", true);
        request.setRequestHeader('Content-Type', 'application/octet-stream');
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                const prediction = JSON.parse(request.responseText).prediction;
               console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
                console.log(prediction);
                var a=parseFloat(prediction);
                var count=0;
                var ind=prediction.indexOf(",");
                
                var name=prediction.slice(ind+1,prediction.length)
                //print predection for full raw string
                document.getElementById("disp").innerHTML=`<h4 style="color:white"><b> <br>Probability : ${a*100}%<br>Disease Name : ${name}</b><h5 style="color:skyblue"><b>Note: </b>V-Care is in Development Stage. All Predections are not 100% accurate.Analytical Error : +15% / -15% </h5>`;
              //document.getElementById("conname").innerHTML=`<h1 style="color:skyblue">${name}</h1>`;
                // Draw the chart and set the chart values
                function drawChart() {
                    var data = google.visualization.arrayToDataTable([
                    ['Task', 'Hours per Day'],
                    [name, a],
                    ['Other', 1-a],
                    
                ]);
                
                    // Optional; add a title and set the width and height of the chart
                    var options = {'title':'Disease Probability', 'width':355, 'height':250};
                    // Display the chart inside the <div> element with id="piechart"
                    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
                    chart.draw(data,options);
                }
                
     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart);
                
                ///////////chart end////////
               
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
                const enginePick = getEnginePick();
                processPrediction(prediction, enginePick);
            } else {
                console.error(request);
            }
        };
    
        request.onerror = function (error) {
            console.error(error);
        };
    
        canvasElement.toBlob(function(blob) {
            request.send(blob);
        });
    };

    const takePhoto = (videoElement, canvasElement) => {
        canvasElement.classList.remove('hide');
        const canvasContext = canvasElement.getContext('2d');
        const videoSettings = webcamStream.getVideoTracks()[0].getSettings();
        canvasContext.drawImage(videoElement,
            0, 0, videoSettings.width, videoSettings.height,
            0, 0, canvasElement.width, canvasElement.height);
        submitImageFromCanvas(canvasElement);
    };

    // Initialize camera
    function bindCamera(videoElement) {
        // getMedia polyfill
        navigator.getUserMedia = (navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);

        // Check that getUserMedia is supported
        if (navigator.getUserMedia) {
            navigator.getUserMedia(
                // constraints
                {
                    video: { facingMode: 'environment' },
                    audio: false
                },
                // successCallback
                function (localMediaStream) {
                    try {
                        videoElement.srcObject = localMediaStream;
                    } catch (error) {
                        videoElement.src = window.URL.createObjectURL(localMediaStream);
                    }
                    webcamStream = localMediaStream;
                    startCounter();
                },
                // errorCallback
                function (err) {
                    console.log("The following error occured: " + err);
                }
            );
        } else {
            console.log("getUserMedia not supported");
            appContainer.querySelector(".appCanvasContainer").classList.add('hide');
            appContainer.querySelector(".photoUploadLabel").classList.remove('hide');
            const canvasElement = document.querySelector("canvas");
            const canvasContext = canvasElement.getContext('2d');
            const image = new Image();
            image.onload = () => {
                appContainer.querySelector(".appCanvasContainer").classList.remove('hide');
                canvasElement.classList.remove('hide');
                canvasContext.drawImage(image,
                    0, 0, image.width, image.height,
                    0, 0, canvasElement.width, canvasElement.height);
                submitImageFromCanvas(canvasElement);
                URL.revokeObjectURL(image.src);
            };
            document.getElementById("photoUpload").addEventListener('change', (event) => {
                const file = event.target.files[0];
                image.src = URL.createObjectURL(file);
            });
        }
    }

    bindCamera(videoElement);
    appRestartButton.addEventListener("click", function(){
        startCounter();
    });
}

function onDocumentReady(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

onDocumentReady(init);
//////////chart //////////


