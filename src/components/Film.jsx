'use strict'

import React, { PropTypes } from 'react'

import Rater from './Rater.jsx'

const Film = ({ name, rateFilm, rating, deleteFilm, dateCreated }) => (
  <li>
    {name}
    <a className = 'delete' onClick = {deleteFilm}>✕</a>
    <em className = 'date'>{dateCreated}</em>
    <Rater rateFilm = {rateFilm} rating = {rating} />
  </li>
)

Film.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  rateFilm: PropTypes.func.isRequired,
  deleteFilm: PropTypes.func.isRequired,
  dateCreated: PropTypes.string.isRequired
}

export default Film
