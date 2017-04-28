var Container = PIXI.Container, 
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite;
    Rectangle = PIXI.Rectangle;

    var stage = new Container(),
    renderer = autoDetectRenderer(512,512);
    document.body.appendChild(renderer.view);

    loader.add("images/citytileset.png")
            .on("progress", loadProgressHandler).load(setup);

function loadProgressHandler(loader, resource){
    //TODO: Some logging here
}

function setup(){
    var tileSet = TextureCache['images/citytileset.png'];
    var rectangle = new Rectangle(32, 0, 32, 32);
    tileSet.frame = rectangle;

    for(i = 0; i < 512; i++){
        var grassBlock = new Sprite(tileSet);
    grassBlock.x = i * 32;
    grassBlock.y = 32;
    stage.addChild(grassBlock);
    }


    renderer.render(stage); 
}