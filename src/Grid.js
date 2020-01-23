import React, { Component } from 'react';
import GridRow from './GridRow'

export class Grid extends Component {
    constructor() {
        super();
        this.state = {
            rows: [
                {
                    cellValues: [
                        1, 2, 3
                    ]
                },
                {
                    cellValues: [
                        1, 3, 2
                    ]
                },
                {
                    cellValues: [
                        2, 3, 1
                    ]
                }
            ],
            previousMouseOver: null
        };
        this.updateStyleSheet = this.updateStyleSheet.bind(this);
    }
    updateStyleSheet(cellValue) {
        const { previousMouseOver } = this.state;
        console.log(cellValue)
        let i;
        const newElements = document.getElementsByClassName(`single-cell-${cellValue}`)
        for (i = 0; i < newElements.length; i++) {
            newElements[i].style.backgroundColor = "red";
        }
        if (previousMouseOver && (previousMouseOver !== cellValue)) {
            const oldElements = document.getElementsByClassName(`single-cell-${previousMouseOver}`)
            for (i = 0; i < newElements.length; i++) {
                oldElements[i].style.backgroundColor = "blue";
            }
        }
        this.setState({
            previousMouseOver: cellValue
        })
    }

    render() {
        const { rows } = this.state;
        return (
            <div style={{ display: "flex" }}>
                {rows.map((rowValue, index) =>
                    <GridRow key={index} changeStyles={this.updateStyleSheet} cellValues={rowValue.cellValues} />
                )}
            </div>
        )
    }
}

export default Grid;