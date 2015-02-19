import React from 'react'
import DribbbleApi from '../services/DribbbleApi'
import Router from 'react-router'
import { DribbbleShot } from '../components/Dribbble.jsx!'

var ShotView = React.createClass({
    displayName : 'Shot',
    mixins : [ Router.State ],

    getInitialState: function() {
        return { shots: null }
    },

    componentWillMount: function() {
        DribbbleApi.getShotById(this.getParams().shotId).then((data) => {
            if (this.isMounted()) {
                this.setState(data)
            }
        });
    },  

    render: function() {
        var tpl = (
            <div className="container">
                <h2 className="text-center">{ this.state.title }</h2>
                <DribbbleShot shot={ this.state } />
            </div>
        )
        
        return tpl;
        
    }    
});

var ShotViewWrapper = function() {
    return React.createClass({
        render: function() {
            return ( <ShotView /> )
        }
    });
}

export { ShotViewWrapper, ShotView }