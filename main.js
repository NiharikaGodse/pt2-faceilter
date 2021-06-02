function preload(){

}

function setup(){
    canvas=createCanvas(850,500);
    canvas.position(250,200);    
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLaoded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 130, 25, 600, 450);

}

function take_snapshot(){
    save('MyFilterPic.jpg');
}

function preload(){

}


function modelLaoded(){
    console.log("poseNet Initialised");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        console.log("Nose X position is " + results[0].pose.nose.x);
        console.log("Nose Y position is " + results[0].pose.nose.y);
    }
}