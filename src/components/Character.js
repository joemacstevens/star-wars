import React, {Component} from 'react';

export default class Character extends Component{
    addImage(name){
        return  "images/" + name.replace(/\s/g , "-").toLowerCase() + ".png";
    }

    sendCharacter(){
        this.props.movies(this.props.character.url)
    }

    render(){
        return (
            <div className="character" onClick={this.sendCharacter.bind(this)}>
                <img src={this.addImage(this.props.character.name)} alt={this.props.character.name}/>
                <h5>{this.props.character.name}</h5>
            </div>
        )
    }
}