import React, { Component } from 'react';
import Child from './Child';
import './index.less';


export default class Life extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.addBtnClick = this.addBtnClick.bind(this);
    }

    addBtnClick() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return(
            <div className="content">
                <p>React生命周期介绍</p>
                <button onClick={this.addBtnClick}>点击一下</button>
                <p>{this.state.count}</p>
                <Child name={this.state.count} />
            </div>
        )
    }
}