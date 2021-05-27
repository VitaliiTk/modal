let defaultBtn = document.querySelector('.default-btn');
let close = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');

defaultBtn.addEventListener('click', function() {
    modal.classList.add('show');
});

close.addEventListener('click', closeModal);
function closeModal() {
    modal.classList.remove('show');
};

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', scrollY > 0);
})


$( function () {
    
    $('#phone').mask('0 (999) 99-99-99')

})