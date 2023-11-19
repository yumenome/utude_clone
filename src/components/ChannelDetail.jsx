import { userState, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchAPI } from '../utils/fetchAPI';

const ChannelDetail = () => {

  const [channel, setChannel] = useState(null);
  const [related_videos, setRelated_videos] = useState([]);

  // from url
  const { id } = useParams();
  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannel(data?.items[0])); //get the channel from th first index
    
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setRelated_videos(data?.items)); //get the related videos

  },[id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          height: '300px',
          zIndex: 10,
          background: 'linear-gradient(90deg, rgba(255,7,66,1) 0%, rgba(255,209,209,1) 74%, rgba(255,255,255,1) 100%)'
        }}
        />
        <ChannelCard channelDetail={channel} marginTop="-120px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' }}}/>
        <Videos videos={related_videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail