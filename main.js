song1="music.mp3";
song2="music2.mp3";

function preload(){
    song=loadSound("music.mp3");
    song=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,600,500);
}