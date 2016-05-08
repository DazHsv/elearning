angular.module('App')
	.factory('Course',['$http',function($http){
		return {
			get: function(id){
				return $http.get('/api/course/' + id );
			},
			create:function(data){
				return $http.post('/api/course',data);
			},
			update:function(id,data){
				return $http.patch('/api/course/' + id, data);
			},
			delete:function(id){
				return $http.delete('/api/course/' + id);
			}
		}
	}]);