var fixedr, movingr;

function setup() {
  createCanvas(800,400);
  fixedr = createSprite(400, 200, 50, 50);
  fixedr.shapeColor = "green";
  movingr = createSprite(200, 200, 60, 60);
  movingr.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  
  movingr.x = World.mouseX;
  movingr.y = World.mouseY; 
  
  if(movingr.x - fixedr.x < fixedr.width / 2 + movingr.width / 2 && 
    fixedr.x - movingr.x < fixedr.width / 2 + movingr.width / 2 && 
    fixedr.y - movingr.y < fixedr.height / 2 + movingr.height / 2 &&
    movingr.y - fixedr.y < fixedr.height / 2 + movingr.height / 2){
    fixedr.shapeColor = "red";
    movingr.shapeColor = "red";
  }else { 
    fixedr.shapeColor = "green";
    movingr.shapeColor = "green";}

  


  drawSprites();
}