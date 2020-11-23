
var numSquares= 6;
var colors=[];
var pickedcolor;

//selections
var squares = document.querySelectorAll(".square");
var h1 =document.querySelector("h1");
var colorDisplay=document.getElementById("colorDisplay");
var messagedisplay=document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
    setUpModeButton();
    setUpSquares();
        reset();
}
resetButton.addEventListener("click",function(){
    //generate all new colors
    colors=generateRandomColors(numSquares);
    // pick new random colors from array
    pickedcolor=pickColor();
    //buttondisplay
    resetButton.textContent="NEW COLOR";
    //change colordisplay to match the pickedcolor
    colorDisplay.textContent=pickedcolor;
    messagedisplay.textContent="";
    //change colors of squares
    for (var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor= "steelblue";
});

function changecolor(color){
for (var i =0;i<squares.length;i++){
    squares[i].style.backgroundColor=color;
}
}
function pickColor(){
    var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //make an array
    var arr=[];
    //add randomcolors to array
    for (var i=0;i<num;i++){
       arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    //pick a red from  0 to 255
    var r = Math.floor(Math.random()*256);
    //pick a green from  0 to 255
    var g = Math.floor(Math.random()*256);
    //pick a blue from  0 to 255
    var b = Math.floor(Math.random()*256);
    //rgb(r, g, b)
    return ( "rgb(" + r + ", " + g + ", " + b + ")" );
}

function reset(){
      //generate all new colors
      colors=generateRandomColors(numSquares);
      // pick new random colors from array
      pickedcolor=pickColor();
      //buttondisplay
      resetButton.textContent="NEW COLOR";
      //change colordisplay to match the pickedcolor
      colorDisplay.textContent=pickedcolor;
      messagedisplay.textContent="";
      //change colors of squares
      for (var i=0;i<squares.length;i++){
        if (colors[i]){
            squares[i].style.display="block";
        squares[i].style.backgroundColor=colors[i];}
       else{
          squares[i].style.display="none";
       }
      }
      h1.style.backgroundColor= "steelblue";
}

function setUpModeButton(){
    for (var i=0 ;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent==="Easy"){
            numSquares=3;
        }else{
            numSquares=6;
        }
        reset(); 
        });
    }
}
function setUpSquares(){
    for(var i =0;i<squares.length;i++){
    squares[i].addEventListener("click",function(){
        var clickedColor= this.style.backgroundColor;
        
        if (clickedColor===pickedcolor){
            messagedisplay.textContent="correct";
            changecolor(pickedcolor);    
            h1.style.backgroundColor=pickedcolor;
            resetButton.textContent="Play Again";
        }
        else{this.style.backgroundColor="#232323" ;
            messagedisplay.textContent="try again";       
        }
        });
}}