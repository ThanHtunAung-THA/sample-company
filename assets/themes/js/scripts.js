jQuery(function($) {

$(document).ready(function() {
	
	"use strict";
	
	FirstLoad();	
	PageAnim();
	HeroHeight();		
	HeroParallax();
	OpenHeader();
	ShowcaseImages();	
	ProjectExpander();
	BlogExpander();
	FullPage();
	ClassicSlider();
	InitContactMap();
	MagnificPopup();
	Shortcodes();
	
});


$(window).on( 'resize', function () {
	HeroHeight();	
});



/*--------------------------------------------------
Function First Load
---------------------------------------------------*/	


	function FirstLoad() {
		
		
		$('body').jpreLoader({
			loaderVPos: '0',
			autoClose: true,
			closeBtnText: "Scroll or use arrow keys",
			
		});
		
		$("header").removeClass("hidden");	
		
		$('#hero').waitForImages({
			finished: function() {
				setTimeout( function(){
					$("#hero").removeClass("hidden");  
				} , 1000 );
			},
		waitForAll: true
		});		
		
		$('.showcase-images li:first-child').waitForImages({
			finished: function() {
				setTimeout( function(){
					$("#showcase").removeClass("hidden");  
				} , 1000 );
			}
		});
		
		$('#main').waitForImages({
			finished: function() {				
				setTimeout( function(){
					$("#main-content").removeClass("hidden");  
				} , 1500 );
			},
		waitForAll: true
		});
		
		$('nav li.has-sub>a').on('click', function(){
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});		
		
	}// End First Load



/*--------------------------------------------------
Function Page Animation
---------------------------------------------------*/	


	function PageAnim() {
		
		var in_duration = 150;
		var loading_parent_element = 'body';
		
		if( typeof ClapatPegasusThemeOptions != 'undefined' ){
			
			if( ClapatPegasusThemeOptions.enable_preloader == true ){
				
				in_duration = 1500;
				loading_parent_element = 'html';
			}
		}
		
		$(".animsition").animsition({
			inClass: 'fade-in',
			outClass: 'fade-out',
			inDuration: in_duration,
			outDuration: 400,
			linkElement: '.animation-link',
			// e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
			loading: true,
			loadingParentElement: loading_parent_element, //animsition wrapper element
			loadingClass: 'animsition-loading',
			loadingInner: '', // e.g '<img src="loading.svg" />'
			timeout: true,
			timeoutCountdown: 5000,
			onLoadEvent: true,
			browser: [ 'animation-duration', '-webkit-animation-duration'],
			// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
			// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			overlay : false,
			overlayClass : 'animsition-overlay-slide',
			overlayParentElement : 'body',
			transition: function(url){ window.location.href = url; }
		  });
	
		
	}// End Page Animation


	
/*--------------------------------------------------
Function Hero Height
---------------------------------------------------*/	
	
	function HeroHeight() {
		
		var heights = window.innerHeight;
		
		if( $('#hero').length > 0 ){
		
			if ($('#hero').hasClass('hero-small')) {
				var heights = window.innerHeight;
				document.getElementById("hero").style.height = heights * 0.65 + "px";
			} else if ($('#hero').hasClass('hero-large')) {
				var heights = window.innerHeight;
				document.getElementById("hero").style.height = heights * 0.85 + "px";
			}  else  {			
				var heights = window.innerHeight;
				document.getElementById("hero").style.height = heights + "px";
			}
		
		}
		
		
		$('#showcase').css({'height': heights + 'px'});
		
	}//End Hero Height
	
		
	
	
	
/*--------------------------------------------------
Function HeroParallax
---------------------------------------------------*/	
	
	function HeroParallax() {
	
		var page_title = $('body');
			var block_intro = $('#hero-styles');
			if( block_intro.length > 0 ) var block_intro_top = block_intro.offset().top;	
		$( window ).scroll(function() {
			var current_top = $(document).scrollTop(); 
			var hero_height = $('#hero-styles').height();
			if( $('#hero-styles').hasClass('parallax-hero')){			  
				block_intro.css('transform', 'translate3d(0, ' + current_top * 0.5 + 'px, 0)');		
			}
			if( $('#hero-styles').hasClass('static-hero')){			  
				block_intro.css('transform', 'translate3d(0, ' + current_top * 1 + 'px, 0)');			
			}
			if( $('#hero-styles').hasClass('opacity-hero')){				 
				block_intro.css('opacity', (1 - current_top / hero_height * 1.2));
			}
		});
	
	}//End HeroParallax
	
	
	
/*--------------------------------------------------
Function Open Header
---------------------------------------------------*/
	
	function OpenHeader() {
		
		$(".hamburger, #black-fade").on('click', function(){
			$(".hamburger ").toggleClass("is-active");
			$("header").toggleClass("is-active");
			$("#menu").toggleClass("is-active");
			$("#black-fade").toggleClass("is-active");
			$("#header-title-div").toggleClass("is-active");
			$('#black-fade').removeClass("hover");
			$("#project_close").toggleClass("disabled");	
		});
		
		$( ".header_menu" ).mouseleave(function() {	
			$(".hamburger ").removeClass("is-active");
			$("header").removeClass("is-active");
			$("#menu").removeClass("is-active");
			$("#header-title-div").removeClass("is-active");
			$("#black-fade").removeClass("is-active");
			$("#project_close").removeClass("disabled");			
		})
		
		
		$(".hamburger").on({
			 mouseenter: function () {	 
				 $('#black-fade').addClass("hover");	
			 },
			 mouseleave: function () {
				 $('#black-fade').removeClass("hover");		
			 }
		});
		
		$(".page-share, #close-share").on('click', function(){
			$("#share-overlay").toggleClass("is-active");
			$("header").toggleClass("show-share");
			
			if($(".page-share").text()=="Share Project")
			{
				$(".page-share").text("Close");
			} else {
				$(".page-share").text("Share Project");
			}
		});
			
			
	}//End Open Header	
	
		
	
/*--------------------------------------------------
Function ShowcaseImages
---------------------------------------------------*/
	
	function ShowcaseImages() {		
	
		$('.showcase-name:nth-child(1)').on('mouseenter', function() {
			$('.showcase-name.active').removeClass('active');
			$('.showcase-images li.show').removeClass("show");
			$('.showcase-images li:nth-child(1)').addClass("show");
			$('.showcase-name:nth-child(1)').addClass('active');
		})
		$('.showcase-name:nth-child(2)').on('mouseenter', function() {
			$('.showcase-name.active').removeClass('active');
			$('.showcase-images li.show').removeClass("show");
			$('.showcase-images li:nth-child(2)').addClass("show");
			$('.showcase-name:nth-child(2)').addClass('active');
		})
		$('.showcase-name:nth-child(3)').on('mouseenter', function() {
			$('.showcase-name.active').removeClass('active');
			$('.showcase-images li.show').removeClass("show");
			$('.showcase-images li:nth-child(3)').addClass("show");
			$('.showcase-name:nth-child(3)').addClass('active');
		})
		$('.showcase-name:nth-child(4)').on('mouseenter', function() {
			$('.showcase-name.active').removeClass('active');
			$('.showcase-images li.show').removeClass("show");
			$('.showcase-images li:nth-child(4)').addClass("show");
			$('.showcase-name:nth-child(4)').addClass('active');
		})
		$('.showcase-name:nth-child(5)').on('mouseenter', function() {
			$('.showcase-name.active').removeClass('active');
			$('.showcase-images li.show').removeClass("show");
			$('.showcase-images li:nth-child(5)').addClass("show");
			$('.showcase-name:nth-child(5)').addClass('active');
		})
		
		$('.showcase-name:nth-child(6)').on('mouseenter', function() {
			$('.showcase-name.active').removeClass('active');
			$('.showcase-images li.show').removeClass("show");
			$('.showcase-images li:nth-child(6)').addClass("show");
			$('.showcase-name:nth-child(6)').addClass('active');
		})
		$('.showcase-name:nth-child(7)').on('mouseenter', function() {
			$('.showcase-name.active').removeClass('active');
			$('.showcase-images li.show').removeClass("show");
			$('.showcase-images li:nth-child(7)').addClass("show");
			$('.showcase-name:nth-child(7)').addClass('active');
		})
		$('.showcase-name:nth-child(8)').on('mouseenter', function() {
			$('.showcase-name.active').removeClass('active');
			$('.showcase-images li.show').removeClass("show");
			$('.showcase-images li:nth-child(8)').addClass("show");
			$('.showcase-name:nth-child(8)').addClass('active');
		})
		$('.showcase-name:nth-child(9)').on('mouseenter', function() {
			$('.showcase-name.active').removeClass('active');
			$('.showcase-images li.show').removeClass("show");
			$('.showcase-images li:nth-child(9)').addClass("show");
			$('.showcase-name:nth-child(9)').addClass('active');
		})
		$('.showcase-name:nth-child(10)').on('mouseenter', function() {
			$('.showcase-name.active').removeClass('active');
			$('.showcase-images li.show').removeClass("show");
			$('.showcase-images li:nth-child(10)').addClass("show");
			$('.showcase-name:nth-child(10)').addClass('active');
		})
	
		$('.showcase-name:nth-child(1)').trigger('mouseenter')		
	
	}//End ShowcaseImages
	
	
	
/*--------------------------------------------------
Function ProjectExpander
---------------------------------------------------*/
	
	function ProjectExpander() {
		
		if( $('.ajax-load').length > 0 ){ 	
			    
		$('.showcase-wrapper .showcase-name').on('click', function(){
						  		
			var myUrl = $(this).find('.open-project').attr("href") + " .item-data"; 			
			
			
				$('.disable-showcase').addClass('active');
				$('#page-left').addClass('inactive');
				$('#page-right').addClass('active');
			
				setTimeout(function(){	
					$('#loader-line-box').addClass('is-open');
				},( 200 ));				
					setTimeout(function(){					
						$("#project-page-data").load(myUrl,function(e){						
												
						$('#project-page-holder').waitForImages({
							finished: function() {								
									
								///Init scripts here
								if( $('#project_next').length > 0 ){
									var heights1 = window.innerHeight;
									document.getElementById("project_next").style.height = heights1  + "px";								
								
									$(".project-link").on({
										 mouseenter: function () {	 
											 $('#project_next').addClass("hover");	
										 },
										 mouseleave: function () {
											 $('#project_next').removeClass("hover");		
										 }
									});
								}
								
								ClassicSlider();
								Shortcodes();
								
								
								setTimeout(function(){  
									
									$('#project-page-data').addClass('is-open');
									setTimeout(function(){ 
										$('#project-page-holder, #project-page-data').height($('.project-page').height());
									},( 500 ));
									
									setTimeout(function(){
										$('#loader-line-box').removeClass('is-open');										
										$('.hamburger').addClass('hidden');
										setTimeout(function(){
										$("#project_close").removeClass("hide");
										},( 100 ));
										setTimeout(function(){
											$('html, body').animate({scrollTop : 400},800);
											$('#project_next').footerReveal({ shadow: false, zIndex: 0 });										
										},( 400 ));	
									},( 300 ));
									
								},( 500 ));							
							},
								waitForAll: true
							});
							
													
						});
											
					},( 500 ));
			
			return false;
					  
		});
			
		$(document).on('click', '#project_close', function(event) {
			$('html, body').animate({scrollTop : 0},800);
			$("#project_close").addClass("hide");
			setTimeout(function(){$('.hamburger').removeClass('hidden');},( 500 ));
			setTimeout(function(){$('#page-left').removeClass('inactive'); $('.disable-showcase').removeClass('active');},( 1550 ));
			setTimeout(function(){$('#page-right').removeClass('active');},( 1300 ));				
			setTimeout(function(){$('#project-page-data').removeClass('is-open');},( 1100 ));							
			setTimeout(function(){$('#project-page-holder, #project-page-data').height('0');},( 1100 ));
			setTimeout(function(){$(".project-page").remove();},( 1100 ));
			return false;
		});
		
		$(document).on('click', '#project_next', function(event) {
			$("#project_next").addClass("disabled");
			$('html, body').animate({scrollTop: $("#nav-anchor").offset().top}, 200); 
			setTimeout(function(){$('html, body').animate({scrollTop : 0},0);},( 300 ));			
			$("#project_close").addClass("hide");
			$('.showcase-images li.show').next().addClass("show");
			$('.showcase-images li.show').prev().removeClass("show");			
			$('.showcase-name.active').next().addClass("active");
			$('.showcase-name.active').prev().removeClass("active");
			setTimeout(function(){$('.showcase-name.active a').trigger('click');},( 600 ));
			return false;				
		});	
		
		var lastScroll = 0;
		
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll > lastScroll) {
			$("#project_close").removeClass("show");
			} else if (scroll < lastScroll) {
			$("#project_close").addClass("show");
			}
			lastScroll = scroll;
		});
	
	
		}
			
			
	} //End ProjectExpander
	
	
	
	
