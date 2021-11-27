/**
 * Class representing a Bowman character.
 * @class
 * @extends Character
 */
import Character from './Character';

export default class Bowman extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
