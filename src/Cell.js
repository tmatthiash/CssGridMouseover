import React, { Component } from 'react';

export class Cell extends Component {
    constructor() {
        super();
        this.state = {
            timeoutID: null
        }
        this.cellRef = React.createRef()
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    componentDidMount() {
        const { cellValue } = this.props;
        this.cellRef.current.classList.add(`single-cell-${cellValue}`)
    }

    mouseEnter() {
        const { cellValue, changeStyles } = this.props;
        const timeoutID = setTimeout(() => { changeStyles(cellValue) }, 200);
        this.setState({
            timeoutID
        })
    }
    mouseLeave() {
        const { timeoutID } = this.state;
        clearTimeout(timeoutID)
    }


    render() {
        const { cellValue } = this.props;
        return (
            <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} ref={this.cellRef} style={{ border: "1px solid black", fontSize: "12px", width: "30px", height: "15px", backgroundColor: "blue" }} >{cellValue}</div>
        );
    }
}

export default Cell;