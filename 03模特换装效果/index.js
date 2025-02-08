window.onload =function(){
    const mask = document.querySelector('.mask');
    const colorInput = document.querySelector('.color');
    mask.style.background = colorInput.value;
    colorInput.addEventListener("change",()=>{
        mask.style.background = colorInput.value;
    })
}

