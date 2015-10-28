function art(artCollection) {
	return artCollection.map(function(item) {
		return `
			<li class="artTitle">${item.title}</li>
		`
	}).join('');
}
	function HomeTemplate(data) {
		return `
			<h2 class="artworkHeader">List of Artwork</h2>
				<ul class="artwork">
					${art(data)}
				</ul>
		`;
}

export default HomeTemplate;