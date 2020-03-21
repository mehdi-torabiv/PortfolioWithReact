$(document).ready(function (e) {
    $win = $(window);
    $navbar = $("#header");
    $toggle = $(".toggle-button");
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
        //visible_toggle($toggle, width);
    });

    $toggle.click(function (e) {
        if ($win.width() <= 768) {
            $navbar.toggleClass('toggle-left');
        }
    });

})
function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({
            left: `-${width}px`
        });
    } else {
        $navbar.css({ left: '0px' });
    }
}
/*function visible_toggle($toggle, width) {
    if ($win.width() > 768) {
        $toggle.toggleClass("toggle-visibility-hidden");
    } else {
        $toggle.toggleClass("toggle-visibility-visible");
    }
}*/

var typed = new Typed("#typed", {
    strings: [
        'Frontend Developer',
        'Freelancer',
        'UI/UX Designer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
var typed_2 = new Typed("#typed_2", {
    strings: [
        'Frontend Developer',
        'Freelancer',
        'UI/UX Designer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});