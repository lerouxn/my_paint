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