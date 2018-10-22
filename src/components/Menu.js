import React, {Component} from 'react';
import Character from './Character.js'

export default class Menu extends Component{

    render(){
        return (
            <aside className="sidebar-left">
            {this.props.characters.characters.map((character,index) => (
                <div className="character">
                    <Character character={character} key={character.name} movies={this.props.movies}/>
                </div>
            ))}
            </aside>

        )
    }
}