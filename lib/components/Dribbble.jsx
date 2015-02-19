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
                    <Link className="item" to="shot" params={{ shotId: item.id }} style={ bgi } key={ i }></Link>
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

var DribbbleShot = React.createClass({
    displayName : 'DribbbleShot',
    render: function() {
        return (
            <div className="row">
                <div className="small-12 medium-6 columns">
                    <div className="Shot__image">
                        <img src={ this.props.shot.image_url } />
                    </div>
                </div>
                <div className="small-12 medium-6 columns">
                    <div className="Shot__description">
                        <p dangerouslySetInnerHTML={{__html: this.props.shot.description  }}></p>
                    </div>
                </div>
            </div>
        );
    }
})

export { DribbbleItems, DribbbleShot }