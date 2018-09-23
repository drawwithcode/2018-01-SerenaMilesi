function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	background(51);
}

function draw() {
	//Head
	stroke(249,245,225);
	strokeWeight(5);
	noFill();
	rect(185, 90, 100, 70, 20);

	//Legs
		noStroke();
		fill(249,245,225);
		rect(250, 340, 20, 100); //dx
		rect(200, 340, 20, 100); //sx

		//Feet
		arc(270, 440, 50, 50, PI + QUARTER_PI, TWO_PI);
		arc(200, 440, 50, 50, PI, PI+HALF_PI);

		//Dots for Legs
		noStroke();

		fill(218,74,16, 200);
		ellipse(260, 350, 10, 10);
		fill(218,74,16,130);
		ellipse(260, 370, 10, 10);
		fill(218,74,16, 60);
		ellipse(260, 390, 10, 10);

		fill(218,74,16, 200);
		ellipse(210, 350, 10, 10);
		fill(218,74,16,130);
		ellipse(210, 370, 10, 10);
		fill(218,74,16, 60);
		ellipse(210, 390, 10, 10);

		//arms
		noFill();
		stroke(226,192,39);
		arc(250, 330, 250, 250, PI, PI + QUARTER_PI); //armDown
		arc(220, 170, 250, 250,0, QUARTER_PI); //armUp

		//Hands
		noStroke();
		fill(226,192,39);
		arc(360, 160, 40, 40, 0, PI + HALF_PI, PIE);
		arc(110, 340, 40, 40, PI, PI+HALF_PI+HALF_PI+HALF_PI, PIE);

	//Body
	noStroke();
	fill(249,245,225);
	rect(200, 180, 70, 140);
	triangle(200, 180, 150, 250, 200, 320);
	triangle(270, 180, 320, 250, 270, 320);

	fill(226,192,39);
	quad(200, 180, 270, 180, 150, 250, 320, 250);

	//Eyes
	fill(226,192,39);
	ellipse(220,120,30,30);
	ellipse(255,120,30,30);

	fill(218,74,16);
	ellipse(220,120,10,15);
	ellipse(255,120,10,15);

	//Flower
		translate(265, 250);
	  noStroke();
		fill(218,74,16);
	  for (var i = 0; i < 10; i ++) {
			ellipseMode(CENTER);
	    ellipse(0, 6, 6, 20);
	    rotate(PI/5);
	  }

	//Wheel
	//lineMode(CENTER);
}
