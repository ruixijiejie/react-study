import React, { Component } from 'react';

export default class ClassComponent extends Component {

    render() {
        // render放在哪里  ClassComponent的原型对象上，供实例使用
        console.log('render上的this', this) //  ClassComponent组件实例对象
        return (
            <div>
                我是类式组件
            </div>
        )
    }
}
