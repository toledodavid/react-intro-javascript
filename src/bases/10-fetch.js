// console.log('Hello!');


const apiKey = 'FMH46HzHk8wFS4OcWPBUXvpm7eYt14bF';

const requestGIPHY = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

requestGIPHY.then(response => response.json()).then(({data}) => {

  const {url} = data.images.original;
  
  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);

}).catch(console.war);