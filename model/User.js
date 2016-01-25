app.factory('User',function(UserService){
	var User = function(userName, email, gender, age){
		this.userName = userName;		
		this.email = email;
		this.gender = gender;
		this.age = age;
		this.contacts = [];
	}

	User.prototype.getContacts = function(){
		var t = this;
		UserService.getContacts().then(function(data){
			if(data && data.constructor == Array){
				for(var i = 0; i<data.length; i++){
					t.contacts.push(new User(data[i].username, data[i].email, data[i].gender, data[i].age));
				}	
			}
		})		
	}
	return User;
});