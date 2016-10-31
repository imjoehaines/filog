'use strict'

import { PromiseState } from 'react-refetch'
import React, { PropTypes } from 'react'

const FilmPreview = ({ name, releaseDate, genre, actors, poster }) =>
  <div className='film-preview'>
    <img src={poster !== 'N/A' ? poster : '/not-found.png'} />
    <h2>{name} <small>{releaseDate}</small></h2>

    <p>Genres: {genre}</p>
    <p>Starring: {actors}</p>
  </div>

export default FilmPreview
