import React from 'react';

export default class ColorFilter extends React.Component {
    render() {
        return <input className="color_box" placeholder="Color's name, tags" onChange={(event) => this.props.callback(event.target.value)} />
    }
}