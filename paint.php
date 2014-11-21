<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Paint</title>
	<link rel="stylesheet" href="style.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</head>
<body>
	<div class="panel">
		couleurs <input type="color" onchange="myPaint.currentTool.color = this.value">
		<ul>
			<li onclick="myPaint.currentTool = myPaint.pen"><a>crayon</a></li>
			<li onclick="myPaint.currentTool = myPaint.rectangle"><a>rectangle</a></li>
			<li>cercles</li>
			<li onclick="myPaint.currentTool = myPaint.line"><a>ligne</a></li>
			<li>bite</li>
		</ul>
	</div>
	<div id="meinPaint">
		<canvas id="myCanvas" width="800" height="600"></canvas>
	</div>
	<script src="my_script.js"></script>
</body>
</html>