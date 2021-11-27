import Team from './Team';
import Bowman from './characters/Bowman';

const team = new Team();

const archer = new Bowman('Archer');
const elf = new Bowman('Elf');
team.add(archer);
team.add(elf);

// eslint-disable-next-line no-restricted-syntax
for (const person of team) { console.log(person.name); }
