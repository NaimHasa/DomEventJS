

//step -02
function redColor (){
    document.body.style.backgroundColor = 'red';
}

//step -03

const redButton = document.getElementById('make-green');
       redButton.onclick = function makeGreen(){
        document.body.style.backgroundColor = 'green';
       }


//step -03 samiller

const whiteButton = document.getElementById('make-black');
       whiteButton.onclick = makeBlack;
       function makeBlack(){
        document.body.style.backgroundColor = 'black';
       }


//   step - 04
const blueButton = document.getElementById('make-blue');
blueButton.addEventListener('click', function makeBlue(){
 document.body.style.backgroundColor = 'blue';
 
})     

//   step - 05

const pinkButton = document.getElementById('pink-color');
      pinkButton.addEventListener('click', function pinkColor(){
       document.body.style.backgroundColor = 'pink';
      })
