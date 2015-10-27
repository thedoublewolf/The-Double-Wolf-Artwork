import Backbone from 'backbone';
import ArtModel from './artwork_model';

let ArtCollection = Backbone.Collection.extend({
	url: 'https://api.parse.com/1/classes/Artwork',
	model: ArtModel,
	parse: function(art) {
		return art.results;
	}
});

export default ArtCollection;