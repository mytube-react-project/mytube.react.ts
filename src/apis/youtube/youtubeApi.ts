import { YoutubeApiImpl } from './youtubeImpl';

export class YouTubeApi implements YoutubeApiImpl {
  http: any;

  constructor(http: any) {
    this.http = http;
  }

  getVideoList(params: any): Promise<any> {
    return this.http.axios().get('/search', params);
  }
}
