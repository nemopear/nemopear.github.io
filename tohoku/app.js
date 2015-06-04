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

	.controller('BasicSliderCtrl', function($scope, $timeout) {
		$scope.slides = [
			'images/gallery/photos/01.jpg',
			'images/gallery/photos/05.jpg',
			'images/gallery/photos/06.jpg',
			'images/gallery/photos/07.jpg',
			'images/gallery/photos/08.jpg',
			'images/gallery/photos/09.jpg',
			'images/gallery/photos/010.jpg',
			'images/gallery/photos/011.jpg',
			'images/gallery/photos/012.jpg',
			'images/gallery/photos/013.jpg',
			'images/gallery/photos/014.jpg',
			'images/gallery/photos/015.jpg',
			'images/gallery/photos/016.jpg',
			'images/gallery/photos/017.jpg',
			'images/gallery/photos/018.jpg',
			'images/gallery/photos/019.jpg',
			'images/gallery/photos/020.jpg',
			'images/gallery/photos/021.jpg',
			'images/gallery/photos/022.jpg',
			'images/gallery/photos/023.jpg',
			'images/gallery/photos/024.jpg',
			'images/gallery/photos/025.jpg',
			'images/gallery/photos/026.jpg',
			'images/gallery/photos/027.jpg',
			'images/gallery/photos/028.jpg',
			'images/gallery/photos/029.jpg',
			'images/gallery/photos/030.jpg',
			'images/gallery/photos/031.jpg',
			'images/gallery/photos/032.jpg',
			'images/gallery/photos/033.jpg',
			'images/gallery/photos/034.jpg',
			'images/gallery/photos/035.jpg',
			'images/gallery/photos/036.jpg',
			'images/gallery/photos/037.jpg',
			'images/gallery/photos/038.jpg',
			'images/gallery/photos/039.jpg'
		];
	})


	.controller('WeavingSliderController', function($scope) {
	  $scope.images = [{
	    src: 'basket-weaving/basket-01.png',
	    title: 'Pic 1'
	  }, {
	    src: 'basket-weaving/basket-02.png',
	    title: 'Pic 2'
	  }, {
	    src: 'basket-weaving/basket-03.png',
	    title: 'Pic 3'
	  }, {
	    src: 'basket-weaving/basket-04.png',
	    title: 'Pic 4'
	  }, {
	    src: 'basket-weaving/basket-05.png',
	    title: 'Pic 5'
	  }, {
			src: 'basket-weaving/basket-06.png',
			title: 'Pic 6'
	  }, {
	    src: 'basket-weaving/basket-07.png',
	    title: 'Pic 7'
	  }, {
	    src: 'basket-weaving/basket-08.png',
	    title: 'Pic 8'
	  }, {
	    src: 'basket-weaving/basket-09.png',
	    title: 'Pic 9'
	  }, {
	    src: 'basket-weaving/basket-10.png',
	    title: 'Pic 10'
	  }];
	})

	.controller('BlungingSliderController', function($scope) {
	  $scope.images = [{
	    src: 'blunging/01.png',
	    title: 'Pic 1'
	  }, {
	    src: 'blunging/02.png',
	    title: 'Pic 2'
	  }, {
	    src: 'blunging/03.png',
	    title: 'Pic 3'
	  }, {
	    src: 'blunging/04.png',
	    title: 'Pic 4'
	  }, {
	    src: 'blunging/05.png',
	    title: 'Pic 5'
	  }, {
			src: 'blunging/06.png',
			title: 'Pic 6'
	  }, {
	    src: 'blunging/07.png',
	    title: 'Pic 7'
	  }, {
	    src: 'blunging/08.png',
	    title: 'Pic 8'
	  }, {
	    src: 'blunging/09.png',
	    title: 'Pic 9'
	  }, {
	    src: 'blunging/010.png',
	    title: 'Pic 10'
	  }, {
	    src: 'blunging/011.png',
	    title: 'Pic 11'
	  }];
	})

	.controller('StitchingSliderController', function($scope) {
	  $scope.images = [{
	    src: 'stitching/01.png',
	    title: 'Pic 1'
	  }, {
	    src: 'stitching/02.png',
	    title: 'Pic 2'
	  }, {
	    src: 'stitching/03.png',
	    title: 'Pic 3'
	  }, {
	    src: 'stitching/04.png',
	    title: 'Pic 4'
	  }, {
	    src: 'stitching/05.png',
	    title: 'Pic 5'
	  }, {
			src: 'stitching/06.png',
			title: 'Pic 6'
	  }, {
	    src: 'stitching/07.png',
	    title: 'Pic 7'
	  }, {
	    src: 'stitching/08.png',
	    title: 'Pic 8'
	  }, {
	    src: 'stitching/09.png',
	    title: 'Pic 9'
	  }, {
	    src: 'stitching/010.png',
	    title: 'Pic 10'
	  }];
	})

	.controller('CastingSliderController', function($scope) {
	  $scope.images = [{
	    src: 'casting/01.png',
	    title: 'Pic 1'
	  }, {
	    src: 'casting/02.png',
	    title: 'Pic 2'
	  }, {
	    src: 'casting/03.png',
	    title: 'Pic 3'
	  }];
	})

	.controller('WoodworkSliderController', function($scope) {
	  $scope.images = [{
	    src: 'woodwork/01.png',
	    title: 'Pic 1'
	  }, {
	    src: 'woodwork/02.png',
	    title: 'Pic 2'
	  }, {
	    src: 'woodwork/03.png',
	    title: 'Pic 3'
	  }];
	})

	.controller('LacqueringSliderController', function($scope) {
	  $scope.images = [{
	    src: 'lacquering/01.png',
	    title: 'Pic 1'
	  }, {
	    src: 'lacquering/02.png',
	    title: 'Pic 2'
	  }, {
	    src: 'lacquering/03.png',
	    title: 'Pic 3'
	  },  {
	    src: 'lacquering/04.png',
	    title: 'Pic 4'
	  },  {
	    src: 'lacquering/05.png',
	    title: 'Pic 5'
	  },  {
	    src: 'lacquering/06.png',
	    title: 'Pic 6'
	  },  {
	    src: 'lacquering/07.png',
	    title: 'Pic 7'
	  },  {
	    src: 'lacquering/08.png',
	    title: 'Pic 8'
	  },  {
	    src: 'lacquering/09.png',
	    title: 'Pic 9'
	  },  {
	    src: 'lacquering/010.png',
	    title: 'Pic 10'
	  },  {
	    src: 'lacquering/011.png',
	    title: 'Pic 11'
	  },  {
	    src: 'lacquering/012.png',
	    title: 'Pic 12'
	  }];
	})

	.controller('PaintingSliderController', function($scope) {
	  $scope.images = [{
	    src: 'painting/01.png',
	    title: 'Pic 1'
	  }, {
	    src: 'painting/02.png',
	    title: 'Pic 2'
	  }, {
	    src: 'painting/03.png',
	    title: 'Pic 3'
	  },  {
	    src: 'painting/04.png',
	    title: 'Pic 4'
	  },  {
	    src: 'painting/05.png',
	    title: 'Pic 5'
	  },  {
	    src: 'painting/06.png',
	    title: 'Pic 6'
	  },  {
	    src: 'painting/07.png',
	    title: 'Pic 7'
	  },  {
	    src: 'painting/08.png',
	    title: 'Pic 8'
	  },  {
	    src: 'painting/09.png',
	    title: 'Pic 9'
	  },  {
	    src: 'painting/010.png',
	    title: 'Pic 10'
	  },  {
	    src: 'painting/011.png',
	    title: 'Pic 11'
	  },  {
	    src: 'painting/012.png',
	    title: 'Pic 12'
	  },  {
	    src: 'painting/013.png',
	    title: 'Pic 13'
	  }];
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

