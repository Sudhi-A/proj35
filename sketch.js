var dog,dogImg,happyDog,database,foodS,Foodstock

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDog=loadImage("images/happydogImg.png")
}

function setup() {
  database=firebase.database()
	createCanvas(600,600);
  dog=createSprite(250,250,2,2)
  dog.addImage(dogImg)
  dog.scale=0.25
  
  Foodstock= database.ref('food')
  Foodstock.on("value",readstocks)
}


function draw() {  
  background(46,139,87)
  if (keyDown(UP_ARROW)) {
    writeStocks(foodS)
    dog.addImage(happyDog)
    
  }
  drawSprites();
  textSize(30)
  fill("black")
  stroke(3)
  text("food left:"+foodS,30,150)
  //add styles here
  textSize(20)
  fill("black")
  stroke(2)
  text("Note:press UP arrow to feed Dago milk",50,50)
}
function readstocks(data) 
{
  foodS=data.val();
  
}
function writeStocks(x) {
  if (x<=0) {
    x=0
  } else {
    x=x-1
    
  }
  database.ref('/').update({
    Foodstock:x
  })
}



