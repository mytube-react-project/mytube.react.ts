import ApiCore from './@core';
import { CategoryApi } from './category/catrgoryApi';
import { YouTubeApi } from './youtube/youtubeApi';

const YoutubeHttp = new ApiCore({
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

const BaseHttp = new ApiCore({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  tokenActive: true,
  toastActive: true,
});

const mswHttp = new ApiCore({
  tokenActive: false,
  toastActive: false,
});

export const YoutubeService = new YouTubeApi(YoutubeHttp);
export const MswCateServeice = new CategoryApi(mswHttp);
