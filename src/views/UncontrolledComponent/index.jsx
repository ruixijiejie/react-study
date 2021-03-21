import React, { Component } from 'react';

export default class UncontrolledComponent extends Component {

    handleSubmit = (ev) => {
        ev.preventDefault();
        const { username, password } = this
        alert(`你输入的用户名是：${username.value}, ${password.value}`)
    }

    render() {
        return (
            <form action="http://www.google.com" onSubmit={this.handleSubmit}>
                用户名：<input ref={c => this.username = c} type="text" name="username"/>
                密码：<input ref={c => this.password = c} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}
