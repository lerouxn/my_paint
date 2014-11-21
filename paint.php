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
		taille <input type="range" min="5" max="20" onclick="myPaint.currentTool.toolSize = this.value">

		<ul>
			<li onclick="myPaint.currentTool = myPaint.pen">crayon</li>
			<li onclick="myPaint.currentTool = myPaint.rectangle">rectangle</li>
			<li>Cercle</li>
			<li onclick="myPaint.currentTool = myPaint.line">ligne</li>
			<li>bite</li>
		</ul>
	</div>
	<div id="meinPaint">
		<canvas id="myCanvas" width="800" height="600"></canvas>
	</div>
	<script src="my_script.js"></script>
</body>
</html>