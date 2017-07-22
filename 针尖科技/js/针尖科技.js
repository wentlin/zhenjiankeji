/**
 * Created by Wentlin on 2017/4/5.
 */
$(function () {

//整屏轮播开始
    (function () {
        var h = $(window).height();
        $(".index,.box_wrap,.box,.wrap,.wrap_img,.banner_left,.donghua").css("height", h);
        $(".donghua").css("width",$(window).width());

        //动画
        setTimeout(function(){
            $(".donghua").animate({top:-1000},1000);
        },2000);


        var fa = true;
        var i = 0;
        window.addEventListener("DOMMouseScroll", fun);//火狐
        window.onmousewheel = document.onmousewheel = fun; //ie chrome
        function fun(e) {
            e = e || window.event;
            if (e.wheelDelta > 0) {//鼠标滚轮往上
                bottom();
            } else if (e.wheelDelta < 0) {//鼠标滚轮往下
                top();
            }
            if (e.detail > 0) {//鼠标滚轮往下
                top();
            } else if (e.detail < 0) {//鼠标滚轮往上
                bottom();
            }
            fadein();
        }

        function animate(i) {
            var h = $(window).height();
            $(".index,.box_wrap,.box,.wrap,.wrap_img,.banner_left").css("height", h);
            $('.box_wrap').animate({top: -i * h}, 500, function () {
                fa = true;
            })
        };
        function top() {
            if (fa) {
                fa = !fa;
                i++;
                if (i > $('.box').length - 1) {
                    i = $('.box').length - 1;
                }
                animate(i);
                li.eq(i).addClass('active').siblings().removeClass('active');
                li_animate(i);
                if (i > 0) {
                    $('header').addClass('col');
                } else {
                    $('header').removeClass('col');
                }
            }
        };
        function bottom() {
            if (fa) {
                fa = !fa;
                i--;
                if (i < 0) {
                    i = 0;
                }
                animate(i);
                li.eq(i).addClass('active').siblings().removeClass('active');
                li_animate(i);
                if (i > 0) {
                    $('header').addClass('col');
                } else {
                    $('header').removeClass('col');
                }
            }
        };
        function fadein() {
            //整屏   fadein开始
            if (i == 1) {
                $(".cando").fadeIn();
                $('.cando_box').addClass("animated bounceInDown");
                $('.cando p').addClass("animated bounceInUp");
            } else if (i == 2) {
                $(".anli").fadeIn();
                $('.anli_box').addClass("animated fadeInDown");
                $('.anli p').addClass("animated fadeInRight");
            } else if (i == 3) {
                $(".customer").fadeIn();
                $('.customer rb,.customer div').addClass("animated fadeInUp");
                $('.customer p').addClass("animated fadeInRight");
            }
            else if (i == 4) {
                $(".quality").fadeIn();
                $('.quality rb').addClass("animated fadeInUp");
                $('.quality p').addClass("animated fadeInUp");
                $('.quality .quality_box:nth-child(1)').addClass("animated fadeInLeft");
                $('.quality .quality_box:nth-child(2)').addClass("animated fadeInUp");
                $('.quality .quality_box:nth-child(3)').addClass("animated fadeInRight");
            } else if (i == 5) {
                $(".shangji").fadeIn();
                $('.shangji p').addClass("animated flip");
                $('.shangji_conten').addClass("animated fadeInUp");
            }
            else if (i == 6) {
                $(".about").fadeIn();
                $('.about .about_btn').addClass("animated fadeInRight");
                $('.about .about_box').addClass("animated fadeInLeft");
                $('.about_foot').addClass("animated fadeInRight");
            }
            else if (i == 7) {
                $(".lianxi").fadeIn();
                $('.lianxi .lianxi_con').addClass("animated fadeInDown");
                $('.lianxi .lianxi_foot').addClass("animated fadeInUp");
            }
        }
        //整屏轮播结束
        //nav开始
        var nav = $('.header_nav');
        var div = nav.find('div');
        var li = nav.find('li');
        var index = 0;
        var x = 0;
        li.click(function () {
            i = $(this).index();
            li_animate(i);
            $(this).addClass('active').siblings().removeClass('active');
            animate(i);
            if (i > 0) {
                $('header').addClass('col');
            } else {
                $('header').removeClass('col');
            }
            fadein();
        });
        li.hover(function () {
            x = $(this).index();
            li_animate(x);
            $(this).addClass('active').siblings().removeClass('active');
            li.eq(i).addClass('active');
        }, function () {
            li_animate(i);
            $(this).removeClass('active');
            li.eq(i).addClass('active');
        });
        //分组li animate
        function li_animate(inx) {
            if (inx == 0) {
                div.stop().animate({left: 17}, 500);
            } else if (inx == 1) {
                div.stop().animate({left: 104}, 500);
            } else if (inx == 2) {
                div.stop().animate({left: 192}, 500);
            } else if (inx == 3) {
                div.stop().animate({left: 278}, 500);
            } else if (inx == 4) {
                div.stop().animate({left: 367}, 500);
            }
            else if (inx == 5) {
                div.stop().animate({left: 453}, 500);
            }
            else if (inx == 6) {
                div.stop().animate({left: 543}, 500);
            }
            else if (inx == 7) {
                div.stop().animate({left: 628}, 500);
            }
        }

        //new的btn
        var sm_btn = $('.sm_btn');
        sm_btn.click(function () {
            i = 1;
            li_animate(i);
            animate(i);
            li.eq(i).addClass('active').siblings().removeClass('active');
            if (i > 0) {
                $('header').addClass('col');
            } else {
                $('header').removeClass('col');
            }
            fadein();
        });

        //右边隐藏上下按钮
        $('.r_btn_up').click(function(){
            if(fa){
                fa=false;
                i--;
                if (i<0){
                    i=0;
                }
                li_animate(i);
                li.eq(i).addClass('active').siblings().removeClass('active');
                animate(i);
                if (i > 0) {
                    $('header').addClass('col');
                } else {
                    $('header').removeClass('col');
                }
                fadein();
            }
        });
        $('.r_btn_down').click(function(){
            if(fa){
                fa=false;
                i++;
                if (i>7){
                    i=7;
                }
                li_animate(i);
                li.eq(i).addClass('active').siblings().removeClass('active');
                animate(i);
                if (i > 0) {
                    $('header').addClass('col');
                } else {
                    $('header').removeClass('col');
                }
                fadein();
            }

        })
        //nav结束


    })();

    //banner开始
    (function () {
        var banner = $('.banner');
        var wrap = banner.find('.wrap');
        var img = wrap.find('.wrap_img');
        var banner_ul = banner.find('#banner_ul');
        var li = banner_ul.find('li');
        var contern = img.find('.bannner_contern');
        var h1 = contern.find('h1');
        var rb = contern.find('rb');
        var p = contern.find('p');
        var img_width = img.width();
        var index = 1;
        var timer = null;
        wrap.css("left", -img_width);
        li.mouseover(function () {
            index = $(this).index() + 1;
            wrap.animate({left: -index * img_width});
            li.eq(index - 1).addClass('now').siblings().removeClass('now');
            anima(index);
        });
        timer = setInterval(auto, 4000);
        function auto() {
            index++;
            if (index > img.length - 1) {
                index = 1;
                wrap.css("left", 0);
                wrap.animate({left: -img_width});
            }
            else {
                wrap.animate({left: -index * img_width});
            }
            li.eq(index - 1).addClass('now').siblings().removeClass('now');
            anima(index);
        }

        banner.hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(auto, 6000);
        });
        anima(1);
        function anima(index) {
            img.find('.banner_left').removeClass('animated fadeInRight');
            img.find('rb').show().removeClass('animated fadeInLeft');
            img.find('h1').show().removeClass('animated fadeInRight');
            img.find('p').show().removeClass('animated fadeInUp');
            img.eq(index).find('.bannner_contern').fadeIn();
            img.eq(index).find('rb').show().addClass('animated fadeInLeft');
            img.eq(index).find('h1').show().addClass('animated fadeInRight');
            img.eq(index).find('p').show().addClass('animated fadeInUp');
            img.fadeIn();
            img.find('.banner_left').show().addClass('animated fadeInRight');
        }

        //new 开始
        var xinwen = $('.banner_new');
        var xinwen_div = xinwen.find('div');
        var t = 0;
        var time = null;
        time = setInterval(xin, 4000);
        function xin() {
            t++;
            if (t > 4) {
                t = 0;
            }
            xinwen_div.animate({top: -t * 20});
        }

        //new结束
    })();
    //banner结束

    //conten开始
    (function () {
        var cando_conten = $('.cando_conten');
        var cando_box = $(".cando_box");
        var yuan_img = $('.yuan_img');
        var yuan_bottom = $('.yuan_bottom');
        var yuan_left = $('.yuan_left');
        var yuan_right = $('.yuan_right');
        var fa = true;
        yuan_bottom.css("width", cando_box.width());
        cando_box.mouseenter(function () {
            var x = $(this).index();
            $(this).find('.yuan_left').addClass('y_top');
            $(this).find('.yuan_right').addClass('y_bottom');

            $(this).find('.yuan_img').addClass('y_img');
            $(this).find('.cando_title').addClass('cando_title_col');
            $(this).find('.yuan_bottom').stop().delay(500).animate({top: 0});

        });
        cando_box.mouseleave(function () {
            $(this).find('.yuan_left').removeClass('y_top');
            $(this).find('.yuan_right').removeClass('y_bottom');

            $(this).find('.yuan_img').removeClass('y_img');
            $(this).find('.cando_title').removeClass('cando_title_col');
            $(this).find('.yuan_bottom').stop().animate({top: 340}, 0);
        });
    })();
