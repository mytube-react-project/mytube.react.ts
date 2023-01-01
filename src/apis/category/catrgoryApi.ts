import { CategoryImpl } from './categoryImpl';

export class CategoryApi implements CategoryImpl {
  http: any;

  constructor(httip: any) {
    this.http = httip;
  }

  getVideoList(params: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
