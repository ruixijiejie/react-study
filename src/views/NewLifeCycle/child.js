import { Component } from 'react';

export default class Child extends Component {

    render() {
        console.log('Child---render');
        return (
            <div>
                我是生命周期子组件,接收到的车是{this.props.carName}
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Child---shouldComponentUpdate');
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Child---componentDidUpdate');
    }
}
