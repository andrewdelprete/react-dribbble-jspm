import React from 'react'
import Router from 'react-router'
import DribbbleApi from '../services/DribbbleApi'
import Timestamp from 'react-time'

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
                        <p>
                            <img src={ this.props.shot.image_url } />
                        </p>
                    </div>
                </div>
                <div className="small-12 medium-6 columns">
                    <div className="Shot__player">
                        <p>Created: <Timestamp value={ this.props.shot.player.created_at } format="MM/DD/YYYY" /></p>
                        <div className="row">
                            <div className="small-3 columns">
                                <a className="th" href={ this.props.shot.player.url }><img src={ this.props.shot.player.avatar_url } width="72" height="72" /></a>
                            </div>
                            <div className="small-9 columns">
                                <div>{ this.props.shot.player.name }</div>
                                <div><a href={ this.props.shot.player.url }>{ this.props.shot.player.username }</a></div>
                                <p>{ this.props.shot.player.location }</p>
                            </div>
                        </div>
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