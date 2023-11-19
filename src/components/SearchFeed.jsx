import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { SideBar, Videos } from './';
import { fetchAPI } from '../utils/fetchAPI';

const SearchFeed = () => {
  const [ videos, setVideos ] = useState([]);
  const { searchTerm } = useParams();  //user search_term from url

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
  },[searchTerm]);
  
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}} 
    ml={15}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
          RESULTS FOR: <span style={{ color: '#F31503'}} >{searchTerm}</span> VIDEOS
        </Typography>
        <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed