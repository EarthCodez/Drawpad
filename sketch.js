var sslide;
var rslide,bslide,gslide;
var cbutton,ebutton,dbutton,fbutton,gbutton,hbutton;
var cob1,cob2,cob3;
var state="nod";
var ms;
var ssr;
var c1,c2,c3;
//locations
var by=[86,108,130,20,42,64],sy=[86,108,130,0],msp=[152];
function setup() {
  createCanvas(windowWidth-200,windowHeight);
//slider
  rslide= createSlider(0,255,0);
  gslide= createSlider(0,255,0);
  bslide= createSlider(0,255,0);
  sslide= createSlider(0,200,0);
  rslide.position(width,sy[0]);
  bslide.position(width,sy[1]);
  gslide.position(width,sy[2]);
  sslide.position(width,sy[3]);
  rslide.hide();
  gslide.hide();
  bslide.hide();
  //button
  fbutton= createButton("color settings");
  ebutton= createButton("color");
  gbutton=createButton("savecolor");
  hbutton=createButton("choosecolor");
  cbutton= createButton("clear");
  dbutton= createButton("download your pic");
  ebutton.position(width,by[0]);
  gbutton.position(width,by[1]);
  hbutton.position(width,by[2]);
  fbutton.position(width,by[3]);
  cbutton.position(width,by[4]);
  dbutton.position(width,by[5]);
  // ebutton.hide();
  // gbutton.hide();
  // hbutton.hide();
  //dropdowns
  ms=createSelect();
  ms.option("circle");
  ms.option("square");
  ms.option("triangle");
  background("black");
  ms.position(width,msp[0]);
 //createP("(size rgb ) and r g b won't be captured in pic it will appear the fill selected & my brand name(not selling anything) , for comments message me at parameshgaming30@gmail.com")
}

function draw() {
  textSize(20);
  frameRate(60)
  noStroke();
  fill("white");
  rectMode(CENTER);
  if(mouseIsPressed){
    fill(rslide.value(),gslide.value(),bslide.value());
    if(ms.value()=="circle"){
   ellipse(mouseX,mouseY,sslide.value(),sslide.value()); 
    }
    else if(ms.value()=="square"){
      rect(mouseX,mouseY,sslide.value(),sslide.value());
    }
    else if(ms.value()=="triangle"){
      triangle(mouseX-sslide.value(), mouseY+sslide.value(), mouseX+sslide.value(), mouseY+sslide.value(), mouseX, mouseY-sslide.value())
    }
    rect(50,50,100,100);
  }
  if(mouseIsPressed){
    state="d";
  }
  
  if(state=="nod"){
     text(rslide.value(),30,30);  
     text(gslide.value(),30,50); 
     text(bslide.value(),30,70); 
     text("r",10,30);  
     text("g",10,45); 
     text("b",10,70); 
}
ssr=sslide.value()
  cbutton.mousePressed(cllear);
  dbutton.mousePressed(download);
  ebutton.mousePressed(godo);
  // if(frameCount%2000==0){
  //   rslide.hide();
  //   gslide.hide();
  //   bslide.hide();
  //   ebutton.hide();
  // gbutton.hide();
  // hbutton.hide();
  // }
  fbutton.mousePressed(godoo);
  gbutton.mousePressed(lesa);
  hbutton.mousePressed(lech);
}
function cllear(){
  fill('black');
  sslide.value(0);
  rslide.value(0);
  gslide.value(0);
  bslide.value(0);
 ellipse(200,200,10000,10000);
//  console.log(sslide.value());
//  mouseReleased(sslide.value(0));
}
function download(){
  state="d";
  if(state=="d"){
  fill(rslide.value(),gslide.value(),bslide.value());
  rect(50,50,100,100);
  rect(20,height-20,70,20);
    fill("white");
    textSize(10);
     text("EarthCodes",5,10);
  save();
  }
}


function mouseReleased(){
    (state="nod");
}

function godo(){
  ebutton.hide();
  gbutton.hide();
  hbutton.hide();
  rslide.show();
  gslide.show();
  bslide.show();
  
}

function godoo(){
  rslide.hide();
  gslide.hide();
  bslide.hide();
  ebutton.show();
  gbutton.show();
  hbutton.show();
}

function lesa(){
  c1=rslide.value();
  c2=gslide.value();
  c3=bslide.value();
  console.log(sacol);
}

function lech(){
   rslide.value(c1);
   gslide.value(c2);
   bslide.value(c3);
}
