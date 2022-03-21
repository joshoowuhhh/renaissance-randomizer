let paintingImg = []
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
  for (i = 0; i <= 20; i++) {
    renaissanceImg[i] = loadImage('needs/' + [i] + '.jpg');
  }
  frame = loadImage('needs/frame2.jpg');
  myFont = loadFont('needs/fonts/PlayfairDisplay-Regular.ttf');
}

function setup() {
  let canvas = createCanvas(windowWidth * 0.5, (windowWidth * 0.5) * 1.25);
  canvas.parent('myCanvas');
  let button = createButton('Click here to see what your day will consist of.');
  button.parent('button-holder');
  button.mousePressed(divination);
  frameRate(30);
  imageMode(CENTER);
  textAlign(CENTER);
}

function divination() {
  phase = 'operating';
  img = int(random(renaissanceImg.length));
    yD = int(random(yourDay.length));
  aspect = int(random(aspect.length));
  oP = int(random(opprotunities.length));
     //fort = int(random(fortunes.length));
  //fort2 = int(random(fortunes2.length));
  //fort3 = int(random(fortunes3.length));
  wrds1 = 'Your day will ' + yourDay[yD] + ' ' + fortunes[fort];
    // wrds2 = 'Aspects of your day will ' + leaves[leaf] + ' ' + fortunes2[fort2];
  //wrds3 = 'New opprotunities such as ' + flowers[flow] + ' ' + fortunes3[fort3];
  console.log(wrds1);
 // console.log(wrds2);
  divImage();
  divText();
}

  function coverDisplay() {
  image(frame, width * 0.5, height * 0.5, width, height);
  textSize(coverSize);
  text('Press the button below', width * 0.5, height * 0.4);
  text('to see what your day holds before you.', width * 0.5, height * 0.5);
  }

function divImage() {
  //background(255);
  image(frame, width * 0.5, height * 0.5, width, height);
  image(renaissanceImg[img], width * 0.5, height * 0.4, width * 0.2812, width * 0.5);
}

function divText() {
  textSize(studySize);
  text('Study the plant:', width / 2, height * 0.625);
  textSize(listSize);
  text(wrds1, width / 2, height * 0.675);
  text(wrds2, width / 2, height * 0.7);
  textSize(retrySize);
  text('If the plant matches none of these, try again.', width / 2, height * 0.8);
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
  } else if (phase == 'playing') {
    divImage();
    divText();
  }
  textResize();
}
