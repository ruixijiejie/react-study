import { Component } from 'react';

export default class PropsComponent extends Component {
    render() {
        const { name, age, sex } = this.props
        return (
            <ul>
                <li>姓名：{ name }</li>
                <li>性别：{ sex }</li>
                <li>年龄：{ age }</li>
            </ul>
        )
    }
}
