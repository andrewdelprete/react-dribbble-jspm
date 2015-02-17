import React from 'react'
import Router from 'react-router'
import Home from './components/Home.jsx!'
import { PopularWrapper } from './views/Popular.view.jsx!'
import { DebutsWrapper } from './views/Debuts.view.jsx!'
import { EveryoneWrapper } from './views/Everyone.view.jsx!'
import Data from './data';

var { navItems } = Data;
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header navItems={ navItems } />
                <div className="main-content">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

var Header = React.createClass({
    mixins: [ Router.State ],
    
    _renderItems: function() {
        var items = this.props.navItems.map((item) => {
            var isActive = this.isActive(item.name, this.props.params, this.props.query);
            var className = isActive ? 'active' : '';

            var link = (
                <li className={ className }><Link to={ item.name }>{ item.title }</Link></li>
            )

            return link
        });

        return items
    },

    render: function () {
        return (
            <nav className="top-bar" data-topbar role="navigation">
                <ul className="title-area">
                    <li className="name">
                        <h1><Link to="home">React Dribbble JSPM</Link></h1>
                    </li>
                    <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
                </ul>
                <section className="top-bar-section">
                    <ul className="left">
                        { this._renderItems() }
                    </ul>
                </section>
            </nav>
        )
    }
});

var routes = (
    <Route handler={App}>
        <Route name="popular" path="/popular" handler={ PopularWrapper("Popular") } />
        <Route name="debuts" path="/debuts" handler={ DebutsWrapper("Debuts") } />
        <Route name="everyone" path="/everyone" handler={ EveryoneWrapper("Everyone") } />
        <DefaultRoute name="home" handler={ Home } />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('myApp'));
});
