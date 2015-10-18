angular.module("hateApp")
  .controller("PostsController", PostsController);

PostsController.$inject = ['$http'];

// capitalized because this is a constructor function
function PostsController($http){

  var self = this;

  self.all = []

  function getPosts() {
    $http
      .get('http://localhost:3000/posts') 
      .then(function(response) {
        console.log(response);
        self.all = response.data.posts;
      })
    }

  getPosts();
  
  self.addPost = addPost;
  self.newPost = {};

  function addPost(){
    $http
      .post('http://localhost:3000/posts', self.newPost)
      .then(function(response) {
        console.log(response);
        getPosts();
      });

    self.newPost = {};
  }
}