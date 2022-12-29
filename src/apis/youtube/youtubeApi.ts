import { YoutubeApiImpl } from './youtubeImpl';

export class YouTubeApi implements YoutubeApiImpl {
  getVideoList(params: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
