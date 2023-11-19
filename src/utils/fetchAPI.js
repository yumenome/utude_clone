import axios from "axios";

const baseURL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: baseURL,
  params: {
    maxResults: '48'
  },
  headers: {
    'X-RapidAPI-Key': 'c3e2e1710amsh8f580e9a27c8392p19b2f9jsn48cee1078540',
    // 'X-RapidAPI-Key': process.env.REACT_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${baseURL}/${url}`, options);

    return data;
}