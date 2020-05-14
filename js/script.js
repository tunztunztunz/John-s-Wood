$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 1
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
});




let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").classList.remove('hide');
    } else {
        document.querySelector(".navbar").classList.add('hide');
    }
    prevScrollpos = currentScrollPos;
}