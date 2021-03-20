import { Component } from 'react';

export default class List extends Component {

    state = {
        data: ['Angular', 'react', 'vue']
    }

    render() {
        const { data } = this.state
        return (
            <div>
                {
                    data.map((item, index) => {
                        return <li key={index}>{ item }</li>
                    })
                }
            </div>
        )
    }
}
