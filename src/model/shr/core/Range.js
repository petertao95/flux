import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Range.
 */
class Range {

  /**
   * Get the LowerBound.
   * @returns {LowerBound} The shr.core.LowerBound
   */
  get lowerBound() {
    return this._lowerBound;
  }

  /**
   * Set the LowerBound.
   * @param {LowerBound} lowerBound - The shr.core.LowerBound
   */
  set lowerBound(lowerBound) {
    this._lowerBound = lowerBound;
  }

  /**
   * Set the LowerBound and return 'this' for chaining.
   * @param {LowerBound} lowerBound - The shr.core.LowerBound
   * @returns {Range} this.
   */
  withLowerBound(lowerBound) {
    this.lowerBound = lowerBound; return this;
  }

  /**
   * Get the UpperBound.
   * @returns {UpperBound} The shr.core.UpperBound
   */
  get upperBound() {
    return this._upperBound;
  }

  /**
   * Set the UpperBound.
   * @param {UpperBound} upperBound - The shr.core.UpperBound
   */
  set upperBound(upperBound) {
    this._upperBound = upperBound;
  }

  /**
   * Set the UpperBound and return 'this' for chaining.
   * @param {UpperBound} upperBound - The shr.core.UpperBound
   * @returns {Range} this.
   */
  withUpperBound(upperBound) {
    this.upperBound = upperBound; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Range class.
   * The JSON must be valid against the Range JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Range} An instance of Range populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Range();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Range class to a JSON object.
   * The JSON is expected to be valid against the Range JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Range' } };
    if (this.lowerBound != null) {
      inst['LowerBound'] = typeof this.lowerBound.toJSON === 'function' ? this.lowerBound.toJSON() : this.lowerBound;
    }
    if (this.upperBound != null) {
      inst['UpperBound'] = typeof this.upperBound.toJSON === 'function' ? this.upperBound.toJSON() : this.upperBound;
    }
    return inst;
  }
}
export default Range;
