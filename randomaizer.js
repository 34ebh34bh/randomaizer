
let z;
let x;
let c;

document.getElementById('rollButton').onclick = function() {

    z = Math.floor(Math.random() * 10);
    x = Math.floor(Math.random() * 10);
    c = Math.floor(Math.random() * 10);

    document.getElementById('zlabel').innerHTML = z;
    document.getElementById('xlabel').innerHTML = x;
    document.getElementById('clabel').innerHTML = c;

                                        //Ниже оно выводить в консоль кто победил а кто проиграл
if(z < 5) {
        console.log('jamal =Loose=');
    }else {
        console.log('Jamal =win=');
    }

if(x < 5){
    console.log('Barat =loose=');
    }else {
    console.log('Barat =win=');
    }

if(c < 5){
    console.log('Marat =loose=');
    }else {
    console.log('Marat =win=');
    }    

}


