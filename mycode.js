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