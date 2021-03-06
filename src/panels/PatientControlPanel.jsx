import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import PatientSearch from '../patientControl/PatientSearch'

import SummaryHeader from '../summary/SummaryHeader';
import './PatientControlPanel.css';

class PatientControlPanel extends Component {
    render() {
        const { patient } = this.props;
        const login = (this.props.supportLogin) ? this.props.loginUser : "";
        const patientConditions = this.props.patient ? this.props.patient.getConditions() : [];

        return (
            <div className="patient-control-panel">
                <Paper className="panel-content">
                    <Grid fluid>
                        <Row middle="xs">
                            <Col sm={2}>
                                <Row middle="xs">
                                    <Col sm={12}>
                                        <img src="fluxnotes_logo_color.png" height="45px" width="33px" alt="Flux Notes logo" />
                                        <div className="logo-accompaniment">
                                            <span className="title"> {this.props.appTitle}</span>
                                            <span className="login">{login}</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={7}>
                                <SummaryHeader
                                    address={patient.getCurrentHomeAddress()}
                                    administrativeSex={patient.getGender()}
                                    age={patient.getAge()}
                                    clinicalEvent={this.props.clinicalEvent}
                                    dateOfBirth={patient.getDateOfBirth()}
                                    layout={this.props.layout}
                                    mrn={patient.getMRN()}
                                    patientConditions={patientConditions}
                                    patientName={patient.getName()}
                                    photo={patient.getMostRecentPhoto()}
                                    possibleClinicalEvents={this.props.possibleClinicalEvents}
                                    setCondition={this.props.setCondition}
                                    setLayout={this.props.setLayout}
                                />
                            </Col>

                            <Col sm={3}>
                                <Row middle="xs">
                                    <Col sm={1}>
                                        <div className="vertical-divider"></div>
                                    </Col>
                                    <Col sm={11}>
                                        <div className="search-wrapper">
                                            <PatientSearch
                                                patient={this.props.patient}
                                                setSearchSelectedItem={this.props.setSearchSelectedItem}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

PatientControlPanel.propTypes = {
    appTitle: PropTypes.string.isRequired,
    clinicalEvent: PropTypes.string.isRequired,
    layout: PropTypes.string,
    patient: PropTypes.object.isRequired,
    possibleClinicalEvents: PropTypes.array.isRequired,
    setCondition: PropTypes.func.isRequired,
    setLayout: PropTypes.func.isRequired,
    setSearchSelectedItem: PropTypes.func.isRequired,
    supportLogin: PropTypes.bool.isRequired,
};

export default PatientControlPanel;
