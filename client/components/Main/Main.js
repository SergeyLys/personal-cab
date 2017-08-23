import "./foundation-sites/scss/foundation.scss";
import "./foundation-sites/scss/settings/_settings.scss";
import './global.scss';

import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../header/Header';
import Footer from '../footer/footer';

export default class Main extends React.Component {

    render() {
        if (this.props.currentUser == '') {
            return (
                <div className="site-wrapper">

                    <main className="site-main">
                        <div className="row align-center">

                            <div className="small-12 medium-9 columns">
                                {this.props.children}
                            </div>

                        </div>
                    </main>

                </div>
            )

        } else {
            return (
                <div className="site-wrapper">
                    <Header currentUser={this.props.currentUser} onSignOut={this.props.onSignOut} />

                    <main className="site-main">
                        <div className="row align-center">

                            <div className="medium-3 columns">
                                <Navigation/>
                            </div>

                            <div className="small-12 medium-9 columns">
                                {this.props.children}
                            </div>

                        </div>
                    </main>

                    <Footer />
                </div>
            )

        }
    }
}