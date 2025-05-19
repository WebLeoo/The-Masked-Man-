//The setup function only happens once

var mima=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,129,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,20,20,); // center of canvas, 20px dia
  fill(400,400,100,100)
  ellipse(300,300,mima,mima);
  mima=mima+1;
  fill(300,300,200,200)
  ellipse(mouseX,mouseY,200,200,20,20);
  fill(400,400,200,200)
  ellipse(150,150,20,20);

  







}


