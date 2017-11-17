function setup() {
  createCanvas(500,400)
}

function draw() {
  background(0)
  fill(250)

  var x = 50

  
  for (var count = 0; count < 8; count++) {
    rect(x++, height/2, 40, 40)
    
    if (count%2===0){
      fill ("blue")
    } else {
      fill ("white")
    }
    
    x += 50
  }


 

}
