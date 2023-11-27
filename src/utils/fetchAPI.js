import axios from "axios";

const baseURL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: baseURL,
  params: {
    maxResults: '48'
  },
  headers: {
    'X-RapidAPI-Key': 'c029594f00mshf493f72d5f03121p1b937ejsn2e2d00aa3772',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${baseURL}/${url}`, options);

    return data;
}