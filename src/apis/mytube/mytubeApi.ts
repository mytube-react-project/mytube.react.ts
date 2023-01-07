import { MytubeApiImpl } from './mytubeImpl';

export class MyTubeApi implements MytubeApiImpl {
  getVideoList(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
