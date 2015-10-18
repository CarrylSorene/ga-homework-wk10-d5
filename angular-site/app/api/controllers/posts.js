var Post = require('../models/Post');

// GET
function getAll(request, response) {
  Post.find(function(error, posts) {
    if(error) response.status(404).send(error);

    response.status(200).send(posts);
  }).select('-__v');
}

// POST
function createPost(request, response) {
  var post = new Post(request.body);

  post.save(function(error) {
    if(error) response.status(500).send(error);

    response.status(201).send(post);
  });
}

module.exports = {
  getAll: getAll,
  createPost: createPost
}