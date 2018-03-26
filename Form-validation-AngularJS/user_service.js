var app=angular.module('serviceModule',[]);
app.service('userService',function(){

	var userArray=[];
	var uid=0;

	this.showUser=function(){
		return userArray;
	}

	this.addUserService=function(user){
		
		if(user.id==null)
			{
				user.id=uid++;
				userArray.push(user);
			}
		else
			{
				for(i in userArray)
				{
					if(userArray[i].id==user.id)
					{
						userArray[i]=user;
					}
				}
			}
	}
	
	this.resetUserService=function(user1){
		user1={};
		return user1;
	}
	
	this.deleteUserService=function(ID){
		var deletedIndex=0;
		for(i in userArray)
		{
			if(userArray[i].id==ID)
			{
				deletedIndex=i;
				userArray.splice(ID,1);
				uid--;   					// this reduces the ID value for next generated user when an existing user is deleted
			}
		}
		for(i in userArray)					// this reduces the ID value by 1 for all users succeeding the deleted user
		{
			if(i>=deletedIndex)
			{
				userArray[i].id=userArray[i].id - 1;
			}
		}
	}
	
	this.editUserService=function(user2){
		for(i in userArray)
		{
			if(userArray[i].id==user2.id)
			{
				return userArray[i];
			}
		}
	}

});