/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import { elemHTMLClassAttr } from '../components/utilities/functions';
import { LevelManager } from '../components/game_initial/game_level/level-manager';
import { GLASS, COLOR, BEVERAGE, FULLNESS } from '../components/types/enums';
import { Drinks } from '../components/drinks/drinks';
import { LevelCreator } from '../components/game_initial/game_level/level-creator';

test('Correct class assigns to creating HTMLElement with function', () => {
  const elem = elemHTMLClassAttr('draw')();
  expect(elem.classList[0]).toBe('draw');
});

test('Correct and stable enum COLOR implementation', () => {
  const colors = [COLOR.BLUE, COLOR.GREEN, COLOR.PURPLE];
  expect(colors).toEqual(['blue', 'green', 'purple']);
});

test('Levels quantity in the project is 10 or higher', () => {
  expect(LevelManager.levelsQuantity).toBeGreaterThanOrEqual(10);
});

test('The random drink is an instance of a class Drink', () => {
  const randomDrink = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.COLA, FULLNESS.HALF);
  expect(randomDrink).toBeInstanceOf(Drinks);
});

test('The values from enums are passed correctly', () => {
  const randomDrink = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.COLA, FULLNESS.HALF);
  expect(randomDrink.glass).toMatch('tumbler');
  expect(randomDrink.color).toMatch('green');
  expect(randomDrink.beverage).toMatch('cola');
  expect(randomDrink.fullness).toMatch('half');
});

test('The color code is stable and assigned correctly', () => {
  const randomDrink = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.COLA, FULLNESS.HALF);
  expect(randomDrink.setBeverageColor()).toMatch('#4d320a');
});

test('The color transparency is assigned correctly', () => {
  const randomDrink = new Drinks(GLASS.TUMBLER, COLOR.GREEN, BEVERAGE.COLA, FULLNESS.HALF);
  expect(randomDrink.setGlassColor(0)).toHaveLength(9);
  expect(randomDrink.setGlassColor(4)).toHaveLength(9);
  expect(randomDrink.setGlassColor(137)).toHaveLength(9);
  expect(randomDrink.setGlassColor(250)).toHaveLength(9);
  expect(randomDrink.setGlassColor(255)).toHaveLength(9);
});
