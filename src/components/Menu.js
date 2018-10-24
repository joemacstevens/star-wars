import React, {Component} from 'react';
import Character from './Character.js'

export default class Menu extends Component{

    constructor(){
        super();
        this.state = {
            current: ""
        }
    }

    updateCurrent(name){
        this.setState({current: name})
    }

    render(){
        return (
            <aside className="sidebar-left">
            {this.props.characters.characters.map((character,index) => (
                <Character 
                    character={character} 
                    key={character.name} 
                    movies={this.props.movies} 
                    update={this.updateCurrent.bind(this)}
                    selected={this.state.current}
                />
            ))}
            </aside>

        )
    }
}