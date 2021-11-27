/**
 * Class representing a Undead character.
 * @class
 * @extends Character
 */
import Character from './Character';

export default class Undead extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
