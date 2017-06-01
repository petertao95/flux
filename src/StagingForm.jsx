// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// material-ui
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
// Flexbox
import { Grid, Row } from 'react-flexbox-grid';
// Styling
import './StagingForm.css';

class StagingForm extends Component {
  constructor(props) {
      super(props);

      this.state = {
        tumorSizes: ['T0', 'T1', 'T2', 'T3', 'T4'],
        nodes: ['N0', 'N1', 'N2', 'N3'],
        // nodes: ['N0', 'N1MI', 'N1', 'N2', 'N3'],
        metastases: ['M0', 'M1'],
      };
  }

  // For testing purposes. comonentDidMount() gets called after render
  // componentDidMount() {
  //   console.log("in componentDidMount");
  //   console.log("t: " + this.props.t);
  //   console.log("m: " + this.props.m);
  //   console.log("n: " + this.props.n);
  //   console.log("stage: " + this.props.stage);
  // }

  render() {
    // console.log("in render. t: " + this.props.t);
    return (
      <Paper className="staging-form">
        <Grid fluid>
          <Row>
            <h4>Tumor Size</h4>
          </Row>
          <Row>
            {this.state.tumorSizes.map((t, i) => {
              return (
                <RaisedButton
                  className="btn tumor-size"
                  key={i}
                  label={t}
                  onClick={(e) => this._handleTumorSizeClick(e, i)}
                  disabled={this._currentlySelected(this.props.t, i)}
                />);
            })}
          </Row>
          <Row>
            <h4>Node</h4>
          </Row>
          <Row>
            {this.state.nodes.map((n, i) => {
              return (
                <RaisedButton
                  className="btn node"
                  key={i}
                  label={n}
                  onClick={(e) => this._handleNodeClick(e, i)}
                  disabled={this._currentlySelected(this.props.n, i)}
                />);
            })}
          </Row>
          <Row>
            <h4>Metastasis</h4>
          </Row>
          <Row>
            {this.state.metastases.map((m, i) => {
              return (
                <RaisedButton
                  className="btn metastasis"
                  key={i}
                  label={m}
                  onClick={(e) => this._handleMetastasisClick(e, i)}
                  disabled={this._currentlySelected(this.props.m, i)}
                />);
            })}
          </Row>
          <Row>
            <h4>Prognostic Stage</h4>
          </Row>
          <Row>
            <div className="stage">{this.props.stage}</div>
          </Row>
        </Grid>
      </Paper>
    );
  }

  _currentlySelected(item, i) {
    return (item === i ? true : false);
  }

  _handleTumorSizeClick = (e, i) => {
    e.preventDefault();
    console.log("StagingForm._handleTumorSizeClick T=" + i);
    var stage = this._prognosticStage(i, this.props.n, this.props.m,);
	this.props.onStagingTUpdate(i, stage);
  }

  _handleNodeClick = (e, i) => {
    e.preventDefault();
    console.log("StagingForm._handleNodeClick N=" + i);
    var stage = this._prognosticStage(this.props.t, i, this.props.m);
	this.props.onStagingNUpdate(i, stage);
  }

  _handleMetastasisClick = (e, i) => {
    e.preventDefault();
    console.log("StagingForm._handleMetastasisClick M=" + i);
    var stage = this._prognosticStage(this.props.t, this.props.n, i);
	this.props.onStagingMUpdate(i, stage);
  }

  _prognosticStage= (t, n, m) =>  {
    var stage;
    // Metastisized cancer is always Stage IV
    if (m === 1) {
      stage = 'IV';
      return stage;
    }

    // Lookup the rest based on T and N:
    const lookup = [
      ['0', 'IIA', 'IIIA', 'IIIC'], // T0
      ['IA', 'IIA', 'IIIA', 'IIIC'], // T1
      ['IIA', 'IIB', 'IIIA', 'IIIC'], // T2
      ['IIB', 'IIIA', 'IIIA', 'IIIC'], // T3
      ['IIIB', 'IIIB', 'IIIB', 'IIIC'] // T4
    ];

    // With N1M1 Values
    // const lookup = [
    //   ['0', 'IB', 'IIA', 'IIIA', 'IIIC'], // T0
    //   ['IA', 'IB', 'IIA', 'IIIA', 'IIIC'], // T1
    //   ['IIA', 'IIB', 'IIB', 'IIIA', 'IIIC'], // T2
    //   ['IIB', 'IIIA', 'IIIA', 'IIIA', 'IIIC'], // T3
    //   ['IIIB', 'IIIB', 'IIIB', 'IIIB', 'IIIC'] // T4
    // ];

    stage = lookup[t][n];
    return stage;
  }
}

export default StagingForm;