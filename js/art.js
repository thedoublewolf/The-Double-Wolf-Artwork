function art(artCollection) {
	return artCollection.map(function(item) {

		let sale = item.sold;
		if (sale === true) {
			sale = 'Sold';
		} else {
			sale = 'Available for Purchase';
		}

		return `
			<li class="art-item artTitle" artCollection-art-id="${item.objectId}">${item.title}</li>
			<li class="art-item medium">${item.medium.join(', ')}</li>
			<li class="art-item year">${item.yearCreated}</li>
			<li class="art-item sale">${sale}</li>
		`
	}).join('');
}
	function ArtworkTemplate(data) {
		return `
			<h2 class="artworkHeader">List of Artwork</h2>
				<ul class="artworkImage">
					${art(data)}
				</ul>
		`;
}

export default ArtworkTemplate;


// function ArtworkTemplate(artCollection) {
// console.log(artCollection);
// 	let sale = artCollection.sold;
// 	if (sale === true) {
// 		sale = 'Sold';
// 	} else {
// 		sale = 'Available for Purchase';
// 	}

// 	return `
// 		<ul class="artwork">
// 			<li class="artTitle">${artCollection.title}</li>
// 			<li class="medium">${artCollection.medium.join(', ')}</li>
// 			<li class="year">${artCollection.yearCreated}</li>
// 			<li class="sale">${sale}</li>
// 		</ul>
// 	`;
// }

// export default ArtworkTemplate;