/*--------------------------------------------------
Function BlogExpander
---------------------------------------------------*/
	
	function BlogExpander() {
		
		if( $('#project_next').length > 0 ){
				
			var heights1 = window.innerHeight;
			document.getElementById("project_next").style.height = heights1 * 0.4  + "px";		
			$('#project_next').footerReveal({ shadow: false, zIndex: 0 });
		
		}
			
			
	} //End BlogExpander	
	
	
/*--------------------------------------------------
Function FullPage
---------------------------------------------------*/
	
	function FullPage() {
		
		if( $('#blog-slider').length > 0 ){		
	
			$('#blog-slider').fullpage({
       			css3: true,
				navigation: true,
        		navigationPosition: 'left',	
				onLeave: function(index, nextIndex, direction){
					
				}			
       		});
			
			
			$(".open-post").on({
				 mouseenter: function () {	 
					 $('.blog-right').addClass("hover");	
				 },
				 mouseleave: function () {
					 $('.blog-right').removeClass("hover");		
				 }
			});
			
		}
			
	}//End FullPage			
	



	
	
/*--------------------------------------------------
Function Classic Slider
---------------------------------------------------*/	
		
	function ClassicSlider() {
		
		if( $('.classic-slider').length > 0 ){	
			$('.classic-slider').flexslider({
				animation: "slide",
				direction: "horizontal",
				animationSpeed: 1000,
				animationLoop: true,
				smoothHeight: true,
				controlNav: false,
				slideshow: false,						
			});
		}
		
	}//End ClassicSlider
	


