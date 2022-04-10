document.getElementById('open-mobile-menu').addEventListener('click',() => {
    document.querySelector('.mobile-menu-container').classList.toggle('hide');
})
document.getElementById('close-mobile-menu').addEventListener('click',() => {
    document.querySelector('.mobile-menu-container').classList.toggle('hide');
})

document.querySelectorAll('.title-link').forEach(link=> {
link.addEventListener('click',() => {
        document.querySelector('.mobile-menu-container').classList.toggle('hide');
    })
})
document.getElementById('btn-more').addEventListener('click',() => {
    document.querySelectorAll('.hidden-speaker').forEach(speaker => {
        speaker.classList.toggle('hide');
    })
    if (document.getElementById('btn-more').innerHTML === ' MORE <i class="fa-solid fa-angle-down"></i>') {
        document.getElementById('btn-more').innerHTML='LESS <i class="fa-solid fa-angle-up"></i>';
    } else {
        document.getElementById('btn-more').innerHTML=' MORE <i class="fa-solid fa-angle-down"></i>'
    }
})
