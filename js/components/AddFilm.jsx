import React, { Component } from 'react'

import Film from '../lib/film.js'
import FilmList from './FilmList.jsx'

class AddFilm extends Component {
  constructor () {
    super()

    // TODO: use redux
    this.state = { films: [], newFilm: '' }

    this.handleChange = this.handleChange.bind(this)
    this.addFilmToList = this.addFilmToList.bind(this)
  }

  handleChange (event) {
    this.setState({ newFilm: event.target.value })
  }

  addFilmToList () {
    const film = new Film(this.state.newFilm)

    this.setState({
      films: this.state.films.concat([film]),
      newFilm: ''
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.addFilmToList}>
          <input
            value={this.state.newFilm}
            onChange={this.handleChange}
            placeholder='Enter a film title...'
          />

          <button
            onClick={this.addFilmToList}
            disabled={this.state.newFilm === ''}
          >Add film</button>
        </form>

        <FilmList films={this.state.films} />
      </div>
    )
  }
}

export default AddFilm
