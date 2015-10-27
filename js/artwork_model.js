import Backbone from 'backbone';

// Create ArtModel constructor on Backbone Model to map to each individual record of artwork
let ArtModel = Backbone.Model.extend({
	// Specify where to get data, the root url to post to when creating a new record
	urlRoot: 'https://api.parse.com/1/classes/Artwork',
	idAttribute: 'objectId'
});

export default ArtModel;