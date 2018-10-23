import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Movie from './components/Movie';
import characters from './data.json';
import Loader from './components/Loader'
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      loading: false,
      error: false
    }
  }

  getMovies(name) {

    this.setState({loading: true})

    axios.get(name)
      .then(res => {
        const urls = res.data.films
        axios.all(urls.map(l => axios.get(l)))
        .then(axios.spread((...res) => {
          const movies = res.map((j,i) => {
            return j.data
          }) 
          this.setState(() => ({movies: movies}))
        }))
    
        this.setState(() => ({error: false}))
        this.setState({loading: false})

      })
      .catch(error => {
        this.setState(() => ({error: true}))
      })
  }

  render() {
    const isLoading = this.state.loading;
    const isError = this.state.error;

    return (
      <div className="App grid">
        <Header/>
        <Menu characters={characters} movies={this.getMovies.bind(this)}/>
        {isLoading || isError ? <Loader error={isError}/> : 
          <article className="movies">
            {this.state.movies.map((movie,index) => (
                <Movie info={movie} key={movie.title}/>
            ))}
          </article>}
      </div>
    );
  }
}

export default App;
