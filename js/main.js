import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import ArtCollection from './artwork_collection';

// Auto apply Application Id and REST api to headers
// Using const assigns a variable that can't be changed later
const APP_ID = '0VR7huIQPagbXx3vyqPROwxpSZgVYW4KvxHpI8Ml';
const API_KEY = 'LDbcDCCHDGaBtep4EfndEuWHrLXLFccN8HT5cPKR';

$.ajaxSetup({
	headers: {
		'X-Parse-Application-Id': APP_ID,
		'X-Parse-REST-API-Key': API_KEY
	}
});

let artwork = new ArtCollection();

function renderArt() {

}




