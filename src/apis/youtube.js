import axios from 'axios';

const KEY = 'AIzaSyBB2gNhTq0uYonwKrrGRUDaNcs3ZOCQ_cI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
