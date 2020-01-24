import React, { Component } from 'react';
import GridRow from './GridRow'

export class Grid extends Component {
    constructor() {
        super();
        this.updateStyleSheet = this.updateStyleSheet.bind(this);
    }


    updateStyleSheet(cellValue) {
        const startTimer = new Date();

        const sheet = document.styleSheets[0];
        let i;
        for(i=0; i<sheet.rules.length; i++){
            if(sheet.rules[i].cssText.includes('single-cell')){
                sheet.deleteRule(i);
            }
        }
        // No judging for !important for a proof of concept
        sheet.insertRule(`.single-cell-${cellValue} { background-color: red !important}`, sheet.rules.length);
        console.log("Time Diff:", (new Date - startTimer), "ms")
        const sheetTest = sheet;
    }

    render() {
        const { bigBigArray } = this.props;
        return (
            <div id="main-grid" style={{ display: "flex" }}>
                {bigBigArray.map((rowValue, index) =>
                    <GridRow key={index} changeStyles={this.updateStyleSheet} cellValues={rowValue.cellValues} />
                )}
            </div>
        )
    }
}

export default Grid;