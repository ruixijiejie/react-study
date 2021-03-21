import { Component } from 'react';
import ReactDOM from 'react-dom';
import Child from "./child";

export default class LifeCycle extends Component {
    constructor(props) {
        console.log('LifeCycle---constructor');
        super(props);
        this.state = {
            count: 0,
            carName: '奔驰'
        }
    }

    add = () => {
        const { count } = this.state
        this.setState({ count: count + 1 })
    }

    death = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    force = () => {
        this.forceUpdate()
    }

    changeCar = () => {
        this.setState({ carName: '奥拓' })
    }

    componentWillMount() {
        console.log('LifeCycle---componentWillMount');
    }

    render() {
        console.log('LifeCycle---render');
        const { count } = this.state;
        return (
            <div>
                <h2>当前求和为{ count }</h2>
                <button onClick={ this.add }>点我+1</button>
                <button onClick={ this.death }>卸载组件</button>
                <button onClick={ this.force }>不更改状态中的数据，强制更新一下</button>
                <button onClick={ this.changeCar }>换车</button>
                <Child carName={this.state.carName} />
            </div>
        )
    }

    componentDidMount() {
        console.log('LifeCycle---componentDidMount');
    }

    componentWillUnmount() {
        console.log('LifeCycle---componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycle---shouldComponentUpdate');
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycle---componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycle---componentDidUpdate');
    }


}


