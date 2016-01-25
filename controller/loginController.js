app.controller('loginController', function(User){
	var vm = this;

	//vm.UserService = UserService;	

	vm.User = new User('userName', 'email', 'gender', 'age')
	vm.User.getContacts();
})