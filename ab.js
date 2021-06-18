var canvas= new fabric.Canvas("mycanvas");
var playerx=10;
var playery=10;
var blockwidth= 30;
var blockheight=30;
var blockimage="";
var player="";

var left_hand=["ca_lh.png","hulk_lh.png","iron_lh.png","spiderm_lh.png","thor_lh.png"];
var right_hand=["hulk_rh.png","iron_rh.png","spiderm_rh.png","thor_rh.png"];
var body_hero=["hulkd_body.png","ironman_body.png","spiderman_body.png"];
var facey_hero=["hulk_face.png","ironman_face.png","spiderman_face.png","thor_face.png"];
var legs_both=["hulk_legs.png","ironman_legs.png","spiderman_legs.png"];

function playerupdate(){
    fabric.Image.fromURL("player12.png",function(Img){
      player=Img;
      player.scaleToWidth(150);
      player.scaleToHeight(150);
      player.set({
        top:playery, left:playerx
      });
        canvas.add(player);
    });
  }
  //image//
  
  function imageupdate(getimage){
    fabric.Image.fromURL(getimage,function(Img){
      blockimage=Img;
      blockimage.scaleToWidth(blockwidth);
      blockimage.scaleToHeight(blockheight);
      blockimage.set({
        top:playery, left:playerx
      });
        canvas.add(blockimage);
    });
  }

  //keys//

  window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypress=e.keyCode;
    console.log("keypress")

    if (keypress=="80"&&e.shiftKey==true) {
        console.log("p + shift");
        blockwidth= blockwidth+10;
        blockheight= blockheight+10;
        document.getElementById("cuwidth").innerHTML=blockwidth;
        document.getElementById("cuheight").innerHTML=blockheight;
    }

    if (keypress=="77"&&e.shiftKey==true) {
      console.log("m + shift");
      blockwidth= blockwidth-10;
      blockheight= blockheight-10;
      document.getElementById("cuwidth").innerHTML=blockwidth;
      document.getElementById("cuheight").innerHTML=blockheight;
  }


    // up, down , left and right//
    if (keypress=="38") {
    console.log("up");
     up();
  }

  if (keypress=="40") {
    console.log("down");
     down();
  }

  if (keypress=="39") {
    console.log("right");
    right();
  }

  if (keypress=="37") {
    console.log("left");
     left();
  }

    // blocks//

    if (keypress=="72") {
      console.log("h");
      randomlh= Math.floor(Math.random()*5);
       imageupdate(left_hand(randomlh));
    }

    if (keypress=="82") {
      console.log("r");
      randomrh=Math.floor(Math.random()*4);
      imageupdate(right_hand(randomrh));
    }

    if (keypress=="66") {
      console.log("b");
      randombody=Math.floor(Math.random()*3);
      imageupdate(body_hero(randombody));
    }

    if (keypress=="70") {
      console.log("f");
      randomface=Math.floor(Math.random()*4);
      imageupdate(facey_hero(randomface));
    }

    if (keypress=="76") {
      console.log("l");
      randomlegs=Math.floor(Math.random()*3);
      imageupdate(legs_both(randomlegs));
    }
}

function up(){
  if (playery>=0) {
       playery=playery-blockheight;
       canvas.remove(player);
       playerupdate();
       imageupdate();
  }
}

function down(){
  if (playery>=0) {
       playery=playery+blockheight;
       canvas.remove(player);
       playerupdate();
       imageupdate();
  }
}

function left(){
  if (playerx>=0) {
       playerx=playerx-blockwidth;
       canvas.remove(player);
       playerupdate();
       imageupdate();
  }
}

function right(){
  if (playerx>=0) {
       playerx=playerx+blockwidth;
       canvas.remove(player);
       playerupdate();
       imageupdate();
  }
}