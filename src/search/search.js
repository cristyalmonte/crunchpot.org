const lunr = require('lunr');
const documents = require('./search-data.json');

const index = lunr(function () {
  this.ref('id');
  this.field('title', { boost: 10 });
  this.field('content');

  documents.forEach((doc) => {
    this.add(doc);
  });
});

module.exports = index