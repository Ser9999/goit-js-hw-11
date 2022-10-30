import axios from 'axios';
export { pixabay };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '30869015-c05f2a0d64cc2fff9a7f26fec';

async function pixabay(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