/*--------------------------------------------------
Function MagnificPopup
---------------------------------------------------*/	
	
	function MagnificPopup() {	
	
		var mfp = $('.mfp-gallery');
		if(mfp.length) {
			mfp.each(function(index, element) {
				$(element).magnificPopup({
					  delegate: 'a.mf-zoom',
					  type: 'image',
					  image: {
						  markup: '<div class="mfp-figure">'+
									'<div class="mfp-close"></div>'+
									'<div class="mfp-img"></div>'+
								  '</div>' +
								  '<div class="mfp-bottom-bar">'+
									'<div class="mfp-title"></div>'+
									'<div class="mfp-counter"></div>'+
								  '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
						
						  cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor. 
						  
						  titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
						  // Or the function that should return the title. For example:
						  // titleSrc: function(item) {
						  //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
						  // }
						
						  verticalFit: true, // Fits image in area vertically
						
						  tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
						},
						gallery: {
						  enabled:true,
						  tCounter: '<span class="mfp-counter">%curr% / %total%</span>' // markup of counter
						},
					  mainClass: 'mfp-zoom-in',
					  tLoading: '',
					  removalDelay: 300, //delay removal by X to allow out-animation
					  callbacks: {
						imageLoadComplete: function() {
						  var self = this;
						  setTimeout(function() {
							self.wrap.addClass('mfp-image-loaded');
						  }, 16);
						},
						close: function() {
						  this.wrap.removeClass('mfp-image-loaded');
						}
					  },
					  closeBtnInside: false,
					  closeOnContentClick: true,
					  midClick: true
					});
			});	
		}
		
	}//End MagnificPopup	
	
	
	
	
	
