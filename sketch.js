//var Font;
//function preload() {
 // Font = loadFont("LeagueSpartan-Bold.otf");}


let p1 = `As I stand on this street corner and watch these two roads meet, I suddenly feel at peace.
Maybe it's because because it's a reminder of you and me, and the blissful bond we once shared.
Two souls kept warm by each other's company.
You want me to be yours, and I want you to be mine.
Maybe time has finally outplayed me.
...maybe I'm in over my head...
I don't know, maybe this is normal...
Maybe I failed and I couldn't clean up the mess
Maybe that's why, whenever I try to apologize, I don't know where to begin or where to end
Maybe I fucked up and I won't admit it,
Seems like I've got all the time in the world, maybe I should do something about it, I mean...
Maybe I'm a fool for distancing myself from you...
couldn't accept the MAYBE...
you might've loved me, too...`;

let p2 = `Maybe it's because at my feet lies the intersection of two distinct paths merging at a point of vulnerability.
Without a care in the world, my arms wrapped around you to shelter you from the cold.
Two hearts dancing in the rain playfully, two minds with the same thing in mind.
I don't know, maybe I'm crazy...
Maybe I've stopped beauty in the little things, maybe I've stopped appreciating the little gift life brings...
Or maybe I just miss the familiar contours of your body under the chalk white sheets of my head.
Maybe I stopped being myself after you left, maybe this is all a test
Maybe that's why the rain suddenly feels colder on my skin
All these things that I typed up in my mind and I wanna tell, but I just can't bring myself to hit send...
maybe I'm a coward...
Every minute without you feels like an hour.
Maybe that's why I couldn't admit that I loved you, 'cause for some reason...
JUST maybe...

Maybe, by Igor Oro`
let img;
let img2;

function setup() {
  createCanvas(820, 600);
  img = loadImage('couple-kiss.gif')
    img2 = loadImage('original.gif') //PUT NEW IMAGE HERE
}

function draw() {
  //fill(106,13,173);
  //noStroke();
  //textSize(12)
  //textFont("Futura");
  //textFont(Font);
  //textLeading(30);
 // text(p1,30,20)
  image(img,0,0);
  if(mouseX > 100 && mouseIsPressed){
  //fill(255,106,0)
    noStroke();
  textSize(12)
    textFont("Futura");
    textLeading(30)
  //textFont(Font);
  fill(106,20,200);  
  text(p1,30,20)
  fill(255,106,0) 
  text(p2,30,32)}
  
  else{
    image(img2,0,0,width,height) //UNCOMMENT THIS
    fill(106,20,200);
  noStroke();
  textSize(12)
  textFont("Futura");
    textLeading(30)
    text(p1,30,20) } 
}