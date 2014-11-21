'use strict';

// Canvas
var canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var canvasZone = document.querySelector('#meinPaint');

// Canvas temporaire

var tmp_canvas = document.createElement('canvas');
var tmp_ctx = tmp_canvas.getContext('2d');
tmp_canvas.id = "tmp_canvas";
tmp_canvas.width = canvas.width;
tmp_canvas.height = canvas.height;
canvasZone.appendChild(tmp_canvas);

// Code

var myPaint = new MyPaint();

function MyPaint() {
	this.mouse = {
		x: 0,
		y: 0
	}
	this.color = "#000000";
	this.toolSize = ctx.lineWidth = 5;
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
	this.toolSize = this.toolSize,
	this.draw = function () {
		if (myPaint.clicked) {
			ctx.beginPath();
			ctx.lineWidth = this.toolSize;
			ctx.strokeStyle = this.color;
			ctx.moveTo(this.old_x, this.old_y);
			ctx.lineTo(this.x, this.y);
			ctx.stroke();
		}

	}
	this.onMouseDown = function (x, y) {
		this.old_x = x;
		this.old_y = y;
	}
	this.onMouseUp = function (x, y) {
		
	}
	this.onMouseMove = function (x, y) {
		this.old_x = this.x;
		this.old_y = this.y;
		this.x = x;
		this.y = y;
		this.draw();
	}
}

function Rectangle() {
	this.x = 0,
	this.y = 0,
	this.old_x = 0,
	this.old_y = 0,
	this.color = this.color,
	this.toolSize = this.toolSize,
	this.draw = function () {
		if (myPaint.clicked) {		
			var width = this.x - this.old_x;
			var height = this.y - this.old_y;
			tmp_ctx.beginPath();
			tmp_ctx.lineWidth = this.toolSize;
			tmp_ctx.strokeStyle = this.color;
			tmp_ctx.strokeRect(this.old_x, this.old_y, width, height);
			tmp_ctx.strokeStyle = this.color;
		}
	}

	this.onMouseDown = function (x, y) {
		this.old_x = x;
		this.old_y = y;
	}
	this.onMouseUp = function (x, y) {
		this.x = x;
		this.y = y;
		var width = this.x - this.old_x;
		var height = this.y - this.old_y;
		ctx.beginPath();
		ctx.lineWidth = this.toolSize;
		ctx.strokeStyle = this.color;
		ctx.strokeRect(this.old_x, this.old_y, width, height);
		ctx.strokeStyle = this.color;
	}
	this.onMouseMove = function (x, y) {
		this.x = x;
		this.y = y;
		tmp_ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.draw();

	}
}

function Line()
{
	this.x = 0,
	this.y = 0,
	this.old_x = 0,
	this.old_y = 0,
	this.color = this.color,
	this.toolSize = this.toolSize,
	this.draw = function()
	{
		if (myPaint.clicked) {
			tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
			tmp_ctx.beginPath();
			tmp_ctx.lineWidth = this.toolSize;
			tmp_ctx.moveTo(this.old_x, this.old_y);
			tmp_ctx.lineTo(this.x, this.y);
			tmp_ctx.strokeStyle = this.color;
			tmp_ctx.stroke();
			tmp_ctx.closePath();
		}
	}
	this.onMouseDown = function (x, y) {
		this.old_x = x;
		this.old_y = y;
		this.onMouseMove();
	}
	this.onMouseUp = function (x, y) {
		ctx.beginPath();
		ctx.lineWidth = this.toolSize;
		ctx.moveTo(this.old_x, this.old_y);
		ctx.lineTo(this.x, this.y);
		ctx.strokeStyle = this.color;
		ctx.stroke();

	}
	this.onMouseMove = function (x, y) {
		this.x = x;
		this.y = y;
		tmp_ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.draw();
	}
}

/*function Circle()
{
	this.x = 0,
	this.y = 0,
	this.old_x = 0,
	this.old_y = 0,
	this.color = this.color,
	this.draw = function()
	{
		if (myPaint.clicked) {

		}
	}
	this.onMouseDown = function (x, y) {

	}
	this.onMouseUp = function (x, y) {

	}
	this.onMouseMove = function (x, y) {

	}
}*/

tmp_canvas.addEventListener('mousedown', function(e) {
	e.preventDefault();
	myPaint.clicked = true;
	myPaint.currentTool.onMouseDown(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
});

tmp_canvas.addEventListener('mouseup', function(e) {
	e.preventDefault();
	myPaint.clicked = false;
	myPaint.currentTool.onMouseUp(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
});

tmp_canvas.addEventListener('mousemove', function(e) {
	e.preventDefault();
	myPaint.currentTool.onMouseMove(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
}, false);