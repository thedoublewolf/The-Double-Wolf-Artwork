import Backbone from 'backbone';

let ArtModel = Backbone.Model.extend({

	urlRoot: 'https://api.parse.com/1/classes/Artwork',
	idAttribute: 'objectId'
});

export default ArtModel;