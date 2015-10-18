var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var postsController = require('../controllers/posts');

// http://127.0.0.1:3000/posts
router.route('/posts')

  //GET all posts
  .get(postsController.getAll)

  //POST a new post
  .post(postsController.createPost);

module.exports = router