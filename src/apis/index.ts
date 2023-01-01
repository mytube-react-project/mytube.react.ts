import ApiCore from './@core';
import { YouTubeApi } from './youtube/youtubeApi';

export const YoutubeHttp = new ApiCore({
  baseURL: process.env.REACT_APP_YOUTUBE_API_URL,
  tokenActive: false,
  toastActive: false,
  option: {
    params: {
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      part: 'snippet',
      type: 'video',
    },
  },
});

export const BaseHttp = new ApiCore({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  tokenActive: true,
  toastActive: true,
});

export const YoutubeService = new YouTubeApi(YoutubeHttp);
