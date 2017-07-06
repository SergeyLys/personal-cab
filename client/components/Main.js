import React from 'react';
import Navigation from './Navigation/Navigation';
import Header from './header/header';
import Footer from './footer/footer';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="site-wrapper">
                <Header />

                <main className="site-main">
                    <div className="row">

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
        );
    }
}