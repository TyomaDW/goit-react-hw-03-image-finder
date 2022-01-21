import axios from 'axios';

const apiKey = '24355682-9ff8d18cf689b459b447658d3';

const instanse = axios.create();

instanse.defaults.baseURL = 'https://pixabay.com/api/';

instanse.defaults.params = {
  key: apiKey,
  orientation: 'horizontal',
  image_type: 'photo',
  per_page: 12,
};

const ApiService = async ({ searchQuery, pageNumber }) => {
  return await instanse
    .get('', { params: { q: searchQuery, page: pageNumber } })
    .then(({ data }) => data);
};

export default ApiService;
