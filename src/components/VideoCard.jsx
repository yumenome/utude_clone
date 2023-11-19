import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({video: {id: { videoId }, snippet } }) => {
  return (
    <Card sx={{width: { xs: '300px', sm: '350px', md: '300px', }}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                alt={snippet?.title}
                sx={{ width: {xs: '100%', sm: '100%', md: '300px'}, height: '170px' }}
            />
        </Link>
        <CardContent sx={{ backgroundColor: '#ff577f', height: '106px'}}>
            <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                    {snippet?.title.slice(0,50) + '....' || demoVideoTitle.slice(0,50) + '....'}
                </Typography>
            </Link>
            <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color='black' style={{display: 'flex', alignItems: 'center'}}>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 15, color: 'black', ml: '3px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard