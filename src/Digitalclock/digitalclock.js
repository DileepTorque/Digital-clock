import React, { Component } from 'react';
import "./digitalclock.css";

export default class DigitalClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString(),
            });
        }, 1000);
    }

   
    render() {
        return (
            <>
            <div className='clockStyle'>
                
                <h1 className='timeStyle'>{this.state.time}</h1>
            </div>
            </>
        );
    }
}


