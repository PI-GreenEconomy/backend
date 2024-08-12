export interface IResultadoFrete {
  id: string;
  name: string;
  price: string;
  delivery_time: number;
  delivery_range: {
    min: number;
    max: number;
  };
  company: {
    name: string;
    picture: string;
  };
}
