import React from 'react';
import { Timeline } from 'react-twitter-widgets';

class TwitterFeeds extends React.Component {
    render() {
        return (
            <div className="column">
            <div className="card">
                <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: this.props.username
            }}
            options={{
              height: '400'
            }}
            />
            </div>
          </div>
        )
    }
}

export default TwitterFeeds;