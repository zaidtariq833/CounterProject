// let counter = document.querySelector('.counter')
// let count = 0;

// function changeCounter(button){
//    if(button == plus){
//       count++;
//    } else if(button == minus){
//      count-- ;
//    } else if(button == reset){
//      count = 0
//    } else if (button == 0){
//      document.write("Start the parameter")
//    }
//    counter.innerHTML = count;
// }

let counter = document.querySelector('.counter');
let count = 0;

function changeCounter(button){
    if(button == plus){
        count++;
    } else if(button == minus){
        count--;
    } else if(button == reset){
        count = 0
    }
    counter.innerHTML = count
}

