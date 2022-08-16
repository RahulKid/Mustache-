function preload() {
    mustache_image = loadImage('https://i.postimg.cc/J7TZQ2HT/moustache-PNG38.png')
}

noseX=0;
noseY=0;

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('Pose Is Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("nose x =" + results[0].pose.nose.x)
        console.log("nose y =" + results[0].pose.nose.y)
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache_image, noseX-10, noseY-10, 50, 50);
}

function take_snapshot() {
    save('myMustacheImage.jpg'); 
}