var rendererType = "WebGL"
var stageWidth = 900;
var stageHeight = 768;
var backgroundColour = 0x4483FF;

if(!PIXI.utils.isWebGLSupported()){
      rendererType = "canvas"
    }

PIXI.utils.sayHello(rendererType)

var app = new PIXI.Application(stageWidth, stageHeight, {backgroundColor : backgroundColour});
document.body.appendChild(app.view);

  var fileInput = 'data/cities.txt';
    $.get(fileInput).done(
    function (data) {
      var cityIndex = Math.floor(Math.random() * (data.length - 1)) + 1;
      var cities = data.split('\n');
      var cityName = cities[cityIndex - 1];
    var textSample = new PIXI.Text(cityName, {
        fontFamily: 'Arial',
        fontSize: 35,
        fill: 'white', 
        align : 'center'
    });
    textSample.position.set(400, 30);

app.stage.addChild(textSample);

    });


