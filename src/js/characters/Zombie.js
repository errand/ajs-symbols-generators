/**
 * Class representing a Zombie character.
 * @class
 * @extends Character
 */
import Character from './Character';

export default class Zombie extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
