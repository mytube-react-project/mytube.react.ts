import { CategoryImpl } from './categoryImpl';

export class CategoryApi implements CategoryImpl {
  getVideoList(params: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
