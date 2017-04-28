
var tileAddressArray = [
    { tileName: 'Grass', x: 0, y: 32 },
    { tileName: 'Grass', x: 0, y: 64 },
    { tileName: 'Grass', x: 32, y: 128 },
    { tileName: 'Grass', x: 128, y: 32 },
    { tileName: 'Grass', x: 288, y: 256 }
];


var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite;
Rectangle = PIXI.Rectangle;

var stage = new Container(),
    renderer = autoDetectRenderer(512, 512);
document.body.appendChild(renderer.view);

loader.add("images/citytileset.png")
    .on("progress", loadProgressHandler).load(setup);

function loadProgressHandler(loader, resource) {
    //TODO: Some logging here
}

function setup() {
    var tileSet = TextureCache['images/citytileset.png'];
    var rectangle = new Rectangle(32, 0, 32, 32);
    tileSet.frame = rectangle;

    tileAddressArray.forEach(function (tileAddress) {
        if (tileAddress.tileName === 'Grass') {
            var grassBlock = new Sprite(tileSet);
            grassBlock.x = tileAddress.x;
            grassBlock.y = tileAddress.y;
            stage.addChild(grassBlock);
        }
        //TODO: Allow other elements here
    });



    renderer.render(stage);
}