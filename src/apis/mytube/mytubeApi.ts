import { MytubeApiImpl } from './mytubeImpl';

export class MyTubeApi implements MytubeApiImpl {
  getVideoList(params: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
