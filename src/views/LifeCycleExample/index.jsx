import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class LifeCycleExample extends Component {

    state = {
        opacity: 1
    }

    death = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    componentDidMount() {
        let { opacity } = this.state
        this.timer = setInterval(() => {
            opacity -= 0.1
            if (opacity <= 0) opacity = 1
            this.setState({ opacity })
        }, 200)
    }


    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h2 style={{ opacity: this.state.opacity }}>React学不会怎么办？</h2>
                <button onClick={this.death}>不活了</button>
            </div>
        )
    }
}
