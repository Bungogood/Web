const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let angle = 0;
let radius = [50, 0, 50/3, 0, 50/5];
let theta = [0, 0, 0, 0, 0];

function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.stroke();
}

function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function shift_canvas(dx) {
    var imageData = ctx.getImageData(149, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imageData, 149+dx, 0);
  }

function init() {
    window.requestAnimationFrame(_draw);
}

function draw() {
    shift_canvas(1);
    let x = 50;
    let y = 50;
    for (let i=0; i<radius.length; i++) {
        circle(x, y, radius[i]);
        let nx = x + radius[i] * Math.cos((i+1)*(angle+theta[i]));
        let ny = y + radius[i] * Math.sin((i+1)*(angle+theta[i]));
        line(x, y, nx, ny);
        x = nx;
        y = ny;
    }
    line(x, y, 150, y)
    angle += 0.02;
    window.requestAnimationFrame(draw);
}

function _draw() {
    var imageData = ctx.getImageData(200-1, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imageData, 200, 0);
    let x = 50;
    let y = 50;
    for (let i=0; i<10; i++) {
        circle(x, y, 50/(2*i+1));
        let nx = x + 50/(2*i+1) * Math.cos((2*i+1)*angle);
        let ny = y + 50/(2*i+1) * Math.sin((2*i+1)*angle);
        line(x, y, nx, ny);
        x = nx;
        y = ny;
    }
    line(x, y, 200, y)
    angle += 0.02;
    window.requestAnimationFrame(_draw);
}

init();

class sqr {
    constructor(n, y) {
        window.requestAnimationFrame(this.draw);
    }

    draw() {
        var imageData = ctx.getImageData(200-1, 0, canvas.width, this.y+150);
        ctx.clearRect(0, 0, canvas.width, this.y+150);
        ctx.putImageData(imageData, 200, this.y);
        let x = 50;
        let y = 50;
        for (let i=0; i<10; i++) {
            circle(x, y, 50/(2*i+1));
            let nx = x + 50/(2*i+1) * Math.cos((2*i+1)*angle);
            let ny = y + 50/(2*i+1) * Math.sin((2*i+1)*angle);
            line(x, y, nx, ny);
            x = nx;
            y = ny;
        }
        line(x, y, 200, y)
        angle += 0.02;
        window.requestAnimationFrame(this.draw);
    }
}

/*
function simpsons(f, a, b, n=10) {
    let dx = (b - a) / n;
    let t = f(a) + 4*f(a+dx);
    for (let c = a+2*dx; c < b; c += 2*dx) {
        t += 2*f(c) + 4*f(c+dx);
    }
    t += f(b);
    return t * (dx / 3);
}

function a(s, n, P) {
    let f = x => s(x) * Math.cos(2*Math.PI*x*(n/P))
    return (2 / P) * simpsons(f, 0, P);
}

function b(s, n, P) {
    let f = x => s(x) * Math.sin(2*Math.PI*x*(n/P))
    return (2 / P) * simpsons(f, 0, P);
}

function f(x) {
    return 1/(1 + x**5)
}

function g(x) {
    return x
}
*/