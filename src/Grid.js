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
        if (sheet.rules[sheet.rules.length]) {
            debugger;
            sheet.deleteRule(3);
        }
        sheet.insertRule(`.single-cell-${cellValue} { background-color: red !important}`, sheet.rules.length);
        console.log("Time Diff:", (new Date - startTimer), "ms")
        const sheetTest = sheet;
    }

    // updateStyleSheet(cellValue) {

    //     const startTimer = new Date();

    //     const { previousMouseOver, cellMap } = this.state;
    //     let i;
    //     const newElements = cellMap[cellValue].elements
    //     for (i = 0; i < newElements.length; i++) {
    //         newElements[i].style.backgroundColor = "red";
    //     }
    //     if (previousMouseOver && (previousMouseOver !== cellValue)) {
    //         const oldElements = cellMap[previousMouseOver].elements
    //         for (i = 0; i < oldElements.length; i++) {
    //             oldElements[i].style.backgroundColor = "blue";
    //         }
    //     }
    //     this.setState({
    //         previousMouseOver: cellValue
    //     })
    //     console.log("Time Diff:", (new Date - startTimer), "ms")
    // }

    // updateStyleSheet(cellValue) {
    //     const { previousMouseOver } = this.state;
    //     console.log(cellValue)
    //     let i;
    //     const newElements = document.getElementsByClassName(`single-cell-${cellValue}`)
    //     for (i = 0; i < newElements.length; i++) {
    //         newElements[i].style.backgroundColor = "red";
    //     }
    //     if (previousMouseOver && (previousMouseOver !== cellValue)) {
    //         const oldElements = document.getElementsByClassName(`single-cell-${previousMouseOver}`)
    //         for (i = 0; i < oldElements.length; i++) {
    //             oldElements[i].style.backgroundColor = "blue";
    //         }
    //     }
    //     this.setState({
    //         previousMouseOver: cellValue
    //     })
    // }

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