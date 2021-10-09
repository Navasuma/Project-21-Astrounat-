var bath,brush,drink,eat1,gym,iss,move,sleep;
var bathImg,brushImg,drinkImg,eatImg,gymImg,issImg,moveImg,sleepImg;

 function preload(){
 bathImg = loadImage("bath1.png","bath2.png");
 drinkImg = loadImage("drink1.png","drink2.png");
 eatImg = loadImage("eat1.png","eat2.png");
 gymImg = loadImage("gym1.png","gym2.png","gym11.png","gym12.png");
 moveImg = loadImage("move.png","move1.png");
 sleepImg = loadImage("sleep.png");
 issImg = loadImage("iss.png");
 brushImg = loadImage("brush.png");
 }


function setup() {
createCanvas(400, 400);
astronaut = createSprite(300,230,200,50);
astronaut.addAnimation("bathing",bath);
astronaut.scale=0.2;

astronaut = createSprite(300,230,200,50);            
astronaut.addAnimation("drinking",drink); 
astronaut.scale=0.2;                                                                                                       

astronaut = createSprite(300,230,200,50);            
astronaut.addAnimation("eating",eat); 
astronaut.scale=0.2;                

astronaut = createSprite(300,230,200,50);            
astronaut.addAnimation("gymming",gym); 
astronaut.scale=0.2;                

astronaut = createSprite(300,230,200,50);            
astronaut.addAnimation("moving",move); 
astronauat.scale=0.2;                

astronaut = createSprite(300,230,200,50);            
astronaut.addAnimation("sleeping",sleep); 
astronaut.scale=0.2;    

astronaut = createSprite(300,230,200,50);
astronaut.addAnimation("brushing",brush);
astronaut.scale=0.2;
}

function draw() {
  background(220);

 

 if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY =-2;
 }

 if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 2;
 }

 if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = -2;
  astronaut.velocityY = 0;
 }
 
 if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eat");
  astronaut.y = 350;
  astronaut.velocityX = 2;
  astronaut.velocityY = 0;
 }
 
 if(keyDown("m_key")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("move");
  astronaut.y = 350;
  astronaut.velocityX = 2;
  astronaut.velocityY = 4;
 }
 
 if(keyDown("Space")){
  astronaut.addAnimation("drinking",drink);
  astronaut.changeAnimation("drinking");
  astronaut.y = 350;
  astronaut.velocityX = 4;
  astronaut.velocityY = -10;
 }
 
 if(keyDown("ENTER")){
  astronaut.addAnimation("sleeping",sleep);
  astronaut.changeAnimation("sleeping");
  astronaut.y = 350;
  astronaut.velocityX = 2;
  astronaut.velocityY = -8;
 }
 
 
 bath.bounceOff(edges);
 drink.bounceOff(edges);
 eat.bounceOff(edges);
 gym.bounceOff(edges);
 move.bounceOff(edges);
 sleep.bounceOff(edges);
 brush.bounceOff(edges);
 
 drawSprites();

}