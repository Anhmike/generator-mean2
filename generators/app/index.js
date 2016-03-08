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

      done();
    }.bind(this));
  },

  writing: {
    createApplication: function () {
      // TODO: Pull application from ng2-boilerplate submodule and write to targetDir
    },
    setPackageProperties: function () {
      // TODO: Extend package.json with this.props
    }
  },

  install: function () {
    this.installDependencies();
  }
});
