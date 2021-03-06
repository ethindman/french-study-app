app.controller('PostsController', function ($scope, $location, Auth, Post) {

	$scope.createPost = function() {
    $scope.post.gravatar = Auth.user.password.profileImageURL;
		$scope.post.name = Auth.user.profile.full_name;
		$scope.post.poster = Auth.user.uid;

		Post.createPost($scope.post).then(function(ref) {
			toastr.success('Post successfully created!');
			$location.path('/');
		});

	};

});
