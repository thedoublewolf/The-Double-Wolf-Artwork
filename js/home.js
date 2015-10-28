function art(data) {
	return data.map(function(item) {
		return `
			<p class="artTitle" data-art-id="${item.objectId}">${item.title}</p>
		`
	}).join('');
}
	function HomeTemplate(data) {
		return `
				<div class="artwork">
				<h2>Artwork</h2>
					${art(data)}
				</div>
		`;
}

export default HomeTemplate;