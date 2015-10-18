var Post = require('../models/Post');

// GET
function getAll(request, response) {
  Post.find(function(error, posts) {
    if(error) response.json({message: 'Could not find any posts'});

    response.json({posts: posts});
  });
}

// POST
function createPost(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var post = new Post(request.body);

  post.save(function(error) {
    if(error) response.json({messsage: 'Could not create post because:' + error});

    response.json({post: post});
  });
}

module.exports = {
  getAll: getAll,
  createPost: createPost
}