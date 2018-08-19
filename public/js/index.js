$(document).ready(function() {
    console.log('index loaded');
    var logoImg = $('#logo-img');
    var logoText = $('#logo-hover');
    var hamburgerInner = $('#navbar .hamburger-inner');
    var hamburgerBefore = $('#navbar .hamburger-inner::before');
    var hamburgerAfter = $('#navbar .hamburger-inner::after');

    var fullpage = $('#fullpage').fullpage({
        anchors: ['section-onboard', 'section-design', 'section-projects'],
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        autoScrolling: true,
        slidesNavigation: true,
        // scrollHorizontally: true,

        afterLoad: function(origin, destination, direction) {
            var loadedSlide = this;
            if (destination == null) {
                // Starting state
            } else if (destination.anchor == 'section-onboard') {
                // First slide loaded
                console.log('section 1 loaded');

                logoImg.attr('src', '../img/bem_logo_gray.png');
                logoText.css({ 'color': 'var(--color-light)' });
                // hamburgerInner.css({ 'background': 'var(--color-light)' });
                $('#fullpage').append('<style>#navbar .hamburger-inner, #navbar .hamburger-inner::before, #navbar .hamburger-inner::after{background: var(--color-light) !important;}</style>');

            } else if (destination.anchor == 'section-design') {
                // Second slide loaded
                console.log('section 2 loaded');

                logoImg.attr('src', '../img/bem_logo_color.png');
                logoText.css({ 'color': 'var(--color-dark)' });
                // hamburgerInner.css({ 'background': 'var(--color-dark)' });
                $('#fullpage').append('<style>#navbar .hamburger-inner, #navbar .hamburger-inner::before, #navbar .hamburger-inner::after{background: var(--color-dark) !important;}</style>');

                var designTitle = $('#design .title');
                TweenLite.to(designTitle, 1, { opacity: '1' });
                designTitle.addClass('animated zoomIn');

                var designSubtitle = $('#design .subtitle');
                TweenLite.to(designSubtitle, 1, { opacity: '1' });
                designSubtitle.addClass('animated zoomInLeft');
            } else if (destination.anchor == 'section-projects') {
                // Third slide loaded
                console.log('section 3 loaded');

                logoImg.attr('src', '../img/bem_logo_gray.png');
                logoText.css({ 'color': 'var(--color-light)' });
                // hamburgerInner.css({ 'background': 'var(--color-light)' });
                $('#fullpage').append('<style>#navbar .hamburger-inner, #navbar .hamburger-inner::before, #navbar .hamburger-inner::after{background: var(--color-light) !important;}</style>');

                var projectTitle = $('#projects .title');
                TweenLite.to(projectTitle, 1, { opacity: '1' });
                projectTitle.addClass('animated zoomIn');

                var projectSubtitle = $('#projects .subtitle');
                TweenLite.to(projectSubtitle, 1, { opacity: '1' });
                projectSubtitle.addClass('animated zoomInLeft');
            }
        },
    });
});
