import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Version.
 */
class Version {

  /**
   * Get the value (aliases id).
   * @returns {id} The id
   */
  get value() {
    return this._id;
  }

  /**
   * Set the value (aliases id).
   * This field/value is required.
   * @param {id} value - The id
   */
  set value(value) {
    this._id = value;
  }

  /**
   * Set the value (aliases id) and return 'this' for chaining.
   * This field/value is required.
   * @param {id} value - The id
   * @returns {Version} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the id.
   * @returns {id} The id
   */
  get id() {
    return this._id;
  }

  /**
   * Set the id.
   * This field/value is required.
   * @param {id} id - The id
   */
  set id(id) {
    this._id = id;
  }

  /**
   * Set the id and return 'this' for chaining.
   * This field/value is required.
   * @param {id} id - The id
   * @returns {Version} this.
   */
  withId(id) {
    this.id = id; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Version class.
   * The JSON must be valid against the Version JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Version} An instance of Version populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Version();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Version class to a JSON object.
   * The JSON is expected to be valid against the Version JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Version' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
}
export default Version;
