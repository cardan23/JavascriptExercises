//String Properties exercise
//Description: Show only the string properties into given object

const movie = {
    title: 'Jurassic World 2',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Steven Spilverg'
}

showStringProperties(movie);

function showStringProperties(movie){
    for(let value in movie){
        if(typeof(movie[value]) === 'string'){
            console.log(movie[value]);
        }
    }
}