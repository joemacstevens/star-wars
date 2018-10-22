import React, {Component} from 'react';

export default class Movie extends Component{
    addImage(name){
        return  "images/posters/" + name.replace(/\s/g , "-").toLowerCase() + ".jpg";
    }

    render(){
        return (
            <div className="movie">
                <img src={this.addImage(this.props.info.title)} />
                <h5>{this.props.info.title}</h5>
            </div>
        )
    }
}