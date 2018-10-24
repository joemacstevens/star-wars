import React, {Component} from 'react';

export default class Character extends Component{

    constructor(){
        super();
        this.state = {
            current: ""
        }

        this.toggleSelect = this.toggleSelect.bind(this)
    }

    addImage(name){
        return  "images/" + name.replace(/\s/g , "-").toLowerCase() + ".png";
    }

    sendCharacter(){
        this.toggleSelect()
        this.props.movies(this.props.character.url)
        this.props.update(this.props.character.name)
    }

    toggleSelect(){
        let css = (this.props.selected === this.props.character.name) ? "selected" : "";
        this.setState({current: css})
    }
 
    render(){
        return (
            <div className="character" onClick={this.sendCharacter.bind(this)}>
                <img src={this.addImage(this.props.character.name)} alt={this.props.character.name}/>
                <h5 className="character-name">{this.props.character.name}</h5>
            </div>
        )
    }
}