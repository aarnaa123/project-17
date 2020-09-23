var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0
var gameover,g_img
var restart,r_Img


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 g_img=loadImage("gameOver.png")
  r_img=loadImage("restart.png")
}



function setup() {
 
  
  
  monkey=createSprite(100,365,200,200)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  

  
  
  
  ground=createSprite(200,400,800,10)
ground.x = ground.width /2;
  ground.velocityX=-2
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
  
  
}


function draw() {
background(220)

  if(ground.x<0){
   ground.x=ground.width/2;
 }
    
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    monkey.velocityY = monkey.velocityY + 0.8
    
  
  if(bananaGroup.isTouching(monkey)){
    
    survivalTime=survivalTime+2
    
     }
  
  
  
  
  

  monkey.collide(ground);
    

 create_bananaGroup()
  create_obstaclesGroup()

drawSprites();
 

  
  stroke("black");
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
 
text("SURVIVAL TIME:"+ survivalTime,100,50)
}

     

function create_bananaGroup(){
  if(frameCount%80===0){
    banana=createSprite(250,200,20,20)
  banana.addImage("banana",bananaImage);
  banana.scale=0.09
  banana.velocityX=-4
    banana.lifetime=100
  }
  
}

function create_obstaclesGroup(){
  if(frameCount%300===0){
    obstacle=createSprite(250,375,20,20);
  obstacle.addImage("obstacle",obstacleImage)
  obstacle.scale=0.1
    obstacle.velocityX=-4
    obstacle.lifetime=100
  }
  
}


