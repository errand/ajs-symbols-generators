import Magician from '../Magician';

test('Test Magician', () => {
  const expected = {
    name: 'Sandro',
    attack: 10,
    defence: 40,
    type: 'Magician',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Magician('Sandro', 'Magician');

  expect(received).toEqual(expected);
});
