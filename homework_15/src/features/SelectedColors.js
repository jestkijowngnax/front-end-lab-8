import React from 'react';

export default class SelectedColors extends React.Component {
    
    renderList(){
        if (this.props.list.length) {
            return this.props.list.map((item, i) => {
                return <div className="selected-item" key={i} style={{'backgroundColor':item.color}}><i className="material-icons" onClick={() => this.props.callback(item)}>clear</i></div>
            });
        } else {
            return <div><div className="empty-item"></div><div className="empty-item"></div><div className="empty-item"></div></div> 
        }
    }

    render() {
        return <div className="selected-colors-box">{this.renderList()}</div>
    }
}