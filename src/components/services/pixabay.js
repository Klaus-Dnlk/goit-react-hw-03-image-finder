export default function fetchImages(query = '', page = 1) {
  const api_key = '23006956-b96a6e3eefb63390e039a3023';

  return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=${api_key}&image_type=photo&orientation=horizontal&per_page=12
  `)
    .then(response => response.json())
    .then(data => data.hits);
}