/*--------------------------------------------------
Function Shortcodes
---------------------------------------------------*/	
		
	function Shortcodes() {
		
		//Intense Image
		
		if( $('.intense-zoom').length > 0 ){
			var elements = document.querySelectorAll( '.intense-zoom' );
			Intense( elements );
		}
		
	
		//Progress bar animations	
		$('.progress-bar li').each(function(i){		
			$(this).appear(function(){			
				var percent = $(this).find('span').attr('data-width');
				var $endNum = parseInt($(this).find('span strong i').text());
				var $that = $(this);			
				$(this).find('span').animate({
					'width' : percent + '%'
				},1600, function(){
				});			
				$(this).find('span strong').animate({
					'opacity' : 1
				},1400);			
				$(this).find('span strong i').countTo({
					from: 0,
					to: $endNum,
					speed: 1200,
					refreshInterval: 30,
					onComplete: function(){}
				});	 
				if(percent == '100'){
					$that.find('span strong').addClass('full');
				}	
			});
		});	
		
		
		// Accordion	  
		$('dl.accordion dt').filter(':first-child').addClass('accordion-active');
		$('dd.accordion-content').filter(':nth-child(n+3)').slideUp(1).addClass('hide');		
		$('dl.accordion').on('click', 'dt', function() {
			$(this).addClass('accordion-active').next().slideDown(200).siblings('dd.accordion-content').slideUp(200).prev().removeClass('accordion-active');						
		});	
		$('dl.accordion').on('click', 'dt.accordion-active', function() {
			$(this).removeClass('accordion-active').siblings('dd.accordion-content').slideUp(200);
		});
		
		
		// Toggle	
		$(".toggle_container").hide(); 
		$("span.toggle-title").on('click', function(){
			$(this).toggleClass("toggle-active").next().slideToggle("normal");
			return false; 
		});
		
		
		// Tabs	
		$(".tab_container").hide(); 
		$("ul.tabs li:first").addClass("tab-active").show(); 
		$(".tab_container:first").show(); 		
		$("ul.tabs li").on('click', function(){
			$("ul.tabs li").removeClass("tab-active"); 
			$(this).addClass("tab-active"); 
			$(".tab_container").hide(); 
			var activeTab = $(this).find("a").attr("href"); 
			$(activeTab).fadeIn(); 
			return false;
		});
		
		
		//Fading Out AlertBox
		$('.shortcode_alertbox').find('.box_close').on('click', function(){
			$(this).parents('.alertboxes').animate({opacity:0},300).animate({height:"0px"});
		});
		
		
		// Milestone counters
		if( jQuery('.clapat-counter').length > 0 ){		
		$('.clapat-counter').each(function() {
			$(this).appear(function() {
				var $endNum = parseInt($(this).find('.number').text());
				$(this).find('.number').countTo({
					from: 0,
					to: $endNum,
					speed: 1500,
					refreshInterval: 30
				});
			},{accX: 0, accY: 0});
		});
		}
		
		// Radial Counters	
		if( jQuery('.radial-counter').length > 0 ){		
			$(".knob").knob({
				width: 140,
				height: 140,
				fgColor: '#000',
				bgColor: '#fff',
				inputColor: '#fff',
				dynamicDraw: true,
				thickness: 0.05,
				tickColorizeValues: true,
				skin:'tron',
				readOnly:true,
			});	
			$(".knob").appear(function(e){			
				var $this = $(this);
				var myVal = $this.attr("data-gal");	
			   $({value: 0}).animate({value: myVal}, {
				   duration: 2000,
				   easing: 'swing',
				   step: function () {
					   $this.val(Math.ceil(this.value)).trigger('change');
				   }
			   })			
			});	
		}
		
	
	}//End Shortcodes

});

