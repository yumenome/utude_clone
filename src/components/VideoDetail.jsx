import ReactPlayer from 'react-player';
import { Link, useParams }  from 'react-router-dom';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { useState, useEffect } from 'react';

import { Videos } from './';
import { fetchAPI } from '../utils/fetchAPI';


const VideoDetail = () => {

  const [ videoDetail, setVideoDetail ] = useState(null);
  const [ videos, setVideos ] = useState(null);
  const { id } = useParams();
console.log(id);
  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

      // search?part=snippet&relatedToVideoId=${id}&type=video
      fetchAPI(`search?part=snippet&VideoId=${id}`)
      .then((data) => setVideos(data.items));
  },[id]);
  console.log(videoDetail);
  console.log(videos);

  if(!videoDetail?.snippet) return 'loading'; 

  const { snippet : { title, channelId, channelTitle }, statistics: { viewCount, likeCount} } = videoDetail;
<Box>
      
      </Box>
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row'}}>
      <Box flex={1}>
        <Box sx={{ width: '100%', position:'sticky', top: '77px' }}>
        
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' color='#fff' py={1} px={2}>

            <Link to={`/channel/${channelId}`}>
              <Typography variant='h5' color='#fff'>
                {channelTitle}
                <CheckCircle sx={{ fontSize: '12px', color: '#fff', ml: '3px'}} />
              </Typography>
            </Link>

            <Stack direction='row' gap='20px' alignItems='center'>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>

          </Stack>
        </Box>
      </Box>
      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction= 'column' />
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail