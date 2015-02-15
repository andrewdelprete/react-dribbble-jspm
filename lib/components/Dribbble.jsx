import React from 'react'
import Router from 'react-router'
import DribbbleApi from '../services/DribbbleApi'

var { Route, DefaultRoute, RouteHandler, Link } = Router;

var DribbbleItems = React.createClass({
    displayName : 'DribbbleItems',

    _renderItems: function() {
        if (this.props.shots) {
            var items = this.props.shots.map((item, i) => {

                let bgi = {
                    backgroundImage: 'url(' + item.image_url + ')'
                }

                item = ( 
                    <a className="item" href={ item.url } target="_blank" style={ bgi } key={ i }></a>
                );

                return item;
            });
            
            return items;
        }
    },

    render: function() {
        return (
            <div className="dribbbleItems">{ this._renderItems() }</div>
        );
    }
})

var Dribbble = React.createClass({
    displayName : 'Dribbble',

    getInitialState: function() {
        return { shots: null }
    },

    componentWillMount: function() {
        DribbbleApi.getByListType(this.props.listType).then((data) => {
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

export default Dribbble;