/*--------------------------------------------------
	Function Contact Map & Init Contact Map
---------------------------------------------------*/	

	function ContactMap() {	
		
		if( jQuery('#map_canvas').length > 0 ){
			
			var map_marker_image 	= 'images/marker.png';
			var map_address 		= 'New York City'
			var map_zoom			= 16;
			var marker_title 		= 'Hello Friend!';
			var marker_text			= 'Here we are. Come to drink a coffee!';
			var map_type			= google.maps.MapTypeId.SATELLITE;
			
			if( typeof ClapatMapOptions != 'undefined' ){
			
				map_marker_image 	= ClapatMapOptions.map_marker_image;
				map_address 		= ClapatMapOptions.map_address;
				map_zoom			= Number(ClapatMapOptions.map_zoom);
				marker_title 		= ClapatMapOptions.marker_title;
				marker_text			= ClapatMapOptions.marker_text;
				if( ClapatMapOptions.map_type == 0 ){
				
					map_type = google.maps.MapTypeId.SATELLITE;
				}
				else{
				
					map_type = google.maps.MapTypeId.ROADMAP;
				}
				
			}
					
			var settings = {
				zoom: map_zoom,
				center: new google.maps.LatLng(43.270441,6.640888),
				mapTypeControl: false,
				scrollwheel: false,
				draggable: true,
				panControl:false,
				scaleControl: false,
				zoomControl: false,
				streetViewControl:false,
				navigationControl: false,
				mapTypeId: map_type};		
			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});	
			var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000; margin-bottom:0px;"><strong>' + marker_title + '</strong></h4>'+
				'<div id="bodyContent">'+
				'<p style="font-family:Verdana; color:#999; font-size:12px; margin-bottom:10px">' + marker_text + '</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});	
			var companyImage = new google.maps.MarkerImage(map_marker_image,
				new google.maps.Size(58,63),<!-- Width and height of the marker -->
				new google.maps.Point(0,0),
				new google.maps.Point(35,20)<!-- Position of the marker -->
			);
			
			var latitude = 43.270441;
			var longitude = 6.640888;
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({'address':map_address}, function(results, status) {
				if(status == google.maps.GeocoderStatus.OK) {
				
					map.setCenter(results[0].geometry.location);
					
					latitude = results[0].geometry.location.lat();
					longitude = results[0].geometry.location.lng();
					
					var companyPos = new google.maps.LatLng(latitude, longitude);	
					var companyMarker = new google.maps.Marker({
										position: companyPos,
										map: map,
										icon: companyImage,               
										title:"Our Office",
										zIndex: 3});	
									google.maps.event.addListener(companyMarker, 'click', function() {
										infowindow.open(map,companyMarker);
									});	
				}
			});
			
		}
		
		return false
		
	} // End ContactMap

	function InitContactMap() {
		
		if( jQuery('#map_canvas').length > 0 ){
			
			if (typeof google != 'undefined' && typeof google.maps != 'undefined'){
				
				// google maps already loaded, call the function which draws the map
				ContactMap();
				
			} else {
				
				var map_api_key = '';
				if( typeof ClapatMapOptions != 'undefined' ){
					map_api_key = '&key=' + ClapatMapOptions.map_api_key;
				}
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'https://maps.googleapis.com/maps/api/js?' + map_api_key +
							'&callback=ContactMap';
				document.body.appendChild(script);
			}
			
		}
	} // End InitContactMap