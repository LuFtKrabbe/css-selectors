export interface DataDrinks {
  glass: string;
  color: string;
  beverage: string;
  fullness: string;

  createDrink: (number: number, answer: string) => void;
}
