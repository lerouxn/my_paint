function Line()
{
	this.draw = function()
	{
		if (myPaint.clicked) {
			tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
			tmp_ctx.beginPath();
			tmp_ctx.moveTo(this.old_x, this.old_y);
			tmp_ctx.lineTo(this.x, this.y);
			tmp_ctx.stroke();
			tmp_ctx.closePath();
		}
	}
	this.onMouseDown = function (x, y) {
		this.old_x = x;
		this.old_y = y;
		this.onMouseMove();
		// console.log("x :", + x + "y : " + y);
	}
	this.onMouseUp = function (x, y) {
		ctx.strokeStyle = this.color;
		ctx.lineTo(this.x, this.y);
		ctx.stroke();
		ctx.strokeStyle = this.color;
	}
	this.onMouseMove = function (x, y) {
		this.x = x;
		this.y = y;
		tmp_ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.draw();
	}
}