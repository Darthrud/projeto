var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal1 = createSprite(200,28,100,20);
goal1.shapeColor = ('yellow');

var goal2 = createSprite(200,372,100,20);
goal2.shapeColor = ('yellow');

var bola = createSprite(200,200,10,10);
bola.shapeColor = ("white");

var computermallet = createSprite(250,350,50,10);
computermallet.shapeColor = ("black");

var playermallet = createSprite(200,50,50,10);
playermallet.shapeColor = ("black");

var wall1,wall2,wall3,wall4,wall6;
wall1=createSprite(380,200,10,400);
wall1.shapeColor="white";

wall2=createSprite(20,200,10,400);
wall2.shapeColor="white";

wall3=createSprite(200,380,400,10);
wall3.shapeColor="white";

wall4=createSprite(200,20,400,10);
wall4.shapeColor="white";

wall5=createSprite(200,125,400,10);
wall5.shapeColor="white";

wall6=createSprite(200,275,400,10);
wall6.shapeColor="white";

var gameState = "serve";
var computerscore=0;
var playerscore=0;

function draw() {
background('green');
 if (gameState === "serve") {
    textSize(24);
    fill("white");
    text("Inicie apertando espaço",100,180);
  }
  textSize(18);
  textAlign(CENTER,RIGHT);
  fill("white");
  text(computerscore,40,195);
  text(playerscore,40,220);
  
 playermallet.velocityX=0;
playermallet.velocityY=0;
  
   
  bola.bounceOff(wall1);
  bola.bounceOff(wall2);
  bola.bounceOff(wall3);
  bola.bounceOff(wall4);
  bola.bounceOff(computermallet);
  bola.bounceOff(playermallet);
  playermallet.bounceOff(wall1);
  playermallet.bounceOff(wall2);
  computermallet.bounceOff(wall1);
  computermallet.bounceOff(wall2);
  
  
  if(keyDown("space")&& gameState==="serve"){
    bola.velocityX=-5;
    bola.velocityY=7;
    gameState="play";
  }
  
  if(keyDown(RIGHT_ARROW)){
    playermallet.velocityX=7;
    playermallet.velocityY=0;
  }
  
  if(keyDown(LEFT_ARROW)){
    playermallet.velocityX=-7;
    playermallet.velocityY=0;
  }
  
  if(keyDown(UP_ARROW)){
    playermallet.velocityX=0;
    playermallet.velocityY=-7;
  }
  
  if(keyDown(DOWN_ARROW)){
    playermallet.velocityX=0;
    playermallet.velocityY=7;
  }
  
  computermallet.x=bola.x;
  
  if(bola.isTouching(goal1)||bola.isTouching(goal2)){
    if(bola.isTouching(goal1)){
      computerscore=computerscore+1;
    }
     if(bola.isTouching(goal2)){
    playerscore=playerscore+1;
  }
  gameState="serve";
  reset();
  }
  
  if(playerscore===5||computerscore===5){
    gameState="End";
    text("Acabou",120,160);
    text("Reinicie apertando R",130,180);
  }
  
  if(keyDown("r")&&gameState==="End"){
  gameState="serve";
  computerscore=0;
  playerscore=0;
  }
  
  function reset(){
    bola.x=200;
    bola.y=200;
    
    bola.velocityY=0;
    bola.velocityX=0;
  }
  drawSprites();
  }
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
