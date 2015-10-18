var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

var postsController = require('../controllers/posts');

// http://127.0.0.1:3000/posts
router.route('/posts')

  //GET all posts
  .get(postsController.getAll)

  //POST a new post
  .post(postsController.createPost);

//router.route('/posts/:id') took update and delete out for this app, still need this line?

module.exports = router