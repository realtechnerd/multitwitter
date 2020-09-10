import React from 'react';
import "./style.css";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }
    render() {
        return(
            <div>
                <div className="Header">
                    <h1>Multi Twitter</h1>
                    <p>View Multiple Twitter Feeds at once.</p>
                </div> 
            </div>
        )
    }
}

export default Header;