function preload(){

}
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
classifier = ml5.imageClassifier('MobileNet', modelLoaded)
}
function modelLoaded(){
  console.log("Models (1m+) have been loaded.")
}
function draw(){
image(video, 0, 0, 300, 300);
classifier.classify(video, gotResult)
}
function gotResult(error, results){
  if(error){
  console.log(error)
  }
  else{
    console.log(results)
    document.getElementById("object_name").innerHTML = results[0].label
    document.getElementById("accuracy_value").innerHTML = results[0].confidence.toFixed(3)
  }
  }
