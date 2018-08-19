$(document).ready(function () {
    // $("#home-nav").removeClass("active");
    // $("#dashboard-nav").addClass("active");

    var isActive = false;
    var hamburger = document.getElementById('hamburger');
    hamburger.onclick = function (e) {
        console.log('clicked');
        if (isActive) {
            $('#hamburger').removeClass('is-active');
        } else {
            $('#hamburger').addClass('is-active');
        }
        isActive = !isActive;
    }

    var logoHover = document.getElementById('logo-hover');
    var logoLine = document.getElementById('logo-line');
    function setHover(hoverItem, targetItem) {
        hoverItem.onmouseover = function () {
            TweenLite.to(targetItem, 0.25, { width: '97%' });
        };

        hoverItem.onmouseleave = function () {
            TweenLite.to(targetItem, 0.25, { width: '0%' });
        };
    }
    setHover(logoHover, logoLine);
    // Array.from(logoLine).forEach(setHover);

});
