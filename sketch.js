var sc,mn,hr
var hrAngle, mnAngle, scAngle;
function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES);
}

function draw() { 
  background(0);

translate(200,200);
rotate(-90);

hr = hour();
mn = minute(); 
sc = second();
//setting the angle
scAngle = map(sc, 0, 60, 0, 360);
mnAngle = map(mn,0,60,0,360)
hrAngle = map(hr % 12,0,12,0,360)
//drawing the hands
push();
rotate(scAngle); 
//rotate the hand based on angle calculated 
stroke(255,0,0); 
strokeWeight(7); 
line(0,0,100,0); 
pop();


push();
rotate(mnAngle); 
//rotate the hand based on angle calculated 
stroke(0,255,0); 
strokeWeight(7); 
line(0,0,75,0); 
pop();


push();
rotate(hrAngle); 
//rotate the hand based on angle calculated 
stroke(0,0,255); 
strokeWeight(7); 
line(0,0,50,0); 
pop();

stroke(255,0,255);

point(0,0)

//drawing arcs

strokeWeight(10)
noFill();

// seconds arc

stroke(255,0,0); 
arc(0,0,300,300,0,scAngle);

// minutes arc

stroke(0,255,0); 
arc(0,0,280,280,0,mnAngle);

// hour arc

stroke(0,0,255); 
arc(0,0,260,260,0,hrAngle);








  drawSprites();
}