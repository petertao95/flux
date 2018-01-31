import { getNamespaceAndName } from '../../json-helper';
import Priority from './Priority';
import Category from './Category';
import Quantity from './Quantity';
import Comparator from './Comparator';
import Units from './Units';
import SimpleQuantity from './SimpleQuantity';
import IntegerQuantity from './IntegerQuantity';
import Age from './Age';
import Qount from './Qount';
import Distance from './Distance';
import Duration from './Duration';
import Money from './Money';
import EmbeddedContent from './EmbeddedContent';
import Attachment from './Attachment';
import BinaryData from './BinaryData';
import ContentType from './ContentType';
import ResourceLocation from './ResourceLocation';
import ResourceSize from './ResourceSize';
import Hash from './Hash';
import CreationTime from './CreationTime';
import Coding from './Coding';
import CodeSystem from './CodeSystem';
import CodeSystemVersion from './CodeSystemVersion';
import CodeableConcept from './CodeableConcept';
import Identifier from './Identifier';
import LowerBound from './LowerBound';
import UpperBound from './UpperBound';
import Range from './Range';
import Ratio from './Ratio';
import Numerator from './Numerator';
import Denominator from './Denominator';
import ContactPoint from './ContactPoint';
import TelecomNumberOrAddress from './TelecomNumberOrAddress';
import ContactDetail from './ContactDetail';
import TimePeriod from './TimePeriod';
import TimePeriodStart from './TimePeriodStart';
import TimePeriodEnd from './TimePeriodEnd';
import Timing from './Timing';
import TimingCode from './TimingCode';
import EventDuration from './EventDuration';
import RecurrencePattern from './RecurrencePattern';
import RecurrenceInterval from './RecurrenceInterval';
import DayOfWeek from './DayOfWeek';
import TimeOfDay from './TimeOfDay';
import DailyLifeEvent from './DailyLifeEvent';
import LifeEventOffset from './LifeEventOffset';
import CountPerInterval from './CountPerInterval';
import MinCount from './MinCount';
import MaxCount from './MaxCount';
import RecurrenceRange from './RecurrenceRange';
import NumberOfRepeats from './NumberOfRepeats';
import TypeAsaCoding from './TypeAsaCoding';
import Signature from './Signature';
import Signatory from './Signatory';
import OnBehalfOf from './OnBehalfOf';
import SampledData from './SampledData';
import Origin from './Origin';
import MillisecondsBetweenSamples from './MillisecondsBetweenSamples';
import CorrectionFactor from './CorrectionFactor';
import LowerLimit from './LowerLimit';
import UpperLimit from './UpperLimit';
import Dimensions from './Dimensions';
import Address from './Address';
import AddressLine from './AddressLine';
import GeopoliticalLocation from './GeopoliticalLocation';
import City from './City';
import District from './District';
import State from './State';
import PostalCode from './PostalCode';
import Country from './Country';
import Count from './Count';
import PlainText from './PlainText';
import ParsableContent from './ParsableContent';
import Formalism from './Formalism';
import DurationRange from './DurationRange';
import Statistic from './Statistic';
import StatisticType from './StatisticType';
import Percentage from './Percentage';
import Likelihood from './Likelihood';
import QualitativeLikelihood from './QualitativeLikelihood';
import GeneralizedLikelihood from './GeneralizedLikelihood';
import Certainty from './Certainty';
import Length from './Length';
import Width from './Width';
import Depth from './Depth';
import Volume from './Volume';
import Area from './Area';
import Circumference from './Circumference';
import ClockDirection from './ClockDirection';
import QualitativeDateTime from './QualitativeDateTime';
import AgeRange from './AgeRange';
import AgeGroup from './AgeGroup';
import GestationalAge from './GestationalAge';
import GestationalTimePeriod from './GestationalTimePeriod';
import GestationalTemporalContext from './GestationalTemporalContext';
import GeneralizedDateTime from './GeneralizedDateTime';
import GeneralizedAge from './GeneralizedAge';
import GeneralizedTemporalContext from './GeneralizedTemporalContext';
import SemiquantDuration from './SemiquantDuration';
import GeneralizedDuration from './GeneralizedDuration';
import Frequency from './Frequency';
import SemiquantFrequency from './SemiquantFrequency';
import QualitativeFrequency from './QualitativeFrequency';
import GeneralizedFrequency from './GeneralizedFrequency';
import EffectiveDate from './EffectiveDate';
import EffectiveTimePeriod from './EffectiveTimePeriod';
import ReceivedTime from './ReceivedTime';
import OccurrenceTimeOrPeriod from './OccurrenceTimeOrPeriod';
import OccurrenceTime from './OccurrenceTime';
import OccurrencePeriod from './OccurrencePeriod';
import OccurrenceDuration from './OccurrenceDuration';
import Geoposition from './Geoposition';
import Latitude from './Latitude';
import Longitude from './Longitude';
import Altitude from './Altitude';
import Location from './Location';
import Setting from './Setting';
import UnitedStatesAddress from './UnitedStatesAddress';
import UnitedStatesState from './UnitedStatesState';
import HumanName from './HumanName';
import GivenName from './GivenName';
import FamilyName from './FamilyName';
import HumanNamePrefix from './HumanNamePrefix';
import HumanNameSuffix from './HumanNameSuffix';
import BodyPosition from './BodyPosition';
import Annotation from './Annotation';
import Details from './Details';
import DisplayText from './DisplayText';
import Version from './Version';
import OrganizationalIdentifier from './OrganizationalIdentifier';
import Reason from './Reason';
import Title from './Title';
import Definitional from './Definitional';

