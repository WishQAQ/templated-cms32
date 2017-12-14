$(function(){
	var index =0;
	var t;
	var len=3;

	$('.wh-container').hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
    	 	auto_play(index)
			index++;
			if(index==len){index=0}
		},3000)
	}).trigger('mouseleave');
    
    $(".pages ul li").click(function(){
    		index= $(".pages ul li").index(this);
    	 	auto_play(index)
		})		

   function auto_play(index){
		$(".pages ul li").eq(index).addClass("curs").siblings().removeClass('curs');
		$(".screens").animate({left:(parseInt(-100*index))+"%"},1000);
	     // var t_name = "text" + index;
		  //$(".text" + g1).animate({top:80,opacity:'hide'},500);
          $(".slider_txt").eq(index).animate({top:30,opacity:'show'},500).siblings(".slider_txt").animate({top:80,opacity:'hide'},500);; 
		  //$(".tel" + g1).animate({top:100,opacity:'hide'},500);
          $(".slider_tel").eq(index).animate({top:40,opacity:'show'},500).siblings(".slider_tel").animate({top:100,opacity:'hide'},500);; 
		  //g1 = g;
    }




	 /* $(".service_list > div").hover(
	      function(){
		       $(this).children().children(".bottom").animate({height:'36px'},500)
		      },function(){
			  $(this).children().children(".bottom").animate({height:'24px'},500)
			  })*/
 });


  //微网站
$(function(){
	$('.wei-round-tit li').hover(function(){
		var index=$('.wei-round-tit li').index(this);
		$('.wei-round-tit li').removeClass('on').eq(index).addClass('on');
		$('.wei-round-content ul li').hide().eq(index).show();
		var newLeft=82+index*270;
		$('.wei-arrow').css('left',newLeft)
	})
});


$(document).ready(function() {
    $('.top_r a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top-100;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                800);

        var index=$('.top_r a').index(this);
        $('.top_r a').eq(index).addClass('now').siblings().removeClass('now');
                return false;
            }
        }
    });
});

//png ie6透明
DD_belatedPNG.fix(".top_l img,.cloud,.wang img,wh-container img");
//png 插件结束

$(function(){
	$(window).scroll(function(){
		var h=$(this).scrollTop();
		if(h>200){
			$('.goTop').show();
		}else{			
			$('.goTop').hide();
		}
	});
	$('.goTop').click(function(){
		$('html,body').stop(true).animate({scrollTop:0},100);
	});
	setTimeout(function(){
		$('.custom_service').stop(true).animate({width:248},300);
		$('.im_ask').show(300);
	},20000);
	$('.im_close').click(function(){
		$('.custom_service').stop(true).animate({width:70},600)
		$('.im_ask').hide(100);		
	});
});


$(function(){
	$('.top_r li ul').hide();
	$('.top_r li').hover(function(){
		$(this).find('ul').stop(true).slideDown();
	},function(){
		$(this).find('ul').stop(true).slideUp();
	})
})