import React from 'react'
import DribbbleApi from '../services/DribbbleApi'

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

export { DribbbleItems }