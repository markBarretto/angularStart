app.config(['$routeProvider', '$stateProvider',
	function($routeProvider, $stateProvider) {
	    $routeProvider.
			when('/', {
				templateUrl: '/views/home.page.html',
			}).
			when('/login', {
				templateUrl: '/views/login.page.html',
				controller: 'loginController as vm'
			}).
			otherwise({
				redirectTo: '/'
			});

		$stateProvider
			.state('/', {
				url: "/",
				views: {
					"nav": { 
						templateUrl: "/views/partials/nav.partials.html",
						controller: "NavController as vm"
					},
					"footer": { 
						templateUrl: "/views/partials/footer.partials.html" 
					}
				}
			})
	}
]);