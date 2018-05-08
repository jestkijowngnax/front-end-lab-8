import React from 'react';

export default class ListOfColors extends React.Component {

    noItems() {
        if (!this.props.list.length) return <p className="error_msg">There are no colors found</p>;
    }

    renderList() {
        return this.props.list.map((item, i) => {
            return <div className="list-item" key={i} style={{'backgroundColor':item.color}}>
                       <div className="icon" onClick={() => this.props.callback(item)}><i className="material-icons">add</i>Add</div>   
                   </div> 
        });
    }

    render() {
        return <div className="list-of-colors">
                   {this.renderList()}
                   {this.noItems()}
               </div>
    }
}