//Fetch API

//Documentation about Fetch API
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const apiKey = '5xdbaB1AOKPBrgyNOZtFNWz6MmMdKGfB';

const fetchService = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

fetchService
    .then(resp => resp.json())
    .then( ({ data }) => { 
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);