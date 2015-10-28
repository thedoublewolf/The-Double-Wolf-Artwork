function SpecificArtworkTemplate(data) {
		let sale = data.sold;
		if (sale === true) {
			sale = 'Sold';
		} else {
			sale = 'Available for Purchase';
		}

	return `
		<img class="artImage" src="${data.imageUrl}">
		<div class="artworkbox">
			<p class="title">${data.title}</p>
			<P class="medium">${data.medium.join(', ')}</p>
			<P class="year">${data.yearCreated}</p>
			<P class="sale">${sale}</p>
			<a href='' class="back"><i class="fa fa-long-arrow-left"></i></a>
		</div>
	`
}

export default SpecificArtworkTemplate;
