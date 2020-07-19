const x = document.querySelector('#a');

window.addEventListener('scroll',
    () => {
        if (window.pageYOffset > 10) {
            x.style.background = '#fff';
            x.style.zIndex = '999';
        } else {
            x.style.background = 'none';
        }
    }
)
mybutton = document.getElementById("myBtn");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}