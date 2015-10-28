function SpecificArtworkTemplate(data) {
		let sale = data.sold;
		if (sale === true) {
			sale = 'Sold';
		} else {
			sale = 'Available for Purchase';
		}

	return `
		<ul class="artwork">
			<li class="artTitle">${data.title}</li>
			<li class="medium">${data.medium.join(', ')}</li>
			<li class="year">${data.yearCreated}</li>
			<li class="sale">${sale}</li>
		</ul>
	`
}

export default SpecificArtworkTemplate;