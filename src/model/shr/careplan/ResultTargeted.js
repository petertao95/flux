import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.careplan.ResultTargeted.
 */
class ResultTargeted {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.core.Range, shr.core.Quantity.
   * @returns {(CodeableConcept|Range|Quantity)} The choice value; one of: shr.core.CodeableConcept, shr.core.Range, shr.core.Quantity
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.core.Range, shr.core.Quantity.
   * This field/value is required.
   * @param {(CodeableConcept|Range|Quantity)} value - The choice value; one of: shr.core.CodeableConcept, shr.core.Range, shr.core.Quantity
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.core.Range, shr.core.Quantity and return 'this' for chaining.
   * This field/value is required.
   * @param {(CodeableConcept|Range|Quantity)} value - The choice value; one of: shr.core.CodeableConcept, shr.core.Range, shr.core.Quantity
   * @returns {ResultTargeted} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ResultTargeted class.
   * The JSON must be valid against the ResultTargeted JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ResultTargeted} An instance of ResultTargeted populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ResultTargeted();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ResultTargeted class to a JSON object.
   * The JSON is expected to be valid against the ResultTargeted JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/careplan/ResultTargeted' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default ResultTargeted;
