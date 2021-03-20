import { Component } from 'react';

export default class RefsComponent extends Component {

    showData = () => {
        const { input1 } = this
        alert(input1.value)
    }

    showData2 = () => {
        const { input2 } = this
        alert(input2.value)
    }

    render() {
        return (
            <div>
                <input ref={(input) => {this.input1 = input}} type="text" placeholder="点击按钮提示数据" />&nbsp;
                <button onClick={this.showData}>点我提示左边的数据</button>&nbsp;
                <input ref={(input) => {this.input2 = input}} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>
            </div>
        )
    }
}
