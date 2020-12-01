var Ninja;
var police;
var ground;
var power, powerup;
var life = 0;
var powerupImg,powerImg;
var sword;
var groundImage;
//var PLAY = 1;
//var END =0;
//var gameState= PLAY

function preload(){
  groundImage=loadImage("ground2.png")
  powerupImg = loadImage("powerup.gif");
  powerImg=loadImage("power.gif");

}

function setup() {
  createCanvas(600,200);
 Ninja = createSprite(200, 170, 30, 50);
 Ninja.velocityX=3
 
 

 police = createSprite(100,170,30,60);
 police.velocityX=3
 ground = createSprite(200,180,400,20) 
 ground.addImage("ground",groundImage); 

}

function draw() {
  background("red");
 
  text("life" + life,550,20);

  if (keyDown("space")){
  Ninja.velocityY = -5;
     }
     ground.velocityX= -4;
    if (ground.x < 0){ 
      ground.x = ground.width/2;

    
      }
    
      if(Ninja.x===600 || police.x===600 ){
        Ninja.x=10;
        police.x=10
      }
      if(Ninja.isTouching(power)){
life = life +1;
poweruP = createSprite(500,50,20,20)
//powerUp.addImage("power",powerupImg);

      }
  spawnPower();
  spawnSword();
  drawSprites();

}
function spawnPower(){
  if (frameCount%280===0){
    power = createSprite(600,30,30,30)  
    power.velocityX= -2;
  }

}
function spawnSword (){
  if (frameCount%180===0){
   sword = createSprite(600,40,30,30)
   sword.velocityX= -2
  }
}