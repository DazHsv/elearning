angular.module('App')
	.factory('User',['$http',function($http){
		return {
			get: function(id){
				return $http.get('/api/user/' + id );
			},
			create:function(data){
				return $http.post('/api/user',data);
			},
			update:function(id,data){
				return $http.patch('/api/user/' + id, data);
			},
			delete:function(id){
				return $http.delete('/api/user/' + id);
			}
		}
	}]);