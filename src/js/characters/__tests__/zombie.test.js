import Zombie from '../Zombie';

test('Test Zombie', () => {
  const expected = {
    name: 'Sandro',
    attack: 40,
    defence: 10,
    type: 'Zombie',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Zombie('Sandro', 'Zombie');

  expect(received).toEqual(expected);
});
