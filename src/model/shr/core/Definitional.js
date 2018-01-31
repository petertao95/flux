import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Definitional.
 */
class Definitional {

  /**
   * Get the value (aliases boolean).
   * @returns {boolean} The boolean
   */
  get value() {
    return this._boolean;
  }

  /**
   * Set the value (aliases boolean).
   * @param {boolean} value - The boolean
   */
  set value(value) {
    this._boolean = value;
  }

  /**
   * Get the boolean.
   * @returns {boolean} The boolean
   */
  get boolean() {
    return this._boolean;
  }

  /**
   * Set the boolean.
   * @param {boolean} boolean - The boolean
   */
  set boolean(boolean) {
    this._boolean = boolean;
  }

  /**
   * Deserializes JSON data to an instance of the Definitional class.
   * The JSON must be valid against the Definitional JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Definitional} An instance of Definitional populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Definitional();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Definitional;
