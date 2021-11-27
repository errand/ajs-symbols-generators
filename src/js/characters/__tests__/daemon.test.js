import Daemon from '../Daemon';

test('Test Daemon', () => {
  const expected = {
    name: 'Sandro',
    attack: 10,
    defence: 40,
    type: 'Daemon',
    health: 100,
    level: 1,
    damage: expect.any(Function),
    levelUp: expect.any(Function),
  };

  const received = new Daemon('Sandro', 'Daemon');

  expect(received).toEqual(expected);
});
