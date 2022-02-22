AOS.init();

// JS menu burger ///

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

$(".image").click(function(){
    $(".image").removeClass("active");
    $(this).addClass("active")
})


navToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
}) 