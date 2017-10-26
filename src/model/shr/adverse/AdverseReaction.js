/** Generated from SHR definition for shr.adverse.AdverseReaction */
class AdverseReaction {

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
   * Getter for Reference<shr.adverse.AdverseEvent>
   */
  get adverseEvent() {
    return this._adverseEvent;
  }

  /**
   * Setter for Reference<shr.adverse.AdverseEvent>
   */
  set adverseEvent(adverseEventVal) {
    this._adverseEvent = adverseEventVal;
  }

  /**
   * Getter for shr.adverse.AdverseReactionAttribution[]
   */
  get adverseReactionAttribution() {
    return this._adverseReactionAttribution;
  }

  /**
   * Setter for shr.adverse.AdverseReactionAttribution[]
   */
  set adverseReactionAttribution(adverseReactionAttributionVal) {
    this._adverseReactionAttribution = adverseReactionAttributionVal;
  }

  // Ommitting getter/setter for field: TBD<ActionTakenWithMedication>

  // Ommitting getter/setter for field: TBD<OtherActionTaken>

}

export default AdverseReaction;