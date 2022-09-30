import {ICity} from './../../models/city.model';
export const CITIES_STATE: initialStateCity = {
  cities: [],
  city: {},
  count: 0,
};

interface initialStateCity {
  cities: ICity[];
  city: ICity | {};
  count: number;
}
