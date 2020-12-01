import axios from 'axios';

const KEY = 'AIzaSyCx8LUUkzOYMM0qJw83_wv8QGLMpXVHNpA';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
