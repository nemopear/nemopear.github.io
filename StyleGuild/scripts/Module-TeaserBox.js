$(function () {
    setTimeout(function () { truncateText('.teaserShortInfo'); }, 200);
});

$(window).load(function () {
    equalHeight('.teaserBoxItem');
});

// BROWSER RESIZE
$(window).resize(function () {
    equalHeight('.teaserBoxItem');
});