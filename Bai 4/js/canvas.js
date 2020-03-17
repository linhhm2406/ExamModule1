let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

function renderCanvasBackground(width, height) {
    ctx.beginPath();
    ctx.fillStyle = 'lightgrey';
    ctx.rect(0,0,width,height);
    ctx.fill();
    ctx.closePath();
}