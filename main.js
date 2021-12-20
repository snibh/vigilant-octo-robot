video = "";
objectDetector = "";

function preload() {

video = createVideo("video.mp4");


}
function setup() {

canvas = createCanvas(450,350);
canvas.center();
video.hide();

}
function start() {

objectDetector = ml5.objectDetector('cocossd',modelloaded);
console.log("start");

}

function draw() {

image(video,0,0,450,350);
objectDetector.detect(video,gotResult);
console.log("draw");

}
function modelloaded() {

console.log("cocossd");
status1 = true;
video.volume(0);
video.speed(1);

}
function gotResult(){

}