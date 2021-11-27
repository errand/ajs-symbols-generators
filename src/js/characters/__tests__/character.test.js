import Character from '../Character';
import Zombie from '../Zombie';

test('Check Name errors', () => {
  expect(() => new Character(32, 'Fairy')).toThrow();
});

test('Check Type;', () => {
  expect(() => new Character('Diablo', 'Fairy')).toThrow();
});

test('Check Type for a string;', () => {
  expect(() => new Character('Diablo', 234)).toThrow();
});
