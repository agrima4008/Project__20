var bg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png",
    "images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    cat = createSprite(870,600);
    cat.addAnimation("cat",catImg1);
    cat.scale = 0.3;
    
    mouse = createSprite(200,600);
    mouse.addAnimation("mouse",mouseImg1);
    mouse.scale  = 0.17;
}

function draw() {

    background(bg);
    //Write condition here to evalute if cat and mouse 
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("cat", catImg3);
        cat.x =300;
        cat.changeAnimation("cat");

        mouse.addAnimation("mouse", mouseImg3);
        mouse.changeAnimation("mouse");
    }  


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.framedelay=25;

        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");

    
    }
}