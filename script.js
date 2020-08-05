
//ハンバーガメニューの処理
$(function() {
  $('#kranze-wheels-toggle').click(function(){
    $('#kranze-wheels-toggle').toggleClass('show');
  });
  $('#maverick-wheels-toggle').click(function(){
    $('#maverick-wheels-toggle').toggleClass('show');
  });
  $('#leonis-wheels-toggle').click(function(){
    $('#leonis-wheels-toggle').toggleClass('show');
  });
  $('#novaris-wheels-toggle').click(function(){
    $('#novaris-wheels-toggle').toggleClass('show');
  });
  $('#adventure-wheels-toggle').click(function(){
    $('#adventure-wheels-toggle').toggleClass('show');
  });
});

//レスポンシブサイトのメニューバー処理
$(function() {
  $('#menu-bar-toggle').on('click', function() {
    $('#menu-bar-toggle').toggleClass('show');
    $('.modal-wrapper').slideToggle('slow');
  });
});

$(function() {
  $('#wheels-logo-fadeIn').on('click', function() {
    $('.modal-logos-field').fadeToggle();
    $('.show-kranze-wheels, .show-fzero-wheels, .show-maverick-wheels, .show-leonis-wheels, .show-novaris-wheels, .show-wedsadventure-wheels').css('display', 'none');
  });
});

$(function() {
  $('#kranze-wheels-fadeIn').on('click', function() {
    $('.show-kranze-wheels').fadeToggle();
    $(".show-maverick-wheels, .show-fzero-wheels, .show-leonis-wheels, .show-novaris-wheels, .show-wedsadventure-wheels").css('display', 'none');
  });
});

$(function() {
  $('#maverick-wheels-fadeIn').on('click', function() {
    $('.show-maverick-wheels').fadeToggle();
    $(".show-kranze-wheels, .show-fzero-wheels, .show-leonis-wheels, .show-novaris-wheels, .show-wedsadventure-wheels").css('display', 'none');
  });
});

$(function() {
  $('#fzero-wheels-fadeIn').on('click', function() {
    $('.show-fzero-wheels').fadeToggle();
    $(".show-kranze-wheels, .show-maverick-wheels, .show-leonis-wheels, .show-novaris-wheels, .show-wedsadventure-wheels").css('display', 'none');
  });
});

$(function() {
  $('#leonis-wheels-fadeIn').on('click', function() {
    $('.show-leonis-wheels').fadeToggle();
    $(".show-kranze-wheels, .show-maverick-wheels, .show-fzero-wheels, .show-novaris-wheels, .show-wedsadventure-wheels").css('display', 'none');
  });
});

$(function() {
  $('#novaris-wheels-fadeIn').on('click', function() {
    $('.show-novaris-wheels').fadeToggle();
    $(".show-kranze-wheels, .show-maverick-wheels, .show-leonis-wheels, .show-fzero-wheels, .show-wedsadventure-wheels").css('display', 'none');
  });
});

$(function() {
  $('#wedsadventure-wheels-fadeIn').on('click', function() {
    $('.show-wedsadventure-wheels').fadeToggle();
    $(".show-kranze-wheels, .show-maverick-wheels, .show-leonis-wheels, .show-fzero-wheels, .show-novaris-wheels").css('display', 'none');
  });
});


//パララックスの処理
$(function() {
  $(window).scroll(function(){
    var y = $(this).scrollTop();
    $('#ls-bg').css('background-position', '0 ' + parseInt( -y / 4 ) + 'px');
    //$('#ls').css('background-position', '0 ' + parseInt( -y / 4 ) + '%');
    //$('#maverick-bg').css('background-position', '0 ' + parseInt( -y / 4 ) + 'px');
    //$('#maverick-car').css('background-position', '0 ' + parseInt( -y / 2 ) + '%');
  });
});

//パララックス
window.addEventListener('scroll',function(){
  parallax('top-wrapper',2,0);
  //parallax('maverick-top-wrapper',5,0);
});

function parallax(elem,speed,number){
  var target = document.getElementsByClassName(elem)[number];
  var scroll_value = window.pageYOffset;
  //var scroll_value_maverick = window.pageYOffset;
  if(scroll_value <= 1000){
    target.style.transform = 'translateY('+(-scroll_value/speed)+'px)';
  }else {
    return;
  }
}

window.addEventListener('scroll',function(){
  //parallax('top-wrapper',2,0);
  parallax_maverick('maverick-top-wrapper',14,0);
});

function parallax_maverick(element,scroll_speed,numbers){
  var target_maverick = document.getElementsByClassName(element)[numbers];
  var scroll_value_maverick = window.pageYOffset;
  if(scroll_value_maverick > 1000){
    target_maverick.style.transform = 'translateY('+(-scroll_value_maverick/scroll_speed)+'px)';
  }else {
    return;
  }
}

//ホイール部分のアニメーション処理
$(function(){
  $(window).scroll(function (){
    $(".wheels, .wheel-sub-title, .fzero-wheel-field, .fzero-text-field").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('wheel-field-fadein');
      }else {
        $(this).removeClass("wheel-field-fadein");
      }
    });
  });
});
