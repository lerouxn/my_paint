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