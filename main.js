noseX = 0;
noseY = 0;
difference = 0;
leftWrist = 0;
rightWrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(450,450);

    canvas = createCanvas(500,500);
    canvas.position(560,160);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("HURAAAAAAAAAAAY model loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
         leftWrist = results[0].pose.leftWrist.x;
         rightWrist = results[0].pose.rightWrist.x;
         difference = floor(leftWrist-rightWrist);
    }
}
function draw(){
    background("#00FFFF");
    fill("#FF0000");
    textSize(difference);
    text("HELLO FRIENDS DRINK TEA :)",noseX,noseY);
    
    document.getElementById("result").innerHTML = "Font size of the text is -" + difference + ".";
}