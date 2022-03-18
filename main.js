status="";

function setup(){
canvas = createCanvas(480, 380);
canvas.center();    
 }
 function start(){
objectDectector = ml5.objectDectector('cocossd', modelLoaded);
document.getElementById("status").innerHTML= "Status: Detecting Objects";    
}
function modelLoaded(){
console.log("Model Loaded!");
status = true;   
}
function draw(){
    image(video, 0, 0, 480, 380);    
    }