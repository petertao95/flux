import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Count.
 */
class Count {

  /**
   * Get the value (aliases unsignedInt).
   * @returns {unsignedInt} The unsignedInt
   */
  get value() {
    return this._unsignedInt;
  }

  /**
   * Set the value (aliases unsignedInt).
   * @param {unsignedInt} value - The unsignedInt
   */
  set value(value) {
    this._unsignedInt = value;
  }

  /**
   * Get the unsignedInt.
   * @returns {unsignedInt} The unsignedInt
   */
  get unsignedInt() {
    return this._unsignedInt;
  }

  /**
   * Set the unsignedInt.
   * @param {unsignedInt} unsignedInt - The unsignedInt
   */
  set unsignedInt(unsignedInt) {
    this._unsignedInt = unsignedInt;
  }

  /**
   * Deserializes JSON data to an instance of the Count class.
   * The JSON must be valid against the Count JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Count} An instance of Count populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Count();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Count;
