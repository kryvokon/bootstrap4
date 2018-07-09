$(function(){
  //effect bounce
  $("#btn1").on("click", function(){
  	$(".div1").effect("bounce",{
  		times: 7,
  		distance: 100,
  		direction: "left"
  	}, 1000);
  });
  //effect explode
  $("#btn2").on("click", function(){
  	$(".div2").effect("explode",{
  		pieces: 9
  		
  	}, 2000, function(){
  		$(".div2").effect("explode", {
  			pieces: 9,
  			mode: 'show'
  		}, 2000);
  	});
  });
  //pulsate effect
  $("#btn3").on("click", function(){
  	$(".div3").effect("pulsate",{
  		times: 7,
  		mode: 'hide'
  	}, 1000, function(){
  		$(".div3").css({
  			backgroundColor: "white",
  			display: "block",
  			border: "none"
  		});
  	});
  });
  //show/hide
  $("#btnshow").on("click", function(){
  	$(".divshow").show("explode", 2000);
  });
  $("#btnhide").on("click", function(){
  	$(".divhide").hide("explode", 2000);
  });
  //add/remove class
  $("#btnadd").on("click", function(){
  	 $("#pic1").addClass("imgcircle",1000);
  });
  $("#btnremove").on("click", function(){
  	 $("#pic2").removeClass("imgcircle",1000);
  });
  //switch class
  $("#switchbtn").on("click", function(){
  	$(".divtext p").switchClass("abzac","newabzac",2000);
  });
  //color animate
  $("#animbtn").on("click", function(){
  	$(".anim").animate({
  		"backgroundColor": "yellow",
  		"width": "400",
  		"height": "400",
  		"color": "red"

  	},2000);
  });
  //widget accordion
  $("#accordeon").accordion({
    active: false,
    collapsible: true,
    heightStyle: 'content',
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
  });
  //widget tabs
  $("#tabs").tabs({
    collapsible: true,
    heightStyle: 'auto',
    active: 1 
  });
  //menu
  $("ul.menu").menu();
  //calendar
  $("#calendar").datepicker({
    changeYear: true,
    changeMonth: true,
    yearRange: '1940:2018',
    showWeek:true,
    showOn: "both",
    showButtonPanel: true,
    showAnim: 'explode',
    numberOfMonths: [1,1],
    duration: 'slow',
    buttonText: 'Выбрать дату',
   // buttonImage: 'img/f4.jpg'
  });
  //widget button
  $("#btn4, #link").button();
  //dialog
  $("#btn5").on("click", function(){
    $("#dialog").dialog({
      modal: true,
      buttons: {
        Cancel: function(){
          $(this).dialog("close");
        }
      },
      show: {effect: 'explode', duration: 800},
      hide: {effect: 'explode', duration: 800}
    });
  });
  //slider widget
  $("#slider").slider({
    max: 200,
    range: true,
    values: [10,50],
    step: 5,
    animate: true,
    slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    //draggable
    $("#kart1, #kart2, #kart3").draggable({
      revent: true,
      helper: "clone",
      opacity: 0.5,
      zIndex: 100,
      cursor: 'pointer',
      reverDuration: 1000
    });
    //Droppable
    $(".pics img").draggable({
      revent: "invalid",
      start: function(event, ui) {
        ui.helper.css('transform', 'rotate(5deg) scale(1.2)');
      },
      stop: function(event, ui) {
        ui.helper.css('transform', 'rotate(0deg) scale(1)');
      },
      zIndex: 100
    });
    $("#trash").droppable({
      activeClass: 'highlight',
      drop: function(event, ui){
        ui.helper.hide('explode');
        $(this).attr('src', 'img/trashcan-full-icon.png');
      }
    });
    // sortable
    $(".spisok1").sortable({
      connectWith: '.spisok2',
      change: function(event, ui){
        ui.helper.css("backgroundColor", "red");
      },
      stop: function(event, ui){
        ui.item.css("backgroundColor", "grey");
      }
    });
    $(".spisok2").sortable({
      connectWith: '.spisok1',
      change: function(event, ui){
        ui.helper.css("backgroundColor", "red");
      },
      stop: function(event, ui){
        ui.item.css("backgroundColor", "grey");
      }
    });
    //resizable
    $("#resize").resizable();
    //superfix menu
    $("#menu1, #menu2, #menu3").superfish({
      delay: 1000,
      animation: {opacity:'show'},
      animationOut: {opacity:'hide'},
      speed: 'slow'
     });
    //gallery colorbox
    $(".gal").colorbox({
      rel: "gal",
      transition: 'fade',
      speed: 500,
      width: 500,
      height: 400,
      innerWidth: 300,
      innerHeight: 300,
      opacity: 0.7,
      slideshow: true,
      slideshowSpeed: 2500,
      slideshowAuto: true, //avtozapusk slide-show
      current: "Фото {current} из {total}",
      slideshowStart: "Запуск слайдшоу",
      slideshowStop: "Стоп слайдшоу"
    });
    $(".youtube").colorbox({
       iframe: true,
       width: 500,
       height: 400 
    });
    $(".inline").colorbox({
      inline: true,
      width: "50%"
    });
    //bxslider
    $(".slider").bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 600,
      mode: 'horizontal',
      speed: 700,
      minSlides: 3,
      maxSlides: 3,
      slideWidth: 200,
      moveSlides: 1,
      slideMargin: 20,
      captions: true,
      video: true,
      adaptiveHeight: true
    });
    


});

//wowjs animate
    let wow = new WOW({
      boxClass : 'wow',
      animateClass: 'animated',
      offset: 0
    });
    wow.init();
