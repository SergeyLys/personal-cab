/*Дополнительные услуги*/

import React from 'react';


export default class Addons extends React.Component {

    render() {
        const addon = !this.props.addons.addons ? null : this.props.addons.addons.map((item, index) => {
            return (
                <div key={index} className="addons-list-item">
                    <img src={item.image_url} alt="image"/>
                    <h5>{item.title}</h5>
                </div>
            )
        });

        return (
            <div className="container">
                {addon}
            </div>
        );
    }
}

