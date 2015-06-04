angular
	.module('tohoku',['ngAnimate','ui.router','angular-flexslider'])
	.controller('SearchCtrl', function ($scope) { })
	.controller('SummaryCtrl', function ($scope) { })
	.config(
	
	function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/home");
	  // $urlRouterProvider.when('/artist','partials/artists/shiko-munakata.html');
	  //
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "partials/list-tohoku.html"
	    })
	    .state('foreward', {
	      url: "/foreward",
	      templateUrl: "partials/foreward.html",
	    })
	    .state('artist', {
	    	url: "/artists",
	    	templateUrl: "partials/artist.html"
	    })
		    .state('artist.movement', {
		      url: "/movement",
		      templateUrl: "partials/movement.html"
		    })
		    .state('artist.mingei', {
		    	// abstract: true,
		      url: "/mingei",
		      templateUrl: "partials/artists/mingei.html"
		    })
		    .state('artist.mingei.shiko-munakata', {
		    	url: "/shiko-munakata",
		    	templateUrl: "partials/artists/shiko-munakata.html"
		    })
		    .state('artist.mingei.keisuke-serizawa', {
		    	url: "/keisuke-serizawa",
		    	templateUrl: "partials/artists/keisuke-serizawa.html"
		    })
		    .state('artist.mingei.shoji-hamada', {
		    	url: "/shoji-hamada",
		    	templateUrl: "partials/artists/shoji-hamada.html"
		    })
		    .state('artist.mingei.kanjiro-kawai', {
		    	url: "/kanjiro-kawai",
		    	templateUrl: "partials/artists/kanjiro-kawai.html"
		    })
	    .state('handicrafts', {
	    	abstract: true,
	    	url: "/handicrafts",
	    	templateUrl: "partials/handicrafts.html"
	    })
	    	.state('handicrafts.basket-weaving', {
	    		url: "/basket-weaving",
	    		templateUrl: "partials/handicrafts/basket-weaving.html"
	    	})
	    	.state('handicrafts.blunging', {
	    		url: "/blunging",
	    		templateUrl: "partials/handicrafts/blunging.html"
	    	})
	    	.state('handicrafts.stitching', {
	    		url: "/stiching",
	    		templateUrl: "partials/handicrafts/stitching.html"
	    	})
	    	.state('handicrafts.casting', {
	    		url: "/casting",
	    		templateUrl: "partials/handicrafts/casting.html"
	    	})
	    	.state('handicrafts.woodwork', {
	    		url: "/woodwork",
	    		templateUrl: "partials/handicrafts/woodwork.html"
	    	})
	    	.state('handicrafts.lacquering', {
	    		url: "/lacquering",
	    		templateUrl: "partials/handicrafts/lacquering.html"
	    	})
	    	.state('handicrafts.painting', {
	    		url: "/painting",
	    		templateUrl: "partials/handicrafts/painting.html"
	    	})
	    .state('gallery', {
	    	url: "/gallery",
	    	templateUrl: "partials/gallery.html"
	    });

	})
	.run(function($rootScope, $state) {
		$rootScope.$state = $state;
	})

	.directive('slider', function ($timeout) {
	  return {
	    restrict: 'AE',
			replace: true,
			scope:{
				images: '=',
			  imgnumber: '='				
			},
	    link: function (scope, elem, attrs) {
		
			scope.currentIndex=0;

			scope.next=function(){
				scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
			};
			
			scope.prev=function(){
				scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
			};
			
			scope.$watch('currentIndex',function(){
				scope.images.forEach(function(image){
					image.visible=false;
				});
				scope.images[scope.currentIndex].visible=true;

				scope.imgnumber = scope.currentIndex+1;

			});
	
			/* Start: For Automatic slideshow*/
			
			var timer;
			
			var sliderFunc=function(){
				timer=$timeout(function(){
					scope.next();
					timer=$timeout(sliderFunc,5000);
				},5000);
			};
			
			sliderFunc();
			
			scope.$on('$destroy',function(){
				$timeout.cancel(timer);
			});
			
			/* End : For Automatic slideshow*/
			
	    },
		templateUrl:'handicraft-slide.html'
	  }
	});

