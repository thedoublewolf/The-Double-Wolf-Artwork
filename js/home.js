function processData(artCollection) {
console.log(artCollection);
	return artCollection.each(function(item) {
		return `
			<li class="artTitle">${item.title}</li>
		`
	}).join('');
}
	function HomeTemplate(data) {
		return `
			<h2>List of Artwork</h2>
				<ul class="artwork">
					${HomeTemplate(data)}
				</ul>
		`;
}

export default HomeTemplate;