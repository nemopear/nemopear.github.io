$(function(){
    var url = window.location.href;
    var activeTab = url.substring(url.indexOf("#") + 1);

    console.log('activeTab' + activeTab);

    $(".tab-pane").removeClass("active in show");
    $("#" + activeTab).addClass("active in show");
    $('.serviceTab .nav-link').removeClass('active');
    $('a[href="#'+ activeTab +'"]').addClass('active');

    $(".nav-tabs").find("li a").last().click();
    
    var url = document.URL;
    var hash = url.substring(url.indexOf('#'));
    
    $(".nav-tabs").find("li a").each(function(key, val) {
    
      if (hash == $(val).attr('href')) {
    
        $(val).click();
    
      }
      $(val).click(function(ky, vl) {
    
        console.log($(this).attr('href'));
        location.hash = $(this).attr('href');
      });
    
    });
  });
