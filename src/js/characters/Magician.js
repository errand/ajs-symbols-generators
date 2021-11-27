/**
 * Class representing a Magician character.
 * @class
 * @extends Character
 */
import Character from './Character';

export default class Magician extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
