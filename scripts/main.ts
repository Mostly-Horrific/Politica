class Start{
    static screenCanvas: HTMLCanvasElement;
    static titleImage: HTMLImageElement;

    public static main():number{
        this.screenCanvas = <HTMLCanvasElement>document.getElementById('screen');
        this.screenCanvas.style.backgroundColor = "#f0c108";
        this.screenCanvas.getContext('2d').font = '28px sematarymedium';
        this.screenCanvas.getContext('2d').fillText('POLITICA', 290, 50);
        this.titleImage = new Image();
        this.titleImage.src = "../images/globetitle.jpg";
        
        this.screenCanvas.getContext('2d').drawImage(this.titleImage, 33, 71, 600, 400, 21, 20, 287, 104);
        return 0;
    }
}

window.onload = ()=> {
    Start.main();
    var fontHack = document.getElementById('font-hack');
    fontHack.style.display = 'none'

}
