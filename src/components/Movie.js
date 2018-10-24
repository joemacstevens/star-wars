import React, {Component} from 'react';

export default class Movie extends Component{
    addImage(name){
        return  "images/posters/" + name.replace(/\s/g , "-").toLowerCase() + ".jpg";
    }

    render(){
        return (
            <div className="movie">
                <img src={this.addImage(this.props.info.title)} alt={this.props.info.title}/>
                <h5 className="title">{this.props.info.title}</h5>
                <p className="release"><strong>Released:</strong> <span className="date">{this.props.info.release_date}</span></p>
            </div>
        )
    }
}