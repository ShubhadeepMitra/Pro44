//making variables
var target,line1,line2,target_img;

//loading images in function preload
function preLoad(){
  target_img=loadImage("pic.png");

}

//defining the variables
function setup() {
  createCanvas(600,600);

  //creating line 1
  line1=createSprite(200,200,600,5);
  line1.shapeColor="red";
  line1.velocityY=5;

  //creating line 2
  line2=createSprite(200,200,5,600);
  line2.shapeColor="blue";
  line2.velocityX=5;

  //creating the target sprite
  target=createSprite(300,300,10,10);
  //target.addImage(target_img);
}

function draw() {
  //making the background
  background(255,255,255);  

  //stopping line 1 from moving by pressing up key
  if(keyDown("up")){
    line1.velocityY=0;
  }

  //stopping line 2 from moving by pressing down key
  if(keyDown("down")){
    line2.velocityX=0;
  }

  //making the edge sprites
  edges=createEdgeSprites();

  //making the line 1 and 2
  line1.bounceOff(edges);
  line2.bounceOff(edges);
  
  drawSprites();
}