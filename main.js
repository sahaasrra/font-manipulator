difference = 0 ;
rightWristX = 0 ;
leftWristX = 0 ;

function setup()
{
     video = createCapture(VIDEO);
     video.size(560,530);

     canvas = createCanvas(450,420);
     canvas.position(560,130);

     poseNet = ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
}
function draw()
{
    background('#6bfca0');
    textSize(difference);
    fill('#FFE787');
    text('chinnu',25,250);
}
function modelLoaded()
{
    console.log('poseNet is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor( leftWristX - rightWristX );
    }
}
