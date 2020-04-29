angle = 0;

function setup() {
createCanvas(400, 300, WEBGL);
}

function draw(){
pointLight(0, 0, 255, 200, 0, 0);
pointLight(255, 0, 0, -200, 0, 0);

background(175);


//translate(0,0, mouseX);
rotateX(angle);
rotateY(angle * 0.3);
rotateZ(angle * 1.2);



//fill('green');
noStroke();
ambientMaterial(255);
sphere(100);
angle += 0.03;

}
