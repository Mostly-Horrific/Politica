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

//Create a container object called the `stage`
var stage = new PIXI.Container();

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);

