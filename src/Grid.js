import React, { Component } from 'react';
import GridRow from './GridRow'

export class Grid extends Component {
    constructor() {
        super();
        this.state = {
            rows: [
                {
                    cellValues: [
                        1, 2, 3, 4, 5
                    ]
                },
                {
                    cellValues: [
                        4, 5, 1, 3, 2
                    ]
                },
                {
                    cellValues: [
                        2, 4, 3, 1, 5
                    ]
                },
                {
                    cellValues: [
                        4, 2, 3, 1, 5
                    ]
                },
                {
                    cellValues: [
                        5, 2, 3, 4, 1
                    ]
                }

            ],
            previousMouseOver: null
        };
        this.updateStyleSheet = this.updateStyleSheet.bind(this);
    }

    componentDidMount() {
        let bigBigArray = [];
        let i;
        for (i = 0; i < 100; i++) {
            let cellValues = [];
            let j;
            for (j = 0; j < 100; j++) {
                cellValues.push(Math.floor(Math.random() * 500))
            }
            bigBigArray.push({cellValues: cellValues});
        }
        this.setState({
            rows: bigBigArray
        })
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
            for (i = 0; i < oldElements.length; i++) {
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