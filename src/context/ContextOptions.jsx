import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import Tooltip from 'rc-tooltip';
import TextField from 'material-ui/TextField';

import 'rc-tooltip/assets/bootstrap.css';
import './ContextOptions.css'

export default class ContextOptions extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
        this._handleSearch = this._handleSearch.bind(this);

        this.state = {
            searchString: "",
            tooltipVisibility: 'visible'
        }
    }

    _handleClick(e, i) {
        e.preventDefault();
        this.setState({ searchString: "", tooltipVisibility: 'hidden' });
        this.props.handleClick(i);
    }

    mouseLeave = () => {
        this.setState({ tooltipVisibility: 'hidden' })
    }

    mouseEnter = () => {
        this.setState({ tooltipVisibility: 'visible' })
    }

    _handleSearch(value) {
        this.setState({ searchString: value });
    }

    render() {
        let context = this.props.context;
        if (Lang.isUndefined(context)) {
            // patient
            context = this.props.contextManager.getPatientContext();
        }

        //console.log(context);
        let validShortcuts = this.props.shortcutManager.getValidChildShortcutsInContext(context);

        // count how many triggers we have
        let count = 0;
        validShortcuts.forEach((shortcut, i) => {
            this.props.shortcutManager.getTriggersForShortcut(shortcut, context).forEach((trigger, j) => {
                count++;
            });
        });

        // enable filter?
        const showFilter = (count > 10);

        // build our list of filtered triggers (only filter if we will be showing search bar)
        let triggers = [];
        count = 0;
        validShortcuts.forEach((shortcut, i) => {
            let groupName = this.props.shortcutManager.getShortcutGroupName(shortcut);
            this.props.shortcutManager.getTriggersForShortcut(shortcut, context).forEach((trigger, j) => {
                if (!showFilter || this.state.searchString.length === 0 || trigger.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1) {
                    let triggerDescription = !Lang.isNull(trigger.description) ? trigger.description : '';
                    triggers.push({"name": trigger.name, "description": triggerDescription, "group": i, "groupName": groupName });
                    count++;
                }
            });
        });

        // lets create a list of groups with associated shortcut triggers for each
        let groupList = [];
        let currentGroup = { group: "", triggers:[] };
        let countToShow = 0;
        let totalShown = 0;
        triggers.forEach((trigger, i) => {
            if (trigger.group !== currentGroup.group) {
                countToShow = 0;
                totalShown++;
                currentGroup = { "group": trigger.group, "groupName": trigger.groupName, "triggers": [ trigger ] };
                groupList.push(currentGroup);
            }
            else {
                if (countToShow === 5) return;

                countToShow++;
                totalShown++;
                currentGroup.triggers.push(trigger);
            }
        });

        // do we add search bar
        let filterBar = "";
        if (showFilter) {
            filterBar = (
                <div id="shortcut-search">
                    <div className="shortcut-search-container">
                        <div className="shortcut-search-title">
                            <div>Filter:</div>
                            <div className="count">(showing {totalShown} of {count})</div>
                        </div>

                        <TextField
                            className="shortcut-search-text"
                            label="Search for a shortcut"
                            value={this.state.searchString}
                            onChange={(event) => this._handleSearch(event.target.value)}
                        />
                    </div>
                </div>
            );
        }

        const activeContextTriggers = this.props.contextManager.getActiveContexts().map(({ initiatingTrigger }) => initiatingTrigger);

        return (
            <div className='context-options-list'>
                {filterBar}

                {groupList.map((groupObj, i) => {
                    return  (
                    <div key={`group-${i}`}>
                        {groupObj.groupName != null ? <div id="data-element-description">{groupObj.groupName}</div> : <div className="hidden"></div>}

                        <div key={i}>
                            {groupObj.triggers.map((trigger, i) => {
                                const tooltipClass = (trigger.description.length > 100) ? "context-panel-tooltip large" : "context-panel-tooltip";
                                const text = <span>{trigger.description}</span>

                                return (
                                    <Tooltip
                                        key={trigger.name}
                                        overlayStyle={{'visibility': this.state.tooltipVisibility}}
                                        placement="left"
                                        overlayClassName={tooltipClass}
                                        overlay={text}
                                        destroyTooltipOnHide={true}
                                        mouseEnterDelay={0.5}
                                        onMouseEnter={this.mouseEnter}
                                        onMouseLeave={this.mouseLeave}
                                    >
                                        <div
                                            className={`context-option${activeContextTriggers.indexOf(trigger.name) > -1 ? ' selected' : ''}`}
                                            key={trigger.name}
                                            onClick={(e) => this._handleClick(e, trigger.name)}
                                        >
                                            {trigger.name}
                                        </div>
                                    </Tooltip>
                                );
                            })}
                        </div>
                    </div>);
                })}
            </div>
        );
    }
}

ContextOptions.proptypes = {
    shortcutManager: PropTypes.object.isRequired,
    contextManager: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    context: PropTypes.object,
}
