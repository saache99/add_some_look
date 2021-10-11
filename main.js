function preload()
{

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelReady);
    poseNet.on('pose',getPoses);
}
function draw()
{
 image(video,0,0,300,300)
}
function save_it()
{
    save('myFilterImage.png');
}
function modelReady()
{
    console.log("Ready");
}
function getPoses(results)
{
    if(results.length > 0)
    {
        console.log("x" + results[0].pose.nose.x);
        console.log("y" + results[0].pose.nose.y);
    }
}