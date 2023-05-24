
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//background color
ctx.fillStyle = '#87ceeb';
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Create shape and add for loop to repeat items
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff9933';
ctx.stroke();


ctx.fillStyle = '#228b22';
ctx.fillRect(0, 400, canvas.width, 200);

ctx.fillStyle = '#8b4513';
ctx.fillRect(300, 300, 200, 100);
ctx.fillStyle = 'white';
ctx.fillRect(350, 350, 50, 50);


for(var i = 0; i < canvas.width; i += 20) {
    ctx.fillStyle = 'green';
    ctx.fillRect(i, 590, 10, 10);
}

ctx.font = '30px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('First cartoon project made by Elmira!', 200, 50);