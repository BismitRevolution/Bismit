$(document).ready(function() {
    console.log('loading finished');

    var loading = document.getElementById('fullscreen-loading');
    new TimelineMax({onComplete: startAnim}).to(loading, 1, { opacity: '0' });
    TweenLite.to(loading, 1, { display: 'none' });

    function startAnim() {
        var logoImg = $('#logo-img');
        TweenLite.to(logoImg, 3, { opacity: '1' });
        var logoText = $('#logo-hover');
        logoText.addClass('animated fadeInLeft');
        var hamburger = $('#hamburger');
        hamburger.addClass('animated fadeInRight');

        var onBoardTitle = $('#onboard .title');
        TweenLite.to(onBoardTitle, 1, { opacity: '1' });
        onBoardTitle.addClass('animated zoomIn');
        var onBoardSubtitle = $('#onboard .subtitle');
        TweenLite.to(onBoardSubtitle, 1, { opacity: '1' });
        onBoardSubtitle.addClass('animated zoomInLeft');
    }
});
