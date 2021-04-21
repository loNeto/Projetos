$(window).on('load',function(){
    function goTo(){
        $('[goTo=irpara1]').click(function(){
            $('html,body').animate({'scrollTop':$('.irpara1').offset().top}, 500);
    
            return false;
        });

        $('[goTo=irpara2]').click(function(){
            $('html,body').animate({'scrollTop':$('.irpara2').offset().top}, 500);
    
            return false;
        });

        $('[goTo=irpara3]').click(function(){
            $('html,body').animate({'scrollTop':$('.irpara3').offset().top}, 500);
    
            return false;
        });

        $('[goTo=irpara4]').click(function(){
            $('html,body').animate({'scrollTop':$('.irpara4').offset().top}, 500);
    
            return false;
        });
    }
    goTo();
});