const url = 'https://myanimelist.p.rapidapi.com/anime/38000';       /* hacer que esta variable cambie dentro del fetch data, en try */
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ab63a3b05bmsh266510271858db3p19b11djsn7775d80717d2',
        'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        const imgKimetsu = result.picture_url;
        const kimetsuDiv = document.querySelectorAll('.kimetsu');   /* tengo que encontrar una forma de cambiar esto */
        kimetsuDiv.forEach(image => {
            image.src = imgKimetsu;
        })
        kimetsuDiv.src = imgKimetsu;

    } catch (error) {
        console.error(error);
    }
}

fetchData();