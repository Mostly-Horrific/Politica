class GameEngine{
    public screenCanvas: HTMLCanvasElement;
    public screenCanvasContext: CanvasRenderingContext2D;
    public gameState: GameState;

    constructor() {
        this.screenCanvas = <HTMLCanvasElement>document.getElementById('screen');
        this.screenCanvas.style.backgroundColor = "#000000";
        this.screenCanvasContext = this.screenCanvas.getContext('2d');
    }    
}

enum GameState {
    Title,
    IntroScreen
}

function SetUpTitle(gameObject: GameEngine){
    var titleImage: HTMLImageElement;
    this.titleImage = new Image();
    this.titleImage.src = "images/globetitle.jpg";
    
    this.titleImage.onload = ()=> {
        gameObject.screenCanvasContext.drawImage(this.titleImage, 0, 25, 800, 680);
        gameObject.screenCanvasContext.font = '28px sematarymedium';
        gameObject.screenCanvasContext.fillStyle = 'yellow';
        gameObject.screenCanvasContext.fillText('POLITICA', 290, 50);    
        gameObject.screenCanvasContext.fillText('Press Space to start', 242, 350);    
    }
    gameObject.gameState = GameState.Title;
}

function InitStartGameScreen(gameObject: GameEngine){
    gameObject.screenCanvasContext.clearRect(0, 0, gameObject.screenCanvas.width, gameObject.screenCanvas.height);
    alert('If I could be bothered to do anything, this would be awesome indeed');
    gameObject.gameState = GameState.IntroScreen;
    alert(gameObject.gameState);
}

function keyBoardInput(event: KeyboardEvent, gameEngineObject: GameEngine){
    if(event.keyCode == 32){
        InitStartGameScreen(gameEngineObject);
    }
    if(event.keyCode == 8){
        SetUpTitle(gameEngineObject);
    }
}

window.onload = ()=> {
    var gameEngineObject = new GameEngine();
    var fontHack = document.getElementById('font-hack');
    document.addEventListener('keydown', (e)=> {keyBoardInput(e, gameEngineObject)});
    SetUpTitle(gameEngineObject);
    fontHack.style.display = 'none'

}

