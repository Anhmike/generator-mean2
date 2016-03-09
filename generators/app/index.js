'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.cyan('mean2') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What would you like to name your application?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your application?',
        default: 'MEAN stack using typescript and Angular 2'
      },
      {
        type: 'input',
        name: 'version',
        message: 'What version would you give your application?',
        default: '0.1.0'
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'What keywords would you give your application?'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Who is your application author?',

      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      this.writeLocation = this.destinationRoot() + '/' + this.props.name;

      done();
    }.bind(this));
  },

  paths: function () {
    this.sourceRoot(__dirname + '/ng2-boilerplate');
    this.destinationRoot(this.writeLocation);
  },

  writing: {
    createApplication: function () {
      // Write app source to destination
      this.directory(this.sourceRoot(), this.destinationRoot());
    },
    setPackageProperties: function () {
      // Extend package.json with the properties from prompts
      this.fs.extendJSON(this.writeLocation + '/package.json', this.props);
    }
  },

  install: function () {
    this.installDependencies();
  }
});
