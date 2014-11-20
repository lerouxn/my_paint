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
	this.color = "#000000";
	this.clicked = false;
	this.pen = new Pen();
	this.rectangle = new Rectangle();
	this.line = new Line();
	this.currentTool = this.pen;
}

function Pen () {
	this.x = 0,
	this.y = 0,
	this.old_x = 0,
	this.old_y = 0,
	this.color = this.color,
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
		// console.log("x :", + x + "y : " + y);
	}
	this.onMouseUp = function (x, y) {
		
	}
	this.onMouseMove = function (x, y) {
		this.old_x = this.x;
		this.old_y = this.y;
		this.x = x;
		this.y = y;
		// console.log("x :", + x + "y : " + y);
		this.draw();
	}
}

function Rectangle() {
	this.x = 0,
	this.y = 0,
	this.old_x = 0,
	this.old_y = 0,
	this.color = this.color,
	this.draw = function () {
		// if (myPaint.clicked) {
/*			var x = this.old_x;
			var y = this.old_y;
			*/			var width = this.x - this.old_x;
			var height = this.y - this.old_y;
			console.log(this.x + " - " + this.y + " - " + this.old_x + " - " + this.old_y);

			ctx.strokeStyle = this.color;
			ctx.strokeRect(this.old_x, this.old_y, width, height);
			ctx.strokeStyle = this.color;
			console.log(this.old_x + " - " + this.old_y + " - " + width + " - " + height);
		// }
	}

	this.onMouseDown = function (x, y) {
		this.old_x = x;
		this.old_y = y;
	}
	this.onMouseUp = function (x, y) {
		// console.log("salut");
		this.x = x;
		this.y = y;
		console.log(this.x + " - " + this.y);
		// console.log("x :", + this.old_x + "y : " + this.old_y);
		this.draw();
	}
	this.onMouseMove = function (x, y) {
		
	}
}

function Line()
{
	this.draw = function()
	{
		if (myPaint.clicked) {
			ctx.beginPath();
			ctx.strokeStyle = this.color;
			ctx.moveTo(this.old_x, this.old_y);
			ctx.lineTo(this.x, this.y);
			ctx.stroke();
			ctx.closePath();
		}
	}
	this.onMouseDown = function (x, y) {
		this.old_x = x;
		this.old_y = y;
		this.onMouseMove();
		// console.log("x :", + x + "y : " + y);
	}
	this.onMouseUp = function (x, y) {

	}
	this.onMouseMove = function (x, y) {
		this.old_x = this.x;
		this.old_y = this.y;
		this.x = x;
		this.y = y;
		// console.log("x :", + x + "y : " + y);
		this.draw();
	}
}

canvas.addEventListener('mousedown', function(e) {
	myPaint.clicked = true;
	myPaint.currentTool.onMouseDown(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
});

canvas.addEventListener('mouseup', function(e) {
	myPaint.clicked = false;
	myPaint.currentTool.onMouseUp(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
});

canvas.addEventListener('mousemove', function(e) {
	myPaint.currentTool.onMouseMove(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
}, false);
