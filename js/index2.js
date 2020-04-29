$(function(){
	var c=0;
	
	//landing
	$('#landing>.logoOut').addClass('logoOutAni1');
	$('#landing>.logoColor').hide();
	$('#landing>.changeTxt').hide();
	$('#landing>.logoBg').fadeOut(1000);
	setTimeout(function(){
		$('#landing>.logoOut').removeClass('logoOutAni1').addClass('logoOutAni2');
		$('#landing>.logoIn').addClass('logoInAni2');
	},1000);
	setTimeout(function(){
		$('#landing>.logoOut').removeClass('logoOutAni2').addClass('logoOutAni3');
		$('#landing>.logoColor').fadeIn(2000);
		$('#landing>.logoIn').fadeOut(2000);
	},2000);
	setTimeout(function(){
		$('#landing>.landTxt>span').stop().animate({top:'-55px',opacity:0},1000,'swing');
		$('#landing>.logo').stop().animate({top:'40%'},1000,'swing');
		$('.landingDesc').stop().animate({top:'65%'},1000,'swing');
		$('.landingDesc').fadeIn(1000);
	},4700);
	setTimeout(function(){
		$('#scroll_down').fadeIn(1000);
	},5300);



	//header+frame
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$('footer').show();
		}else{
			$('footer').hide();
		}
		var winH=$(window).innerHeight()-100;
		if($(window).scrollTop()>=winH){
			$('.addFrame').fadeIn();
		}else{
			$('.addFrame').hide();
		}
	});
	$('.navBtn').on({
		click: function(){
			if(c==0){
				$('.navBar').addClass('navActive');
				$('').stop().animate({top:0},500);
				c=1;
			}else{
				$('.navBar').removeClass('navActive');
				$('').stop().animate({right:'-100%'},500);
				c=0;
			}
		}
	});

	$.fn.visible = function(partial) {
    
	      var $t            = $(this),
	          $w            = $(window),
	          viewTop       = $w.scrollTop(),
	          viewBottom    = viewTop + $w.height(),
	          _top          = $t.offset().top,
	          _bottom       = _top + $t.height(),
	          compareTop    = partial === true ? _bottom : _top,
	          compareBottom = partial === true ? _top : _bottom;
	    
	    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	  };
	
	var sAboutH1=$('#about>h1').offset().top;
	var sAboutPic1=$('#about>.pic1').offset().top;
	var sAboutPic2=$('#about>.pic2').offset().top;
	var test1=$('#skills').offset().top;
	var test2=$(window).scrollTop();
	var test3=test1-test2;

	$(window).scroll(function(){
		//about
		var myScroll=$(this).scrollTop();
		$('#about>h1').css({top:(sAboutH1-myScroll)/6});
		$('#about>.pic1').css({top:(sAboutPic1-myScroll)/3});
		$('#about>.pic2').css({top:(sAboutPic2/3-myScroll/5)/2+30});	
		
		//skills
		if( $(window).scrollTop() > $('#skills').offset().top-500){
			$('#skills>h2').stop().animate({opacity:1},1000);
		}

		  
		$('#skills li').each(function() {
			if($(this).visible(true)) {
				$(this).addClass("come-in"); 
			}
		});
  
	});
});