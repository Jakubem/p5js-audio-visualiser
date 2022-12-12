let mic;
function setup() {
  createCanvas(1024, 450);
  noFill();

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT(.9, 32);
  fft.setInput(mic);
 
  frameRate(60);
}

function draw() {

  background(0);

  beginShape();
  stroke(2);
  let spectrum1 = fft.analyze();

  let vol = mic.getLevel();

  noStroke();

  
  for (let i = 0; i< spectrum1.length; i++){
    let x = map(i, 0, spectrum1.length, 0, width);
    let h = -height + map(spectrum1[i], 0, 255, height, 0);

    
    
    fill(100, x*.1, x*.6);
    circle(x-150, 130, h/4);
    
    fill(150, x*.6, x*.3);
    circle(x*(-1)+700, 230, (h/2)*.6);
    
    fill(0, x*.6, x*.8);
    circle(x-150, 340, h/4);
    
    fill('#f6f3');
    circle(930, 100, h/2);

  }

  endShape();
}
