app.factory('Post', function (FURL, $firebaseArray, $firebaseObject, Auth) {

	var ref = new Firebase(FURL);
	var posts = $firebaseArray(ref.child('posts'));
	var user  = Auth.user;

	var Post = {
		
		all: posts,

		createPost: function(post) {
			post.datetime = Firebase.ServerValue.TIMESTAMP;
			return posts.$add(post);
		},

		getPost: function(postId) {
			return $firebaseObject(ref.child('posts').child(postId));
		},

		editPost: function(post) {
			//- do something
		},

		deletePost: function(postId) {
			var post = this.getPost(postId);		
			return post.$remove();
		}

	};

	return Post;

});