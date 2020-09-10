import React from 'react';
import "./style.css";
import { Timeline } from 'react-twitter-widgets';

class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }
    render() {
        return(
            <div className="column">
                <div className="card">
                <input 
                    type="text"
                    name="username" 
                    id="username"
                    placeholder="Enter Twitter Username"
                    autoComplete="off"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <Timeline
                  dataSource={{
                    sourceType: 'profile',
                    screenName: this.state.username
                  }}
                  options={{
                    height: '750'
                  }}
                />
                </div>
            </div>
        )
    }
}

export default Cards;