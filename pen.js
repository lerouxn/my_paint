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
			ctx.lineCap = "round";
			ctx.lineJoin = "round";
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