class Start{
    static screenCanvas: HTMLCanvasElement;

    public static main():number{
        this.screenCanvas = <HTMLCanvasElement>document.getElementById('screen');
        this.screenCanvas.style.backgroundColor = "#f0c108";
        console.log("Welcome To Politca");
        return 0;
    }
}

window.onload = ()=> {
    Start.main();
}
