import { Component } from 'react';

export default class HigherOrderFunc extends Component {

    state = {
        username: '',
        password: ''
    }

    saveFormData = (dataType) => {
        return (event) => {
            this.setState({[dataType]: event.target.value})
        }
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const { username, password } = this.state;
        alert(`你输入的用户名是：${username}, ${password}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用户名：<input onChange={this.saveFormData('username')} type="text" name="username"/>
                密码：<input onChange={this.saveFormData('password')} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}
