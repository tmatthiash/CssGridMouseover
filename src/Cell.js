import React, { Component } from 'react';

export class Cell extends Component {
    constructor() {
        super();
        this.cellRef = React.createRef()
        this.mouseEnter = this.mouseEnter.bind(this);
    }

    componentDidMount() {
        const { cellValue } = this.props;
        this.cellRef.current.classList.add(`single-cell-${cellValue}`)
    }

    mouseEnter(){
        const {cellValue, changeStyles } = this.props;
        changeStyles(cellValue)
    }

    render() {
        const { cellValue } = this.props;
        return (
            <div onMouseEnter={this.mouseEnter} ref={this.cellRef} style={{ width: "50px", height: "50px", backgroundColor: "blue" }} >{cellValue}</div>
        )
    }
}

export default Cell;