import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {

  if(!videos?.length) return 'loading...'; 

  console.log(videos);
  return (
    <Stack direction={ direction || 'row' } flexWrap="wrap" justifyContent='center' gap={2} color='white' display='flex' alignItems='center'>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos