import React from 'react';
import TwitterFeeds from "./TwitterFeeds.jsx";
import "./style.css";

class Feeds extends React.Component {
    render() {
        return(
            <div className="row">
                <TwitterFeeds username={this.props.username}/>
            </div>
        )
    }
}

export default Feeds;