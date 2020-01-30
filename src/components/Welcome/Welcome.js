import React from 'react';

export default class Welcome extends React.Component{
    render() {
        return(
            <div className="welcomeContainer">
                <h1 className="welcomeMessage">Good morning, Tyler</h1>
                <span className="welcomeMessage">Take a look at your activities, standings, friends and more.</span>
            </div>
        )
    }
}