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
	transparent: false
	}
);

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

PIXI.loader
  .add("slothSnooze.png")
  .load(setup);

function setup() {
  let sprite = new PIXI.Sprite(
    PIXI.loader.resources["slothSnooze.png"].texture
  );
  app.stage.addChild(sprite);

  sprite.x = app.renderer.width/2;
  sprite.interactive = true;
  sprite.buttonMode = true;
  sprite.on('pointerdown', function(){onClick(sprite);});

 console.log(app.renderer.width)
}

function onClick(sprite) {
    sprite.scale.x *= 1.25;
    sprite.scale.y *= 1.25;
}


//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);