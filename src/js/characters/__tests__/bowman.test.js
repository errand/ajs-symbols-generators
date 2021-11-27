import Bowman from '../Bowman';

test('Test Bowman', () => {
  const expected = {
    name: 'Sandro',
    attack: 25,
    defence: 25,
    type: 'Bowman',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Bowman('Sandro', 'Bowman');

  expect(received).toEqual(expected);
});
