$(function(){
    var url = window.location.href;
    var activeTab = url.substring(url.indexOf("#") + 1);

    console.log('activeTab' + activeTab);

    $(".tab-pane").removeClass("active in show");
    $("#" + activeTab).addClass("active in show");
    $('.serviceTab .nav-link').removeClass('active');
    $('a[href="#'+ activeTab +'"]').addClass('active');

    // $('.serviceTab .nav-link').on('click', function() {

    // });
  });