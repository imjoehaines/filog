'use strict'

import moment from 'moment'
import { PromiseState } from 'react-refetch'
import React, { Component, PropTypes } from 'react'

class FilmList extends Component {
  static get propTypes () {
    return { filmsFetch: PropTypes.instanceOf(PromiseState).isRequired }
  }

  getDateCreated (dateCreated) {
    return <em className='date'>{moment(dateCreated).fromNow()}</em>
  }

  buildFilmList (films) {
    const filmList = films.map(film => {
      return <li key={film.id}>{film.name} {this.getDateCreated(film.date_created)}</li>
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
