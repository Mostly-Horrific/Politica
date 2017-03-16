    var rendererType = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      rendererType = "canvas"
    }

    PIXI.utils.sayHello(rendererType)

//Create the renderer
var renderer = PIXI.autoDetectRenderer(1024,768);
renderer.autoResize = true;
renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = 0x061639;
//Add the canvas to the HTML document
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
PIXI.loader
  .add("images/tickbox.png")
  .add("images/darkliahoslogo.png")
  .add("images/politica.png")
  .load(setup);

  function setup(){
      var tickbox = new PIXI.Sprite(PIXI.loader.resources["images/tickbox.png"].texture);
      tickbox.x = (renderer.screen.right /2) - (tickbox.width/2);
      tickbox.y = (renderer.screen.bottom /2) - (tickbox.height/2) - 50;

      var logo = new PIXI.Sprite(PIXI.loader.resources["images/darkliahoslogo.png"].texture);
      logo.x = (renderer.screen.right /9);
      logo.y = (renderer.screen.bottom /2);

      stage.addChild(tickbox);
      stage.addChild(logo);
      renderer.render(stage);

  }



