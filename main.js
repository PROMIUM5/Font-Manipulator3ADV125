rightWristX = 0
leftWristX = 0
difference = 0


function setup(){
    video = createCapture(VIDEO)
    video.size(550,500)
    
    canvas = createCanvas(550,550)
    canvas.position(560,150)

    poseNet = ml5.poseNet(video,modeLoaded)
    poseNet.on("pose",gotPoses)
}
function modeLoaded(){
    console.log("poseNet is initialized")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        rightWristX = results[0].pose.rightWrist.x 
        leftWristX = results[0].pose.leftWrist.x
        difference = Math.floor(leftWristX - rightWristX)
        console.log(" rightWristX " + rightWristX + " leftWristX " + leftWristX + "difference" + difference)
    }

}
function draw(){
    background("yellow")
    textSize(difference)
    fill("crimson")
    text("Hello",50,300)
    document.getElementById("font-design").innerHTML = "the size of the text is" + difference + "px"
}



