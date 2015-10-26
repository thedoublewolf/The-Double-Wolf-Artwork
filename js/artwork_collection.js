import Backbone from 'backbone';
import ArtModel from './artwork_model';

// Collection is responsible for loading data and creating a model for each record
let ArtCollection = Backbone.Collection.extend({
	url: 'https://api.parse.com/1/classes/Artwork',
	model: ArtModel,
	parse: function(art) {
		return art.results;
	}
});

export default ArtCollection;