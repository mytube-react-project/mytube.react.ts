import { CategoryImpl } from './categoryImpl';

export class CategoryApi implements CategoryImpl {
  http: any;

  constructor(httip: any) {
    this.http = httip;
  }
}
