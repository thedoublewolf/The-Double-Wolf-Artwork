import Backbone from 'backbone';
import TodosCollection from './todos_collection';
import homeTemplate from './views/home';
import todosTemplate from './views/todos';

let Router = Backbone.Router.extend({

	routes: {
		''      : 'home',
		'todos' : 'showTodos',
		'todos/:id' : 'showIndividualTodo',
		'about' : 'showAbout'
	},

	initialize: function(appElement) {
		this.$el = appElement;

		this.todos = new TodosCollection();
	},

	showSpinner: function() {
		this.$el.html(
			'<i class="fa fa-spinner fa-spin"></i>'
			);
	},

	home: function() {
		console.log('show home page');
		this.$el.html(homeTemplate());
	},

	showIndividualTodo: function(todoId) {
		console.log('should show', todoId);
	},

	showTodos: function() {
		console.log('show to-do page');

		this.showSpinner();

		this.todos.fetch().then(function(){

			this.$el.html( todosTemplate(this.todos.toJSON()) );

		}.bind(this));

	},

	showAbout: function() {
		console.log('show about page');
	},

	start: function() {
		Backbone.history.start();
	}

});

export default Router;
