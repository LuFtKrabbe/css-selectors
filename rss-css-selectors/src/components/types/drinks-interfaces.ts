export interface DataDrinks {
  glass: string;
  color: string;
  beverage: string;

  createDrink: (fullness: number) => void;
}
