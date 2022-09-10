var color;

function preload() {
  circleAB = loadImage("circle.png")
  FlowerAB = loadImage("flowerbody.jpeg")
  circleBC = loadImage("circle1.png");
  circleCD = loadImage("circle2.png");
  circleDE = loadImage("circle3.png");
  circleEF = loadImage("circle4.png");
  circleFG = loadImage("circle5.png");
  circleGH = loadImage("circle6.png");
  circleHI = loadImage("circle7.png");
  brushAB = loadImage("brush1.png");
}


function setup() {
  createCanvas(2000,2000);
  red = createSprite(50,50);
  red.addImage(circleBC);
  red.scale = 0.6;

  blue = createSprite(50,110);
  blue.addImage(circleCD);
  blue.scale = 0.6;

  green = createSprite(50,170);
  green.addImage(circleDE);
  green.scale = 0.6;

  purple = createSprite(50,230);
  purple.addImage(circleEF);
  purple.scale = 0.6;

  orange = createSprite(50,290);
  orange.addImage(circleFG);
  orange.scale = 0.6;

  brown = createSprite(50,350);
  brown.addImage(circleGH);
  brown.scale = 0.6;

  voilet = createSprite(500,50);
  voilet.addImage(circleHI);
  voilet.scale = 0.6;

  brush = createSprite(50,240,50,50);
  brush.addImage(brushAB);
  brush.scale = 0.2;





 // A = Math.round(random(1,2))
  //if(A === 1){
  //  keyboard = new Keyboard()
  //} 
  //else if(A === 2){
    flower = new Picture(color)
  //}

  
}

function draw() {
  background("white");  
  brush.x = mouseX;
  brush.y = mouseY;
  drawSprites();
  text("1:red",500,200)
  text("2:yellow",600,200)
  if(mousePressedOver(red)){
    color = "red";
   // console.log(color)

  }
  if(mousePressedOver(blue)){
    color = "blue";
  }

  if(mousePressedOver(green)){
    color = "green";
  }

  if(mousePressedOver(purple)){
    color = "purple";
  }

  if(mousePressedOver(orange)){
    color = "orange";
  }

  if(mousePressedOver(brown)){
    color = "brown";
  }
  
  flower.colorfill()
  
}