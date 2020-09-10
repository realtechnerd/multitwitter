import React from 'react';
import Feeds from "./Feeds.jsx";

class Input extends React.Component {
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
            [name]:value
        })
    }
    render() {
        return(
            <div>
            <div className="Add">
            <form>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={this.state.username} 
                    placeholder="Enter Twitter Username"
                    onChange={this.handleChange}
                />
                <button className="olgprimary a" type="submit">Add</button>
                </form>
                </div>
            <Feeds username={this.state.username}/>
            </div>
        )
    }
}

export default Input;