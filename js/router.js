import Backbone from 'backbone';
import $ from 'jquery';
import ArtCollection from './artwork_collection';
import HomeTemplate from './home';
// import artTemplate from './views/art';

let Router = Backbone.Router.extend({

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
		// this.showSpinner();
		this.art.fetch();
		this.$el.html(HomeTemplate(this.art));
	},

	// showArt: function() {
	// 	console.log('show art listing');
	// 	this.showSpinner();
	// 	this.art.fetch().then(function(){
	// 		this.$el.html( artTemplate(this.todos.toJSON()) );
	// 	}.bind(this));
	// },

	start: function() {
		Backbone.history.start();
	}
	
});

export default Router;