let type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new PIXI.Application({
	width: 256, 
	height: 256,
	antialias: true,
	transparent: false,
	}
);

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.backgroundColor = 0xFFFFFF;

PIXI.loader
  .add("images/slothSnooze.png")
  .load(setup);

function setup() {
  let sprite = new PIXI.Sprite(
    PIXI.loader.resources["images/slothSnooze.png"].texture
  );
  app.stage.addChild(sprite);

  sprite.x = app.renderer.width/2;
  sprite.interactive = true;
  sprite.buttonMode = true;
  sprite.on('pointerdown', function(){onClick(sprite);});

  
}

function onClick(sprite) {
    sprite.scale.x *= 1.25;
    sprite.scale.y *= 1.25;
}

window.onresize = function()
{
	app.renderer.resize(window.innerWidth, window.innerHeight);
	console.log(app.stage.width)
	//app.stage.width = app.renderer.width;
	//app.stage.height = app.renderer.height;
	//app.stage.height = app.renderer.height;
 		
	console.log('resize!');
}

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);
changeContent('Research', 'first');