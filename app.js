document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 


    document.getElementById('msg').style.display = 'block';


    this.reset();
});



const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');
bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
});



var Aumentar=document.getElementById('Aumentar');
var Disminuir=document.getElementById('Disminuir');


Aumentar.addEventListener('body', function() {
    tamaño.style.fontsize="50px"
});

Disminuir.addEventListener('body', function() {
    tamaño.style.fontsize="10px"
});