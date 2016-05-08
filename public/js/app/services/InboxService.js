angular.module('App')
	.factory('Inbox',['$http',function($http){
		return {
			get: function(){
				return $http.get('/api/inbox');
			},
			send:function(data){
				return $http.post('/api/inbox',data);
			},
			delete:function(id){
				return $http.delete('/api/inbox/' + id);
			}
		}
	}]);