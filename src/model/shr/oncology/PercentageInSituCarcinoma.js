import { setPropertiesFromJSON } from '../../json-helper';

import ObservationComponent from '../finding/ObservationComponent';

/**
 * Generated class for shr.oncology.PercentageInSituCarcinoma.
 * @extends ObservationComponent
 */
class PercentageInSituCarcinoma extends ObservationComponent {

  /**
   * Get the value (aliases quantity).
   * @returns {Quantity} The shr.core.Quantity
   */
  get value() {
    return this._quantity;
  }

  /**
   * Set the value (aliases quantity).
   * @param {Quantity} value - The shr.core.Quantity
   */
  set value(value) {
    this._quantity = value;
  }

  /**
   * Get the Quantity.
   * @returns {Quantity} The shr.core.Quantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Set the Quantity.
   * @param {Quantity} quantity - The shr.core.Quantity
   */
  set quantity(quantity) {
    this._quantity = quantity;
  }

  /**
   * Deserializes JSON data to an instance of the PercentageInSituCarcinoma class.
   * The JSON must be valid against the PercentageInSituCarcinoma JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PercentageInSituCarcinoma} An instance of PercentageInSituCarcinoma populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PercentageInSituCarcinoma();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default PercentageInSituCarcinoma;
