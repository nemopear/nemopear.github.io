$(function(){
    var url = window.location.href;

    if (url.match('#')) {
        var activeTab = url.substring(url.indexOf("#") + 1);
        $(".tab-pane").removeClass("active in show");
        $("#" + activeTab).addClass("active in show");
        $('.serviceTab .nav-link').removeClass('active');
        $('a[href="#'+ activeTab +'"]').addClass('active');
        var scrollmem = $('body').scrollTop();
        $('html,body').scrollTop(scrollmem);
        
        //$(".nav-tabs").find("li a").last().click();

        $('.nav-tabs a').click(function (e) {
            var scrollmem = $('body').scrollTop();
            window.location.hash = this.hash;
            $('html,body').scrollTop(scrollmem);
            
        });

        $('.nav-link').click(function (e) {
            if (url.match('#')) {
                //var scrollmem = $('body').scrollTop();
                $('html,body').animate({ scrollTop: 0 }, 600);
                var activeTab = 'service1';
                $(".tab-pane").removeClass("active in show");
                $("#" + activeTab).addClass("active in show");
                $('.serviceTab .nav-link').removeClass('active');
                $('a[href="#'+ activeTab +'"]').addClass('active');
            }
        });
    }
    
  });

  // Javascript to enable link to tab
// var url = document.location.toString();
// if (url.match('#')) {
//     $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
// } 

// Change hash for page-reload
// $('.nav-tabs a').on('shown.bs.tab', function (e) {
//     window.location.hash = e.target.hash;
// })

