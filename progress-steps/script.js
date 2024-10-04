const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const todo = document.getElementById('todo');

const steps = ['Todo: 选择商品', 'Todo: 加入购物车', 'Todo: 结算', 'To do: 确认收货'];
let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
})

function update() {
    circles.forEach((circle, idx)=> {
        if(idx < currentActive) {
            circle.classList.add('active');
        }else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    }else if(currentActive === circles.length) {
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }

    todo.textContent = steps[currentActive - 1];
}

todo.textContent = steps[currentActive - 1];