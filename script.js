const display = document.getElementById("screen-display");
const buttons =  Array.from(document.getElementsByClassName('button'));
const reset = document.getElementById('reset')
const equal = document.getElementById('equal')
const undo = document.getElementById('reverse-arrow');

buttons.map( buttons => {
  buttons.addEventListener('click', (e) =>{
    display.innerText += e.target.innerText;
    display.style.color =" white";
   
    
  })
})


function resetBtn(){
  display.innerText = "";
}
reset.addEventListener( 'click', resetBtn)

function calcValue(e){
  // display.innerText = eval( display.innerText )
  switch( e.target.innerText){
    case  '=':
  try{
    display.innerText = eval( display.innerText )
  }catch{
    display.innerText = "Error!"
  }
  break;
  }

}
equal.addEventListener( 'click', calcValue)

function eraseNum(){
  display.innerText = display.innerText.slice( 0, -1)
}

// function showError(){
//   if( ){
//     display.innerText = "";
//   }
//   else{
//     display.innerText = "Error"
//   }
// }
// showError()
