<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Paint</title>
	<link rel="stylesheet" href="style.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</head>
<body>
	<div class="paint"></div>
	<h1>mein peinture</h1>
		<div class="panel">
			<label class="font" for="color">couleurs</label><input type="color" onchange="myPaint.currentTool.color = this.value">
			<label class="font" for="color">taille</label><input type="range" min="5" max="20" onclick="myPaint.currentTool.toolSize = this.value">

			<ul>
				<li onclick="myPaint.currentTool = myPaint.pen"><button class="btn">Crayon</button></li>
				<li onclick="myPaint.currentTool = myPaint.rectangle"><button class="btn">Rectangle</button></li>
				<li onclick="myPaint.currentTool = myPaint.circle"><button class="btn">Cercle</button></li>
				<li onclick="myPaint.currentTool = myPaint.ellipse"><button class="btn">Ellipse</button></li>
				<li onclick="myPaint.currentTool = myPaint.line"><button class="btn">Ligne</button></li>
				<li onclick="myPaint.currentTool = myPaint.autoline"><button class="btn">Auto ligne</button></li>
				<li onclick="myPaint.currentTool = myPaint.eraser"><button class="btn">Gomme</button></li>
			</ul>
		</div>
		<div id="meinPaint">
			<canvas id="myCanvas" width="800" height="600"></canvas>
		</div>
	<script src="my_script.js"></script>
	<script src="mdr.js"></script>
</body>
</html>