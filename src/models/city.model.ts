import {IFruit} from './fruit.model';

export interface ICity {
  _id: string;
  fruits: IFruit[];
  image: string;
  name: string;
}
