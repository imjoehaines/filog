'use strict'

import { PromiseState } from 'react-refetch'
import React, { Component, PropTypes } from 'react'

import Film from './Film.jsx'
import formatDate from '../utils/formatDate'

class FilmList extends Component {
  static get propTypes () {
    return {
      rateFilm: PropTypes.func.isRequired,
      deleteFilm: PropTypes.func.isRequired,
      filmsFetch: PropTypes.instanceOf(PromiseState).isRequired
    }
  }

  buildFilmList (films) {
    const filmList = films.map(film => {
      return (
        <Film deleteFilm = {this.props.deleteFilm.bind(null, film.id)}
          rateFilm = {this.props.rateFilm.bind(null, film.id)}
          dateCreated = {formatDate(film.date_created)}
          rating = {film.rating}
          name = {film.name}
          key = {film.id}
          id = {film.id}
        />
      )
    })

    return <ol>{filmList}</ol>
  }

  render () {
    const { filmsFetch } = this.props

    if (filmsFetch.pending) {
      return <p>Loading...</p>
    } else if (filmsFetch.rejected) {
      return <p>{filmsFetch.reason}</p>
    } else if (filmsFetch.fulfilled) {
      return this.buildFilmList(filmsFetch.value)
    }
  }
}

export default FilmList
