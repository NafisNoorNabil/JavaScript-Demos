'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closemodal = document.querySelector('.close-modal');
const openmodal = document.querySelector('.show-modal');


openmodal.addEventListener('click',()=>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})


closemodal.addEventListener('click',closeModal)

function closeModal(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
}


document.addEventListener('keydown',function(e){
    console.log(e.key);
    if (e.key==="Escape"){
        if (!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})


