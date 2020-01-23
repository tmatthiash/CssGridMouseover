import React, { Component } from 'react';
import Cell from './Cell'

export class GridRow extends Component {
    constructor() {
        super();
    }
    render() {
        const { cellValues, changeStyles } = this.props;
        return (
            <div>
                {cellValues.map((cellValue, index) =>
                    <Cell key={index} changeStyles={changeStyles} cellValue={cellValue} />
                )}

            </div>
        )
    }
}

export default GridRow;