import Shortcut from './Shortcut';
import Lang from 'lodash';

export default class CreatorIntermediary extends Shortcut {
    constructor(onUpdate, metadata) {
        super();
        this.metadata = metadata;
        this.text = "#" + this.metadata["name"];
        
        // get attribute descriptions
        this.onUpdate = onUpdate;
		this.setAttributeValue = this.setAttributeValue.bind(this);
    }
    
	initialize(contextManager) {
		super.initialize(contextManager);
        
        const knownParent = this.metadata["knownParentContexts"];
        this.parentContext = contextManager.getActiveContextOfType(knownParent);
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.setAttributeValue(this.metadata["parentAttribute"], true, false);
            this.parentContext.addChild(this);
        }

	}
    
    isContext() {
        return this.metadata.isContext;
    }
    shouldBeInContext() {
        const voaList = this.metadata["valueObjectAttributes"];
        let value;
        voaList.forEach((voa) => {
            value = this.getAttributeValue(voa.name);
            if (Lang.isNull(value)) return true;
            //console.log(value);
            if (Lang.isString(value)) {
                if (value.length === 0) return true;
            } else if (Lang.isArray(value)) {
                if (value.length === 0) return true;
            } else if (Lang.isBoolean(value)) {
                if (!value) return true;
            }
        });
        return false;
    }
    
    getShortcutType() {
        return this.metadata["id"];
    }

    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        this.parentContext.setAttributeValue(this.metadata["parentAttribute"], false, false);
        this.parentContext.removeChild(this);
        return result;
    }

	getAttributeValue(name) {
        //console.log("getAttribute of " + this.metadata["id"] + " called " + name);
        //"valueObjectAttributes": [  {"name":"date", "toParentAttribute":"asOfDateDate"} ],
        const voaList = this.metadata["valueObjectAttributes"];
        let result = voaList.filter(function( item ) {
            return item.name === name;
        });
        if (result && result[0]) {
            return this.parentContext.getAttributeValue(result[0].toParentAttribute);
        } else {
            throw new Error("Unknown attribute " + name + " on " + this.metadata["id"]);
        }
    }

	setAttributeValue(name, value, publishChanges = true) {
        const voaList = this.metadata["valueObjectAttributes"];
        let result = voaList.filter(function( item ) {
            return item.name === name;
        });
        if (result && result[0]) {
            this.parentContext.setAttributeValue(result[0].toParentAttribute, value, publishChanges);
            this.updateContextStatus();
        } else {
            throw new Error("Unknown attribute " + name + " on " + this.metadata["id"]);
        }
    }

    getLabel() {
        return this.metadata["name"];
    }
    
    getText() {
        return "#" + this.metadata["name"];
    }
    
    getId() {
        return this.metadata["id"];
    }
}