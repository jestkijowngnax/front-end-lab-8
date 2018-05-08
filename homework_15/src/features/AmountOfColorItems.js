import React from 'react';

export default class AmountOfColorItems extends React.Component {
    render() {
        return <div className="amount-of-colors">Colors: {this.props.number}</div>
    }
}