'use strict'

import { PromiseState } from 'react-refetch'
import React, { PropTypes } from 'react'

import Film from './Film'
import formatDate from '../utils/formatDate'

const FilmList = ({ filmsFetch, deleteFilm, rateFilm }) => {
  if (filmsFetch.pending) {
    return <p>Loading...</p>
  } else if (filmsFetch.rejected) {
    return <p>{filmsFetch.reason}</p>
  } else if (filmsFetch.fulfilled) {
    const filmList = filmsFetch.value.map(film => (
      <Film deleteFilm={() => deleteFilm(film.id)}
        dateCreated={formatDate(film.date_created)}
        rateFilm={() => rateFilm(film.id)}
        rating={film.rating}
        name={film.name}
        key={film.id}
        id={film.id}
      />
    ))

    return <ol>{filmList}</ol>
  }
}

FilmList.propTypes = {
  rateFilm: PropTypes.func.isRequired,
  deleteFilm: PropTypes.func.isRequired,
  filmsFetch: PropTypes.instanceOf(PromiseState).isRequired
}

export default FilmList
