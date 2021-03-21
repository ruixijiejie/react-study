import { Component } from 'react';
import './index.css'

export default class NewsList extends Component {


    state = {
        newsArr: []
    }

    componentDidMount() {
        setInterval(() => {
            const { newsArr } = this.state
            const news = '新闻' + (newsArr.length + 1)
            this.setState({ newsArr: [news, ...newsArr] })
        }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return this.list.scrollHeight
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.list.scrollTop += this.list.scrollHeight - snapshot
    }

    render() {
        return (
            <div className="list" ref={c => this.list = c}>
                {
                    this.state.newsArr.map(item => {
                        return <div className="news" key={item}>{item}</div>
                    })
                }
            </div>
        )
    }
}
