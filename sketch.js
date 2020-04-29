angle = 0;
let pic;
//let cam;

function preload(){
    pic = loadImage('test.jpg');
    //cam = createCapture(VIDEO);
    //cam.hide();
}

function setup() {
    createCanvas(400, 300, WEBGL);
}

function draw(){
    //pointLight(0, 0, 255, 200, 0, 0);
    //pointLight(255, 0, 0, -200, 0, 0);
    ambientLight(255);

    background(175);
    noStroke();

    push();
    //translate(0,0, mouseX);
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);


    //fill('green');
    
    //ambientMaterial(255);
    texture(pic);
    //sphere(100);
    sphere(100);
    pop();

    translate(0,100);
    rotateX(HALF_PI);
    ambientMaterial(35);
    plane(500, 500);

    //speed
    angle += 0.03;
}
