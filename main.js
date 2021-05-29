canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
carWidth = 100;
carHeight = 90;
car_1_X = 250;
car_1_Y = 350;
car_2_X = 250;
car_2_Y = 250;
backroundImg = "Canvas_Bg.jpg";
carImg_1 = "Car_1.png";
carImg_2 = "Car_2.png";

function add() {
    backroundImg_tag = new Image();
    backroundImg_tag.onload = uplodeBackround;
    backroundImg_tag.src = backroundImg;

    car_1_Img_tag = new Image();
    car_1_Img_tag.onload = uplodeCar_1;
    car_1_Img_tag.src = carImg_1;

    car_2_Img_tag = new Image();
    car_2_Img_tag.onload = uplodeCar_2;
    car_2_Img_tag.src = carImg_2;
}

function uplodeBackround() {
    ctx.drawImage(backroundImg_tag, 0, 0, canvas.width, canvas.height);
}

function uplodeCar_1() {
    ctx.drawImage(car_1_Img_tag, car_1_X, car_1_Y, carWidth, carHeight);
}

function uplodeCar_2() {
    ctx.drawImage(car_2_Img_tag, car_2_X, car_2_Y, carWidth, carHeight);
}

window.addEventListener("keydown", myKeyDown)

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == 37) {
        left();
    }

    if(keyPressed == 40) {
        down();
    }

    if(keyPressed == 39) {
        right();
    }

    if(keyPressed == 38) {
        up();
    }
}

function myAlfDown(f) {
    keyPressed = f.keyCode;
    console.log(keyPressed);
    if(keyPressed == 65) {
        l();
    }

    if(keyPressed == 83) {
        d();
    }

    if(keyPressed == 68) {
        r();
    }

    if(keyPressed == 87) {
        u();
    }
}

