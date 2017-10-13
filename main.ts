import {app, BrowserWindow} from 'electron'
let win = null; 

app.on('ready', ()=> {
    let win = new BrowserWindow({width: 810, height: 800})
    win.loadURL(`file://${__dirname}/index.html`)
});
