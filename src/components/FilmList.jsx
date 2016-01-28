'use strict'

import { PromiseState } from 'react-refetch'
import React, { Component, PropTypes } from 'react'

import Film from './Film.jsx'

class FilmList extends Component {
  static get propTypes () {
    return { filmsFetch: PropTypes.instanceOf(PromiseState).isRequired }
  }

  buildFilmList (films) {
    const filmList = films.map(film => {
      return <Film key={film.id} name={film.name} dateCreated={film.date_created} />
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
