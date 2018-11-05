import React, { Component } from 'react'

class Relogio extends Component {
    constructor(props) {
        super(props)
        this.state = {
          hour: new Date()
        }
    }
    
    tick() {
        this.setState({
          hour: new Date()
        })
    }
    
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return ( 
            <p>{this.state.hour.toLocaleTimeString()}</p>
        )
    }
}

export default Relogio