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
                    <div className="Shot__player">
                        <p>{ this.props.shot.player.created_at }</p>
                        <p><img src={ this.props.shot.player.avatar_url } width="64" height="64" /></p>
                        <p>{ this.props.shot.player.name } | <a href={ this.props.shot.player.url }>{ this.props.shot.player.username }</a></p>
                        <p>{ this.props.shot.player.location }</p>
                    </div>
                    <div className="Shot__description">
                        <p dangerouslySetInnerHTML={{__html: this.props.shot.description  }}></p>
                    </div>
                </div>
            </div>
        );
    }
})

export { DribbbleItems, DribbbleShot }