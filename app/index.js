var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  method1: function () {
    console.log('Hello World');
  },
  method2: function () {
    console.log('My name is Angelo');
  }
});
