class GameEngine{
    static screenCanvas: HTMLCanvasElement;
    static titleImage: HTMLImageElement;
    static screenCanvasContext: CanvasRenderingContext2D;

    public static main():number{
        this.screenCanvas = <HTMLCanvasElement>document.getElementById('screen');
        this.screenCanvas.style.backgroundColor = "#000000";
        this.screenCanvasContext = this.screenCanvas.getContext('2d');

        this.titleImage = new Image();
        this.titleImage.onload = ()=> {
            this.screenCanvasContext.drawImage(this.titleImage, 0, 25, 800, 680);
            this.screenCanvasContext.font = '28px sematarymedium';
            this.screenCanvasContext.fillStyle = 'blue';
            this.screenCanvasContext.fillText('POLITICA', 290, 50);    
            
        }
        this.titleImage.src = "images/globetitle.jpg";

        return 0;
    }
}

window.onload = ()=> {
    GameEngine.main();
    var fontHack = document.getElementById('font-hack');
    fontHack.style.display = 'none'

}