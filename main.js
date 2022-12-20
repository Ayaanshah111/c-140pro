function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.hide();
	poseNet=ml5.poseNet(video,modalLoaded)
}

function draw() {
	game()
	image(video,0,0,1240,336);
}






