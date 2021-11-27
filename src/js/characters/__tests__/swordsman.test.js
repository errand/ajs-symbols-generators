import Swordsman from '../Swordsman';

test('Test Swordsman', () => {
  const expected = {
    name: 'Sandro',
    attack: 40,
    defence: 10,
    type: 'Swordsman',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Swordsman('Sandro', 'Swordsman');

  expect(received).toEqual(expected);
});
