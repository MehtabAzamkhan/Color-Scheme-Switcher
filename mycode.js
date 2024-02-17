const buttons = document.querySelectorAll('.btns');
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function(btns){
    btns.addEventListener('click', function(e)
    {
       if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id;
        }

    });
});




const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i< 6; i++) {
      color += hex[Math.floor(Math.random() *16 )]; 
    }
    return color;
};

console.log(randomColor());
let intervalId;
const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000);
  }
  
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    };
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);

