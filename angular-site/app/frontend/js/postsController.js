angular
  .module("hateApp")
  .controller("PostsController", PostsController);

PostsController.$inject = ['$resource'];

// capitalized because this is a constructor function
function PostsController($resource){

  var self = this;

  var Post = $resource('http://localhost:3000/posts/:id', { id: '@_id'}, { 
  'update': { method: 'PUT'} 
  });

  this.posts = Post.query();

  this.selectPost = function(post) {
    self.selectedPost = Post.get({ id: post._id})
  };

  this.newPost = {}

  this.add = function(){
    Post.save(self.newPost)
      .$promise.then(function(){
      self.posts = Post.query()
      self.newPost = {}
      })
      
      console.log(self.newPost);
    }; 

}