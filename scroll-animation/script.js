const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 10 * 9;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom && boxTop > 0){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}