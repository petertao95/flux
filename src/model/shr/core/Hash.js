import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Hash.
 */
class Hash {

  /**
   * Get the value (aliases base64Binary).
   * @returns {base64Binary} The base64Binary
   */
  get value() {
    return this._base64Binary;
  }

  /**
   * Set the value (aliases base64Binary).
   * @param {base64Binary} value - The base64Binary
   */
  set value(value) {
    this._base64Binary = value;
  }

  /**
   * Get the base64Binary.
   * @returns {base64Binary} The base64Binary
   */
  get base64Binary() {
    return this._base64Binary;
  }

  /**
   * Set the base64Binary.
   * @param {base64Binary} base64Binary - The base64Binary
   */
  set base64Binary(base64Binary) {
    this._base64Binary = base64Binary;
  }

  /**
   * Deserializes JSON data to an instance of the Hash class.
   * The JSON must be valid against the Hash JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Hash} An instance of Hash populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Hash();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Hash;
