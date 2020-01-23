import React, { Component } from 'react';
import GridRow from './GridRow'

export class Grid extends Component {
    constructor() {
        super();
        this.state = {
            cellMap: [],
            previousMouseOver: null
        };
        this.updateStyleSheet = this.updateStyleSheet.bind(this);
    }

    componentDidMount() {

        const { bigBigArray } = this.props;
        let i;
        // CellMap Area
        let uniqueCellList
        if (bigBigArray.length > 0) {
            uniqueCellList = bigBigArray.reduce((accumulator, currentValue) => {
                return [...accumulator, ...currentValue.cellValues]
            }, [])
        }
        uniqueCellList = [...new Set(uniqueCellList)];

        let tempCellMap = [];
        for (i = 0; i < uniqueCellList.length; i++) {
            tempCellMap[i] = { elements: document.getElementsByClassName(`single-cell-${i}`) }
            const tempGuy = document.getElementsByClassName(`single-cell-${i}`)
        }
        this.setState({
            cellMap: tempCellMap
        })
    }


    updateStyleSheet(cellValue) {

        const startTimer = new Date();

        const { previousMouseOver, cellMap } = this.state;
        let i;
        const newElements = cellMap[cellValue].elements
        for (i = 0; i < newElements.length; i++) {
            newElements[i].style.backgroundColor = "red";
        }
        if (previousMouseOver && (previousMouseOver !== cellValue)) {
            const oldElements = cellMap[previousMouseOver].elements
            for (i = 0; i < oldElements.length; i++) {
                oldElements[i].style.backgroundColor = "blue";
            }
        }
        this.setState({
            previousMouseOver: cellValue
        })
        console.log("Time Diff:", (new Date - startTimer), "ms")
    }

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
            <div style={{ display: "flex" }}>
                {bigBigArray.map((rowValue, index) =>
                    <GridRow key={index} changeStyles={this.updateStyleSheet} cellValues={rowValue.cellValues} />
                )}
            </div>
        )
    }
}

export default Grid;