import Undead from '../Undead';

test('Test Undead', () => {
  const expected = {
    name: 'Sandro',
    attack: 25,
    defence: 25,
    type: 'Undead',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Undead('Sandro', 'Undead');

  expect(received).toEqual(expected);
});
