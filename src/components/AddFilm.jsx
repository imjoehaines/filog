'use strict'

import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'

import FilmList from './FilmList.jsx'

class AddFilm extends Component {
  static get propTypes () {
    return {
      films: PropTypes.array,
      refreshFilms: PropTypes.func.isRequired,
      addFilmFetch: PropTypes.func.isRequired,
      addFilmResponse: PropTypes.instanceOf(PromiseState),
      filmsFetch: PropTypes.instanceOf(PromiseState).isRequired
    }
  }

  constructor () {
    super()

    this.state = { newFilm: '' }
    this.handleChange = this.handleChange.bind(this)
    this.addFilmToList = this.addFilmToList.bind(this)
  }

  handleChange (event) {
    this.setState({ newFilm: event.target.value })
  }

  addFilmToList (event) {
    event.preventDefault()
    if (this.state.newFilm === '') return

    this.props.addFilmFetch(this.state.newFilm)
    this.setState({ newFilm: '' })
    this.props.refreshFilms()
  }

  render () {
    let filmList
    const { newFilm } = this.state
    const { filmsFetch } = this.props

    if (filmsFetch.pending) {
      filmList = <p><em>Loading</em>&hellip;</p>
    } else if (filmsFetch.rejected) {
      filmList = <p>ERROR</p>
    } else if (filmsFetch.fulfilled) {
      filmList = <FilmList films={this.props.filmsFetch.value} />
    }

    return (
      <div>
        <form onSubmit={this.addFilmToList}>
          <input
            value={newFilm}
            onChange={this.handleChange}
            placeholder='Enter a film title...'
          />

          <button onClick={this.addFilmToList} disabled={newFilm === ''}>
            Add film
          </button>
        </form>

        {filmList}
      </div>
    )
  }
}

export default connect(props => ({
  addFilmFetch: newFilm => ({
    addFilmResponse: {
      url: '/add',
      method: 'POST',
      body: JSON.stringify({ newFilm })
    }
  }),

  filmsFetch: '/get',

  refreshFilms: () => ({
    filmsFetch: {
      url: '/get',
      force: true,
      refreshing: true
    }
  })
}))(AddFilm)
