import Request from '../base/Request';

/** Generated from SHR definition for shr.medication.MedicationPrescription */
class MedicationPrescription extends Request {

  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
  }

  /**
   * Getter for shr.medication.Medication
   */
  get medication() {
    return this._medication;
  }

  /**
   * Setter for shr.medication.Medication
   */
  set medication(medicationVal) {
    this._medication = medicationVal;
  }

  /**
   * Getter for shr.base.NonOccurrenceModifier
   */
  get nonOccurrenceModifier() {
    return this._nonOccurrenceModifier;
  }

  /**
   * Setter for shr.base.NonOccurrenceModifier
   */
  set nonOccurrenceModifier(nonOccurrenceModifierVal) {
    this._nonOccurrenceModifier = nonOccurrenceModifierVal;
  }

  /**
   * Getter for shr.base.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Setter for shr.base.Status
   */
  set status(statusVal) {
    this._status = statusVal;
  }

  /**
   * Getter for shr.base.PriorityOfRequest
   */
  get priorityOfRequest() {
    return this._priorityOfRequest;
  }

  /**
   * Setter for shr.base.PriorityOfRequest
   */
  set priorityOfRequest(priorityOfRequestVal) {
    this._priorityOfRequest = priorityOfRequestVal;
  }

  /**
   * Getter for shr.medication.Dosage
   */
  get dosage() {
    return this._dosage;
  }

  /**
   * Setter for shr.medication.Dosage
   */
  set dosage(dosageVal) {
    this._dosage = dosageVal;
  }

  /**
   * Getter for shr.medication.NumberOfRepeatsAllowed
   */
  get numberOfRepeatsAllowed() {
    return this._numberOfRepeatsAllowed;
  }

  /**
   * Setter for shr.medication.NumberOfRepeatsAllowed
   */
  set numberOfRepeatsAllowed(numberOfRepeatsAllowedVal) {
    this._numberOfRepeatsAllowed = numberOfRepeatsAllowedVal;
  }

  /**
   * Getter for shr.medication.QuantityPerDispense
   */
  get quantityPerDispense() {
    return this._quantityPerDispense;
  }

  /**
   * Setter for shr.medication.QuantityPerDispense
   */
  set quantityPerDispense(quantityPerDispenseVal) {
    this._quantityPerDispense = quantityPerDispenseVal;
  }

  /**
   * Getter for shr.medication.SupplyDuration
   */
  get supplyDuration() {
    return this._supplyDuration;
  }

  /**
   * Setter for shr.medication.SupplyDuration
   */
  set supplyDuration(supplyDurationVal) {
    this._supplyDuration = supplyDurationVal;
  }

}

export default MedicationPrescription;