
function animateFrom(elem, direction) {
    direction = direction || 1;
    let x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -500;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 500;
        y = 0;
    } else if (elem.classList.contains("opacity_anim")) {
        x = 0;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {
        x: x,
        y: y,
        autoAlpha: 0
    }, {
        duration: 2,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, {
        autoAlpha: 0
    });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(
            elem
        ); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () {
                animateFrom(elem)
            },
            onEnterBack: function () {
                animateFrom(elem, -1)
            },
            onLeave: function () {
                hide(elem)
            } // assure that the element is hidden whenscrolled into view
        });
    });
});
