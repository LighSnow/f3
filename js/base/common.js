

$(document).ready(function() {


$( "a.frez-kat-down" ).hover(function() {
  $('a.frez-kat-link').toggleClass('hover');
});

$('.patina-btn-1').on('click', function() {
  $('.b-patina-box').addClass('btn-1');
  $('.b-patina-box').removeClass('btn-2');
  $('.b-patina-box').removeClass('btn-3');
});

$('.patina-btn-2').on('click', function() {
  $('.b-patina-box').addClass('btn-2');
  $('.b-patina-box').removeClass('btn-1');
  $('.b-patina-box').removeClass('btn-3');
});

$('.patina-btn-3').on('click', function() {
  $('.b-patina-box').addClass('btn-3');
  $('.b-patina-box').removeClass('btn-1');
  $('.b-patina-box').removeClass('btn-2');
});



$('.b-ph-print-btn-1').on('click', function() {
  $('.b-ph-print-box').addClass('btn-1');
  $('.b-ph-print-box').removeClass('btn-2');
  $('.b-ph-print-box').removeClass('btn-3');
  $('.b-ph-print-box').removeClass('btn-4');
});

$('.b-ph-print-btn-2').on('click', function() {
  $('.b-ph-print-box').addClass('btn-2');
  $('.b-ph-print-box').removeClass('btn-1');
  $('.b-ph-print-box').removeClass('btn-3');
  $('.b-ph-print-box').removeClass('btn-4');
});

$('.b-ph-print-btn-3').on('click', function() {
  $('.b-ph-print-box').addClass('btn-3');
  $('.b-ph-print-box').removeClass('btn-2');
  $('.b-ph-print-box').removeClass('btn-1');
  $('.b-ph-print-box').removeClass('btn-4');
});

$('.b-ph-print-btn-4').on('click', function() {
  $('.b-ph-print-box').addClass('btn-4');
  $('.b-ph-print-box').removeClass('btn-2');
  $('.b-ph-print-box').removeClass('btn-3');
  $('.b-ph-print-box').removeClass('btn-1');
});



  (function($){       
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);        
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });     

            $(".nav-tab").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });   
        };    
        return this.each(createTabs);
    };  

  })(jQuery);


  $(".tabs").lightTabs();





$('.modal-link').click(function(){
  var modal_id = $(this).attr('data-target');
  $('.modal-bg').addClass('active');
  $('#'+modal_id).addClass('md-show');
});

$('.close-btn, .btn-md').on('click', function(){
  $('.modal-bg').removeClass('active');
  $(this).parents('.md-modal').removeClass('md-show');
});

document.onkeydown = function(e) {
  if (e.keyCode == 27) { // escape
    $('.modal-bg').removeClass('active');
    $('.md-modal').removeClass('md-show');
  }
};

$('.modal-bg').click(function(){
    $('.modal-bg').removeClass('active');
    $('.md-modal').removeClass('md-show');
});



$("#fl_inp").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#fl_nm").html(filename);
    });


      $('.navbar-collapse .modal-link').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
      });

      
      $('.b-blue .modal-link').click(function () {
        $('html, body').animate({scrollTop: 0},1);
        return false;
      });

/*
$('.AddSocProf').click(function(){
  var modal_id = $(this).attr('data-target');
  $('body').append('<div class="modal-bg"></div>');
  $('.md-modal').addClass('md-show');
});

$('.close-btn, .btn--md-lookup').on('click', function(){
  $('.modal-bg').remove();
  $(this).parents('.md-modal').removeClass('md-show');
});

document.onkeydown = function(e) {
  if (e.keyCode == 27) { // escape
    $('.modal-bg').remove();
    $('.md-modal').removeClass('md-show');
  }
};
*/


var wow = new WOW(
  {
    boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
    animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
    offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
    mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
    live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
    callback:     function(box) {
      // функция срабатывает каждый раз при старте анимации
      // аргумент box — элемент, для которого была запущена анимация
    },
    scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
  }
);
wow.init();




$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  draggable: false,
  swipe: false
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  fade: true
});

$('.slider-photo-1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false
});
$('.slider-photo-2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false
});



    $(function() {
      $('.b-3-slider-height').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
    });

    $(function() {
      $('.b-5-item > p + div').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
    });
    $(function() {
      $('.b-5-item > p').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
    });

    $(function() {
      $('.b-kart-inf > div').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
    });

$('.slider-recommend').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});    

    $(function() {
      $('.katalog-item').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
    });








$('.btn-search > .icon-search').on('click', function() {
    $('form.search').addClass('active');
    $('.btn-search > .icon-search').addClass('active');
});




jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".search"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.removeClass('active'); // скрываем его
      $('.btn-search > .icon-search').removeClass('active');
    }
  });
});




$('.katalog-link-xs').on('click', function() {
  $('.menu-xs').toggleClass('active');
  $('.katalog-link-xs').toggleClass('active');
});

$('.katalog-link-md').on('click', function() {
  $('.menu-left_side').toggleClass('active');
  $('.katalog-link-md').toggleClass('active');
});



