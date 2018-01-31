import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.EmbeddedContent.
 */
class EmbeddedContent {

  /**
   * Deserializes JSON data to an instance of the EmbeddedContent class.
   * The JSON must be valid against the EmbeddedContent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EmbeddedContent} An instance of EmbeddedContent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EmbeddedContent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default EmbeddedContent;
