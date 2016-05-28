'use strict'

import React, { PropTypes } from 'react'

import Rater from './Rater.jsx'

const Film = ({ name, rateFilm, rating, deleteFilm, dateCreated }) =>
  <li>
    {name}
    <span className = 'controls'>
      <em className = 'date'>{dateCreated}</em>
      <Rater rateFilm = {rateFilm} rating = {rating} />
      <a className = 'delete action' onClick = {deleteFilm}>✕</a>
    </span>
  </li>

Film.propTypes = {
  rating: PropTypes.number,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rateFilm: PropTypes.func.isRequired,
  deleteFilm: PropTypes.func.isRequired,
  dateCreated: PropTypes.string.isRequired
}

export default Film
