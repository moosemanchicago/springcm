//"iffy" - IIFE
	// (function() {
	

    angular.module("DocumentsApp", [])
        .controller("MainController", ["$scope", MainController]);
	
	function MainController($scope, $http) {
        $scope.message = "AngularJS is working";

        
    };


    


	// bring in the clients assets to the view
	var fetchUserDocuments  = function(){
		
		// create new XHR object to have fun with
		var documentsXHR = new XMLHttpRequest();

		// when the onload event is fired with "OK 200", do work with the the JSON object that was received
		documentsXHR.onload = function(){
			if( documentsXHR.status == 200){
				//access data from the JSON object property "userDocuments"
				var gridData = JSON.parse(documentsXHR.responseText).userDocuments;
				console.log(gridData);

				var headerTitles = {
		    		item: '<article><span class="type"></span><span class="name"></span><span class="description"></span><span 	class="modifiedDate"></span	></article>'
				};
		
				var springCMData = new List('scrollable-grid', headerTitles, gridData);
		
				console.log("AJAX:   springCMData Loaded successfully from .json file");
		
			} else {
				console.log("AJAX:   failed to load grid data from .json file");
			}
		}
		
		// prepare the request
		documentsXHR.open('GET','springCMData.json',true);

		// have fun
		documentsXHR.send();
	
	};
	
	
	// bring in the actions to the view; less comments in this section because its practically
	// the same thing as _fetchUserDocuments();
	var fetchUserActions  = function(){
	
		var actionsXHR = new XMLHttpRequest();
		actionsXHR.onload = function(){
			if( actionsXHR.status == 200){

				var actionData = JSON.parse(actionsXHR.responseText).actions;

				console.log(_.forEach(actionData.name));
				



				var actionTitles = {
		    		item: '<article><span class="action_button name"></span><span class="action_button imageName"></span></article>'
				};

				var actionButtons = new List('action-drawer', actionTitles, actionData);


				console.log("AJAX:   actionData Loaded successfully from .json file");
			} else {
				console.log("AJAX:   failed to load action data from .json file");
			}
		}
	
		actionsXHR.open('GET','actionData.json',true);
		actionsXHR.send();
	
	};
	


	// functions!
	fetchUserDocuments();
	fetchUserActions();
	
	
	
	// }());