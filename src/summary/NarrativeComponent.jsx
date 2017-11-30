import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import './NarrativeComponent.css';

/*
 A narrative view of one or more data summary items.
 */
class NarrativeComponent extends Component {

    getNarrativeTemplate() {
        return this.props.conditionSection.narrative;
    }

    getSubsections() {
        const {patient, condition, conditionSection} = this.props;

        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        let subsections = [];
        conditionSection.data.forEach((subsection) => {
            subsections[subsection.name] = subsection;
        });

        return subsections;
    }

    getList(subsection) {
        const {patient, condition, conditionSection} = this.props;
        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        const items = subsection.items;
        const itemsFunction = subsection.itemsFunction;

        let list = null;

        if (Lang.isUndefined(items)) {
            list = itemsFunction(patient, condition);
        } else {
            list = items.map((item, i) => {
                if (Lang.isNull(item.value)) {
                    return {name: item.name, value: null};
                } else {
                    return {name: item.name, value: item.value(patient, condition), shortcut: item.shortcut};
                }
            });
        }

        return list;
    }
            
    populateTemplate(template, subsections) {
        /* returns a list of snippets of the narrative. Each snippet object has the following attributes:
            text: the text to display
            type: plain, missing, or structured-data
        */
        let result = [];
        const len = template.length;
        let index, start = 0;
        let pos = template.indexOf("${"), endpos;
        let list, item, value, type, valueSpec, subsectionName, valueName;
        let _filterItemsByName = (item) => {
            return item.name === valueName;
        };
        let _addLabResultToNarrative = (item) => {
            return item.name + ": " + item.value;
        };
        while (pos !== -1) {
            result.push( { text: template.substring(start, pos), type: 'plain'} );
            endpos = template.indexOf("}", pos);
            valueSpec = template.substring(pos + 2, endpos);
            index = valueSpec.indexOf(".");
            if (index === -1) {
                subsectionName = valueSpec;
                list = this.getList(subsections[subsectionName]);
                if (Lang.isNull(list)) {
                    value = "missing";
                    type = "missing";
                } else {
                    value = list.map(_addLabResultToNarrative).join(", ");
                    type = "structured-data";
                }
            } else {
                subsectionName = valueSpec.substring(0, index);
                valueName = valueSpec.substring(index + 1);
                if (subsections[subsectionName].list) {
                    list = subsections[subsectionName].list;
                } else {
                    list = this.getList(subsections[subsectionName]);
                    subsections[subsectionName].list = list;
                }
                item = list.find(_filterItemsByName);
                if (item.value) {
                    value = item.value;
                    type = "structured-data";
                } else {
                    value = "missing";
                    type = "missing";
                }
            }
            result.push( { text: value, type: type } );
            start = endpos + 1;
            if (endpos < len) {
                pos = template.indexOf("${", endpos+1);
            } else {
                pos = -1;
            }
        }
        if (start < len) result.push( { text: template.substring(start), type: 'plain' } );
        return result;
    }

    // Gets called for each section in SummaryMetaData.jsx
    render() {
        let template = this.getNarrativeTemplate();
        let subsections = this.getSubsections();

        const narrative = this.populateTemplate(template, subsections);
        
        let content = [];
        narrative.forEach((snippet, index) => {
            if (snippet.type === 'plain') content.push(<span key={index}>{snippet.text}</span>);
            if (snippet.type === 'missing') content.push(<span key={index} style={{borderBottom: '1px solid red'}}>{snippet.text}</span>);
            if (snippet.type === 'structured-data') content.push(<span key={index} style={{borderBottom: '1px solid blue'}}>{snippet.text}</span>);
        }); 
        return (
            <div>
                <p>{content}</p>
            </div>
        );
    }
}

NarrativeComponent.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    isWide: PropTypes.bool,
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool
};

export default NarrativeComponent;
