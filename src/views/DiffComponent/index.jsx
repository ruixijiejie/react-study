import React, { Component } from 'react';

export default class DiffComponent extends Component {

    state = {
        date: new Date()
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>hello</h1>
                <input type="text"/>
                <span>现在是：{ this.state.date.toTimeString() }</span>
            </div>
        )
    }
}
