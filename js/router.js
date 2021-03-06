import Backbone from 'backbone';
import $ from 'jquery';
import ArtCollection from './artwork_collection';
import HomeTemplate from './home';
import SpecificArtworkTemplate from './specific_art';

let Router = Backbone.Router.extend({

	routes: {
		''	  		: 'home',
		// 'art' 		: 'showArt',
		'art/:id' : 'showSpecificArt'
	},

	initialize: function(appElement) {
		this.$el = appElement;
		this.art = new ArtCollection();
		let router = this;

		this.$el.on('click', '.artTitle', function(event) {
			let $li = $(event.currentTarget);
			let artId = $li.data('art-id');
			router.navigate(`art/${artId}`);
			router.showSpecificArt(artId);
		});
	},

	showSpinner: function() {
		this.$el.html(
			'<i class="fa fa-spinner fa-spin"></i>'
			);
	},

	home: function() {
		this.showSpinner();
		let router = this;
		this.art.fetch().then(function(){
			router.$el.html( HomeTemplate(router.art.toJSON()) );
		}.bind(this));
	},

	showSpecificArt: function(artId) {
		let specificArt = this.art.get(artId);

		if (specificArt) {
			this.$el.html( SpecificArtworkTemplate(specificArt.toJSON()) );
		} else {
			let router = this;
			specificArt = this.art.add({objectId: artId});
			this.showSpinner();
			specificArt.fetch().then(function() {
				router.$el.html( SpecificArtworkTemplate(specificArt.toJSON()) );
			});
		}

	},

	start: function() {
		Backbone.history.start();
	}
	
});

export default Router;