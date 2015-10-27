import Backbone from 'backbone';
import ArtCollection from './artwork_collection';
import homeTemplate from './views/home';
import artTemplate from './views/art';

let Router = Bacbone.Router.extend({

	routes: {
		''	  : 'home',
		'art' : 'showArt'
	},

	initialize: function(appElement) {
		this.$el = appElement;
		this.art = new ArtCollection();
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

	showArt: function() {
		console.log('show art listing');
		this.showSpinner();
		this.art.fetch().then(function(){
			this.$el.html( artTemplate(this.todos.toJSON()) );
		}.bind(this));
	},

	start: function() {
		Backbone.history.start();
	}
	
});