import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.device.VendorModelNumber.
 */
class VendorModelNumber {

  /**
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Deserializes JSON data to an instance of the VendorModelNumber class.
   * The JSON must be valid against the VendorModelNumber JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {VendorModelNumber} An instance of VendorModelNumber populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new VendorModelNumber();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default VendorModelNumber;
