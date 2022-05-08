/*let pool = document.getElementById('pool');*/
let pool = document.querySelector('#pool');

function click(){
    pool.innerHTML = 'INTERAGIU!';
    pool.style.background = 'red';
}
function moverMouse(){
    pool.innerHTML = 'Moveu o Mouse!';
    pool.style.background = 'blue';
}
function sair (){
    pool.innerHTML = 'Saiu!';
    pool.style.background = 'green';
}
function segurar(){
    pool.innerHTML = 'Segurou!';
    pool.style.background = 'pink';
}


