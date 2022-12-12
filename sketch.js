let mic;
function setup() {
  createCanvas(800, 450);
  noFill();

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT(.9);
  fft.setInput(mic);

  frameRate(60);
}

function draw() {
  background('#fac');
  strokeWeight(5);

  stroke('#000');

  let spectrum = fft.analyze();


  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 550, height*.5, 0));
  }
  endShape();

}
