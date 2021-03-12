var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground 
var survialTime;

function preload(){
  
  
monkey_running          = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  FoodGroup= new Group()
  obstacleGroup= new Group()
}



function setup() {
  

survialTime = 0;
  
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  

  ground=createSprite(400,370,900,10);
  ground.velocityX = -7 
  console.log(ground.x);

}




function draw() {
    background(" lightblue")



 if(keyDown("space")&&monkey.y >= 314){
    monkey.velocityY=-10
  }
  //giving gravity
  monkey.velocityY = monkey.velocityY + 0.4
  
  //scrolling ground
   ground.x = ground.width/2;
  
  fruits(); obstacles();
  
 // colliding monkey with ground
   

  monkey.collide(ground);
  
 stroke("black");
   fill("black");
   textSize(20);
   survialTime = Math.ceil(frameCount/frameRate());
  text("Survial Time:"+  survialTime, 100, 50);
  
  
   drawSprites()
}


  
function fruits(){
  
  if(frameCount % 200===0){
    var banana=createSprite(600,200,40,10); 
    banana.Y=random(250,300);
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-3
    banana.lifetime=300;
    FoodGroup.add(banana)
  }
}
 function obstacles (){
  if(frameCount % 300===0){
    obstacle=createSprite(600,340,10,10);
    obstacle.velocityX=-4
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2;
    obstacle.lifetime=300;
  }
}





 
 




 
  
  

 
 
 








  
  

 
 
 







