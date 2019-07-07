$(function () {
    var unslider04 = $('#b04').unslider({
            dots: true
        }),
        data04 = unslider04.data('unslider');

    $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
});

var showIndex01 = 0;
var timer01;
$(function() {
    $("ul.uItems01 li").not(":eq(0)").css("display", "none");
    startTimer01();

    $("ul.uIndex li").hover(function() {
        clearInterval(timer01);

        showIndex = $(this).index();
        showImg01();
    }, function() {
        startTimer01();
    });

    $(".btnPrev01").click(function() {
        clearInterval(timer01);

        if(showIndex01 == 0) showIndex01 = 6;
        showIndex01--;
        showImg01();
        startTimer01();
    });

    $(".btnNext01").click(function() {
        clearInterval(timer01);

        if(showIndex01 == 5) showIndex01 = -1;
        showIndex01++;
        showImg01();
        startTimer01();
    });
});

function startTimer01() {
    timer01 = setInterval(function() {
        showIndex01++;
        if(showIndex01 >= 6) showIndex01 = 0;
        showImg01();
    }, 3000);
}

function showImg01() {
    $("ul.uItems01 li").stop(true, true);
    $("ul.uItems01 li").fadeOut(400).eq(showIndex01).fadeIn(400);
}

var showIndex02 = 0;
var timer02;
$(function() {
    $("ul.uItems02 li").not(":eq(0)").css("display", "none");
    startTimer02();

    $("ul.uIndex li").hover(function() {
        clearInterval(timer02);

        showIndex = $(this).index();
        showImg02();
    }, function() {
        startTimer02();
    });

    $(".btnPrev02").click(function() {
        clearInterval(timer02);

        if(showIndex02 == 0) showIndex01 = 6;
        showIndex02--;
        showImg02();
        startTimer02();
    });

    $(".btnNext02").click(function() {
        clearInterval(timer02);

        if(showIndex02 == 5) showIndex02 = -1;
        showIndex02++;
        showImg02();
        startTimer02();
    });
});

function startTimer02() {
    timer02 = setInterval(function() {
        showIndex02++;
        if(showIndex02 >= 6) showIndex02 = 0;
        showImg02();
    }, 3000);
}

function showImg02() {
    $("ul.uItems02 li").stop(true, true);
    $("ul.uItems02 li").fadeOut(400).eq(showIndex02).fadeIn(400);
}

var showIndex03 = 0;
var timer03;
$(function() {
    $("ul.uItems03 li").not(":eq(0)").css("display", "none");
    startTimer03();

    $("ul.uIndex li").hover(function() {
        clearInterval(timer03);

        showIndex = $(this).index();
        showImg03();
    }, function() {
        startTimer03();
    });

    $(".btnPrev03").click(function() {
        clearInterval(timer03);

        if(showIndex03 == 0) showIndex01 = 6;
        showIndex03--;
        showImg03();
        startTimer03();
    });

    $(".btnNext03").click(function() {
        clearInterval(timer03);

        if(showIndex03 == 5) showIndex02 = -1;
        showIndex03++;
        showImg03();
        startTimer03();
    });
});

function startTimer03() {
    timer03 = setInterval(function() {
        showIndex03++;
        if(showIndex03 >= 6) showIndex03 = 0;
        showImg03();
    }, 3000);
}

function showImg03() {
    $("ul.uItems03 li").stop(true, true);
    $("ul.uItems03 li").fadeOut(400).eq(showIndex03).fadeIn(400);
}