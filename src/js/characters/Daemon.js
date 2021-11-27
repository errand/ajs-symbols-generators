/**
 * Class representing a Daemon character.
 * @class
 * @extends Character
 */
import Character from './Character';

export default class Daemon extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
