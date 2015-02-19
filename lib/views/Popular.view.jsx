import React from 'react'
import DribbbleApi from '../services/DribbbleApi'
import { DribbbleItems } from '../components/Dribbble.jsx!'

var PopularView = React.createClass({
    displayName : 'Popular',

    getInitialState: function() {
        return { shots: null }
    },

    componentWillMount: function() {
        DribbbleApi.getByListType('popular').then((data) => {
            if (this.isMounted()) {
                this.setState(data)
            }
        });
    },  

    render: function() {
        var tpl = (
            <div className="container">
                <h2 className="text-center">{ this.props.pageTitle }</h2>
                <DribbbleItems shots={ this.state.shots } />
            </div>
        )
        
        return tpl;
        
    }    
});

var PopularViewWrapper = function(pageTitle) {
    return React.createClass({
        render: function() {
            return ( <PopularView pageTitle={ pageTitle } /> )
        }
    });
}

export { PopularViewWrapper, PopularView }