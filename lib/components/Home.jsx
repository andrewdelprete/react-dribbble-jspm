import React from 'react'

var Home = React.createClass({  
    displayName : 'Home',
    render: () => {
        var tpl = (
            <div className="row">
                <div className="large-12 columns">
                    <h2>React Dribbble JSPM</h2>
                    <h4 className="subheader">This small app is an experiment using ReactJS, React Router, JSPM, and ES6.</h4>
                    <p>
                        The point: To demonstrate how to use ReactJS to consume an API (Dribbble) and utilize React Router to toggle between views and states. 
                        Also to work with some of the new features ES6 has to offer.
                    </p>
                    <br />
                    <p>
                        <a className="button" href="#/popular">Dribbble</a>
                    </p>
                </div>
            </div>
        )

        return tpl;
    }
});

export default Home;