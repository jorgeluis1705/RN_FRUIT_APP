import {IFruit} from './../../models/fruit.model';
export const fruistState: IFruitsState = {
  fruits: [],
  fruit: {},
};

export interface IFruitsState {
  fruits: IFruit[];
  fruit: IFruit | {};
}
