let totalCarro = 0;

const btnLogin = document.getElementById('btn-login');
const campoEmail = document.getElementById('email');
const imagenComida = document.getElementById('imagencomida');
const cantidadCarro = document.getElementById('cantidadcarro');
const botonesAgregar = document.querySelectorAll('.btn-add');

const rutaOriginal = 'static/images/comida-mexicana.jpg';
const rutaHover = 'static/images/comida-mexicana2.jpg';

btnLogin.addEventListener('click', function () {
    alert("Bienvenido " + campoEmail.value);
});

botonesAgregar.forEach(function (boton) {
    boton.addEventListener('click', function () {
        totalCarro++;
        cantidadCarro.innerText = totalCarro;
    });
});

imagenComida.addEventListener('mouseover', function () {
    imagenComida.src = rutaHover;
});

imagenComida.addEventListener('mouseout', function () {
    imagenComida.src = rutaOriginal;
});