//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
rover_width=75;
rover_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
rover_X=5;
rover_Y=225;  

function add() {
	//upload car, and background images on the canvas.
	background_imagetag= new Image();
    background_imagetag.onload= uploadBackground;
    background_imagetag.src= background_image; 
    
	rover_imagetag= new Image();
    rover_imagetag.onload= uploadgreencar;
    rover_imagetag.src= greencar_image;  
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(rover_imagetag,rover_X,rover_Y,rover_width,rover_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if(rover_Y>=0){
        rover_Y=rover_Y-10;
        console.log("when up arrow is pressed ,x="+rover_X+"y="+rover_Y);
        uploadBackground();
        uploadgreencar();
    }
}

function down(){
    if(rover_Y<=500){
        rover_Y=rover_Y+10;
        console.log("when up arrow is pressed ,x="+rover_X+"y="+rover_Y);
        uploadBackground();
        uploadgreencar();
    }
}

function left(){
    if(rover_X>=0){
        rover_X=rover_X-10;
        console.log("when up arrow is pressed ,x="+rover_X+"y="+rover_Y);
        uploadBackground();
        uploadgreencar();
    }
}

function right(){
    if(rover_X>=0){
        rover_X=rover_X+10;
        console.log("when up arrow is pressed ,x="+rover_X+"y="+rover_Y);
        uploadBackground();
        uploadgreencar();
    }
}