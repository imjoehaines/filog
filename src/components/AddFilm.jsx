'use strict'

import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'

import Film from '../lib/film.js'
import FilmList from './FilmList.jsx'

class AddFilm extends Component {
  static get propTypes () {
    return {
      addFilm: PropTypes.func.isRequired,
      addFilmResponse: PropTypes.instanceOf(PromiseState)
    }
  }

  constructor () {
    super()

    this.state = { films: [], newFilm: '' }
    this.handleChange = this.handleChange.bind(this)
    this.addFilmToList = this.addFilmToList.bind(this)
  }

  handleChange (event) {
    this.setState({ newFilm: event.target.value })
  }

  addFilmToList (event) {
    event.preventDefault()
    if (this.state.newFilm === '') return

    const film = new Film(this.state.newFilm)

    this.props.addFilm(film)

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

export default connect(props => ({
  addFilm: newFilm => ({
    addFilmResponse: {
      url: '/add',
      method: 'POST',
      body: JSON.stringify({ newFilm })
    }
  })
}))(AddFilm)
