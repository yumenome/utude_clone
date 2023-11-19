import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { SideBar, Videos } from './';
import { fetchAPI } from '../utils/fetchAPI';

const Feed = () => {

  const [ selectedCat, setSelectedCat ] = useState('Raung Ni');
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    // setVideos(null);
    fetchAPI(`search?part=snippet&q=${selectedCat}`)
        .then((data) => setVideos(data.items))
  },[selectedCat]);
  
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row'} }}>
      <Box sx={{ height: { sx: 'autho', md: '92vh'}, px: { sx: 0, md: 2}, borderRight: '1px solid #3d3d3d'  }}>
        <SideBar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff'}}>
        copyright © 2023 yumenome
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
          {selectedCat} <span style={{ color: '#F31503'}} >videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed