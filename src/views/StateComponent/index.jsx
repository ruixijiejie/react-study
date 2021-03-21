import React, { Component } from 'react';

export default class StateComponent extends Component {

    state = {
        isHot: true
    }

    changeState = () => {
        const { isHot } = this.state;
        this.setState({
            isHot: !isHot
        })
    }

    render() {
        const { isHot } = this.state;
        return (
            <h1 onClick={ this.changeState }>今天天气很{ isHot ? '炎热' : '凉爽' }</h1>
        )
    }
}
