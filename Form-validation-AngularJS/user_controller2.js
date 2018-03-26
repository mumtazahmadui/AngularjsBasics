var app=angular.module('myModule',['serviceModule']);
app.controller('myController',function($scope,userService,$interval){
	var uid=0;
	
	// code starts to display date and time
	var updateTime=function(){
		$scope.currentDate=new Date();
	}
	updateTime();
	$interval(updateTime,1000);
	//code ends for time
	
	$scope.users=userService.showUser();
	
	$scope.addUser=function(){	
			userService.addUserService($scope.user);
			$scope.user={};
	}
	
	$scope.resetUser=function(){
		$scope.user=userService.resetUserService($scope.user);
	}
	
	$scope.deleteUser=function(ID){
		userService.deleteUserService(ID);
	}
	
	$scope.editUser=function(user1){
		
		$scope.user=angular.copy(userService.editUserService(user1));
		
	}
});


app.directive('onlyDigits',function(){
	return{
	restrict: 'A',
	require: 'ngModel',
	link: function(scope,element,attrs,ngModelCtrl)
		{
		ngModelCtrl.$parsers.push(function(inputValue){
			if(inputValue==undefined)
			{
				return '';
			}
			var digitValue=inputValue.replace(/[^0-9]/g, '');
			if(digitValue!==inputValue)
			{
				ngModelCtrl.$setViewValue(digitValue);
				ngModelCtrl.$render();
			}
			return digitValue;
		});	
		}
	};
});

app.directive('datePicker',function(){
	return{
		require:'ngModel',
		restrict:'A',
		link:function(scope,element,attrs,ctrl)
		{
			$(function(){
				element.datepicker({
					dateFormat:'dd/mm/yy',
					onSelect:function(inputDate){
						ctrl.$setViewValue(inputDate);
						scope.$digest();
					}
				});
			});
			
		}
	};
});


app.directive('textCompare',function(){
	return{
	restrict:'A',
	require:'ngModel',
	link:function(scope,elem,attrs,ctrl)
	{
		var pass="#" + attrs.textCompare;
		elem.on('keyup',function(){
		scope.$apply(function(){
		var match= elem.val() === $(pass).val();
		ctrl.$setValidity('isMatch',match);
		}
		);
	});
	}
	};
}); 

app.directive('copyRight',function(){
	return{
		restrict:'E',
		replace:'true',
		template:'<h6>All Rights Reserved by Mumtaz Ahmad &copy;</h6>'
	};
});


/*
app.directive('replaceB',function(){
	return{
	restrict :'A',
	require:'ngModel',
	link:function(scope,element,attrs,ctrl)
	{
		ctrl.$parsers.push(function(input){
		var editedText=input.replace(/chutiye/i, 'Sweetheart');
		ctrl.$setViewValue(editedText);
		ctrl.$render();
		});
		return editedText;
	}
	};
	
});  
*/




