$(function(){

	var c=0;
	var fw=$('.frameSide').width();
	var sAboutPic1=$('#about>div>.pic1').offset().top;
	var sAboutPic2=$('#about>div>.pic2').offset().top;
	
	//landing
	$('#landing>.logoBg').fadeOut(1000);
	setTimeout(function(){
		$('#landing>.logoOut').show().addClass('logoOutA1');
		$('#landing>.logoIn').addClass('logoInA');
	},1000);
	setTimeout(function(){
		$('#landing>.logoOut').removeClass('logoOutA1').addClass('logoOutA2');
		$('#landing>.logoColor').fadeIn(2000);
		$('#landing>.logoIn').fadeOut(2000);
		$('#landing>.txtLeft>span').stop().delay(200).animate({left:0},900,'swing',function(){
			$('#landing>.txtRight>span').stop().animate({left:0},900,'swing',function(){
				$('#landing>.txt').stop().delay(500).animate({top:'45%',opacity:0},1000,'swing');
				$('#landing>.logo').stop().delay(500).animate({top:'45%',opacity:0},1000,'swing');
			});
		});
	},2000);
	setTimeout(function(){
		$('#landingQuebec').fadeIn(1000);
		var rNum=cNum=0;
		var tyBool=false;
		var cLength = $('#landingQuebec>.introtxt>.r'+rNum).children().length;

		if(tyBool==false){
			tyBool=true;
			var tyInt=setInterval(typing,70);
		}

		function typing(){
			if(cNum<=cLength){
				$('#landingQuebec>.introtxt>.r'+rNum+'>.t'+cNum).show();
				cNum++;
			}else{
				if(rNum<2){
					clearInterval(tyInt);
					rNum++;
					cNum=0;
					cLength = $('#landingQuebec>.introtxt>.r'+rNum).children().length;
					setTimeout(function(){
						tyInt=setInterval(typing,70);
					},1);

				}else if(rNum==2){
					clearInterval(tyInt);
				}
			}

		}
	},5300);
	setTimeout(function(){
		$('.scroll').fadeIn(1000);
	},8000);


	$(window).scroll(function(){
		//frame
		if($(window).scrollTop()>2){
			$('.addFrame').fadeIn();
			$('#landingQuebec>.introtxt').html("반갑습니다 :D");
		}else{
			$('.addFrame').hide();
			$('#landingQuebec>.introtxt').html("안녕하세요!<br>새롭고 즐거운 일을 찾아 여행하는<br><span class='txtBold'>웹 퍼블리셔 &amp; 웹 디자이너<br>유수정</span>입니다")
		}

		//about
		var myScroll=$(this).scrollTop();

		if(fw==100){
			$('#about>div>.pic1').css({top:(sAboutPic1-myScroll)/6+100});
			if($(window).innerWidth()>1200){
				$('#about>div>.pic2').css({top:(sAboutPic2-myScroll)/2+300});
			}else{
				$('#about>div>.pic2').css({top:(sAboutPic2-myScroll)/2+200});
			}
		}else if(fw==50){ //~992
			$('#about>div>.pic1').css({top:(sAboutPic1-myScroll)/6+50});
			$('#about>div>.pic2').css({top:(sAboutPic2-myScroll)/2+200});
		}else{
			$('#about>div>.pic1').css({top:0});
			$('#about>div>.pic2').css({top:0});
		}

		//about H1
		if($(window).scrollTop()>=$('#about').offset().top+50){$('#landingQuebec>.introtxt').fadeOut(500);}
		else{$('#landingQuebec>.introtxt').fadeIn(300);}

		//skill
		if( $(window).scrollTop() > $('#skills').offset().top-700){
			$('#skills>h2').stop().animate({opacity:1},300);
		}
		if( $(window).scrollTop() > $('#skills').offset().top-500){
			$('#skills li').addClass("come-in").css('opacity',1);
			var skillH=$('#skills .text').innerHeight();
			$('#skills .line').css('height',skillH).delay(1200).queue(function(){
				$(this).addClass('addLine').dequeue();
			});
			$('#skills .text>p').delay(2000).queue(function(){
				$(this).addClass('addP').dequeue();
			});
		}

		//work
		if( $(window).scrollTop() > $('#work').offset().top-700){
			$('#work>h2').stop().animate({opacity:1},300);
		}
		$('.wContent>.row').each(function(){
			if($(window).scrollTop() > $(this).offset().top-500){
				$(this).addClass('come-in').css('opacity',1);
			}
		});

		//contact
		var stScroll=$(window).scrollTop()/2-90;
		$('.strength>div>span').stop().animate({deg:stScroll},{
			duration:5,
			step:function(now){
				$(this).css({transform:'rotate('+now+'deg)'});
			}
		});
	});
	

	//responsive
	if(fw==20){
		$('#about p').find('br').remove();
	}

	//navBtn
	$('.navA').click(function(){
		anchor=$(this).attr('href');
		$('html,body').stop().animate({scrollTop:$(anchor).offset().top-150},600);
	});

	$('.navBtn').click(function(){
		if(c==0){
			$('.navBar').addClass('navActive');
			if(fw==100){
				$('nav').show().stop().animate({right:'100px'},500);
			}else if(fw==50){
				$('nav').show().stop().animate({right:'50px'},500);
			}else{
				$('nav').show().stop().animate({right:'20px'},500);
			}
			c=1;
		}else{
			$('.navBar').removeClass('navActive');
			if(fw==100){
				$('nav').stop().animate({right:'-12px'},500,function(){
					$('nav').hide();
				});
			}else if(fw==50){
				$('nav').stop().animate({right:'-62px'},500,function(){
					$('nav').hide();
				});
			}else{
				$('nav').stop().animate({right:'-92px'},500,function(){
					$('nav').hide();
				});
			}
			c=0;
		}
	});

});
