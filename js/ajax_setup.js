import $ from 'jquery';

const APP_ID = '0VR7huIQPagbXx3vyqPROwxpSZgVYW4KvxHpI8Ml';
const API_KEY = 'LDbcDCCHDGaBtep4EfndEuWHrLXLFccN8HT5cPKR';

$.ajaxSetup({
	headers: {
		'X-Parse-Application-Id': APP_ID,
		'X-Parse-REST-API-Key': API_KEY
	}
});