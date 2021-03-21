import React, { Component } from 'react';

export default class ControlledComponent extends Component {

    state = {
        username: '',
        password: ''
    }

    getUserName = (ev) => {
        this.setState({username: ev.target.value });
    }

    getPassword = (ev) => {
        this.setState({password: ev.target.value });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const { username, password } = this.state;
        alert(`你输入的用户名是：${username}, ${password}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用户名：<input onChange={this.getUserName} type="text" name="username"/>
                密码：<input onChange={this.getPassword} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}
