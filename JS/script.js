/* const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ab63a3b05bmsh266510271858db3p19b11djsn7775d80717d2',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

async function fetchData() {
	try {
		const flipCards = document.querySelectorAll('.flip-card')
		for (const flipCard of flipCards) {
			const animeId = flipCard.id;
			const url = `https://myanimelist.p.rapidapi.com/anime/${animeId}`;

			const response = await fetch(url, options);
			const result = await response.json();
			console.log(result);

			const imgAnimeApi = result.picture_url;
			const imgAnimeHtml = flipCard.querySelector('.animeImg');
			imgAnimeHtml.src = imgAnimeApi;
		}

	} catch (error) {
		console.error(error);
	}
}

fetchData(); */