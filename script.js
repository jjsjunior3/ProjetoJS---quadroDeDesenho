//Initial Data
let currentColor = 'black';
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

//Events
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

document.querySelector('.clear').addEventListener('click', clearScreen);

//Functions
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop
}
function mouseMoveEvent(e) {
    if(canDraw) {
        draw(e.pageX, e.pageY);
    }

}
function mouseUpEvent() {
    canDraw = false;
}
function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    //Desenhar
    ctx.beginPath(); //começando 
    ctx.lineWidth = 5;//espersura
    ctx.lineJoin = "round";//formato da linha, aqui uma bola
    ctx.moveTo(mouseX, mouseY);//move o cursor, posiçãoincial
    ctx.lineTo(pointX, pointY);// fazer uma linha 
    ctx.closePath();//fechar o processo
    ctx.strokeStyle = currentColor;// a cor da linha
    ctx.stroke();//finalizar o processo

    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0); //setando a posição do mouse
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);//limpando o quadro
}