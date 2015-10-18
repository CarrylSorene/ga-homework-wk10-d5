var seeder = require('mongoose-seed');

seeder.connect('mongodb://localhost:27017/angular-hate', function() {
  seeder.loadModels(['./models/Post.js']);

  seeder.clearModels(['Post'], function() {

  seeder.populateModels(data);
  });
});

var data = [
  {
    'model': 'Post',
    'documents': [
    {
      'title': 'Another Post Full of Hate',
      'url': 'http://ihateangular.com/',
      'author': 'Hater'
    }
    ]
  }
];