/**
 * Generated object factory for the shr.core namespace.
 */
export default class ShrCoreObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.core') {
      throw new Error(`Unsupported type in ShrCoreObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Priority': return Priority.fromJSON(json);
    case 'Category': return Category.fromJSON(json);
    case 'Quantity': return Quantity.fromJSON(json);
    case 'Comparator': return Comparator.fromJSON(json);
    case 'Units': return Units.fromJSON(json);
    case 'SimpleQuantity': return SimpleQuantity.fromJSON(json);
    case 'IntegerQuantity': return IntegerQuantity.fromJSON(json);
    case 'Age': return Age.fromJSON(json);
    case 'Qount': return Qount.fromJSON(json);
    case 'Distance': return Distance.fromJSON(json);
    case 'Duration': return Duration.fromJSON(json);
    case 'Money': return Money.fromJSON(json);
    case 'EmbeddedContent': return EmbeddedContent.fromJSON(json);
    case 'Attachment': return Attachment.fromJSON(json);
    case 'BinaryData': return BinaryData.fromJSON(json);
    case 'ContentType': return ContentType.fromJSON(json);
    case 'ResourceLocation': return ResourceLocation.fromJSON(json);
    case 'ResourceSize': return ResourceSize.fromJSON(json);
    case 'Hash': return Hash.fromJSON(json);
    case 'CreationTime': return CreationTime.fromJSON(json);
    case 'Coding': return Coding.fromJSON(json);
    case 'CodeSystem': return CodeSystem.fromJSON(json);
    case 'CodeSystemVersion': return CodeSystemVersion.fromJSON(json);
    case 'CodeableConcept': return CodeableConcept.fromJSON(json);
    case 'Identifier': return Identifier.fromJSON(json);
    case 'LowerBound': return LowerBound.fromJSON(json);
    case 'UpperBound': return UpperBound.fromJSON(json);
    case 'Range': return Range.fromJSON(json);
    case 'Ratio': return Ratio.fromJSON(json);
    case 'Numerator': return Numerator.fromJSON(json);
    case 'Denominator': return Denominator.fromJSON(json);
    case 'ContactPoint': return ContactPoint.fromJSON(json);
    case 'TelecomNumberOrAddress': return TelecomNumberOrAddress.fromJSON(json);
    case 'ContactDetail': return ContactDetail.fromJSON(json);
    case 'TimePeriod': return TimePeriod.fromJSON(json);
    case 'TimePeriodStart': return TimePeriodStart.fromJSON(json);
    case 'TimePeriodEnd': return TimePeriodEnd.fromJSON(json);
    case 'Timing': return Timing.fromJSON(json);
    case 'TimingCode': return TimingCode.fromJSON(json);
    case 'EventDuration': return EventDuration.fromJSON(json);
    case 'RecurrencePattern': return RecurrencePattern.fromJSON(json);
    case 'RecurrenceInterval': return RecurrenceInterval.fromJSON(json);
    case 'DayOfWeek': return DayOfWeek.fromJSON(json);
    case 'TimeOfDay': return TimeOfDay.fromJSON(json);
    case 'DailyLifeEvent': return DailyLifeEvent.fromJSON(json);
    case 'LifeEventOffset': return LifeEventOffset.fromJSON(json);
    case 'CountPerInterval': return CountPerInterval.fromJSON(json);
    case 'MinCount': return MinCount.fromJSON(json);
    case 'MaxCount': return MaxCount.fromJSON(json);
    case 'RecurrenceRange': return RecurrenceRange.fromJSON(json);
    case 'NumberOfRepeats': return NumberOfRepeats.fromJSON(json);
    case 'TypeAsaCoding': return TypeAsaCoding.fromJSON(json);
    case 'Signature': return Signature.fromJSON(json);
    case 'Signatory': return Signatory.fromJSON(json);
    case 'OnBehalfOf': return OnBehalfOf.fromJSON(json);
    case 'SampledData': return SampledData.fromJSON(json);
    case 'Origin': return Origin.fromJSON(json);
    case 'MillisecondsBetweenSamples': return MillisecondsBetweenSamples.fromJSON(json);
    case 'CorrectionFactor': return CorrectionFactor.fromJSON(json);
    case 'LowerLimit': return LowerLimit.fromJSON(json);
    case 'UpperLimit': return UpperLimit.fromJSON(json);
    case 'Dimensions': return Dimensions.fromJSON(json);
    case 'Address': return Address.fromJSON(json);
    case 'AddressLine': return AddressLine.fromJSON(json);
    case 'GeopoliticalLocation': return GeopoliticalLocation.fromJSON(json);
    case 'City': return City.fromJSON(json);
    case 'District': return District.fromJSON(json);
    case 'State': return State.fromJSON(json);
    case 'PostalCode': return PostalCode.fromJSON(json);
    case 'Country': return Country.fromJSON(json);
    case 'Count': return Count.fromJSON(json);
    case 'PlainText': return PlainText.fromJSON(json);
    case 'ParsableContent': return ParsableContent.fromJSON(json);
    case 'Formalism': return Formalism.fromJSON(json);
    case 'DurationRange': return DurationRange.fromJSON(json);
    case 'Statistic': return Statistic.fromJSON(json);
    case 'StatisticType': return StatisticType.fromJSON(json);
    case 'Percentage': return Percentage.fromJSON(json);
    case 'Likelihood': return Likelihood.fromJSON(json);
    case 'QualitativeLikelihood': return QualitativeLikelihood.fromJSON(json);
    case 'GeneralizedLikelihood': return GeneralizedLikelihood.fromJSON(json);
    case 'Certainty': return Certainty.fromJSON(json);
    case 'Length': return Length.fromJSON(json);
    case 'Width': return Width.fromJSON(json);
    case 'Depth': return Depth.fromJSON(json);
    case 'Volume': return Volume.fromJSON(json);
    case 'Area': return Area.fromJSON(json);
    case 'Circumference': return Circumference.fromJSON(json);
    case 'ClockDirection': return ClockDirection.fromJSON(json);
    case 'QualitativeDateTime': return QualitativeDateTime.fromJSON(json);
    case 'AgeRange': return AgeRange.fromJSON(json);
    case 'AgeGroup': return AgeGroup.fromJSON(json);
    case 'GestationalAge': return GestationalAge.fromJSON(json);
    case 'GestationalTimePeriod': return GestationalTimePeriod.fromJSON(json);
    case 'GestationalTemporalContext': return GestationalTemporalContext.fromJSON(json);
    case 'GeneralizedDateTime': return GeneralizedDateTime.fromJSON(json);
    case 'GeneralizedAge': return GeneralizedAge.fromJSON(json);
    case 'GeneralizedTemporalContext': return GeneralizedTemporalContext.fromJSON(json);
    case 'SemiquantDuration': return SemiquantDuration.fromJSON(json);
    case 'GeneralizedDuration': return GeneralizedDuration.fromJSON(json);
    case 'Frequency': return Frequency.fromJSON(json);
    case 'SemiquantFrequency': return SemiquantFrequency.fromJSON(json);
    case 'QualitativeFrequency': return QualitativeFrequency.fromJSON(json);
    case 'GeneralizedFrequency': return GeneralizedFrequency.fromJSON(json);
    case 'EffectiveDate': return EffectiveDate.fromJSON(json);
    case 'EffectiveTimePeriod': return EffectiveTimePeriod.fromJSON(json);
    case 'ReceivedTime': return ReceivedTime.fromJSON(json);
    case 'OccurrenceTimeOrPeriod': return OccurrenceTimeOrPeriod.fromJSON(json);
    case 'OccurrenceTime': return OccurrenceTime.fromJSON(json);
    case 'OccurrencePeriod': return OccurrencePeriod.fromJSON(json);
    case 'OccurrenceDuration': return OccurrenceDuration.fromJSON(json);
    case 'Geoposition': return Geoposition.fromJSON(json);
    case 'Latitude': return Latitude.fromJSON(json);
    case 'Longitude': return Longitude.fromJSON(json);
    case 'Altitude': return Altitude.fromJSON(json);
    case 'Location': return Location.fromJSON(json);
    case 'Setting': return Setting.fromJSON(json);
    case 'UnitedStatesAddress': return UnitedStatesAddress.fromJSON(json);
    case 'UnitedStatesState': return UnitedStatesState.fromJSON(json);
    case 'HumanName': return HumanName.fromJSON(json);
    case 'GivenName': return GivenName.fromJSON(json);
    case 'FamilyName': return FamilyName.fromJSON(json);
    case 'HumanNamePrefix': return HumanNamePrefix.fromJSON(json);
    case 'HumanNameSuffix': return HumanNameSuffix.fromJSON(json);
    case 'BodyPosition': return BodyPosition.fromJSON(json);
    case 'Annotation': return Annotation.fromJSON(json);
    case 'Details': return Details.fromJSON(json);
    case 'DisplayText': return DisplayText.fromJSON(json);
    case 'Version': return Version.fromJSON(json);
    case 'OrganizationalIdentifier': return OrganizationalIdentifier.fromJSON(json);
    case 'Reason': return Reason.fromJSON(json);
    case 'Title': return Title.fromJSON(json);
    case 'Definitional': return Definitional.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrCoreObjectFactory: ${type}`);
    }
  }
}
