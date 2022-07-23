const btn = document.querySelector('button');
const popupCaja = document.querySelector('.popup-caja');
const btnClose = document.querySelector('.popup-close');

btn.addEventListener('click', function(){
    popupCaja.classList.add('mostrarCaja');

});
btnClose.addEventListener('click',()=>{
    popupCaja.classList.remove('mostrarCaja');
});
window.addEventListener('keyup',e => {
    console.log(e);
    if(e.key === 'Escape'){
        popupCaja.classList.remove('mostrarCaja');
    }
});