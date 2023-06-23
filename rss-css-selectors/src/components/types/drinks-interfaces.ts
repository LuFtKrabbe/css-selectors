export interface DataDrinks {
  glass: string;
  beverage: string | undefined;
  ice: boolean | undefined;

  createDrink: (fullness: number) => void;
}
