angle = 0;
let pic;
//let cam;

function preload(){
    pic = loadImage('test.jpg');
    //cam = createCapture(VIDEO);
    //cam.hide();
    //threedee = loadModel('');
}

function setup() {
    createCanvas(400, 300, WEBGL);
}

function draw(){
    // let camX = map(mouseX, 0, width, -200, 200);
    // camera(camX, 0, (height/2) / tan(PI/6), camX, 0, 0, 0, 1, 0);

    // //pointLight(0, 0, 255, 200, 0, 0);
    // //pointLight(255, 0, 0, -200, 0, 0);
    // ambientLight(255);
    
    //ortho(-200, 200, 200, -200, -1000, 1000);

    background(175);
    noStroke();

    pointLight(255, 255, 255, 0, -200, 200);

    for (let x = -200; x < 200; x += 50){
    push();
    translate(x, 0, x - 200);
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);
    //texture(pic);
    ambientMaterial(255);
    box(50);
    //model();
    pop();
    }

    translate(0,100);
    rotateX(HALF_PI);

    plane(500, 500);

    //speed
    angle += 0.03;
}