$(function($) {
    var allGarmContent = $('.menu-left > li > div.sub-down + ul');
    var allGarmHeader = $('.menu-left > li > div.sub-down > a');
    $('.menu-left > li > div.sub-down > span.open').parent('div.sub-down').next().css('display', 'block');
    $('.menu-left > li > div.sub-down > span').click(function() {
      if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).parent('div.sub-down').children('a').removeClass('open');
        $(this).parent('div.sub-down').next().slideUp("slow");
      }
      else {
        allGarmContent.slideUp("slow");
        allGarmHeader.removeClass('open');
        allGarmHeader.parent('div.sub-down').children('a').removeClass('open');
        allGarmHeader.next().removeClass('open');

        $(this).addClass('open');
        $(this).parent('div.sub-down').children('a').addClass('open');
        $(this).parent('div.sub-down').next().slideDown("slow");
        return false;
      }
    });
  });

$(function($) {
    var allGarmContent2 = $('.menu-left_side > li > div.sub-down > span + ul');
    var allGarmHeader2 = $('.menu-left_side > li > div.sub-down > span');
    $('.menu-left_side > li > div.sub-down > span.open').parent('div.sub-down').next().css('display', 'block');
    $('.menu-left_side > li > div.sub-down > span').click(function() {
      if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).parent('div.sub-down').children('a').removeClass('open');
        $(this).parent('div').next().slideUp("slow");
      }
      else {
        allGarmContent2.slideUp("slow");
        allGarmHeader2.removeClass('open');
        allGarmHeader2.parent('div.sub-down').children('a').removeClass('open');
        allGarmHeader2.next().removeClass('open');

        $(this).addClass('open');
        $(this).parent('div.sub-down').children('a').addClass('open');
        $(this).parent('div').next().slideDown("slow");
        return false;
      }
    });
  });

$('.index-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true
      }
    }
  ]
});



    $(function() {
      $('.b-index-height').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
    });




$(function() {
      $('.kartochka-info').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
    });


$('.recomend-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true
      }
    }
  ]
});

  $(function($) {
    var allGarmContent = $('.footer-col-title-xs + div');
    var allGarmHeader = $('.footer-col-title-xs');
    $('.footer-col-title-xs.open').next().css('display', 'block');
    $('.footer-col-title-xs').click(function() {
      if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().slideUp("slow");
      }
      else {
        allGarmContent.slideUp("slow");
        allGarmHeader.removeClass('open');
        $(this).addClass('open');
        $(this).next().slideDown("slow");
        return false;
      }
    });
  });




  $('.arr-up').click(function() {
    $('html, body').animate({scrollTop: 0},1000);
    return false;
  })

  $('.arr-up2').click(function() {
    $('html, body').animate({scrollTop: 0},1000);
    return false;
  })



/*
   $(".b-otz-line p").dotdotdot({
      // Options go here
   });
*/   







$('.slider-karttov').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false
});



$('.b-karttov-read-all').on('click', function() {
  $('.b-karttov-text-hidd').toggleClass('active');
  $('.b-karttov-read-all').toggleClass('active');
});


$('.b-karttov-reviews-line > div').on('click', function() {
  $(this).prev('p').css('max-height', 'none');
  $(this).css('display','none');
});



$('.b-otz-line > a').on('click', function() {
  $(this).prev('p').css('height', 'auto');
  $(this).css('display','none');
});

$('.ind-news-heig > a').on('click', function() {
  $(this).parent().css('height', 'auto');
  $(this).css('display','none');
});






  $(function($) {
    var allGarmContent = $('.b-basket-garm .b-basket-garm-content');
    var allGarmHeader = $('.b-basket-garm .b-basket-garm-header');
    $('.b-basket-garm-header.open').next().css('display', 'block');
    $('.b-basket-garm > .b-basket-garm-header').click(function() {
      if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().slideUp("slow");
      }
      else {
        //allGarmContent.slideUp("slow");
        //allGarmHeader.removeClass('open');
        $(this).addClass('open');
        $(this).next().slideDown("slow");
        return false;
      }
    });
  });


$('.pechat-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        dots: true
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2,
        dots: true
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});

  $('.b-pechat-links a:last-child').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('.pechat-slider').offset().top}, 800);
    return false;
  });






  $(function($) {
    $('.filtr-box > .filtr-header.open').next().css('display', 'block');
    $('.filtr-box > .filtr-header').click(function() {
      if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().slideUp("slow");
      }
      else {
        $(this).addClass('open');
        $(this).next().slideDown("slow");
        return false;
      }
    });
  });





/*
  $(function($) {
    var allGarmContent = $('.garmoshka .garm-content');
    var allGarmHeader = $('.garmoshka .garm-header');
    $('.garm-header.open').next().css('display', 'block');
    $('.garmoshka > .garm-header').click(function() {
      if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().slideUp("slow");
      }
      else {
        allGarmContent.slideUp("slow");
        allGarmHeader.removeClass('open');
        $(this).addClass('open');
        $(this).next().slideDown("slow");
        return false;
      }
    });
  });

*/














$('.form-phone').mask('+7 999 999-99-99');
        







$(function(){
  $('.testr').validate();
  $('.testr2').validate();
  $('.testr3').validate();
  $('.testr4').validate();
  $('.testr5').validate();
  $('.testr6').validate();
  $('.testr7').validate();
  $('.testr8').validate();
});





$('.filtr-modal').fancybox({
  padding: 0,
  touch: false
});




  $('.fancy-modal').fancybox({
    padding: 0,
    touch: false
  });


});