//案例开始
    (function () {
        var anli_box = $('.anli_box');
        anli_box.hover(function () {
            $(this).find('.anli_top div').stop().animate({top: 0});
            $(this).find('.anli_bottom div').stop().animate({top: 0});
            $(this).find('.anli_bottom li').removeClass('anli_col').addClass('li_col');

        }, function () {
            $(this).find('.anli_top div').stop().animate({top: -200});
            $(this).find('.anli_bottom div').stop().animate({top: 102});
            $(this).find('.anli_bottom li').removeClass('li_col').eq(1).addClass('anli_col');
        })
    })();

    //关于开始
    (function () {
        var btn = $('.about .about_btn ul');
        var div = $('.about .about_btn div');
        var wrap = $('.about_wrap');
        var i = 0;
        div.css("top", 42);
        wrap.css("left", -480);
        btn.mouseenter(function () {
            i = $(this).index();
            div.animate({top: i * 42}, 200);
            wrap.animate({left: i * -480}, 400);
            $(this).addClass('font_col').siblings().removeClass('font_col');
        })
    })();

//右边隐藏按钮开始
    (function () {
        $('.r_btn_hide').click(function(){
            $('.right_nav').toggleClass('top_right');
            $(this).toggleClass('bian_hide');
        });
        $('.r_btn_weixin').hover(function(){
            $('.weixin_box').addClass('box_move');
        },function(){
            $('.weixin_box').removeClass('box_move');
        })
        $('.r_btn_qq').hover(function(){
            $('.qq_box').addClass('box_move');
        },function(){
            $('.qq_box').removeClass('box_move');
        })
        $('.r_btn_tel').hover(function(){
            $('.tel_box').addClass('box_move');
        },function(){
            $('.tel_box').removeClass('box_move');
        })
    })();

});
