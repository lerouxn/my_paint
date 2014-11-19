'use strict';

var canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var sketch = document.querySelector('#meinPaint');

var myPaint = new MyPaint();


function MyPaint() {
	this.mouse = {
		x: 0,
		y: 0
	}
	this.clicked = false;
	this.pen = new Pen();
	this.rectangle = new Rectangle();
	this.currentTool = this.pen;
}

function Pen () {
	this.x = 0,
	this.y = 0,
	this.old_x = 0,
	this.old_y = 0,
	this.color = "#000000",
	this.draw = function () {
		if (myPaint.clicked) {
			ctx.beginPath();
			ctx.strokeStyle = this.color;
			ctx.moveTo(this.old_x, this.old_y);
			ctx.lineTo(this.x, this.y);
			ctx.stroke();
		}
	}
	this.onMouseDown = function (x, y) {
		this.old_x = x;
		this.old_y = y;
		console.log("x :", + x + "y : " + y);
	}
	this.onMouseUp = function (x, y) {
		
	}
	this.onMouseMove = function (x, y) {
		this.old_x = this.x;
		this.old_y = this.y;
		this.x = x;
		this.y = y;
		console.log("x :", + x + "y : " + y);
		this.draw();
	}
}

function Rectangle()
{

	
	this.onMouseDown = function (x, y) {
		this.old_x = x;
		this.old_y = y;
		console.log("x :", + x + "y : " + y);
	}
	this.onMouseUp = function (x, y) {
		
	}
	this.onMouseMove = function (x, y) {
		this.old_x = this.x;
		this.old_y = this.y;
		this.x = x;
		this.y = y;
		console.log("x :", + x + "y : " + y);
		this.draw();
	}
}

canvas.addEventListener('mousedown', function(e) {
	myPaint.clicked = true;
	myPaint.currentTool.onMouseDown(e.pageX, e.pageY);
});

canvas.addEventListener('mouseup', function(e) {
	myPaint.clicked = false;
	myPaint.currentTool.onMouseUp();
});

canvas.addEventListener('mousemove', function(e) {
	/*pen.old_x = pen.x;
	pen.old_y = pen.y;*/
	myPaint.currentTool.onMouseMove(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
}, false);