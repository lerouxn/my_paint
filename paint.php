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
			<li onclick="myPaint.currentTool = myPaint.pen"><button>Crayon</button></li>
			<li onclick="myPaint.currentTool = myPaint.rectangle"><button>Rectangle</button></li>
			<li onclick="myPaint.currentTool = myPaint.circle"><button>Cercle</button></li>
			<li onclick="myPaint.currentTool = myPaint.ellipse"><button>Ellipse</button></li>
			<li onclick="myPaint.currentTool = myPaint.line"><button>Ligne</button></li>
			<li onclick="myPaint.currentTool = myPaint.autoline"><button>Auto ligne</button></li>
			<li onclick="myPaint.currentTool = myPaint.eraser"><button>Gomme</button></li>
			<li><button>Surprise !</button></li>
		</ul>
	</div>
	<div id="meinPaint">
		<canvas id="myCanvas" width="800" height="600"></canvas>
	</div>
	<script src="my_script.js"></script>
</body>
</html>