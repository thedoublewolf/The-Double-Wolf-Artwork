function art(data) {
	return data.map(function(item) {
		return `
			<li class="artTitle" data-art-id="${item.objectId}">${item.title}</li>
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