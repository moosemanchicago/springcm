//"iffy" - IIFE
(function() {
	
	var initiateAngular = function() {

    	angular.module("DocumentsApp", [])
        		.controller("MainController", ["$scope", "$http", MainController]);
	
		function MainController($scope, $http) {

			// developer information object
			var developer = {
				firstName: "Mustafa",
				lastName: "Ishaq",
				email: "mustafa.ishaq@gmail.com",
				alernateEmail: "moosecodes@gmail.com",
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
				},
				links:{
					springcm: "http://www.springcm.com",

				},
				images:{
					logo:"img/logo.png"
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
	}; // end initiateAngular();


	// functions!
	initiateAngular();


	window.onload = function(){

		var useActionDrawer = function(){
			var drawer = document.getElementById('drawer-wrapper');
			var toggle = document.getElementById('action-drawer-toggle');

			if (drawer.classList.contains("closed")){
				drawer.classList.remove("closed");
				drawer.classList.add("open");
				toggle.innerHTML = "Close";

			} else {
				drawer.classList.remove("open");
				drawer.classList.add("closed");
				toggle.innerHTML = "Open";
			}
		};

		document.getElementById('action-drawer-toggle').addEventListener('click', useActionDrawer);
	}

}());