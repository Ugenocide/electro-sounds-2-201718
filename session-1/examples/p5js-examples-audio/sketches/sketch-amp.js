var mic, analyzer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  mic = new p5.AudioIn();
  mic.start();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mic);
}

function draw() {
  background(0,255,128);
  fill(128,0,255);

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  //console.log(rms);

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, 10+rms*200, 10+rms*200);
}
