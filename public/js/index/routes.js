angular.module('Index')
	.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$routeProvider
			.when('/',{
				templateUrl:'views/home.html',
				controller:'MainController'
			})
			.when('/login',{
				templateUrl:'views/login.html',
				controller:'LoginController'
			})
			.when('/register',{
				templateUrl:'views/register.html',
				controller:'VideoController'
			})
			.when('/contact',{
				templateUrl:'views/contact.html',
				controller:'CourseController'
			})
			.when('/about',{
				templateUrl:'views/about.html',
				controller:'InboxController'
			})
			.otherwise({
				templateUrl:'views/404.html'
			});
		$locationProvider.html5Mode(true);
	}]);