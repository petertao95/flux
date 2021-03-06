import { getNamespaceAndName } from '../json-helper';
import ShrAllergyObjectFactory from '../shr/allergy/ShrAllergyObjectFactory';
import FluxAllergyIntolerance from './FluxAllergyIntolerance';
import FluxNoKnownAllergy from './FluxNoKnownAllergy';

export default class FluxAllergyIntoleranceObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.allergy') {
            throw new Error(`Unsupported type in ShrAllergyObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrAllergyObjectFactory
        switch (elementName) {
            case 'AllergyIntolerance': return new FluxAllergyIntolerance(json);
            case 'NoKnownAllergy': return new FluxNoKnownAllergy(json);
            default: return ShrAllergyObjectFactory.createInstance(json, type);
        }
    }
}