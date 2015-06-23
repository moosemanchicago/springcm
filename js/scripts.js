//"iffy" - IIFE
// (function() {
	
	var initiateAngular = function() {

    	angular.module("DocumentsApp", [])
        		.controller("MainController", ["$scope", "$http", MainController]);
	
		function MainController($scope, $http) {

			// developer information object
			var developer = {
				firstName: "Mustafa",
				lastName: "Ishaq",
				location: "Schaumburg",
				relocation: "Willing to relocate.",
				intro: "I am super excited to be on your team!"
			}

			// bring developer into scope
			$scope.developer = developer;

			var applicationData = {
				header:{ 
					titles:{
						type:"Type",
						name:"Name",
						description:"Description",
						modifiedDate:"Modified"
					}
				}
			}

			// bring developer into scope
			$scope.applicationData = applicationData;		



			// error messages
			var onError1 = function(){
				$scope.error = "Something went wrong with the springCMDataPromise."
			}

			var onError2 = function(){
				$scope.error = "Something went wrong with the actionPromise."
			}



			// get the user documents from the json file springCMData.json
        	var springCMDataPromise = $http.get('springCMData.json');
        	var gatherDataComplete = function(response){
        		//bring user documents into scope after promise is completed
				$scope.springCMData = response.data.userDocuments;
				
				console.log("User Documents:");
				console.log($scope.springCMData);
			}
			springCMDataPromise.then(gatherDataComplete, onError1);




			// get the user actions from the json file actionData.json
			var actionPromise = $http.get('actionData.json');
			var gatherActionsComplete = function(response){
				//bring user actions into scope after promise is completed
				$scope.userActions = response.data.actions;

				console.log("User Actions:");
				console.log($scope.userActions);
			}
			actionPromise.then(gatherActionsComplete, onError2);


    	};
	}

	// functions!
	initiateAngular();

// }());