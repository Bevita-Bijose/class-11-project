// create variables
var boy, path, leftBoundary, rightBoundary;
var boyImg, pathImg;
var i;

// load images
function preload(){

  boyImg = loadAnimation ("Runner-1.png", "Runner-2.png");
  pathImg = loadImage ("path.png");

}

function setup(){

// create canvas
  createCanvas (400,400);

// create path
  path = createSprite (200,200);
  path.addImage (pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

// create boy
  boy = createSprite (180,340,30,30);
  boy.scale = 0.08;
  boy.addAnimation ("JakeRunning", boyImg);

// create left boundary
  leftBoundary = createSprite (0,0,100,800);
  leftBoundary.visible = false;

// create right boundary
  rightBoundary = createSprite (390,0,100,800);
  rightBoundary.visible = false;

}

function draw(){

// create background
  background(0);

// set velocity to path to move
  path.velocityY = 4;

// make the boy move with x axis of the mouse
  boy.x = World.mouseX;

// created edges
  edges = createEdgeSprites ();

// collidethe boy to the bottom edge, left boundary, right boundary
  boy.collide (edges[3]);
  boy.collide (leftBoundary);
  boy.collide (rightBoundary);

// make the path infinite
  if(path.y > 400 ){
    path.y = height/2;}

// draw sprites
  drawSprites()

}