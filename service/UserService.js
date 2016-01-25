app.service('UserService', function($http, $q, $log){
	return {
		getContacts: function(username, password){
			var deferred = $q.defer();
			$http({
		  		method: 'POST',
		  		url: 'http://127.0.0.1:3000/users/test',
		  		data: { 
		  			'username': username,
		  			'password': password,
		  		}
		  	}).then(function(response){
		  		console.log(response)
		  		deferred.resolve(response.data);
		  	}, function(response){
		  		deferred.reject(response);
		  	})
		  	return deferred.promise;
		}
	}
})