let renaissanceImg = [];
let frame;
let phase = 'cover;'
let myFont;
let coverSize;
let studySize;
let listSize;
let retrySize;
let img = 0;
let yD = 0;
let aP = 0;
let oP = 0;
let wrds1 = '';
//let wrds2 = '';

let yourDay = ['isolation,', 'fear,', 'hope,', 'discovery,', 'happiness,', 'friendship,', 'forgiveness,','conquer,', 'thinking,','knowledge,','unity,'];

let aspect = ['along with smiles,', 'along with hugs,', 'along with laughs,', 'along with yells,', 'along with dances,', 'along with cries,', 'along with high-fives,', 'along with conversations,', 'along with discussions,', 'along with fights,'];

let opportunities = ['ending with a new friend', 'ending with a new found skill', 'ending with a new sense of determination', 'ending with a new sense of life', 'ending with a new favorite hobby', 'ending with a new sense of worth', 'ending with shame', 'ending with being content', 'ending with being in love', 'ending with being alone','ending with finding your true self'];

function preload() {
  for (i = 0; i <= 7; i++) {
  renaissanceImg[i] = loadImage('assets/paint_' + i + '.jpg');
  }
  //frame = loadImage('needs/');
  myFont = loadFont('assets/fonts/PlayfairDisplay-Regular.ttf');
}

function setup() {
  let canvas = createCanvas(windowWidth * 0.5, (windowWidth * 0.5) * 1.25);
  canvas.parent('myCanvas');
  let button = createButton('Click here to see what your day will consist of.');
  button.parent('button-holder');
  button.mousePressed(divination);
console.log(yourDay[int(random(yourDay.length))]);
 console.log(opportunities.length);
  frameRate(30);
  imageMode(CENTER);
  textAlign(CENTER);
  textFont(myFont);
  textSize(20);
  textResize();
  coverDisplay();
}

function draw() {}

function divination() {
  phase = 'operating';
  img = int(random(renaissanceImg.length));
  yD = int(random(yourDay.length));
  aP = int(random(aspect.length));
  oP = int(random(opportunities.length));
  text("Your day will consist of", width * 0.5, height * 0.26);
   wrds1 = "Your day will consist of " + yourDay[yD] + " " + aspect[aP] + " " + opportunities[oP] + ".";
  console.log(wrds1);
 // console.log(wrds2);
  divImage();
  divText();
}

  function coverDisplay() {
  //image(frame, width * 0.5, height * 0.5, width, height);
  textSize(coverSize);
  text('Press the button below', width * 0.5, height * 0.4);
  text('to see how your day will go.', width * 0.5, height * 0.5);
  }

function divImage() {
  //background(255);
  //image(frame, width * 0.5, height * 0.5, width, height);
  image(renaissanceImg[img], width * 0.5, height * 0.5, width * 0.8, width * 1.0);
}

function divText() {
  textSize(listSize);
  text(wrds1, width / 2, height * 0.95);
  textSize(retrySize);
}

function textResize() {
  if (windowWidth > 1500) {
    coverSize = 40;
    studySize = 30;
    listSize = 18;
    retrySize = 16;
  } else if (windowWidth > 1200) {
    coverSize = 34;
    studySize = 26;
    listSize = 14;
    retrySize = 12;
  } else if (windowWidth > 900) {
    coverSize = 30;
    studySize = 20;
    listSize = 12;
    retrySize = 10;
  } else if (windowWidth > 600) {
    coverSize = 24;
    studySize = 18;
    listSize = 10;
    retrySize = 9;
  }
}

function windowResized() {
  resizeCanvas(windowWidth * 0.5, (windowWidth * 0.5) * 1.25);
  if (phase == 'cover') {
    coverDisplay();
  } else if (phase == 'operating') {
    divImage();
    divText();
  }
  textResize();
}
