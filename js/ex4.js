// JavaScript Document

$(document).ready(function(){

//menu
	$(".menu").click(function(){ 
		$("nav").slideToggle();/*收放選單*/
	});

//menu rwd
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});



//first but + content
	$(".list").eq(0).addClass("ch_bg");
	$(".content").hide().eq(0).show();

	
//click event
	$(".list").click(function(){
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
		/*點擊的list顯示頁面，其他移除*/

		var _index = $(this).index();
		$(".content").stop(true, true).hide().eq(_index).fadeIn(600);
		/*stop(true, true)是為了避免快速點擊時，動畫會重疊*/

		
	});

//swiper
var swiper = new Swiper('.mySwiper', {
		speed: 1000,/*slide切換速度*/
        spaceBetween: 30,/*slide間距*/
        centeredSlides: true,
        autoplay: {
          delay: 3000,/*slide停留時間*/
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

	



});