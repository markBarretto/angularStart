app.config(['$routeProvider',
	function($routeProvider) {
	    $routeProvider.
			when('/', {
				templateUrl: '/views/home.page.html',
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);