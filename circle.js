function Circle()
{
	this.x = 0,
	this.y = 0,
	this.old_x = 0,
	this.old_y = 0,
	this.color = this.color,
	this.draw = function()
	{
		if (myPaint.clicked) {
			var x = (this.x + this.old_x) / 2;
			var y = (this.y + this.old_y) / 2;

			var radius = Math.max(
				Math.abs(this.x - this.old_x),
				Math.abs(this.y - this.old_y)
				) / 2;
			tmp_ctx.beginPath();
			tmp_ctx.arc(x, y, radius, 0, Math.PI*2, false);
			tmp_ctx.strokeStyle = this.color;
			tmp_ctx.stroke();
			tmp_ctx.strokeStyle = this.color;
			tmp_ctx.closePath();
		}
	}
	this.onMouseDown = function (x, y) {
		this.old_x = x;
		this.old_y = y;
	}
	this.onMouseUp = function (x, y) {
		var x = (this.x + this.old_x) / 2;
		var y = (this.y + this.old_y) / 2;

		var radius = Math.max(
			Math.abs(this.x - this.old_x),
			Math.abs(this.y - this.old_y)
			) / 2;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI*2, false);
		ctx.strokeStyle = this.color;
		ctx.stroke();
		ctx.strokeStyle = this.color;
		ctx.closePath();
	}
	this.onMouseMove = function (x, y) {
		this.x = x;
		this.y = y;
		tmp_ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.draw();
	}
}