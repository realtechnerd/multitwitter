import React from 'react';
import Cards from "./Cards.jsx";
import "./style.css";

class Feeds extends React.Component {
    render() {
        return(
            <div className="row">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        )
    }
}

export default Feeds;