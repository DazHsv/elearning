angular.module('App')
	.factory('Video',['$http',function($http){
		return {
			get: function(id){
				return $http.get('/api/video/' + id );
			},
			create:function(data){
				return $http.post('/api/video',data);
			},
			update:function(id,data){
				return $http.patch('/api/video/' + id, data);
			},
			delete:function(id){
				return $http.delete('/api/video/' + id);
			}
		}
	}]);